import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const TESTMAIL_API_KEY = "975b6e33-711b-469e-8160-dffd093dc353";
const NAMESPACE = "sas8u";

const inputSchema = z.object({
  tag: z.string().min(1).max(64).regex(/^[a-zA-Z0-9_-]+$/),
});

export interface InboxMessage {
  id: string;
  from: string;
  fromName?: string;
  subject: string;
  text: string;
  html?: string;
  timestamp: number;
}

export interface InboxResponse {
  count: number;
  messages: InboxMessage[];
  error?: string;
}

export const fetchInbox = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }): Promise<InboxResponse> => {
    try {
      const url = `https://api.testmail.app/api/json?apikey=${TESTMAIL_API_KEY}&namespace=${NAMESPACE}&tag=${encodeURIComponent(
        data.tag,
      )}&pretty=true`;
      const res = await fetch(url);
      if (!res.ok) {
        return { count: 0, messages: [], error: `Mailbox unavailable (${res.status})` };
      }
      const json: any = await res.json();
      const emails = Array.isArray(json.emails) ? json.emails : [];
      const messages: InboxMessage[] = emails.map((e: any) => ({
        id: String(e.id ?? `${e.timestamp}-${e.from}`),
        from: String(e.from ?? ""),
        fromName: e.from_parsed?.[0]?.name,
        subject: String(e.subject ?? "(no subject)"),
        text: String(e.text ?? ""),
        html: typeof e.html === "string" ? e.html : undefined,
        timestamp: Number(e.timestamp ?? Date.now()),
      }));
      messages.sort((a, b) => b.timestamp - a.timestamp);
      return { count: messages.length, messages };
    } catch (err) {
      console.error("fetchInbox error:", err);
      return { count: 0, messages: [], error: "Failed to load inbox" };
    }
  });