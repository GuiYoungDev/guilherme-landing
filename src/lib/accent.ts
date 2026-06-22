import type { Accent } from "../data/profile";

/** Maps an accent name to tailwind-ready color helpers. */
export const accentMap: Record<
  Accent,
  { text: string; dot: string; ring: string; glow: string; chip: string }
> = {
  amber: {
    text: "text-amber",
    dot: "bg-amber",
    ring: "group-hover:border-amber/50",
    glow: "group-hover:shadow-[0_24px_70px_-30px_rgba(245,185,66,0.5)]",
    chip: "border-amber/30 text-amber-soft bg-amber/10",
  },
  violet: {
    text: "text-violet-soft",
    dot: "bg-violet",
    ring: "group-hover:border-violet/50",
    glow: "group-hover:shadow-[0_24px_70px_-30px_rgba(124,92,255,0.55)]",
    chip: "border-violet/30 text-violet-soft bg-violet/10",
  },
  teal: {
    text: "text-teal",
    dot: "bg-teal",
    ring: "group-hover:border-teal/50",
    glow: "group-hover:shadow-[0_24px_70px_-30px_rgba(61,215,192,0.5)]",
    chip: "border-teal/30 text-teal bg-teal/10",
  },
};

/** Tiny classnames joiner. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
