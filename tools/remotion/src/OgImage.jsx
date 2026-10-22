import { AbsoluteFill, Img, staticFile } from "remotion";
import { C, fontFaces } from "./theme.js";
import { Starfield } from "./Starfield.jsx";
import volumes from "../public/volumes.json";

const FEATURED = ["classical-poetics", "chinese-poetics", "structuralism", "ai-literature", "environmental-humanities", "world-literature-translation", "region-africa"];

export const OgImage = () => {
  const picks = FEATURED.map((id) => volumes.find((volume) => volume.id === id)).filter(Boolean);
  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <style>{fontFaces}</style>
      <Starfield drift={0} />
      <AbsoluteFill style={{ background: `radial-gradient(circle at 78% 50%, ${C.cyan}22, transparent 55%)` }} />
      <div style={{ position: "absolute", left: 70, top: 120, width: 560 }}>
        <div style={{ fontFamily: "Cinzel, serif", letterSpacing: "0.3em", color: C.brass, fontSize: 18 }}>GLOBAL LITERARY THEORY ATLAS</div>
        <div style={{ fontFamily: "'Noto Serif SC', serif", fontWeight: 900, color: C.paper, fontSize: 92, marginTop: 18, lineHeight: 1.05 }}>文学理论宇宙</div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: C.muted, fontSize: 30, marginTop: 14, whiteSpace: "nowrap" }}>The Literary Cosmos · Le Cosmos littéraire</div>
        <div style={{ fontFamily: "'Noto Serif SC', serif", color: C.paper, fontSize: 24, marginTop: 34, opacity: 0.86 }}>42 卷理论之书 · 理论长河 · 前沿雷达 · 透镜实验室</div>
        <div style={{ height: 2, width: 420, marginTop: 30, background: `linear-gradient(90deg, ${C.brass}, transparent)` }} />
      </div>
      {picks.slice(0, 5).map((volume, index) => (
        <div key={volume.id} style={{
          position: "absolute", left: 690 + index * 86, top: 150 + Math.abs(index - 2) * 18,
          width: 190, height: 285, borderRadius: 8, overflow: "hidden", transform: `rotate(${(index - 2) * 6}deg)`,
          boxShadow: `0 20px 50px rgba(0,0,0,.65), 0 0 30px ${volume.palette[2]}55`, border: `1px solid ${C.brass}99`
        }}>
          <Img src={staticFile(`covers/${volume.id}.webp`)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ))}
    </AbsoluteFill>
  );
};
