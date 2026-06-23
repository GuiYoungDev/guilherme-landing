import claude from "../../assets/logos/claude.svg";
import postgresql from "../../assets/logos/postgresql.svg";
import openai from "../../assets/logos/openai.svg";
import python from "../../assets/logos/python.svg";
import javascript from "../../assets/logos/javascript.svg";
import nodedotjs from "../../assets/logos/nodedotjs.svg";
import git from "../../assets/logos/git.svg";

export interface StackLogo {
  /** Display name (used for accessibility). */
  name: string;
  /** Imported SVG URL. */
  src: string;
  /** Brand color used for the glow on the laptop screen. */
  glow: string;
}

/** The tech stack shown glowing on the laptop screen. */
export const stackLogos: StackLogo[] = [
  { name: "Claude", src: claude, glow: "#d97757" },
  { name: "PostgreSQL", src: postgresql, glow: "#4169e1" },
  { name: "OpenAI Codex", src: openai, glow: "#10a37f" },
  { name: "Python", src: python, glow: "#3776ab" },
  { name: "JavaScript", src: javascript, glow: "#f7df1e" },
  { name: "Node.js", src: nodedotjs, glow: "#5fa04e" },
  { name: "Git", src: git, glow: "#f05032" },
];
