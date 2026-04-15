import React, { useState, useRef, useEffect } from "react";
import { GraduationCap, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `Tu es un tuteur expert en SES (Sciences Économiques et Sociales). 
RÈGLE ABSOLUE DE PÉRIMÈTRE : 
1. Tu ne dois répondre QU'AUX questions portant sur l'économie, la sociologie, la science politique ou la méthode du Bac SES.
2. Tu es autorisé à aider sur le "Grand Oral" même si cela croise d'autres matières (HGGSP, Maths, etc.).
3. Pour TOUT LE RESTE (cuisine, vie quotidienne, culture générale non-SES, sport, etc.), tu as l'INTERDICTION FORMELLE de répondre, même si l'utilisateur insiste ou prétend vouloir "enrichir sa culture". 
Si une question est hors-périmètre, tu dois SYSTÉMATIQUEMENT répondre : "Désolé, en tant que tuteur spécialisé en SES, je ne peux pas t'aider sur ce sujet qui sort du cadre de nos cours. Revenons à l'économie ou à la sociologie !"
CONSIGNES PÉDAGOGIQUES :
- Ne donne jamais de réponse toute faite.
- Utilise la méthode socratique (pose des questions pour faire réfléchir).
- Utilise les documents fournis en priorité.`;


const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = "gsk_" + "dbFNVAu4q4npCnAbBQcnWGdyb3FYOEmOOgLdXTYvfE6FL4DSsJh3";

const VOYAGE_API_URL = "https://api.voyageai.com/v1/embeddings";
const VOYAGE_API_KEY = "pa-yGdft9DXXoKTs2EdzrJuGPXyAKH6sdIMjAVfyCJqRVJ";

async function getQueryEmbedding(text: string): Promise<number[]> {
  const res = await fetch(VOYAGE_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${VOYAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "voyage-3-lite",
      input: [text],
      input_type: "query",
    }),
  });
  if (!res.ok) throw new Error(`Voyage API error ${res.status}`);
  const data = await res.json();
  return data.data[0].embedding;
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Bonjour ! Je suis ton tuteur SES. Pose-moi une question sur le programme ! 📚",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // Save user message to Supabase chat_history
      await supabase.from("chat_history").insert({
        session_id: sessionId,
        role: "user",
        content: text,
      });

      // 1. Recherche vectorielle via Voyage AI + match_documents
      let context = "Pas de cours spécifique trouvé dans la base.";
      try {
        const embedding = await getQueryEmbedding(text);
        const { data: docs, error } = await supabase.rpc("match_documents", {
          query_embedding: JSON.stringify(embedding),
          match_threshold: 0.5,
          match_count: 4,
        });
        if (!error && docs && docs.length > 0) {
          context = docs.map((d: any) => `[Chapitre: ${d.title}] (similarité: ${(d.similarity * 100).toFixed(0)}%)\n${d.content}`).join('\n\n');
        }
      } catch (embErr) {
        console.warn("Embedding search failed, continuing without context:", embErr);
      }

      // 2. Préparer les messages pour Groq
      const allMessages = [...messages, userMsg];
      const groqMessages = [
        { 
          role: "system" as const, 
          content: `${SYSTEM_PROMPT}\n\nVoici tes cours de référence pour aider l'élève :\n${context}` 
        },
        ...allMessages
          .filter((m) => m.id !== "welcome")
          .map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
      ];

      // 3. Appeler Groq avec le contexte du cours
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: groqMessages,
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!response.ok) {
        const errBody = await response.text();
        console.error("Groq API error:", response.status, errBody);
        throw new Error(`Groq API error ${response.status}`);
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content ?? "Désolé, je n'ai pas pu répondre. 🔧";

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: reply,
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // Save assistant reply to Supabase chat_history
      await supabase.from("chat_history").insert({
        session_id: sessionId,
        role: "assistant",
        content: reply,
      });
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Une erreur est survenue. Réessaie dans quelques instants. ⚠️",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-colors"
          style={{ backgroundColor: '#bc9e82' }}
          aria-label="Ouvrir le tuteur SES AI"
        >
          <GraduationCap className="h-7 w-7" />
        </button>
      )}

      {open && (
        <div
          className="fixed bottom-6 right-6 z-[9999] flex w-[360px] max-w-[calc(100vw-2rem)] flex-col rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden"
          style={{ height: "min(500px, calc(100vh - 4rem))" }}
        >
          <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: '#bc9e82', color: 'white' }}>
            <div className="flex items-center gap-2 text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
              <span className="font-semibold text-sm">Tuteur SES AI</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="Fermer">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed whitespace-pre-line",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground rounded-lg px-3 py-2 text-sm flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Réflexion en cours…
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2 border-t p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pose ta question…"
              disabled={loading}
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            />
            <Button type="submit" size="icon" className="shrink-0" style={{ backgroundColor: '#bc9e82', color: 'white' }} disabled={loading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
