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

const SYSTEM_PROMPT =
  "Tu es un tuteur expert en SES pour le Baccalauréat français. Ton but est d'aider les élèves sur la méthode (EC1, EC2, EC3, dissertation) et les concepts clés. Ne donne jamais la rédaction toute faite à copier-coller, guide l'élève avec la méthode socratique. Sois bienveillant et utilise un vocabulaire académique.";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = "gsk_" + "dbFNVAu4q4npCnAbBQcnWGdyb3FYOEmOOgLdXTYvfE6FL4DSsJh3";

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

      // Build conversation history for Groq
      const allMessages = [...messages, userMsg];
      const groqMessages = [
        { role: "system" as const, content: SYSTEM_PROMPT },
        ...allMessages
          .filter((m) => m.id !== "welcome")
          .map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
      ];

      // Call Groq API
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
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
          className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
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
          <div className="flex items-center justify-between bg-primary px-4 py-3">
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
            <Button type="submit" size="icon" className="shrink-0" disabled={loading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
