import { AbsoluteFill, Img, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { C, fontFaces } from "./theme.js";
import { Starfield } from "./Starfield.jsx";
import volumes from "../public/volumes.json";

export const PROLOGUE_FRAMES = 600;

const MILESTONES = [
  { year: "c. 335 BCE", zh: "亚里士多德《诗学》", en: "Aristotle, Poetics" },
  { year: "c. 501", zh: "刘勰《文心雕龙》", en: "Liu Xie, Wenxin diaolong" },
  { year: "1917", zh: "什克洛夫斯基：陌生化", en: "Shklovsky, “Art as Device”" },
  { year: "1967", zh: "德里达《论文字学》", en: "Derrida, Of Grammatology" },
  { year: "1978", zh: "萨义德《东方学》", en: "Said, Orientalism" },
  { year: "1990", zh: "巴特勒《性别麻烦》", en: "Butler, Gender Trouble" },
  { year: "2000", zh: "莫莱蒂：远读", en: "Moretti, distant reading" },
  { year: "2025", zh: "韦瑟比《语言机器》", en: "Weatherby, Language Machines" },
  { year: "2026", zh: "安妮·卡森获诺贝尔文学奖", en: "Anne Carson, Nobel Prize" }
];

const serif = { fontFamily: "'Noto Serif SC', 'Cormorant Garamond', serif" };
const latin = { fontFamily: "'Cormorant Garamond', serif" };
const caps = { fontFamily: "'Cinzel', serif", letterSpacing: "0.32em" };

const fade = (frame, start, end, out, outEnd) => (out === undefined
  ? interpolate(frame, [start, end], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  : interpolate(frame, [start, end, out, outEnd], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

const TitleCard = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rise = spring({ frame: frame - 10, fps, config: { damping: 200 } });
  const ring = interpolate(frame, [0, 110], [0, 1], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: fade(frame, 0, 20, 110, 130) }}>
      <svg width="560" height="560" style={{ position: "absolute" }}>
        <circle cx="280" cy="280" r="250" fill="none" stroke={C.brass} strokeWidth="1.5" strokeDasharray="1571" strokeDashoffset={1571 * (1 - ring)} opacity="0.7" />
        <circle cx="280" cy="280" r="214" fill="none" stroke={C.cyan} strokeWidth="1" strokeDasharray="1345" strokeDashoffset={1345 * (1 - ring)} opacity="0.45" />
      </svg>
      <div style={{ ...caps, color: C.brass, fontSize: 18, opacity: rise }}>THE LITERARY COSMOS</div>
      <div style={{ ...serif, color: C.paper, fontSize: 104, fontWeight: 900, transform: `translateY(${(1 - rise) * 30}px)`, opacity: rise, textShadow: `0 0 40px ${C.cyan}55` }}>文学理论宇宙</div>
      <div style={{ ...latin, color: C.muted, fontSize: 30, fontStyle: "italic", opacity: fade(frame, 30, 55) }}>The Literary Cosmos · Le Cosmos littéraire</div>
    </AbsoluteFill>
  );
};

const Timeline = () => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();
  const travel = interpolate(frame, [0, 150], [0, 1], { extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const spacing = 300;
  const offset = width * 0.55 - travel * spacing * (MILESTONES.length - 1.6);
  return (
    <AbsoluteFill style={{ opacity: fade(frame, 0, 15, 150, 170) }}>
      <div style={{ position: "absolute", top: 120, width: "100%", textAlign: "center", ...caps, color: C.brass, fontSize: 16 }}>
        2,400 YEARS OF THEORY · 两千四百年的理论长河
      </div>
      <div style={{ position: "absolute", top: 380, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${C.brass}, ${C.cyan}, transparent)` }} />
      {MILESTONES.map((item, index) => {
        const x = offset + index * spacing;
        const centre = Math.abs(x - width / 2) / (width / 2);
        const focus = Math.max(0, 1 - centre);
        return (
          <div key={item.year} style={{ position: "absolute", left: x - 130, top: 300, width: 260, textAlign: "center", opacity: 0.25 + focus * 0.75, transform: `scale(${0.82 + focus * 0.3})` }}>
            <div style={{ ...latin, color: index === MILESTONES.length - 1 ? C.coral : C.cyan, fontSize: 30, fontWeight: 600 }}>{item.year}</div>
            <div style={{ width: 16, height: 16, margin: "18px auto", borderRadius: 99, background: C.paper, boxShadow: `0 0 ${10 + focus * 30}px ${C.cyan}` }} />
            <div style={{ ...serif, color: C.paper, fontSize: 24 }}>{item.zh}</div>
            <div style={{ ...latin, color: C.muted, fontSize: 20, fontStyle: "italic" }}>{item.en}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const VolumeOrbit = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const spin = frame / 150;
  return (
    <AbsoluteFill style={{ opacity: fade(frame, 0, 20, 160, 180), perspective: 1100 }}>
      <div style={{ position: "absolute", top: 70, width: "100%", textAlign: "center", ...caps, color: C.brass, fontSize: 16 }}>
        42 VOLUMES · 四十二卷 · 42 VOLUMES
      </div>
      {volumes.map((volume, index) => {
        const angle = (index / volumes.length) * Math.PI * 2 + spin;
        const ring = index % 2 ? 1 : 0.78;
        const x = Math.cos(angle) * 470 * ring;
        const z = Math.sin(angle) * 260 * ring;
        const y = Math.sin(angle * 2 + index) * 34 + (index % 2 ? 40 : -40);
        const depth = (z + 260) / 520;
        const scale = 0.42 + depth * 0.62;
        const enter = interpolate(frame, [index * 2, index * 2 + 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        return (
          <div key={volume.id} style={{
            position: "absolute", left: width / 2 + x - 60, top: height / 2 + y - 90, width: 120, height: 180,
            transform: `scale(${scale * enter})`, zIndex: Math.round(depth * 100), opacity: (0.3 + depth * 0.7) * enter,
            borderRadius: 6, overflow: "hidden", boxShadow: `0 ${10 + depth * 20}px 40px rgba(0,0,0,.6), 0 0 ${depth * 24}px ${volume.palette[2]}66`
          }}>
            <Img src={staticFile(`covers/${volume.id}.webp`)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", left: 8, right: 8, bottom: 14, textAlign: "center", ...serif, color: C.paper, fontSize: 17, fontWeight: 700, textShadow: "0 2px 6px #000" }}>{volume.titles.zh}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const STATS = [
  { value: 42, zh: "卷理论之书", en: "volumes" },
  { value: 2022, zh: "研究资料块", en: "research blocks" },
  { value: 10, zh: "理论动画", en: "theory animations" },
  { value: 3, zh: "种语言", en: "languages" }
];

const Ledger = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: fade(frame, 0, 15, 95, 110) }}>
      <div style={{ display: "flex", gap: 70 }}>
        {STATS.map((stat, index) => {
          const progress = interpolate(frame, [index * 6, index * 6 + 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
          return (
            <div key={stat.en} style={{ textAlign: "center", opacity: progress, transform: `translateY(${(1 - progress) * 24}px)` }}>
              <div style={{ ...latin, color: C.cyan, fontSize: 84, fontWeight: 600 }}>{Math.round(stat.value * progress).toLocaleString("en-US")}</div>
              <div style={{ ...serif, color: C.paper, fontSize: 24 }}>{stat.zh}</div>
              <div style={{ ...latin, color: C.muted, fontSize: 20, fontStyle: "italic" }}>{stat.en}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const Finale = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const open = spring({ frame, fps, config: { damping: 120, mass: 1.4 } });
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: fade(frame, 0, 20) }}>
      <div style={{ position: "absolute", width: 6 + open * 420, height: 640, borderRadius: "50%", background: `radial-gradient(ellipse at center, ${C.cyan}55 0%, ${C.brass}22 38%, transparent 70%)`, filter: "blur(18px)", opacity: 0.4 + open * 0.6 }} />
      <div style={{ position: "absolute", width: 2, height: 560, background: `linear-gradient(transparent, ${C.paper}, transparent)`, boxShadow: `0 0 40px ${C.cyan}`, opacity: 1 - open * 0.7 }} />
      <div style={{ ...caps, color: C.brass, fontSize: 18 }}>ENTER THE COSMOS</div>
      <div style={{ ...serif, color: C.paper, fontSize: 76, fontWeight: 900, marginTop: 12 }}>推开大门</div>
      <div style={{ ...latin, color: C.muted, fontSize: 30, fontStyle: "italic", marginTop: 6 }}>Push open the gate · Poussez la porte</div>
      <div style={{ ...latin, color: C.cyan, fontSize: 24, marginTop: 34, letterSpacing: "0.12em" }}>literarycosmo.qzz.io</div>
    </AbsoluteFill>
  );
};

export const Prologue = () => (
  <AbsoluteFill style={{ background: C.ink }}>
    <style>{fontFaces}</style>
    <Starfield />
    <Sequence durationInFrames={130}><TitleCard /></Sequence>
    <Sequence from={120} durationInFrames={175}><Timeline /></Sequence>
    <Sequence from={285} durationInFrames={185}><VolumeOrbit /></Sequence>
    <Sequence from={460} durationInFrames={115}><Ledger /></Sequence>
    <Sequence from={540} durationInFrames={60}><Finale /></Sequence>
  </AbsoluteFill>
);
