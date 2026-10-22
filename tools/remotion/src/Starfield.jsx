import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { C, seeded } from "./theme.js";

const random = seeded(42);
const STARS = Array.from({ length: 260 }, () => ({
  x: random(),
  y: random(),
  r: random() * 1.6 + 0.3,
  phase: random() * Math.PI * 2,
  depth: random()
}));

export const Starfield = ({ drift = 0.4 }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse at 50% 40%, #0b1b33 0%, ${C.navy} 45%, ${C.ink} 100%)` }}>
      <svg width={width} height={height}>
        {STARS.map((star, index) => {
          const x = ((star.x * width - frame * drift * (0.4 + star.depth)) % width + width) % width;
          const alpha = 0.35 + Math.sin(frame / 12 + star.phase) * 0.3;
          return <circle key={index} cx={x} cy={star.y * height} r={star.r} fill={C.paper} opacity={Math.max(0.08, alpha)} />;
        })}
      </svg>
    </AbsoluteFill>
  );
};
