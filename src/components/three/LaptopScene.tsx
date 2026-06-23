import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  PerformanceMonitor,
  PresentationControls,
} from "@react-three/drei";
import { Laptop } from "./Laptop";

/**
 * The R3F canvas: lighting, drag-to-rotate (horizontal) with idle float,
 * and image-based reflections via virtual area lights (no external HDR).
 *
 * Performance: R3F renders on requestAnimationFrame, so it targets the
 * monitor's refresh rate (60 / 120 / 144Hz). To hold that frame budget we:
 *   - adapt the pixel ratio at runtime via <PerformanceMonitor> (drops on
 *     decline, raises when stable),
 *   - bake the contact shadow once (frames={1}) instead of every frame,
 *   - keep a low Environment resolution and instance the keyboard keys.
 *
 * Default export so it can be code-split with React.lazy.
 */
export default function LaptopScene() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0.85, 7.0], fov: 30 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <PerformanceMonitor
        onIncline={() => setDpr(2)}
        onDecline={() => setDpr(1)}
        flipflops={3}
        onFallback={() => setDpr(1)}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} />
        <pointLight position={[-5, 1, 3]} intensity={28} color="#7c5cff" distance={14} />
        <pointLight position={[5, -1, 4]} intensity={20} color="#f5b942" distance={14} />

        <Suspense fallback={null}>
          <PresentationControls
            global
            cursor
            snap
            speed={1.2}
            polar={[-0.1, 0.16]}
            azimuth={[-0.4, 0.4]}
            config={{ mass: 1, tension: 120, friction: 18 }}
          >
            <Float rotationIntensity={0.18} floatIntensity={0.3} speed={1.2}>
              <group scale={0.86} position={[0, -0.05, 0]}>
                <Laptop />
              </group>
            </Float>
          </PresentationControls>

          <ContactShadows
            frames={1}
            position={[0, -0.5, 0]}
            opacity={0.5}
            blur={2.8}
            far={4}
            scale={8}
            color="#000000"
          />

          {/* virtual studio lighting for metallic reflections */}
          <Environment resolution={128}>
            <group rotation={[-Math.PI / 3, 0, 0]}>
              <Lightformer intensity={3} position={[0, 5, -9]} scale={[10, 10, 1]} />
              <Lightformer
                intensity={2}
                color="#f5b942"
                position={[-5, 1, -1]}
                scale={[3, 6, 1]}
              />
              <Lightformer
                intensity={2}
                color="#7c5cff"
                position={[5, -1, -1]}
                scale={[3, 6, 1]}
              />
              <Lightformer intensity={1.5} position={[0, -3, 2]} scale={[10, 3, 1]} />
            </group>
          </Environment>
        </Suspense>
      </PerformanceMonitor>
    </Canvas>
  );
}
