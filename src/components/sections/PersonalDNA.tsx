import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { inView, stagger } from "../../lib/motion";

const { music, sports } = profile.personal;

/** PersonalDNA — the human side: music + sports culture. */
export function PersonalDNA() {
  return (
    <Section
      id="dna"
      eyebrow="Personal DNA"
      title={
        <>
          Fora da tela: <span className="text-gradient-amber">som &amp; quadra</span>
        </>
      }
      intro="Tecnologia com personalidade musical — energia de IA com jazz, blues e classic rock."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid grid-cols-1 gap-4 lg:grid-cols-2"
      >
        {/* Music */}
        <Card accent="amber" className="overflow-hidden">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/15 text-amber" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18V5l10-2v13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </span>
            <h3 className="font-display text-2xl font-semibold text-amber-soft">{music.title}</h3>
          </div>
          <p className="mt-4 text-base font-medium text-fg">{music.vibe}</p>
          <p className="mt-2 text-sm text-muted">{music.note}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-faint">Referências</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {music.artists.map((artist) => (
              <Badge key={artist} accent="amber">
                {artist}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Sports */}
        <Card accent="violet" className="overflow-hidden">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet/15 text-violet-soft" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M3 12h18M12 3v18M5.5 5.5c3.5 3 3.5 10 0 13M18.5 5.5c-3.5 3-3.5 10 0 13" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
            <h3 className="font-display text-2xl font-semibold text-violet-soft">{sports.title}</h3>
          </div>
          <p className="mt-4 text-base font-medium text-fg">{sports.vibe}</p>
          <p className="mt-2 text-sm text-muted">{sports.note}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-faint">Times</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {sports.teams.map((team) => (
              <Badge key={team} accent="violet">
                {team}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
