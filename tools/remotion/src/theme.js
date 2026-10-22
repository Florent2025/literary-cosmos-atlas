import { staticFile } from "remotion";

export const C = {
  ink: "#03070f",
  navy: "#07111f",
  paper: "#edf3f8",
  muted: "#9eb0c2",
  brass: "#d6b76a",
  cyan: "#75f5ff",
  violet: "#9f8cff",
  jade: "#89f2c1",
  coral: "#ff8d8d"
};

export const fontFaces = `
@font-face { font-family: "Noto Serif SC"; src: url(${staticFile("fonts/NotoSerifSC.ttf")}); font-weight: 200 900; }
@font-face { font-family: "Cormorant Garamond"; src: url(${staticFile("fonts/CormorantGaramond.ttf")}); font-weight: 300 700; }
@font-face { font-family: "Cinzel"; src: url(${staticFile("fonts/Cinzel.ttf")}); font-weight: 400 900; }
@font-face { font-family: "Space Grotesk"; src: url(${staticFile("fonts/SpaceGrotesk.ttf")}); font-weight: 300 700; }
`;

// Deterministic pseudo-random numbers so every render is identical.
export const seeded = (seed) => {
  let value = seed >>> 0;
  return () => {
    value = (value + 0x6d2b79f5) >>> 0;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};
