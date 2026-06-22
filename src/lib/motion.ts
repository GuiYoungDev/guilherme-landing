import type { Variants } from "framer-motion";

/** Standard "rise + fade" reveal used across sections. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/** Container that staggers its children's reveal. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Shared viewport config so reveals trigger once, slightly early. */
export const inView = { once: true, margin: "-80px" } as const;
