import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Accent } from "../../data/profile";
import { accentMap, cx } from "../../lib/accent";
import { reveal } from "../../lib/motion";

interface CardProps {
  children: ReactNode;
  accent?: Accent;
  className?: string;
  /** Render as an animated item inside a staggered parent. */
  animated?: boolean;
  interactive?: boolean;
}

/** Card — surface panel with hover lift and optional accent glow. */
export function Card({
  children,
  accent,
  className,
  animated = true,
  interactive = true,
}: CardProps) {
  const a = accent ? accentMap[accent] : undefined;

  const content = (
    <div
      className={cx(
        "group relative h-full rounded-card border border-line bg-surface/70 p-6 transition-all duration-300",
        interactive && "hover:-translate-y-1 hover:bg-surface-2/70",
        interactive && a?.ring,
        interactive && a?.glow,
        className,
      )}
    >
      {children}
    </div>
  );

  if (!animated) return content;

  return <motion.div variants={reveal}>{content}</motion.div>;
}
