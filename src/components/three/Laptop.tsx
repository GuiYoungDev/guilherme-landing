import { RoundedBox } from "@react-three/drei";
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

const aluminum = {
  color: "#1b1b21",
  metalness: 0.82,
  roughness: 0.33,
};

/** A procedurally-built laptop (no external model) with a glowing screen. */
export function Laptop(props: GroupProps) {
  const screen = useScreenTexture();

  return (
    <group {...props}>
      {/* base / chassis */}
      <RoundedBox args={[BASE_W, BASE_H, BASE_D]} radius={0.05} smoothness={4}>
        <meshStandardMaterial {...aluminum} />
      </RoundedBox>

      {/* keyboard deck */}
      <mesh position={[0, BASE_H / 2 + 0.002, 0.12]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[BASE_W * 0.93, BASE_D * 0.82]} />
        <meshStandardMaterial color="#0f0f14" metalness={0.45} roughness={0.6} />
      </mesh>

      {/* trackpad */}
      <mesh position={[0, BASE_H / 2 + 0.004, BASE_D * 0.27]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.95, 0.62]} />
        <meshStandardMaterial color="#17171d" metalness={0.35} roughness={0.5} />
      </mesh>

      {/* lid — hinged at the back edge of the base */}
      <group position={[0, BASE_H / 2, -BASE_D / 2]} rotation={[LID_ANGLE, 0, 0]}>
        {/* lid panel */}
        <RoundedBox
          args={[LID_W, LID_H, LID_T]}
          radius={0.04}
          smoothness={4}
          position={[0, LID_H / 2, -LID_T / 2]}
        >
          <meshStandardMaterial {...aluminum} />
        </RoundedBox>

        {/* glowing screen */}
        <mesh position={[0, LID_H / 2, 0.002]}>
          <planeGeometry args={[LID_W * 0.92, LID_H * 0.9]} />
          <meshStandardMaterial
            map={screen}
            emissiveMap={screen}
            emissive="#ffffff"
            emissiveIntensity={0.85}
            roughness={0.35}
            metalness={0}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}
