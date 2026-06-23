import { useMemo } from "react";
import { Instance, Instances, RoundedBox } from "@react-three/drei";
import type { GroupProps } from "@react-three/fiber";
import { useScreenTexture } from "./useScreenTexture";

const BASE_W = 3.2;
const BASE_D = 2.2;
const BASE_H = 0.14;

const LID_W = 3.2;
const LID_H = 2.0;
const LID_T = 0.09;

/** Screen recline — slight lean back from vertical. */
const LID_ANGLE = -0.32;

const DECK_Y = BASE_H / 2;

const aluminum = {
  color: "#202027",
  metalness: 0.85,
  roughness: 0.3,
};
const aluminumDark = {
  color: "#17171c",
  metalness: 0.8,
  roughness: 0.38,
};

interface Key {
  x: number;
  z: number;
  w: number;
  d: number;
}

/** Generates a believable chiclet keyboard layout. */
function buildKeys(): Key[] {
  const keys: Key[] = [];
  const kbW = 2.55;
  const x0 = -kbW / 2;
  const gap = 0.04;
  const rowDepth = 0.17;
  const fnDepth = 0.11;
  const rowCounts = [13, 14, 14, 13, 12];

  let z = -0.78;
  rowCounts.forEach((count, r) => {
    const depth = r === 0 ? fnDepth : rowDepth;
    const cellW = kbW / count;
    for (let c = 0; c < count; c++) {
      keys.push({
        x: x0 + cellW * (c + 0.5),
        z: z + depth / 2,
        w: cellW - gap,
        d: depth - gap,
      });
    }
    z += depth + gap;
  });

  // bottom row: modifiers + wide spacebar
  const segs = [1, 1, 1.25, 6, 1.25, 1, 1];
  const unit = kbW / segs.reduce((a, b) => a + b, 0);
  let x = x0;
  segs.forEach((s) => {
    const w = unit * s;
    keys.push({ x: x + w / 2, z: z + rowDepth / 2, w: w - gap, d: rowDepth - gap });
    x += w;
  });

  return keys;
}

/** A procedurally-built laptop (no external model) with a glowing screen. */
export function Laptop(props: GroupProps) {
  const screen = useScreenTexture();
  const keys = useMemo(buildKeys, []);

  return (
    <group {...props}>
      {/* base / chassis */}
      <RoundedBox args={[BASE_W, BASE_H, BASE_D]} radius={0.06} smoothness={5}>
        <meshStandardMaterial {...aluminum} />
      </RoundedBox>

      {/* recessed keyboard well */}
      <mesh position={[0, DECK_Y + 0.002, -0.12]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.7, 1.35]} />
        <meshStandardMaterial color="#0c0c10" metalness={0.5} roughness={0.65} />
      </mesh>

      {/* keys — instanced for performance, faint amber backlight */}
      <Instances range={keys.length} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#0e0e13"
          metalness={0.35}
          roughness={0.5}
          emissive="#f5b942"
          emissiveIntensity={0.028}
        />
        {keys.map((k, i) => (
          <Instance key={i} position={[k.x, DECK_Y + 0.028, k.z]} scale={[k.w, 0.055, k.d]} />
        ))}
      </Instances>

      {/* trackpad */}
      <mesh position={[0, DECK_Y + 0.004, 0.66]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.15, 0.72]} />
        <meshStandardMaterial color="#1d1d24" metalness={0.4} roughness={0.45} />
      </mesh>

      {/* hinge bar */}
      <mesh position={[0, DECK_Y, -BASE_D / 2 + 0.02]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, BASE_W * 0.82, 24]} />
        <meshStandardMaterial color="#0c0c10" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* rubber feet */}
      {[
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ].map(([sx, sz], i) => (
        <mesh
          key={i}
          position={[sx * (BASE_W / 2 - 0.28), -BASE_H / 2 - 0.01, sz * (BASE_D / 2 - 0.28)]}
        >
          <cylinderGeometry args={[0.07, 0.07, 0.03, 16]} />
          <meshStandardMaterial color="#050507" roughness={0.9} />
        </mesh>
      ))}

      {/* lid — hinged at the back edge of the base */}
      <group position={[0, DECK_Y, -BASE_D / 2]} rotation={[LID_ANGLE, 0, 0]}>
        {/* lid panel (acts as the screen bezel) */}
        <RoundedBox
          args={[LID_W, LID_H, LID_T]}
          radius={0.05}
          smoothness={5}
          position={[0, LID_H / 2, -LID_T / 2]}
        >
          <meshStandardMaterial {...aluminumDark} />
        </RoundedBox>

        {/* webcam dot */}
        <mesh position={[0, LID_H - 0.06, 0.004]}>
          <circleGeometry args={[0.014, 16]} />
          <meshStandardMaterial color="#000000" metalness={0.2} roughness={0.3} />
        </mesh>

        {/* glowing screen */}
        <mesh position={[0, LID_H / 2 + 0.02, 0.003]}>
          <planeGeometry args={[LID_W * 0.9, LID_H * 0.86]} />
          <meshStandardMaterial
            map={screen}
            emissiveMap={screen}
            emissive="#ffffff"
            emissiveIntensity={0.9}
            roughness={0.32}
            metalness={0}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}
