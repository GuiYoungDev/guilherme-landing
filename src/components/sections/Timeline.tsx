import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { TimelineItem } from "../ui/TimelineItem";
import { inView, stagger } from "../../lib/motion";

/** Timeline — professional walkthrough as a vertical narrative. */
export function Timeline() {
  return (
    <Section
      id="trajetoria"
      eyebrow="Walkthrough"
      title={
        <>
          A trajetória, <span className="text-gradient-violet">em movimento</span>
        </>
      }
      intro="Tech immersion started in 2026. The mission is long-term."
    >
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="space-y-10"
      >
        {profile.timeline.map((item, i) => (
          <TimelineItem
            key={`${item.title}-${i}`}
            year={item.year}
            tag={item.tag}
            title={item.title}
            body={item.body}
            last={i === profile.timeline.length - 1}
          />
        ))}
      </motion.ol>
    </Section>
  );
}
