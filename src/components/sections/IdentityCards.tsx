import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { accentMap } from "../../lib/accent";
import { inView, stagger } from "../../lib/motion";

/** IdentityCards — quick "who am I" grid right under the hero. */
export function IdentityCards() {
  return (
    <Section
      id="identidade"
      eyebrow="Identidade rápida"
      title={<>Quem está construindo</>}
      intro="Os blocos que definem onde estou agora — entre vendas, sistemas e IA."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {profile.identity.map((item) => {
          const a = accentMap[item.accent];
          return (
            <Card key={item.title} accent={item.accent}>
              <div className="flex items-start justify-between gap-3">
                <h3 className={`text-lg font-semibold ${a.text}`}>{item.title}</h3>
                <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${a.dot}`} aria-hidden />
              </div>
              <p className="mt-1 text-sm font-medium text-fg">{item.subtitle}</p>
              <p className="mt-3 text-sm text-muted">{item.detail}</p>
            </Card>
          );
        })}
      </motion.div>
    </Section>
  );
}
