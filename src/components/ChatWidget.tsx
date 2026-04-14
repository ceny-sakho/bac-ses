import React, { useState, useRef, useEffect } from "react";
import { GraduationCap, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
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

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulated assistant reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Merci pour ta question ! Cette fonctionnalité sera bientôt connectée à une IA. En attendant, consulte les fiches de méthodologie. 🎓",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Ouvrir le tuteur SES AI"
        >
          <GraduationCap className="h-7 w-7" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-[9999] flex w-[360px] max-w-[calc(100vw-2rem)] flex-col rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden"
          style={{ height: "min(500px, calc(100vh - 4rem))" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3">
            <div className="flex items-center gap-2 text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
              <span className="font-semibold text-sm">Tuteur SES AI</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="Fermer">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2 border-t p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pose ta question…"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <Button type="submit" size="icon" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
