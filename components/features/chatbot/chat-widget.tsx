"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, RotateCcw, Send } from "lucide-react";
import { ChatbotLeadForm } from "@/components/features/chatbot/lead-form";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/lib/chatbot/types";

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  text: "Hi, I'm the EntireXperts assistant. I can answer questions about our services, process, and pricing. I'm an automated assistant, not a person — I can connect you with the team any time.",
  suggestions: ["What services do you offer?", "How much does a project cost?", "Talk to a human"],
};

function createId() {
  return Math.random().toString(36).slice(2);
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const dialogId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    messageListRef.current?.scrollTo({ top: messageListRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, showLeadForm]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    setMessages((prev) => [...prev, { id: createId(), role: "user", text: trimmed }]);
    setInput("");
    setSending(true);
    setUnavailable(false);

    if (/talk to a human/i.test(trimmed)) {
      setShowLeadForm(true);
      setSending(false);
      return;
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = (await response.json()) as {
        text: string;
        suggestions?: string[];
        offerHumanEscalation?: boolean;
        error?: string;
      };

      if (!response.ok) {
        setUnavailable(true);
      } else {
        setMessages((prev) => [
          ...prev,
          { id: createId(), role: "assistant", text: data.text, suggestions: data.suggestions },
        ]);
      }
    } catch {
      setUnavailable(true);
    } finally {
      setSending(false);
    }
  }

  function resetConversation() {
    setMessages([WELCOME_MESSAGE]);
    setShowLeadForm(false);
    setUnavailable(false);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-label="Chat with EntireXperts"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            <header className="flex items-center justify-between border-b border-border bg-brand px-4 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">EntireXperts Assistant</p>
                <p className="text-xs text-white/80">Automated assistant · not a human</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetConversation}
                  aria-label="Reset conversation"
                  className="rounded-full p-1.5 hover:bg-white/15"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    triggerRef.current?.focus();
                  }}
                  aria-label="Close chat"
                  className="rounded-full p-1.5 hover:bg-white/15"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </header>

            <div ref={messageListRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div key={message.id} className={cn("flex flex-col gap-1.5", message.role === "user" && "items-end")}>
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                      message.role === "assistant"
                        ? "bg-surface-muted text-foreground"
                        : "bg-brand text-white"
                    )}
                  >
                    {message.text}
                  </div>
                  {message.suggestions?.length ? (
                    <div className="flex flex-wrap gap-1.5">
                      {message.suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => sendMessage(suggestion)}
                          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted hover:border-brand hover:text-brand"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              {showLeadForm ? (
                <div className="rounded-2xl border border-border">
                  <ChatbotLeadForm onDone={() => setShowLeadForm(false)} />
                </div>
              ) : null}

              {unavailable ? (
                <p className="rounded-xl bg-accent-soft px-3 py-2 text-xs text-accent-strong">
                  The assistant is temporarily unavailable. Please use the{" "}
                  <a href="/contact" className="underline">
                    contact page
                  </a>{" "}
                  and we’ll reply by email.
                </p>
              ) : null}
            </div>

            {!showLeadForm ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2 border-t border-border px-3 py-3"
              >
                <label htmlFor="chatbot-input" className="sr-only">
                  Type your message
                </label>
                <input
                  id="chatbot-input"
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type a question…"
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                />
                <button
                  type="submit"
                  disabled={sending || !input.trim()}
                  aria-label="Send message"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white disabled:opacity-50"
                >
                  <Send className="h-4 w-4" aria-hidden />
                </button>
              </form>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <MessageCircle className="h-6 w-6" aria-hidden />}
      </button>
    </div>
  );
}
