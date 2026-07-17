import { generalFaqs } from "@/content/faqs";
import type { ChatProvider, ChatResponse } from "@/lib/chatbot/types";

const GREETING_KEYWORDS = ["hi", "hello", "hey", "good morning", "good afternoon"];
const PRICING_KEYWORDS = ["price", "cost", "budget", "how much"];

function scoreEntry(message: string, keywords: string[]): number {
  const normalized = message.toLowerCase();
  return keywords.reduce((score, keyword) => (normalized.includes(keyword) ? score + 1 : score), 0);
}

/**
 * Rule-based v1 implementation of ChatProvider: scores the visitor's message
 * against each FAQ entry's keyword list and returns the best match above a
 * minimal confidence threshold, or a fallback that offers human escalation.
 */
export class FaqChatProvider implements ChatProvider {
  async getResponse(message: string): Promise<ChatResponse> {
    const normalized = message.trim().toLowerCase();

    if (GREETING_KEYWORDS.some((word) => normalized === word || normalized.startsWith(`${word} `))) {
      return {
        text: "Hi! I can answer common questions about our services, process, and pricing, or connect you with the team. What would you like to know?",
        suggestions: ["What services do you offer?", "How much does a project cost?", "Talk to a human"],
      };
    }

    let bestEntry = generalFaqs[0]!;
    let bestScore = 0;

    for (const entry of generalFaqs) {
      const score = scoreEntry(normalized, entry.keywords);
      if (score > bestScore) {
        bestScore = score;
        bestEntry = entry;
      }
    }

    if (bestScore > 0) {
      const suggestions = PRICING_KEYWORDS.some((word) => normalized.includes(word))
        ? ["Get a project estimate", "Talk to a human"]
        : ["Talk to a human"];
      return { text: bestEntry.answer, suggestions };
    }

    return {
      text: "I don't have a ready answer for that yet, but I can pass your question straight to the team — they typically reply within one business day.",
      suggestions: ["Talk to a human"],
      offerHumanEscalation: true,
    };
  }
}

export const faqChatProvider = new FaqChatProvider();
