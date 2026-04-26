import { Mail } from "lucide-react";

export function XotoLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: "var(--gradient-brand)" }}
        >
          <Mail className="h-5 w-5 text-white" strokeWidth={2.5} />
        </div>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
      </div>
      <div className="leading-tight">
        <div className="text-base font-semibold tracking-tight text-foreground">Xoto Mail</div>
        <div className="text-xs text-muted-foreground">Temporary email service</div>
      </div>
    </div>
  );
}