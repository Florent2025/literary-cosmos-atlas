// Extracts the minimal volume data (id, palette, collection, location) used by the cover painter.
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const context = {
  window: {},
  document: { addEventListener() {} },
  localStorage: { getItem: () => null, setItem() {} },
  console
};
context.globalThis = context;
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "frontier-catalog.js"), "utf8"), context);
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
vm.runInContext(`${app}\nglobalThis.__out = { MOVEMENTS, MOVEMENT_LOCATIONS, MOVEMENT_TRANSLATIONS };`, context);
const { MOVEMENTS, MOVEMENT_LOCATIONS, MOVEMENT_TRANSLATIONS } = context.__out;
const locales = JSON.parse(fs.readFileSync(path.join(root, "data", "frontier-locales.json"), "utf8"));
const titleFor = (movement, language) => (
  MOVEMENT_TRANSLATIONS[language]?.[movement.id]?.title
  || locales[language]?.movements?.[movement.id]?.title
  || movement.title
);
export const movements = MOVEMENTS.map((movement) => ({
  id: movement.id,
  palette: movement.palette,
  collection: movement.collection,
  titles: { zh: movement.title, en: titleFor(movement, "en"), fr: titleFor(movement, "fr") },
  location: MOVEMENT_LOCATIONS[movement.id] || movement.location || null
}));

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(movements, null, 2));
}
