import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Check,
  Copy,
  Inbox as InboxIcon,
  Mail,
  RefreshCw,
  Shield,
  Shuffle,
  Sparkles,
  Timer,
  User as UserIcon,
  ArrowRight,
  MailOpen,
  KeyRound,
  RotateCcw,
  QrCode,
  Trash2,
  Sun,
  Moon,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { XotoLogo } from "@/components/XotoLogo";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { fetchInbox, type InboxMessage } from "@/utils/inbox.functions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

const PREFIX = "sas8u";
const DOMAIN = "@inbox.testmail.app";
const STORAGE_KEY = "xoto-mail.inbox-tag";
const DELETED_KEY = "xoto-mail.deleted-ids";
const AUTO_REFRESH_MS = 1000;

function randomSuffix(len = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let s = "";
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

function formatTime(ts: number) {
  const diff = Date.now() - ts;
  const s = Math.floor(diff / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return new Date(ts).toLocaleString();
}

function Index() {
  // Start empty for SSR-safe hydration; generate or recover after mount.
  const [suffix, setSuffix] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [codeCopied, setCodeCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [recoverInput, setRecoverInput] = useState("");
  const [recoverError, setRecoverError] = useState<string | null>(null);
  const [messages, setMessages] = useState<InboxMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [selected, setSelected] = useState<InboxMessage | null>(null);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const [, setTick] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Hydrate from URL `?code=` (QR scan), localStorage, or generate a new tag on mount.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const fromUrl = params.get("code");
      if (fromUrl && /^[a-zA-Z0-9_-]+$/.test(fromUrl)) {
        setSuffix(fromUrl.slice(0, 32));
        // Clean URL so the code isn't shared accidentally
        try {
          window.history.replaceState({}, "", window.location.pathname);
        } catch {
          /* ignore */
        }
        return;
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && /^[a-zA-Z0-9_-]+$/.test(saved)) {
        setSuffix(saved);
        return;
      }
    } catch {
      /* ignore */
    }
    setSuffix(randomSuffix());
  }, []);

  // Hydrate deleted-message IDs.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DELETED_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setDeletedIds(parsed.map(String));
      }
    } catch {
      /* ignore */
    }
  }, []);

  const persistDeleted = useCallback((ids: string[]) => {
    try {
      localStorage.setItem(DELETED_KEY, JSON.stringify(ids.slice(-500)));
    } catch {
      /* ignore */
    }
  }, []);

  const tag = suffix.trim();
  // Persist current tag so it survives reloads.
  useEffect(() => {
    if (!tag) return;
    try {
      localStorage.setItem(STORAGE_KEY, tag);
    } catch {
      /* ignore */
    }
  }, [tag]);

  const fullTag = `${PREFIX}.${tag}`;
  const email = `${fullTag}${DOMAIN}`;
  const inboxCode = tag;

  // Build the shareable URL embedded in the QR code.
  const [origin, setOrigin] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") setOrigin(window.location.origin);
  }, []);
  const shareUrl = useMemo(
    () => (origin && tag ? `${origin}/?code=${encodeURIComponent(tag)}` : ""),
    [origin, tag],
  );

  const handleCopyShareUrl = useCallback(async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 1800);
    } catch {
      /* noop */
    }
  }, [shareUrl]);

  const handleDelete = useCallback(
    (id: string) => {
      setMessages((prev) => prev.filter((m) => m.id !== id));
      setDeletedIds((prev) => {
        if (prev.includes(id)) return prev;
        const next = [...prev, id];
        persistDeleted(next);
        return next;
      });
      setSelected((cur) => (cur && cur.id === id ? null : cur));
    },
    [persistDeleted],
  );

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  }, [email]);

  const handleCopyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(inboxCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 1800);
    } catch {
      /* noop */
    }
  }, [inboxCode]);

  const handleRecover = useCallback(() => {
    const cleaned = recoverInput.trim().replace(/[^a-zA-Z0-9_-]/g, "");
    if (!cleaned) {
      setRecoverError("Enter a valid inbox code");
      return;
    }
    setRecoverError(null);
    setSuffix(cleaned);
    setMessages([]);
    setRecoverInput("");
  }, [recoverInput]);

  const refresh = useCallback(async () => {
    if (!tag) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetchInbox({ data: { tag } });
      setMessages(res.messages.filter((m) => !deletedIds.includes(m.id)));
      if (res.error) setError(res.error);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load inbox");
    } finally {
      setLoading(false);
    }
  }, [tag, deletedIds]);

  // Auto-refresh every second
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (autoRefresh && tag) {
      intervalRef.current = setInterval(() => {
        refresh();
      }, AUTO_REFRESH_MS);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoRefresh, refresh, tag]);

  // Re-tick "x ago" labels every 30s
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 30_000);
    return () => clearInterval(id);
  }, []);

  // Theme toggle: hydrate from storage / system preference, then sync to <html>
  useEffect(() => {
    try {
      const saved = localStorage.getItem("xoto-mail.theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
        return;
      }
      const prefersLight =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;
      if (prefersLight) setTheme("light");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.style.colorScheme = theme;
    try {
      localStorage.setItem("xoto-mail.theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  // Lock background scroll while the message dialog is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!selected) return;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [selected]);

  const messageCount = messages.length;
  const inboxLabel = useMemo(
    () => `${messageCount} message${messageCount === 1 ? "" : "s"} received`,
    [messageCount],
  );

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in oklab, var(--brand-from) 25%, transparent), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[500px] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, color-mix(in oklab, var(--brand-to) 30%, transparent), transparent 70%)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
        <XotoLogo />
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition hover:border-primary/50 hover:text-primary"
        >
          <span
            className="flex h-5 w-5 items-center justify-center rounded-full"
            style={{ background: "var(--gradient-brand)" }}
          >
            {theme === "dark" ? (
              <Sun className="h-3 w-3 text-white" />
            ) : (
              <Moon className="h-3 w-3 text-white" />
            )}
          </span>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <Shield className="h-3.5 w-3.5" />
            Private &amp; Secure
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Your inbox,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-text)" }}
            >
              instantly ready
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Generate temporary email addresses for signups, testing, or privacy. No registration needed.
          </p>
        </section>

        {/* Email card */}
        <section className="mx-auto mt-12 max-w-2xl">
          <div
            className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-xl md:p-8"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <div className="flex items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "color-mix(in oklab, var(--brand-from) 20%, transparent)" }}
              >
                <Sparkles className="h-5 w-5" style={{ color: "var(--brand-from)" }} />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Your Temporary Email</h2>
                <p className="text-sm text-muted-foreground">Ready to receive messages</p>
              </div>
            </div>

            <div className="mt-6">
              <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <UserIcon className="h-3.5 w-3.5" />
                Custom tag (or generate random)
              </label>
              <div className="mt-2 flex items-stretch gap-2 rounded-xl border border-border bg-background/60 p-1.5 focus-within:border-primary/60">
                <div className="flex flex-1 items-center pl-3 text-sm">
                  <span className="text-muted-foreground">{PREFIX}.</span>
                  <input
                    value={suffix}
                    onChange={(e) =>
                      setSuffix(e.target.value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 32))
                    }
                    placeholder="random"
                    className="flex-1 bg-transparent px-1 py-2 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                    aria-label="Email tag"
                  />
                  <span className="hidden text-sm text-muted-foreground sm:inline">{DOMAIN}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSuffix(randomSuffix())}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                  aria-label="Generate random tag"
                  title="Generate random tag"
                >
                  <Shuffle className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border bg-background/60 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
                <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="min-w-0 flex-1 truncate font-mono text-xs text-foreground sm:text-sm">{email}</span>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={handleCopy}
                  className="gap-1.5"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="gap-1.5"
                      aria-label="Show QR code to open this inbox on another device"
                      title="Open this inbox on another device"
                    >
                      <QrCode className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-64 p-3">
                    <div className="text-[11px] font-medium text-muted-foreground">
                      Scan to open this inbox
                    </div>
                    <div className="mt-2 flex items-center justify-center rounded-lg bg-white p-3">
                      {shareUrl ? (
                        <QRCodeSVG
                          value={shareUrl}
                          size={176}
                          includeMargin={false}
                          level="M"
                        />
                      ) : (
                        <div className="h-44 w-44 animate-pulse rounded bg-muted" />
                      )}
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-2 rounded-md border border-border bg-background/60 px-2 py-1.5">
                      <code className="truncate font-mono text-[11px] text-muted-foreground">
                        {shareUrl || "…"}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleCopyShareUrl}
                        disabled={!shareUrl}
                        className="h-6 gap-1 px-1.5 text-[11px]"
                      >
                        {shareCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        {shareCopied ? "Copied" : "Link"}
                      </Button>
                    </div>
                    <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
                      Scanning opens the same inbox using your code.
                    </p>
                  </PopoverContent>
                </Popover>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inbox section */}
        <section className="mt-10 grid w-full gap-6 lg:grid-cols-[300px,minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="flex min-w-0 flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card/70 p-3 backdrop-blur-xl">
              <Button
                onClick={refresh}
                disabled={loading}
                className="w-full gap-2 text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <InboxIcon className="h-4 w-4" />
                {loading ? "Checking..." : "Check Inbox"}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="mt-3 flex items-center justify-between rounded-xl bg-background/60 px-3 py-2.5">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Timer className="h-4 w-4 text-muted-foreground" />
                  Auto-refresh
                </div>
                <Switch checked={autoRefresh} onCheckedChange={setAutoRefresh} />
              </div>
            </div>

          </aside>

          {/* Inbox panel */}
          <div className="min-w-0 rounded-2xl border border-border bg-card/70 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5 sm:py-4">
              <div>
                <h2 className="flex items-center gap-2 text-base font-semibold">
                  <InboxIcon className="h-4 w-4 text-primary" />
                  Inbox
                </h2>
                <p className="text-xs text-muted-foreground">{inboxLabel}</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={refresh}
                disabled={loading}
                className="gap-1.5"
              >
                <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
                Refresh
              </Button>
            </div>

            <div className="min-h-[420px]">
              {error && (
                <div className="border-b border-border bg-destructive/10 px-5 py-3 text-sm text-destructive">
                  {error}
                </div>
              )}
              {messages.length === 0 ? (
                <div className="flex h-[400px] flex-col items-center justify-center px-6 text-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ background: "color-mix(in oklab, var(--brand-from) 12%, transparent)" }}
                  >
                    <InboxIcon className="h-8 w-8" style={{ color: "var(--brand-from)" }} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">No emails yet</h3>
                  <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                    Send an email to your temporary address and click Check Inbox
                  </p>
                  <Button
                    onClick={refresh}
                    disabled={loading}
                    variant="outline"
                    size="sm"
                    className="mt-5 gap-2"
                  >
                    <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
                    Refresh now
                  </Button>
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  {messages.map((m) => (
                    <li key={m.id}>
                      <div className="group relative flex items-stretch transition hover:bg-secondary/50">
                        <button
                          type="button"
                          onClick={() => setSelected(m)}
                          className="flex min-w-0 flex-1 items-start gap-3 px-4 py-4 text-left sm:px-5"
                        >
                          <div
                            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                            style={{ background: "var(--gradient-brand)" }}
                          >
                            {(m.fromName || m.from).slice(0, 1).toUpperCase()}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <span className="truncate text-sm font-semibold text-foreground">
                                {m.fromName || m.from}
                              </span>
                              <span className="shrink-0 text-xs text-muted-foreground">
                                {formatTime(m.timestamp)}
                              </span>
                            </div>
                            <div className="truncate text-sm text-foreground/90">{m.subject}</div>
                            <div className="mt-0.5 truncate text-xs text-muted-foreground">
                              {m.text.slice(0, 120)}
                            </div>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(m.id);
                          }}
                          className="mr-3 my-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition hover:bg-destructive/15 hover:text-destructive"
                          aria-label="Delete email"
                          title="Delete email"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* Compact footer: inbox code + recover */}
        <footer className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 font-medium transition hover:text-foreground hover:border-primary/40"
              >
                <KeyRound className="h-3 w-3" style={{ color: "var(--brand-from)" }} />
                Your inbox code
              </button>
            </PopoverTrigger>
            <PopoverContent align="center" className="w-64 p-3">
              <div className="text-[11px] font-medium text-muted-foreground">Inbox code</div>
              <div className="mt-1.5 flex items-center justify-between gap-2 rounded-md border border-border bg-background/60 px-2 py-1.5">
                <code className="truncate font-mono text-sm font-semibold tracking-wider text-foreground">
                  {inboxCode || "…"}
                </code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopyCode}
                  disabled={!inboxCode}
                  className="h-6 gap-1 px-1.5 text-[11px]"
                >
                  {codeCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {codeCopied ? "Copied" : "Copy"}
                </Button>
              </div>
              <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
                Save this code to recover your inbox later.
              </p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 font-medium transition hover:text-foreground hover:border-primary/40"
              >
                <RotateCcw className="h-3 w-3" style={{ color: "var(--brand-to)" }} />
                Have an old code?
              </button>
            </PopoverTrigger>
            <PopoverContent align="center" className="w-64 p-3">
              <div className="text-[11px] font-medium text-muted-foreground">Recover inbox</div>
              <div className="mt-1.5 flex items-stretch gap-1.5">
                <input
                  value={recoverInput}
                  onChange={(e) => {
                    setRecoverInput(e.target.value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 32));
                    if (recoverError) setRecoverError(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleRecover();
                  }}
                  placeholder="Enter code"
                  className="min-w-0 flex-1 rounded-md bg-background/60 px-2 py-1 font-mono text-xs text-foreground outline-none ring-1 ring-border focus:ring-primary/60"
                  aria-label="Inbox recovery code"
                />
                <Button
                  size="sm"
                  onClick={handleRecover}
                  disabled={!recoverInput.trim()}
                  className="h-7 px-2 text-[11px] text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  Recover
                </Button>
              </div>
              {recoverError ? (
                <p className="mt-2 text-[10px] text-destructive">{recoverError}</p>
              ) : (
                <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
                  Restore your previous inbox in a click.
                </p>
              )}
            </PopoverContent>
          </Popover>
        </footer>
      </main>

      {/* Message dialog */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="flex h-full max-h-screen w-full max-w-2xl flex-col overflow-hidden rounded-none border border-border bg-card shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-border px-4 py-3 sm:px-6 sm:py-4">
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                <div className="min-w-0">
                  <h3 className="break-words text-base font-semibold sm:truncate sm:text-lg">{selected.subject}</h3>
                  <p className="mt-1 break-all text-xs text-muted-foreground sm:truncate sm:text-sm">
                    From: {selected.fromName ? `${selected.fromName} <${selected.from}>` : selected.from}
                  </p>
                  <p className="text-[11px] text-muted-foreground sm:text-xs">
                    {new Date(selected.timestamp).toLocaleString()}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(selected.id)}
                    className="h-8 gap-1.5 px-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Delete</span>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setSelected(null)} className="h-8 px-2">
                    Close
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-auto px-3 py-3 sm:px-6 sm:py-5">
              {selected.html ? (
                <iframe
                  title="email-html"
                  sandbox="allow-same-origin allow-popups"
                  className="h-[70vh] w-full rounded-lg border border-border bg-white sm:h-[60vh]"
                  srcDoc={buildEmailDoc(selected.html)}
                />
              ) : (
                <pre className="whitespace-pre-wrap break-words font-sans text-sm text-foreground">
                  {selected.text || <span className="flex items-center gap-2 text-muted-foreground"><MailOpen className="h-4 w-4" /> (Empty body)</span>}
                </pre>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Wrap raw email HTML with a viewport + base styles so it renders correctly on mobile
// and images/tables don't overflow the iframe.
function buildEmailDoc(html: string): string {
  const hasFullDoc = /<html[\s>]/i.test(html);
  const head = `<!doctype html><html><head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <base target="_blank" />
    <style>
      html,body{margin:0;padding:12px;background:#fff;color:#111;
        font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-size:14px;line-height:1.5;word-wrap:break-word;overflow-wrap:anywhere;}
      img,video{max-width:100%!important;height:auto!important;}
      table{max-width:100%!important;}
      table,td,th{word-break:break-word;}
      pre,code{white-space:pre-wrap;word-break:break-word;}
      a{color:#2563eb;}
      *{box-sizing:border-box;}
    </style></head><body>`;
  const tail = `</body></html>`;
  if (hasFullDoc) {
    // Inject viewport + responsive styles into existing doc
    const injection = `<meta name="viewport" content="width=device-width,initial-scale=1" /><base target="_blank" /><style>img,video{max-width:100%!important;height:auto!important;}table{max-width:100%!important;}body{word-wrap:break-word;overflow-wrap:anywhere;}</style>`;
    if (/<head[^>]*>/i.test(html)) {
      return html.replace(/<head([^>]*)>/i, `<head$1>${injection}`);
    }
    return html.replace(/<html([^>]*)>/i, `<html$1><head>${injection}</head>`);
  }
  return head + html + tail;
}
