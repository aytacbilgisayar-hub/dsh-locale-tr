// Bakım aracı: kurulu bir dsh'den tüm arayüz İngilizce sözlüklerini çıkarır.
//
// dsh güncellendiğinde yeni/değişen anahtarları görmek için kullanılır. Kurulu
// dsh'nin lib klasörünü tarar, her istemci paketindeki
//   ctx.locale.register(NS, { zh, en })
// çağrısını bulup NS ile İngilizce sözlüğü eşler ve /tmp veya verilen çıktı
// yoluna en.json yazar. Sonra src/translations.json ile karşılaştırıp eksik
// anahtarları çevirip eklersiniz, ardından `npm run build`.
//
// Kullanım:
//   node scripts/extract-en.mjs "<dsh-install>/node_modules/@deepseek-ai" out-en.json
// <dsh-install> örn: C:/Users/<siz>/AppData/Roaming/npm/node_modules/@deepseek-ai/dsh
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const base = process.argv[2];
const out = process.argv[3] || "extracted-en.json";
if (!base) {
  console.error("Kullanım: node scripts/extract-en.mjs <@deepseek-ai dizini> [cikti.json]");
  process.exit(1);
}

function matchBrace(t, open) {
  let depth = 0, inStr = null, esc = false;
  for (let i = open; i < t.length; i++) {
    const c = t[i];
    if (inStr) { if (esc) { esc = false; continue; } if (c === "\\") { esc = true; continue; } if (c === inStr) inStr = null; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "{") depth++;
    else if (c === "}") { depth--; if (depth === 0) return i; }
  }
  return -1;
}
function constString(t, name) {
  const m = new RegExp("const\\s+" + name.replace(/\$/g, "\\$") + "\\s*=\\s*(\"(?:[^\"\\\\]|\\\\.)*\")\\s*;").exec(t);
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch { return null; }
}

const result = {};
const dirs = readdirSync(base).filter((d) => existsSync(join(base, d, "lib", "client.js")));
for (const d of dirs) {
  const t = readFileSync(join(base, d, "lib", "client.js"), "utf8");
  // ctx.locale.register( NS , { ... zh ... en ... } )
  const re = /\.locale\.register\(\s*("(?:[^"\\]|\\.)*"|[A-Za-z0-9_$]+)\s*,\s*\{([^{}]*)\}/g;
  let m;
  while ((m = re.exec(t)) !== null) {
    let ns = m[1];
    ns = ns.startsWith('"') ? JSON.parse(ns) : constString(t, ns);
    if (!ns) continue;
    const inner = m[2];
    let enId = (inner.match(/(^|[,\s])en\s*:\s*([A-Za-z0-9_$]+)/) || [])[2]
      || (/(^|[,\s])en(\s*[,}]|\s*$)/.test(inner) ? "en" : null);
    if (!enId) continue;
    // en sözlük nesnesini bul (dosyada birden çok en olabilir; NS'e ait olanı
    // seçmek için, aynı NS anahtarlarını içeren en={...} bloğunu ararız)
    const marker = new RegExp("const\\s+" + enId.replace(/\$/g, "\\$") + "\\s*=\\s*\\{", "g");
    let best = null, mm;
    while ((mm = marker.exec(t)) !== null) {
      const open = t.indexOf("{", mm.index);
      const close = matchBrace(t, open);
      if (close < 0) continue;
      const objText = t.slice(open, close + 1);
      let obj;
      try { obj = new Function("return (" + objText + ")")(); } catch { continue; }
      if (obj && typeof obj === "object") best = obj; // son geçerli = gerçek en (zh Çince değerli olur ama isim farklı)
    }
    if (!best) continue;
    const clean = {};
    for (const k of Object.keys(best)) if (typeof best[k] === "string") clean[k] = best[k];
    if (Object.keys(clean).length) result[ns] = Object.assign(result[ns] || {}, clean);
  }
}
writeFileSync(out, JSON.stringify(result, null, 2) + "\n");
let keys = 0;
for (const ns of Object.keys(result)) keys += Object.keys(result[ns]).length;
console.log(`${Object.keys(result).length} namespace, ${keys} anahtar -> ${out}`);
