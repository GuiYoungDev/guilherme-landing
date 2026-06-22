import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { accentMap } from "../../lib/accent";
import { inView, stagger } from "../../lib/motion";

/** SkillsMatrix — four capability blocks: Tech, AI, Business, Foundation. */
export function SkillsMatrix() {
  return (
    <Section
      id="skills"
      eyebrow="Skills matrix"
      title={
        <>
          O que coloco <span className="text-gradient-amber">em prática</span>
        </>
      }
      intro="A young builder connecting sales, AI, data and real business problems."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {profile.skills.map((block) => {
          const a = accentMap[block.accent];
          return (
            <Card key={block.group} accent={block.accent}>
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${a.dot}`} aria-hidden />
                <h3 className={`font-display text-xl font-semibold ${a.text}`}>{block.group}</h3>
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-line/60 bg-white/[0.02] px-3 py-2 text-sm text-fg"
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </motion.div>
    </Section>
  );
}
