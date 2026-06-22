import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { inView, reveal, stagger } from "../../lib/motion";

const { project } = profile;

/** CaseStudy — featured project (Vctec ERP) as a problem→solution→impact story. */
export function CaseStudy() {
  return (
    <Section
      id="projeto"
      eyebrow="Projeto em destaque"
      title={
        <>
          {project.name}
        </>
      }
      intro="From marketplace data to intelligent systems."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid grid-cols-1 gap-4 lg:grid-cols-2"
      >
        {/* Problem */}
        <Card accent="amber">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-faint">
            01 · Problema
          </span>
          <p className="mt-3 text-base text-fg">{project.problem}</p>
        </Card>

        {/* Solution */}
        <Card accent="violet">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-faint">
            02 · Solução
          </span>
          <p className="mt-3 text-base text-fg">{project.solution}</p>
        </Card>

        {/* Stack + context */}
        <Card accent="teal">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-faint">
            03 · Stack &amp; contexto
          </span>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s} accent="teal">
                {s}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-faint">Marketplaces</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.context.map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
        </Card>

        {/* Impact */}
        <Card accent="amber">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-faint">
            04 · Impacto
          </span>
          <ul className="mt-4 space-y-3">
            {project.impact.map((item) => (
              <motion.li
                key={item}
                variants={reveal}
                className="flex items-start gap-3 text-sm text-fg"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden />
                {item}
              </motion.li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </Section>
  );
}
