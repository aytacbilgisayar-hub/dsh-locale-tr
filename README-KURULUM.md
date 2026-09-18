# dsh-locale-tr — kurulum adımları

Bu klasör `C:\Users\hasan\.dsh\dsh-locale-tr` içine kopyalandı. Aşağıdaki adımları
kendi terminalinde (PowerShell) çalıştırman gerekiyor — buradan senin
bilgisayarında komut çalıştıramıyorum şu an (cihaz kabuk bağlantısı "Plan9
drive shares" hatası veriyor, muhtemelen geçici). Bir hata alırsan çıktıyı
bana yapıştır, birlikte düzeltelim.

## 1) Bağımlılıkları kur ve build al

```powershell
cd C:\Users\hasan\.dsh\dsh-locale-tr
npm install --no-save esbuild
npm run build
```

Bu, `src/client.js`'i `lib/client.js`'e derler (tarayıcının yükleyeceği paket).
`npm run build` hata verirse (esbuild bulunamadı, syntax hatası vb.) çıktıyı
yapıştır.

## 2) Plugin'i web profiline ekle

```powershell
plugin_manager install_bundle C:\Users\hasan\.dsh\dsh-locale-tr
```

Bu komut plugin_manager'ı kullanarak paketi web profilinin bundle sistemine yükler. Bundle sistemi, profilin kendi cordis.patch.yml dosyasını günceller (npm'in global `dsh` kurulumunun DIŞINDA — bu yüzden bir sonraki `npm update -g @deepseek-ai/dsh` bunu SİLMEYECEK, asıl amaç bu).

## 3) cordis.patch.yml'e etkinleştirme satırı ekle

`C:\Users\hasan\.dsh\profiles\web\cordis.patch.yml` dosyasının SONUNA (MY-MCP
köprüsü için kullandığın aynı `insert:` deseniyle) şunu ekle:

```yaml
- insert:
    - id: locale-tr
      name: dsh-locale-tr
```

## 4) Doğrula ve yeniden başlat

```powershell
dsh --profile web --dump-config
```

Hata yoksa (paket bulunamadı / build eksik gibi bir mesaj çıkmazsa) `dsh web`'i
yeniden başlat. Ayarlar → Genel'de artık "Türkçe" seçeneği görünmeli; hatta
`settings.yaml`'da zaten `locale.preference: tr` kayıtlı olduğu için hiçbir
şey seçmeden otomatik Türkçe açılabilir.

## Not — eski "kayıp" Türkçe hakkında

Baktığımda gerçek bir dsh arayüz Türkçe paketi hiç kayıtlı değildi:
`cordis.patch.yml`'de ve profile `package.json`'da hiç locale/dil ile ilgili
bir satır yoktu. `D:\sohbet\locales` içindeki `tr_TR.mjs` dosyası da,
`dsh`'nin kendi arayüz diliyle ilgisi olmayan, şema doğrulama kütüphanesinin
(typebox) hata mesajı yerelleştirmesiydi — o dosya güncellemeden önce de
sonra da hep stok/yerinde duruyordu, hiç kaybolmamıştı. Yani muhtemelen
kaybolan şey aslında hiçbir zaman çalışmıyordu; bu plugin ilk gerçek,
kalıcı Türkçe arayüz desteği.
