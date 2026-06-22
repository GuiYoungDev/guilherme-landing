import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { inView, reveal, stagger } from "../../lib/motion";

const { vision } = profile;

/** Vision — bold manifesto block, the emotional climax before contact. */
export function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/10 blur-[130px]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"
      >
        <motion.p
          variants={reveal}
          className="mb-6 font-display text-xs font-medium uppercase tracking-[0.3em] text-amber-soft"
        >
          {vision.kicker}
        </motion.p>
        <motion.h2
          variants={reveal}
          className="text-balance font-display text-3xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          {vision.statement}
        </motion.h2>
        <motion.p
          variants={reveal}
          className="mx-auto mt-8 max-w-2xl text-balance text-base text-muted sm:text-lg"
        >
          {vision.manifesto}
        </motion.p>
      </motion.div>
    </section>
  );
}
