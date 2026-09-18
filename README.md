# dsh-locale-tr — DeepSeek Harness Türkçe Dil Paketi

DeepSeek Harness (`dsh`) web arayüzüne **Türkçe (tr)** dil desteği ekleyen,
resmî olmayan bir topluluk eklentisi. `dsh` yerleşik olarak yalnızca Çince (zh)
ve İngilizce (en) ile gelir; bu paket, dsh'nin kendi belgelerinde tanımlı *dış
dil paketi* mekanizmasını kullanarak `tr` dilini kaydeder ve **47 arayüz
namespace'inde 1621 metni** Türkçeleştirir.

> English summary below · [English](#english)

## Neler çevrildi

Ayarlar, Modeller, Eklentiler, Ajan ön ayarları, kenar çubuğu ve çalışma
alanları, sohbet/besteci alanı (mesaj kutusu, gönderme davranışı, araç
kartları), işlem akışı (trajectory), alt ajanlar, hatırlatıcılar, dosya/görsel
önizlemeleri, hedefler, geri bildirim, sorular ve daha fazlası. Çevirisi olmayan
her metin `fallback: en` sayesinde İngilizce görünür — hiçbir şey kırılmaz.

## Kurulum

`dsh`'nin ev dizini `$DSH_HOME` (varsayılan: `~/.dsh`). Web profilini kullandığı
varsayılır (`$DSH_HOME/profiles/web`).

1. Bu depoyu profilinizin erişebileceği bir yere klonlayın, örn. `$DSH_HOME/dsh-locale-tr`:

   ```bash
   git clone https://github.com/aytacbilgisayar-hub/dsh-locale-tr.git "$DSH_HOME/dsh-locale-tr"
   ```

2. Web profiline eklenti olarak ekleyin (pnpm gerektirir; `dsh plugin` pnpm'e devreder):

   ```bash
   dsh plugin --profile web add "$DSH_HOME/dsh-locale-tr"
   ```

3. `$DSH_HOME/profiles/web/cordis.patch.yml` dosyasının sonuna, eklentiyi
   etkinleştiren bir `insert:` girdisi ekleyin:

   ```yaml
   - insert:
       - id: locale-tr
         name: dsh-locale-tr
   ```

4. `dsh web`'i (yeniden) başlatın. Ayarlar → Genel'de **Türkçe** seçeneği belirir.
   Kalıcı seçim için `$DSH_HOME/settings.yaml` içine şunu koyabilirsiniz:

   ```yaml
   locale:
     preference: tr
   ```

> Not: `lib/client.js`, dsh'nin tarayıcıya servis ettiği paket biçiminde
> (`window.__ModuleLoader__.load(...)`) hazır olarak depoda bulunur; ayrı bir
> derleme adımı olmadan çalışır.

## Çeviriyi düzenleme / genişletme

Tek kaynak: [`src/translations.json`](src/translations.json) — `namespace → { anahtar: "Türkçe metin" }`.
Placeholder'ları (`{name}`, `{count}`, `{value}` vb.) olduğu gibi koruyun.

```bash
# translations.json'u düzenleyin, sonra:
npm run build     # lib/client.js ve src/client.js'i yeniden üretir
```

Ardından `dsh web`'i yeniden başlatıp tarayıcıda sert yenileme yapın (Ctrl+Shift+R).

## Bakım — yeni dsh sürümleri

dsh güncellenip yeni metinler eklerse, o metinler İngilizce görünür (kırılmaz).
Yeni İngilizce anahtarları kurulu dsh'den çıkarmak için:

```bash
node scripts/extract-en.mjs "<dsh-kurulumu>/node_modules/@deepseek-ai" extracted-en.json
```

`extracted-en.json`'u `src/translations.json` ile karşılaştırın, eksik anahtarları
çevirip ekleyin, `npm run build` çalıştırın.

## Nasıl çalışır

`dsh-client-locale` paketinin genel API'sini kullanır:

```js
export const inject = ["locale"];
export function apply(ctx) {
  ctx.effect(() => ctx.locale.addLanguage({ id: "tr", label: "Türkçe", fallback: "en" }), "…");
  for (const ns of Object.keys(dicts))
    ctx.effect(() => ctx.locale.register(ns, "tr", dicts[ns]), "…");
}
```

`lib/index.js` (Node/Host yarısı) boştur; tek işi paketin yüklenebilir bir
eklenti olmasını sağlamaktır, böylece dsh `dsh.client` bildirimini görüp
`lib/client.js`'i tarayıcıya servis eder.

## Lisans ve atıf

MIT. Çeviriler, MIT lisanslı DeepSeek Harness'in arayüz metinlerinin Türkçe
karşılıklarıdır (türev çalışma). Bu resmî bir DeepSeek/DeepSeek Harness ürünü
değildir; bağımsız bir topluluk eklentisidir.

---

<a id="english"></a>

## English

Unofficial community plugin that adds **Turkish (tr)** to the DeepSeek Harness
(`dsh`) web UI. `dsh` ships only Chinese (zh) and English (en) built in; this
package uses dsh's documented *external language-pack* mechanism to register the
`tr` locale and translates **1147 strings across 38 UI namespaces**. Untranslated
strings fall back to English, so nothing breaks.

**Install:** clone into a location your web profile can resolve (e.g.
`$DSH_HOME/dsh-locale-tr`), run `dsh plugin --profile web add "$DSH_HOME/dsh-locale-tr"`,
then append to `$DSH_HOME/profiles/web/cordis.patch.yml`:

```yaml
- insert:
    - id: locale-tr
      name: dsh-locale-tr
```

Restart `dsh web`; pick **Türkçe** in Settings → General (or set
`locale.preference: tr` in `settings.yaml`).

**Editing:** the single source of truth is [`src/translations.json`](src/translations.json)
(`namespace → { key: "Turkish text" }`; keep `{placeholders}` intact). Run
`npm run build` to regenerate `lib/client.js`. For new dsh versions, use
`scripts/extract-en.mjs` to pull fresh English keys, translate the missing ones,
and rebuild.

**License:** MIT. Translations are a derivative of the MIT-licensed DeepSeek
Harness UI strings. Not affiliated with or endorsed by DeepSeek.
