export type ChatRole = "assistant" | "user";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  suggestions?: string[];
};

export type ChatResponse = {
  text: string;
  suggestions?: string[];
  offerHumanEscalation?: boolean;
};

/**
 * Provider-independent boundary: the UI only ever calls `getResponse`. A real
 * AI backend or live-chat vendor can be dropped in later by implementing this
 * interface in a new file — nothing in components/features/chatbot changes.
 */
export interface ChatProvider {
  getResponse(message: string): Promise<ChatResponse>;
}
