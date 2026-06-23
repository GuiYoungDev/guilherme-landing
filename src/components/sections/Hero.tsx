import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { CTAButton } from "../ui/CTAButton";
import { LaptopShowcase } from "../three/LaptopShowcase";
import { inView, reveal, stagger } from "../../lib/motion";

const { hero, name, role } = profile;

/** Hero — giant kinetic typography, dark textured backdrop, primary CTAs. */
export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-28 sm:pt-32"
    >
      {/* layered background */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-amber/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-violet/20 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 px-5 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="min-w-0">
          <motion.p
            variants={reveal}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
            </span>
            {hero.kicker}
          </motion.p>

          <motion.h1
            variants={reveal}
            className="text-balance font-display text-[2.75rem] font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            {name}
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-5 max-w-2xl text-base text-muted sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          {/* kinetic headline */}
          <motion.div variants={reveal} className="mt-6">
            <span className="block text-balance font-display text-4xl font-bold leading-tight sm:text-5xl">
              <span className="text-gradient-amber">{hero.headline}</span>
            </span>
            <p className="mt-3 max-w-xl text-balance text-sm text-faint sm:text-base">
              {hero.description}
            </p>
          </motion.div>

          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
            {hero.ctas.map((cta) => (
              <CTAButton key={cta.href} href={cta.href} variant={cta.variant}>
                {cta.label}
              </CTAButton>
            ))}
          </motion.div>

          <motion.p variants={reveal} className="mt-6 text-xs uppercase tracking-[0.3em] text-faint">
            {role}
          </motion.p>
        </motion.div>

        {/* interactive 3D laptop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="relative min-w-0 -mx-2 sm:mx-0"
        >
          <LaptopShowcase />
          <p className="mt-1 text-center text-xs uppercase tracking-[0.2em] text-faint">
            Arraste para girar
          </p>
        </motion.div>
      </div>

      {/* kinetic marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={inView}
        className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden border-y border-line/60 py-3"
      >
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...hero.marquee, ...hero.marquee, ...hero.marquee, ...hero.marquee].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="font-display text-sm font-medium uppercase tracking-[0.3em] text-faint"
            >
              {word}
              <span className="ml-8 text-amber/50">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
