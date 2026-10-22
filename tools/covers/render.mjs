// Renders every volume cover with p5.brush in headless Chromium.
//   node tools/covers/render.mjs [--base http://127.0.0.1:4173] [id ...]
// Requires the repository to be served over HTTP (python -m http.server 4173).
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { movements } from "./extract-movements.mjs";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const outDir = path.join(root, "assets", "covers");
const args = process.argv.slice(2);
const baseIndex = args.indexOf("--base");
const base = baseIndex >= 0 ? args.splice(baseIndex, 2)[1] : "http://127.0.0.1:4173";
const only = new Set(args);

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage({ viewport: { width: 480, height: 720 } });
page.on("pageerror", (error) => console.error("pageerror:", error.message));
for (const volume of movements) {
  if (only.size && !only.has(volume.id)) continue;
  const data = Buffer.from(JSON.stringify(volume)).toString("base64");
  await page.goto(`${base}/tools/covers/cover.html?data=${encodeURIComponent(data)}`);
  await page.waitForFunction(() => window.__done === true, null, { timeout: 120000 });
  const url = await page.evaluate(() => window.__cover);
  const file = path.join(outDir, `${volume.id}.webp`);
  fs.writeFileSync(file, Buffer.from(url.split(",")[1], "base64"));
  console.log(`${volume.id} ${(fs.statSync(file).size / 1024).toFixed(1)} KiB`);
}
await browser.close();
