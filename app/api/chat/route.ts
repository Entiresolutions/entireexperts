import { NextResponse } from "next/server";
import { chatMessageSchema } from "@/lib/validation/chatbot-lead";
import { faqChatProvider } from "@/lib/chatbot/faq-provider";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`chat:${ip}`);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a moment before trying again." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
    );
  }

  const json = await request.json().catch(() => null);
  const parsed = chatMessageSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  }

  try {
    const response = await faqChatProvider.getResponse(parsed.data.message);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("[api/chat] provider error", error instanceof Error ? error.message : error);
    return NextResponse.json(
      {
        text: "The assistant is temporarily unavailable. Please use the contact form and we'll reply by email.",
        suggestions: ["Talk to a human"],
      },
      { status: 200 }
    );
  }
}
