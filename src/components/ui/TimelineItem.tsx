import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { reveal } from "../../lib/motion";

interface TimelineItemProps {
  year: string;
  tag: string;
  title: string;
  body: string;
  last?: boolean;
}

/** TimelineItem — a single node on the vertical trajectory line. */
export function TimelineItem({ year, tag, title, body, last = false }: TimelineItemProps) {
  return (
    <motion.li variants={reveal} className="relative pl-10 sm:pl-14">
      {/* connector line */}
      {!last && (
        <span
          className="absolute left-[11px] top-3 h-full w-px bg-gradient-to-b from-amber/50 to-line sm:left-[15px]"
          aria-hidden
        />
      )}
      {/* node */}
      <span
        className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-amber/40 bg-ink sm:h-8 sm:w-8"
        aria-hidden
      >
        <span className="h-2 w-2 rounded-full bg-amber" />
      </span>

      <div className="flex flex-wrap items-center gap-3">
        <span className="font-display text-sm font-semibold text-amber-soft">{year}</span>
        <Badge accent="violet">{tag}</Badge>
      </div>
      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{title}</h3>
      <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">{body}</p>
    </motion.li>
  );
}
