import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { reveal, inView, stagger } from "../../lib/motion";

/** LearningSystem — continuous-study section rendered as an animated tag cloud. */
export function LearningSystem() {
  return (
    <Section
      id="learning"
      eyebrow="Learning system"
      title={
        <>
          Estudo como <span className="text-gradient-violet">sistema operacional</span>
        </>
      }
      intro={profile.learning.intro}
    >
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="flex flex-wrap gap-3"
      >
        {profile.learning.items.map((item, i) => (
          <motion.li
            key={item}
            variants={reveal}
            className="group flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2.5 text-sm text-fg transition-colors hover:border-violet/50 hover:bg-surface-2/70"
          >
            <span className="font-display text-xs text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
