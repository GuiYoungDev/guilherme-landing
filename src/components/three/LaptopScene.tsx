import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  PresentationControls,
} from "@react-three/drei";
import { Laptop } from "./Laptop";

/**
 * The R3F canvas: lighting, drag-to-rotate (horizontal) with idle float,
 * and image-based reflections via virtual area lights (no external HDR).
 * Default export so it can be code-split with React.lazy.
 */
export default function LaptopScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 1.05, 5.4], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
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
          polar={[-0.12, 0.22]}
          azimuth={[-0.7, 0.7]}
          config={{ mass: 1, tension: 120, friction: 18 }}
        >
          <Float rotationIntensity={0.4} floatIntensity={0.5} speed={1.3}>
            <Laptop position={[0, 0.1, 0]} />
          </Float>
        </PresentationControls>

        <ContactShadows
          position={[0, -0.95, 0]}
          opacity={0.55}
          blur={2.6}
          far={4}
          scale={9}
          color="#000000"
        />

        {/* virtual studio lighting for metallic reflections */}
        <Environment resolution={256}>
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
    </Canvas>
  );
}
