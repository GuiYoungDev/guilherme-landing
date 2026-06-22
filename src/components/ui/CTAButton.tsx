import type { ReactNode } from "react";
import { cx } from "../../lib/accent";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
}

/** CTAButton — anchor styled as a primary or ghost call-to-action. */
export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-offset-4";

  const styles =
    variant === "primary"
      ? "gradient-amber text-ink hover:scale-[1.03] hover:glow-amber"
      : "border border-line bg-white/[0.02] text-fg hover:border-amber/40 hover:bg-white/[0.05]";

  return (
    <a
      href={href}
      className={cx(base, styles, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
