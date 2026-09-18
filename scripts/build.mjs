// Build: src/translations.json -> lib/client.js (+ src/client.js readable copy)
//
// lib/client.js, dsh'nin sunucusunun tarayıcıya servis ettiği paket biçiminde
// (window.__ModuleLoader__.load({ id, factory })) üretilir. Böylece ayrı bir
// bundler/derleyici gerekmez; çeviri değiştiğinde `npm run build` yeter.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dicts = JSON.parse(readFileSync(join(root, "src/translations.json"), "utf8"));

// doğrulama: tüm değerler string olmalı
for (const ns of Object.keys(dicts)) {
  for (const k of Object.keys(dicts[ns])) {
    if (typeof dicts[ns][k] !== "string") {
      throw new Error(`Değer string değil: ${ns} / ${k}`);
    }
  }
}
let keys = 0;
for (const ns of Object.keys(dicts)) keys += Object.keys(dicts[ns]).length;

const wrapped =
`window.__ModuleLoader__.load({
\tid: "dsh-locale-tr",
\tfactory: (require) => {
\t\tvar module = { exports: {} };
\t\tvar exports = module.exports;
\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
\t\tconst dicts = ${JSON.stringify(dicts)};
\t\tconst inject = ["locale"];
\t\tfunction apply(ctx) {
\t\t\tctx.effect(() => ctx.locale.addLanguage({ id: "tr", label: "Türkçe", fallback: "en" }), "dsh-locale-tr: language");
\t\t\tfor (const ns of Object.keys(dicts)) {
\t\t\t\tconst d = dicts[ns];
\t\t\t\tctx.effect(() => ctx.locale.register(ns, "tr", d), "dsh-locale-tr: " + ns);
\t\t\t}
\t\t}
\t\texports.apply = apply;
\t\texports.inject = inject;
\t\treturn module.exports;
\t}
});
`;
writeFileSync(join(root, "lib/client.js"), wrapped);

const readable =
`// OTOMATİK ÜRETİLDİ — elle düzenlemeyin. Kaynak: src/translations.json
// Yeniden üretmek için: npm run build
export const inject = ["locale"];
const dicts = ${JSON.stringify(dicts, null, 2)};
export function apply(ctx) {
  ctx.effect(() => ctx.locale.addLanguage({ id: "tr", label: "Türkçe", fallback: "en" }), "dsh-locale-tr: language");
  for (const ns of Object.keys(dicts)) {
    const d = dicts[ns];
    ctx.effect(() => ctx.locale.register(ns, "tr", d), "dsh-locale-tr: " + ns);
  }
}
`;
writeFileSync(join(root, "src/client.js"), readable);

console.log(`Derlendi: ${Object.keys(dicts).length} namespace, ${keys} anahtar -> lib/client.js`);
