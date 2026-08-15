import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const TESTMAIL_API_KEY = "975b6e33-711b-469e-8160-dffd093dc353";
const NAMESPACE = "sas8u";
const inputSchema = objectType({
  tag: stringType().min(1).max(64).regex(/^[a-zA-Z0-9_-]+$/)
});
const fetchInbox_createServerFn_handler = createServerRpc({
  id: "f7821b671deed829d42880a71156f951a1f688264a1a60d3ebdb34c3ec44daa1",
  name: "fetchInbox",
  filename: "src/utils/inbox.functions.ts"
}, (opts) => fetchInbox.__executeServer(opts));
const fetchInbox = createServerFn({
  method: "GET"
}).inputValidator((data) => inputSchema.parse(data)).handler(fetchInbox_createServerFn_handler, async ({
  data
}) => {
  try {
    const url = `https://api.testmail.app/api/json?apikey=${TESTMAIL_API_KEY}&namespace=${NAMESPACE}&tag=${encodeURIComponent(data.tag)}&pretty=true`;
    const res = await fetch(url);
    if (!res.ok) {
      return {
        count: 0,
        messages: [],
        error: `Mailbox unavailable (${res.status})`
      };
    }
    const json = await res.json();
    const emails = Array.isArray(json.emails) ? json.emails : [];
    const messages = emails.map((e) => ({
      id: String(e.id ?? `${e.timestamp}-${e.from}`),
      from: String(e.from ?? ""),
      fromName: e.from_parsed?.[0]?.name,
      subject: String(e.subject ?? "(no subject)"),
      text: String(e.text ?? ""),
      html: typeof e.html === "string" ? e.html : void 0,
      timestamp: Number(e.timestamp ?? Date.now())
    }));
    messages.sort((a, b) => b.timestamp - a.timestamp);
    return {
      count: messages.length,
      messages
    };
  } catch (err) {
    console.error("fetchInbox error:", err);
    return {
      count: 0,
      messages: [],
      error: "Failed to load inbox"
    };
  }
});
export {
  fetchInbox_createServerFn_handler
};
