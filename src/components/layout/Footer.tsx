import { profile } from "../../data/profile";

/** Footer — minimal closing bar. */
export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row sm:px-8">
        <p className="font-display text-sm font-semibold text-fg">
          {profile.name}
          <span className="ml-2 font-sans font-normal text-faint">· {profile.tagline}</span>
        </p>
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} · Built with React, Vite &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
