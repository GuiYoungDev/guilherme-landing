import type { ReactNode } from "react";
import type { Accent } from "../../data/profile";
import { accentMap, cx } from "../../lib/accent";

interface BadgeProps {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}

/** Badge — small pill used for tags, stack items and chips. */
export function Badge({ children, accent, className }: BadgeProps) {
  const chip = accent ? accentMap[accent].chip : "border-line text-muted bg-white/[0.03]";
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        chip,
        className,
      )}
    >
      {children}
    </span>
  );
}
