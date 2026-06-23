import { Component, lazy, Suspense } from "react";
import type { ReactNode } from "react";
import { stackLogos } from "./logos";

const LaptopScene = lazy(() => import("./LaptopScene"));

/** Static fallback shown while the 3D loads or if WebGL is unavailable. */
function Poster({ loading = false }: { loading?: boolean }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-sm rounded-2xl border border-line bg-surface/80 p-5 shadow-2xl">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-display text-xs text-faint">~/guilherme — stack</span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {stackLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex aspect-square items-center justify-center rounded-xl border border-line/60 bg-white/[0.02] p-2.5"
              style={{ boxShadow: `0 0 22px -6px ${logo.glow}55` }}
            >
              <img src={logo.src} alt={logo.name} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
        {loading && (
          <p className="mt-4 text-center text-xs text-faint">Carregando 3D…</p>
        )}
      </div>
    </div>
  );
}

class WebGLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return <Poster />;
    return this.props.children;
  }
}

/**
 * Interactive 3D laptop showcasing the tech stack. Code-split, with a static
 * poster fallback for loading and no-WebGL environments.
 */
export function LaptopShowcase() {
  const names = stackLogos.map((l) => l.name).join(", ");
  return (
    <div
      role="img"
      aria-label={`Laptop 3D interativo exibindo a stack: ${names}`}
      className="relative h-[320px] w-full select-none sm:h-[400px] lg:h-[480px]"
    >
      <WebGLBoundary>
        <Suspense fallback={<Poster loading />}>
          <LaptopScene />
        </Suspense>
      </WebGLBoundary>
    </div>
  );
}
