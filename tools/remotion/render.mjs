// Build-time renderer for the prologue film and Open Graph still.
//   cd tools/remotion && npm install && node render.mjs
// Fonts are fetched from github.com/google/fonts on first run; covers come from assets/covers.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { bundle } from "@remotion/bundler";
import { renderMedia, renderStill, selectComposition } from "@remotion/renderer";
import { movements } from "../covers/extract-movements.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..", "..");
const pub = path.join(here, "public");
const browserExecutable = process.env.REMOTION_BROWSER || "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";

const FONTS = {
  "NotoSerifSC.ttf": "ofl/notoserifsc/NotoSerifSC%5Bwght%5D.ttf",
  "CormorantGaramond.ttf": "ofl/cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf",
  "Cinzel.ttf": "ofl/cinzel/Cinzel%5Bwght%5D.ttf",
  "SpaceGrotesk.ttf": "ofl/spacegrotesk/SpaceGrotesk%5Bwght%5D.ttf"
};

async function prepare() {
  fs.mkdirSync(path.join(pub, "fonts"), { recursive: true });
  for (const [name, remote] of Object.entries(FONTS)) {
    const target = path.join(pub, "fonts", name);
    if (fs.existsSync(target)) continue;
    const response = await fetch(`https://raw.githubusercontent.com/google/fonts/main/${remote}`);
    if (!response.ok) throw new Error(`font ${name}: HTTP ${response.status}`);
    fs.writeFileSync(target, Buffer.from(await response.arrayBuffer()));
  }
  fs.cpSync(path.join(root, "assets", "covers"), path.join(pub, "covers"), { recursive: true });
  fs.writeFileSync(path.join(pub, "volumes.json"), JSON.stringify(movements.map(({ id, palette, collection, titles }) => ({ id, palette, collection, titles }))));
}

await prepare();
const serveUrl = await bundle({ entryPoint: path.join(here, "src", "index.jsx"), publicDir: pub });
const common = { serveUrl, browserExecutable, chromeMode: "headless-shell", chromiumOptions: { gl: "swangle" } };

fs.mkdirSync(path.join(root, "assets", "video"), { recursive: true });
const og = await selectComposition({ ...common, id: "OgImage" });
await renderStill({ ...common, composition: og, output: path.join(root, "assets", "og-image.png") });
execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", path.join(root, "assets", "og-image.png"), "-q:v", "3", path.join(root, "assets", "og-image.jpg")]);
fs.rmSync(path.join(root, "assets", "og-image.png"));
console.log("wrote assets/og-image.jpg");

const film = await selectComposition({ ...common, id: "Prologue" });
const raw = path.join(here, "out-prologue.mp4");
await renderMedia({ ...common, composition: film, codec: "h264", crf: 18, outputLocation: raw, concurrency: 4 });
const out = path.join(root, "assets", "video", "prologue.mp4");
execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", raw, "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "27", "-pix_fmt", "yuv420p", "-movflags", "+faststart", out]);
execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", "11", "-i", out, "-frames:v", "1", "-vf", "scale=960:-2", "-c:v", "libwebp", "-quality", "80", path.join(root, "assets", "video", "prologue.webp")]);
fs.rmSync(raw);
console.log(`wrote assets/video/prologue.mp4 (${(fs.statSync(out).size / 1024).toFixed(0)} KiB)`);
