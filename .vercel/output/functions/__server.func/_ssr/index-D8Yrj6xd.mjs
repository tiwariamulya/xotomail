import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { Q as QRCodeSVG } from "../_libs/qrcode.react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Switch$1, a as SwitchThumb } from "../_libs/radix-ui__react-switch.mjs";
import { R as Root2, T as Trigger, P as Portal, C as Content2 } from "../_libs/radix-ui__react-popover.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./index.mjs";
import "../_libs/seroval.mjs";
import { S as Sun, M as Moon, a as Shield, b as Sparkles, U as User, c as Shuffle, d as Mail, C as Check, e as Copy, Q as QrCode, I as Inbox, A as ArrowRight, T as Timer, R as RefreshCw, f as Trash2, K as KeyRound, g as RotateCcw, h as MailOpen } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
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
import "../_libs/isbot.mjs";
function XotoLogo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex h-10 w-10 items-center justify-center rounded-xl",
          style: { background: "var(--gradient-brand)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-white", strokeWidth: 2.5 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold tracking-tight text-foreground", children: "Xoto Mail" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Temporary email service" })
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Switch$1,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchThumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Switch$1.displayName;
const Popover = Root2;
const PopoverTrigger = Trigger;
const PopoverContent = reactExports.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = Content2.displayName;
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const inputSchema = objectType({
  tag: stringType().min(1).max(64).regex(/^[a-zA-Z0-9_-]+$/)
});
const fetchInbox = createServerFn({
  method: "GET"
}).inputValidator((data) => inputSchema.parse(data)).handler(createSsrRpc("f7821b671deed829d42880a71156f951a1f688264a1a60d3ebdb34c3ec44daa1"));
const PREFIX = "sas8u";
const DOMAIN = "@inbox.testmail.app";
const STORAGE_KEY = "xoto-mail.inbox-tag";
const DELETED_KEY = "xoto-mail.deleted-ids";
const AUTO_REFRESH_MS = 1e3;
function randomSuffix(len = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let s = "";
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}
function formatTime(ts) {
  const diff = Date.now() - ts;
  const s = Math.floor(diff / 1e3);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return new Date(ts).toLocaleString();
}
function Index() {
  const [suffix, setSuffix] = reactExports.useState("");
  const [copied, setCopied] = reactExports.useState(false);
  const [theme, setTheme] = reactExports.useState("dark");
  const [codeCopied, setCodeCopied] = reactExports.useState(false);
  const [shareCopied, setShareCopied] = reactExports.useState(false);
  const [recoverInput, setRecoverInput] = reactExports.useState("");
  const [recoverError, setRecoverError] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [autoRefresh, setAutoRefresh] = reactExports.useState(false);
  const [selected, setSelected] = reactExports.useState(null);
  const [deletedIds, setDeletedIds] = reactExports.useState([]);
  const [, setTick] = reactExports.useState(0);
  const intervalRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const fromUrl = params.get("code");
      if (fromUrl && /^[a-zA-Z0-9_-]+$/.test(fromUrl)) {
        setSuffix(fromUrl.slice(0, 32));
        try {
          window.history.replaceState({}, "", window.location.pathname);
        } catch {
        }
        return;
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && /^[a-zA-Z0-9_-]+$/.test(saved)) {
        setSuffix(saved);
        return;
      }
    } catch {
    }
    setSuffix(randomSuffix());
  }, []);
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(DELETED_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setDeletedIds(parsed.map(String));
      }
    } catch {
    }
  }, []);
  const persistDeleted = reactExports.useCallback((ids) => {
    try {
      localStorage.setItem(DELETED_KEY, JSON.stringify(ids.slice(-500)));
    } catch {
    }
  }, []);
  const tag = suffix.trim();
  reactExports.useEffect(() => {
    if (!tag) return;
    try {
      localStorage.setItem(STORAGE_KEY, tag);
    } catch {
    }
  }, [tag]);
  const fullTag = `${PREFIX}.${tag}`;
  const email = `${fullTag}${DOMAIN}`;
  const inboxCode = tag;
  const [origin, setOrigin] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") setOrigin(window.location.origin);
  }, []);
  const shareUrl = reactExports.useMemo(() => origin && tag ? `${origin}/?code=${encodeURIComponent(tag)}` : "", [origin, tag]);
  const handleCopyShareUrl = reactExports.useCallback(async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 1800);
    } catch {
    }
  }, [shareUrl]);
  const handleDelete = reactExports.useCallback((id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    setDeletedIds((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      persistDeleted(next);
      return next;
    });
    setSelected((cur) => cur && cur.id === id ? null : cur);
  }, [persistDeleted]);
  const handleCopy = reactExports.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
    }
  }, [email]);
  const handleCopyCode = reactExports.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(inboxCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 1800);
    } catch {
    }
  }, [inboxCode]);
  const handleRecover = reactExports.useCallback(() => {
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
  const refresh = reactExports.useCallback(async () => {
    if (!tag) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetchInbox({
        data: {
          tag
        }
      });
      setMessages(res.messages.filter((m) => !deletedIds.includes(m.id)));
      if (res.error) setError(res.error);
    } catch (e) {
      setError(e?.message ?? "Failed to load inbox");
    } finally {
      setLoading(false);
    }
  }, [tag, deletedIds]);
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3e4);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    try {
      const saved = localStorage.getItem("xoto-mail.theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
        return;
      }
      const prefersLight = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
      if (prefersLight) setTheme("light");
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.style.colorScheme = theme;
    try {
      localStorage.setItem("xoto-mail.theme", theme);
    } catch {
    }
  }, [theme]);
  const toggleTheme = reactExports.useCallback(() => setTheme((t) => t === "dark" ? "light" : "dark"), []);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return;
    if (!selected) return;
    const {
      body
    } = document;
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
  const inboxLabel = reactExports.useMemo(() => `${messageCount} message${messageCount === 1 ? "" : "s"} received`, [messageCount]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-60", style: {
      background: "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in oklab, var(--brand-from) 25%, transparent), transparent 60%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-1/3 h-[500px] opacity-30", style: {
      background: "radial-gradient(ellipse 60% 50% at 80% 50%, color-mix(in oklab, var(--brand-to) 30%, transparent), transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(XotoLogo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: toggleTheme, "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode", title: theme === "dark" ? "Switch to light mode" : "Switch to dark mode", className: "flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition hover:border-primary/50 hover:text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 items-center justify-center rounded-full", style: {
          background: "var(--gradient-brand)"
        }, children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3 w-3 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3 text-white" }) }),
        theme === "dark" ? "Light" : "Dark"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3.5 w-3.5" }),
          "Private & Secure"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl", children: [
          "Your inbox,",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-clip-text text-transparent", style: {
            backgroundImage: "var(--gradient-text)"
          }, children: "instantly ready" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-base text-muted-foreground md:text-lg", children: "Generate temporary email addresses for signups, testing, or privacy. No registration needed." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto mt-12 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-xl md:p-8", style: {
        boxShadow: "var(--shadow-glow)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", style: {
            background: "color-mix(in oklab, var(--brand-from) 20%, transparent)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5", style: {
            color: "var(--brand-from)"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Your Temporary Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Ready to receive messages" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5" }),
            "Custom tag (or generate random)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-stretch gap-2 rounded-xl border border-border bg-background/60 p-1.5 focus-within:border-primary/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center pl-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                PREFIX,
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: suffix, onChange: (e) => setSuffix(e.target.value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 32)), placeholder: "random", className: "flex-1 bg-transparent px-1 py-2 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60", "aria-label": "Email tag" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-sm text-muted-foreground sm:inline", children: DOMAIN })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSuffix(randomSuffix()), className: "flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground", "aria-label": "Generate random tag", title: "Generate random tag", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffle, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border bg-background/60 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2 sm:gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate font-mono text-xs text-foreground sm:text-sm", children: email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", onClick: handleCopy, className: "gap-1.5", children: [
                copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: copied ? "Copied" : "Copy" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", className: "gap-1.5", "aria-label": "Show QR code to open this inbox on another device", title: "Open this inbox on another device", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "h-4 w-4" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, { align: "end", className: "w-64 p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium text-muted-foreground", children: "Scan to open this inbox" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-center justify-center rounded-lg bg-white p-3", children: shareUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(QRCodeSVG, { value: shareUrl, size: 176, includeMargin: false, level: "M" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44 w-44 animate-pulse rounded bg-muted" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between gap-2 rounded-md border border-border bg-background/60 px-2 py-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "truncate font-mono text-[11px] text-muted-foreground", children: shareUrl || "…" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: handleCopyShareUrl, disabled: !shareUrl, className: "h-6 gap-1 px-1.5 text-[11px]", children: [
                      shareCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" }),
                      shareCopied ? "Copied" : "Link"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] leading-relaxed text-muted-foreground", children: "Scanning opens the same inbox using your code." })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10 grid w-full gap-6 lg:grid-cols-[300px,minmax(0,1fr)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "flex min-w-0 flex-col gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/70 p-3 backdrop-blur-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: refresh, disabled: loading, className: "w-full gap-2 text-white", style: {
            background: "var(--gradient-brand)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-4 w-4" }),
            loading ? "Checking..." : "Check Inbox",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between rounded-xl bg-background/60 px-3 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-4 w-4 text-muted-foreground" }),
              "Auto-refresh"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: autoRefresh, onCheckedChange: setAutoRefresh })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 rounded-2xl border border-border bg-card/70 backdrop-blur-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5 sm:py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "flex items-center gap-2 text-base font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-4 w-4 text-primary" }),
                "Inbox"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: inboxLabel })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: refresh, disabled: loading, className: "gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: cn("h-4 w-4", loading && "animate-spin") }),
              "Refresh"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[420px]", children: [
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-destructive/10 px-5 py-3 text-sm text-destructive", children: error }),
            messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[400px] flex-col items-center justify-center px-6 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl", style: {
                background: "color-mix(in oklab, var(--brand-from) 12%, transparent)"
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-8 w-8", style: {
                color: "var(--brand-from)"
              } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: "No emails yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-xs text-sm text-muted-foreground", children: "Send an email to your temporary address and click Check Inbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: refresh, disabled: loading, variant: "outline", size: "sm", className: "mt-5 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: cn("h-4 w-4", loading && "animate-spin") }),
                "Refresh now"
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative flex items-stretch transition hover:bg-secondary/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSelected(m), className: "flex min-w-0 flex-1 items-start gap-3 px-4 py-4 text-left sm:px-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white", style: {
                  background: "var(--gradient-brand)"
                }, children: (m.fromName || m.from).slice(0, 1).toUpperCase() }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-sm font-semibold text-foreground", children: m.fromName || m.from }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs text-muted-foreground", children: formatTime(m.timestamp) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm text-foreground/90", children: m.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 truncate text-xs text-muted-foreground", children: m.text.slice(0, 120) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: (e) => {
                e.stopPropagation();
                handleDelete(m.id);
              }, className: "mr-3 my-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition hover:bg-destructive/15 hover:text-destructive", "aria-label": "Delete email", title: "Delete email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] }) }, m.id)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 font-medium transition hover:text-foreground hover:border-primary/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-3 w-3", style: {
              color: "var(--brand-from)"
            } }),
            "Your inbox code"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, { align: "center", className: "w-64 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium text-muted-foreground", children: "Inbox code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center justify-between gap-2 rounded-md border border-border bg-background/60 px-2 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "truncate font-mono text-sm font-semibold tracking-wider text-foreground", children: inboxCode || "…" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: handleCopyCode, disabled: !inboxCode, className: "h-6 gap-1 px-1.5 text-[11px]", children: [
                codeCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" }),
                codeCopied ? "Copied" : "Copy"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] leading-relaxed text-muted-foreground", children: "Save this code to recover your inbox later." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 font-medium transition hover:text-foreground hover:border-primary/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3 w-3", style: {
              color: "var(--brand-to)"
            } }),
            "Have an old code?"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, { align: "center", className: "w-64 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium text-muted-foreground", children: "Recover inbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-stretch gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: recoverInput, onChange: (e) => {
                setRecoverInput(e.target.value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 32));
                if (recoverError) setRecoverError(null);
              }, onKeyDown: (e) => {
                if (e.key === "Enter") handleRecover();
              }, placeholder: "Enter code", className: "min-w-0 flex-1 rounded-md bg-background/60 px-2 py-1 font-mono text-xs text-foreground outline-none ring-1 ring-border focus:ring-primary/60", "aria-label": "Inbox recovery code" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: handleRecover, disabled: !recoverInput.trim(), className: "h-7 px-2 text-[11px] text-white", style: {
                background: "var(--gradient-brand)"
              }, children: "Recover" })
            ] }),
            recoverError ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] text-destructive", children: recoverError }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] leading-relaxed text-muted-foreground", children: "Restore your previous inbox in a click." })
          ] })
        ] })
      ] })
    ] }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-stretch justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-4", onClick: () => setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full max-h-screen w-full max-w-2xl flex-col overflow-hidden rounded-none border border-border bg-card shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-2xl", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-3 sm:px-6 sm:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "break-words text-base font-semibold sm:truncate sm:text-lg", children: selected.subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 break-all text-xs text-muted-foreground sm:truncate sm:text-sm", children: [
            "From: ",
            selected.fromName ? `${selected.fromName} <${selected.from}>` : selected.from
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground sm:text-xs", children: new Date(selected.timestamp).toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1 sm:gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => handleDelete(selected.id), className: "h-8 gap-1.5 px-2 text-destructive hover:bg-destructive/10 hover:text-destructive", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Delete" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => setSelected(null), className: "h-8 px-2", children: "Close" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto px-3 py-3 sm:px-6 sm:py-5", children: selected.html ? /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "email-html", sandbox: "allow-same-origin allow-popups", className: "h-[70vh] w-full rounded-lg border border-border bg-white sm:h-[60vh]", srcDoc: buildEmailDoc(selected.html) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "whitespace-pre-wrap break-words font-sans text-sm text-foreground", children: selected.text || /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MailOpen, { className: "h-4 w-4" }),
        " (Empty body)"
      ] }) }) })
    ] }) })
  ] });
}
function buildEmailDoc(html) {
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
    const injection = `<meta name="viewport" content="width=device-width,initial-scale=1" /><base target="_blank" /><style>img,video{max-width:100%!important;height:auto!important;}table{max-width:100%!important;}body{word-wrap:break-word;overflow-wrap:anywhere;}</style>`;
    if (/<head[^>]*>/i.test(html)) {
      return html.replace(/<head([^>]*)>/i, `<head$1>${injection}`);
    }
    return html.replace(/<html([^>]*)>/i, `<html$1><head>${injection}</head>`);
  }
  return head + html + tail;
}
export {
  Index as component
};
