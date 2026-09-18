/**
 * dsh-locale-tr — Node/Host half.
 *
<<<<<<< HEAD
 * This plugin has nothing to register on the Host side. Its only job here
 * is to exist as a loadable Cordis plugin (see cordis.patch.yml's `insert:`
 * entry naming it) so that @deepseek-ai/dsh-client-modules notices this
 * package's `dsh.client` declaration in package.json and serves
 * lib/client.js to the browser. All the actual Turkish-language work
 * happens in src/client.js -> lib/client.js (browser half).
=======
<<<<<<< HEAD
>>>>>>> 24d1e37 (feat: v0.2.0 - DeepSeek Harness (DSH) Türkçe Dil Paketi Güncellemesi\n\nBu güncelleme paketi v0.1.6-alpha.2 sürümüne uyumlu hale getirir ve aşağıdaki değişiklikleri içerir:\n\n- **Eksik Çeviriler Eklendi**: Yeni DSH arayüzünden çıkarılan 474 yeni İngilizce anahtar translations.json dosyasına eklendi. Toplam 47 namespace ve 1621 çeviri anahtarına ulaşıldı.\n- **Yeni Plugin Formatına Dönüştürme**: Paket, DSH'nin v0.1.6 sürümündeki yeni bundle formatına uygun hale getirildi. package.json dosyasına `dsh.bundle.patch: ./cordis.patch.yml` tanımı eklendi ve gerekli `cordis.patch.yml` dosyası oluşturuldu.\n- **Eski Profil Girişi Kaldırıldı**: Çakışmaları önlemek amacıyla, profilin `cordis.patch.yml` dosyasındaki eski `dsh-locale-tr` girişi kaldırıldı.\n- **Dokümantasyon Güncellemeleri**: README.md ve README-KURULUM.md dosyaları güncel istatistikleri ve yeni kurulum yöntemini yansıtacak şekilde güncellendi.\n- **Sürüm Güncellemesi**: package.json'daki sürüm 0.1.0'dan 0.2.0'a yükseltildi.\n\nYeni kurulum için `plugin_manager install_bundle C:\Users\hasan\.dsh\dsh-locale-tr` komutunu kullanın.)
 * This plugin has nothing to register on the Host side. Its only job here is to
 * exist as a loadable Cordis plugin (named by an `insert:` entry in the web
 * profile's cordis.patch.yml) so that @deepseek-ai/dsh-client-modules notices
 * this package's `dsh.client` declaration and serves lib/client.js to the
 * browser. All Turkish-language work happens in the browser half (lib/client.js,
 * generated from src/translations.json).
=======
 * This plugin has nothing to register on the Host side. Its only job here
 * is to exist as a loadable Cordis plugin (see cordis.patch.yml's `insert:`
 * entry naming it) so that @deepseek-ai/dsh-client-modules notices this
 * package's `dsh.client` declaration in package.json and serves
 * lib/client.js to the browser. All the actual Turkish-language work
 * happens in src/client.js -> lib/client.js (browser half).
>>>>>>> f09fa2a (feat: v0.2.0 - DeepSeek Harness (DSH) Türkçe Dil Paketi Güncellemesi\n\nBu güncelleme paketi v0.1.6-alpha.2 sürümüne uyumlu hale getirir ve aşağıdaki değişiklikleri içerir:\n\n- **Eksik Çeviriler Eklendi**: Yeni DSH arayüzünden çıkarılan 474 yeni İngilizce anahtar translations.json dosyasına eklendi. Toplam 47 namespace ve 1621 çeviri anahtarına ulaşıldı.\n- **Yeni Plugin Formatına Dönüştürme**: Paket, DSH'nin v0.1.6 sürümündeki yeni bundle formatına uygun hale getirildi. package.json dosyasına `dsh.bundle.patch: ./cordis.patch.yml` tanımı eklendi ve gerekli `cordis.patch.yml` dosyası oluşturuldu.\n- **Eski Profil Girişi Kaldırıldı**: Çakışmaları önlemek amacıyla, profilin `cordis.patch.yml` dosyasındaki eski `dsh-locale-tr` girişi kaldırıldı.\n- **Dokümantasyon Güncellemeleri**: README.md ve README-KURULUM.md dosyaları güncel istatistikleri ve yeni kurulum yöntemini yansıtacak şekilde güncellendi.\n- **Sürüm Güncellemesi**: package.json'daki sürüm 0.1.0'dan 0.2.0'a yükseltildi.\n\nYeni kurulum için `plugin_manager install_bundle C:\Users\hasan\.dsh\dsh-locale-tr` komutunu kullanın.)
 */
export function apply(ctx) {
  // intentionally empty — nothing needed on the Host/Node side.
}
