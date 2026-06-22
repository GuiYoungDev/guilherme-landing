import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cx } from "../../lib/accent";
import { inView, reveal, stagger } from "../../lib/motion";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Center the header block. */
  centered?: boolean;
}

/**
 * Section — consistent vertical rhythm, optional animated header, and a
 * staggered-reveal wrapper for its children.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  centered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx("relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28", className)}
    >
      {(eyebrow || title || intro) && (
        <motion.header
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className={cx("mb-12 max-w-3xl sm:mb-16", centered && "mx-auto text-center")}
        >
          {eyebrow && (
            <motion.p
              variants={reveal}
              className="mb-3 inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.25em] text-faint"
            >
              <span className="h-px w-6 bg-amber/70" aria-hidden />
              {eyebrow}
            </motion.p>
          )}
          {title && (
            <motion.h2
              variants={reveal}
              className="text-balance text-3xl font-bold leading-[1.05] sm:text-5xl"
            >
              {title}
            </motion.h2>
          )}
          {intro && (
            <motion.p
              variants={reveal}
              className="mt-5 text-balance text-base text-muted sm:text-lg"
            >
              {intro}
            </motion.p>
          )}
        </motion.header>
      )}
      {children}
    </section>
  );
}
