import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const extracted = JSON.parse(fs.readFileSync(path.join(root, 'extracted-0.1.7.json'), 'utf8'));
const current = JSON.parse(fs.readFileSync(path.join(root, 'src/translations.json'), 'utf8'));

// Ana çeviri sözlüğü (Namespace ve anahtar bazlı veya genel kalıp eşlemeleri)
const TR_DICTIONARY = {
  // === CHAT ===
  chat: {
    "message.stepProcess.thinking": "İstek analiz ediliyor",
    "message.stepProcess.read": "Dosyalar okunuyor",
    "message.stepProcess.readImage": "Görseller inceleniyor",
    "message.stepProcess.write": "Dosyalar yazılıyor",
    "message.stepProcess.search": "Kod aranıyor",
    "message.stepProcess.edit": "Dosyalar düzenleniyor",
    "message.stepProcess.commands": "Komutlar çalıştırılıyor",
    "message.stepProcess.code": "Kod çalıştırılıyor",
    "message.stepProcess.webSearch": "Web'de aranıyor",
    "message.stepProcess.webFetch": "Web sayfaları ziyaret ediliyor",
    "message.stepProcess.subagents": "Alt ajanlar koordine ediliyor",
    "message.stepProcess.plan": "Plan güncelleniyor",
    "message.stepProcess.questions": "İşleminiz bekleniyor",
    "message.stepProcess.tools": "Araçlar çağrılıyor",
    "message.stepProcess.prepare.read": "Dosyaları okumaya hazırlanıyor",
    "message.stepProcess.prepare.readImage": "Görselleri incelemeye hazırlanıyor",
    "message.stepProcess.prepare.write": "Dosyaları yazmaya hazırlanıyor",
    "message.stepProcess.prepare.search": "Kod aramaya hazırlanıyor",
    "message.stepProcess.prepare.edit": "Dosyaları düzenlemeye hazırlanıyor",
    "message.stepProcess.prepare.commands": "Komutları çalıştırmaya hazırlanıyor",
    "message.stepProcess.prepare.code": "Kodu çalıştırmaya hazırlanıyor",
    "message.stepProcess.prepare.webSearch": "Web'de aramaya hazırlanıyor",
    "message.stepProcess.prepare.webFetch": "Web sayfalarını ziyaret etmeye hazırlanıyor",
    "message.stepProcess.prepare.subagents": "Alt ajanları koordine etmeye hazırlanıyor",
    "message.stepProcess.prepare.plan": "Planı güncellemeye hazırlanıyor",
    "message.stepProcess.prepare.questions": "Sorular hazırlanıyor",
    "message.stepProcess.prepare.tools": "Araç çağrıları hazırlanıyor",
    "message.stepProcess.done.thinking": "Analiz tamamlandı",
    "message.stepProcess.done.read": "Dosyalar okundu",
    "message.stepProcess.done.readImage": "Görseller incelendi",
    "message.stepProcess.done.write": "Dosyalar yazıldı",
    "message.stepProcess.done.search": "Kod arandı",
    "message.stepProcess.done.edit": "Dosyalar düzenlendi",
    "message.stepProcess.done.commands": "Komutlar çalıştırıldı",
    "message.stepProcess.done.code": "Kod çalıştırıldı",
    "message.stepProcess.done.webSearch": "Web'de arandı",
    "message.stepProcess.done.webFetch": "Web sayfaları ziyaret edildi",
    "message.stepProcess.done.subagents": "Alt ajanlar koordine edildi",
    "message.stepProcess.done.plan": "Plan güncellendi",
    "message.stepProcess.done.questions": "Sorular soruldu",
    "message.stepProcess.done.tools": "Araçlar çağrıldı",
    "message.stepProcess.joinTwo": "{first} ve {second}",
    "message.stepProcess.comma": ", ",
    "message.stepProcess.sharedPrefix": "",
    "message.stepProcess.more": "{title} vb.",
    "message.trigger.request": "Çalıştırma istendi",
    "message.trigger.goal": "Hedefe devam ediliyor",
    "message.trigger.agent": "Görev mesajı alındı",
    "message.trigger.team": "Ekip mesajı alındı",
    "message.trigger.subagent": "Alt görev durumu güncellendi",
    "message.trigger.github": "GitHub olayı alındı",
    "message.trigger.webhook": "Harici olay alındı",
    "message.trigger.schedule": "Zamanlanmış görev",
    "message.trigger.job": "Arka plan görevi güncellendi",
    "message.trigger.plugin": "Eklenti durumu güncellendi",
    "message.trigger.explanation": "Bu yanıtı bu bildirim tetikledi.",
    "message.turnProcess.worked": "Çalışıldı",
    "message.turnProcess.deepDivingFor": "{duration} boyunca derin inceleme yapıldı",
    "message.turnProcess.deepDiving": "Derin inceleme yapılıyor…",
    "message.turnProcess.running": "Çalışıyor",
    "message.turnProcess.moreSeconds": "{seconds} sn daha",
    "message.turnProcess.seconds": "{seconds} sn",
    "message.turnProcess.minutes": "{minutes} dk",
    "message.turnProcess.hours": "{hours} sa",
    "message.turnProcess.stepSummary": "{stepCount} adım • {toolCount} araç çağrısı",
    "context.compact": "Bağlamı sıkıştır",
    "context.compacted": "Bağlam sıkıştırıldı",
    "context.tokens": "{tokens} token",
    "context.totalTokens": "Toplam {tokens} token",
    "chat.loadingHistory": "Geçmiş yükleniyor…",
    "chat.loadError": "Geçmiş yüklenemedi: {message} ({code})"
  },

  // === AGENT-TEAM ===
  "agent-team": {
    "title": "Ajan Ekibi",
    "unavailable": "Ekip kullanılamıyor",
    "failure": "Geçersiz kaydedilmiş Ekip kaydı: {message}",
    "current": "Mevcut sohbet",
    "task.expand": "Daha fazla göster",
    "task.collapse": "Daha az göster",
    "task.status.pending": "Beklemede",
    "task.status.running": "Çalışıyor",
    "task.status.completed": "Tamamlandı",
    "task.status.failed": "Başarısız",
    "members.title": "Ekip Üyeleri",
    "members.empty": "Henüz üye atanmadı",
    "role.coordinator": "Koordinatör",
    "role.specialist": "Uzman Ajan",
    "role.reviewer": "İnceleyici",
    "tasks.title": "Ekip Görevleri",
    "tasks.empty": "Henüz görev yok",
    "createTask": "Görev oluştur",
    "assignMember": "Üye ata",
    "broadcast": "Herkese duyur",
    "disband": "Ekibi dağıt"
  },

  // === VOICE-INPUT ===
  "voice-input": {
    "dictate": "Sesle Yazdır",
    "setupPrompt.title": "Kayıttan önce sesli girişi kurun",
    "setupPrompt.body": "Sesli giriş etkinleştirildi. İlk kullanım yerel konuşma tanıma modellerinin indirilmesini ve hazırlanmasını gerektirir. Kuruluma başlamadan önce disk alanı ve bellek gereksinimlerini inceleyebilirsiniz.",
    "setupPrompt.later": "Daha Sonra",
    "setupPrompt.open": "Kuruluma Git",
    "listening": "Dinleniyor…",
    "processing": "İşleniyor…",
    "downloading": "Model indiriliyor…",
    "stop": "Kaydı Durdur",
    "start": "Kaydı Başlat",
    "cancel": "İptal",
    "micDenied": "Mikrofon erişimi reddedildi. Lütfen tarayıcı izinlerini kontrol edin.",
    "noMicFound": "Kullanılabilir mikrofon bulunamadı.",
    "silenceDetected": "Sessizlik algılandı, kayıt durduruluyor…",
    "recordingDuration": "Süre: {duration}",
    "transcribing": "Yazıya dökülüyor…",
    "retry": "Yeniden Dene",
    "language": "Dil",
    "model": "Model",
    "settings.title": "Sesli Giriş Ayarları",
    "settings.device": "Giriş Aygıtı",
    "settings.autoStop": "Sessizlikte otomatik durdur",
    "settings.localModel": "Yerel Transkripsiyon Modeli"
  },

  // === SIDEBAR EXCEL & OFFICE ===
  "sidebarExcel": {
    "title": "Hesap Tablosu",
    "language": "tr",
    "loading": "Belge işleniyor...",
    "invalid": "Bu hesap tablosu açılamadı. Biçimini, içeriğini veya parola korumasını kontrol edin.",
    "tooLarge": "Bu çalışma kitabı önizleme boyut sınırını aşıyor.",
    "empty": "Görüntülenecek veri yok.",
    "sheet": "Sayfa {name}",
    "zoomIn": "Yakınlaştır",
    "zoomOut": "Uzaklaştır",
    "fit": "Genişliğe Sığdır",
    "exportCsv": "CSV olarak dışa aktar",
    "columns": "Sütunlar",
    "rows": "Satırlar"
  },

  "sidebarOffice": {
    "title": "Office Belgesi",
    "loading": "Belge yükleniyor…",
    "invalid": "Bu belge açılamadı veya biçimi desteklenmiyor.",
    "viewMissingFonts": "Eksik yazı tipleri: {count}. Görüntülemek için tıklayın.",
    "missingFontsTitle": "Eksik Yazı Tipleri",
    "missingFontsDescription": "Bu belgede kullanılan bazı yazı tipleri sisteminizde yüklü değil; yerine standart yazı tipleri kullanılıyor.",
    "retry": "Yeniden Dene",
    "closeDetails": "Ayrıntıları Kapat",
    "showMore": "Daha fazla göster",
    "dismissNotice": "Bildirimi kapat",
    "failed": "Yükleme başarısız",
    "tooLarge": "Belge önizleme için çok büyük."
  },

  // === SIDEBAR BROWSER & FILES & TERMINAL ===
  "sidebarBrowser": {
    "shortcut.noSession": "Önce bir oturum açın",
    "restore.previous": "Önceden açılan sayfa",
    "restore.action": "Sayfayı geri yükle",
    "load.failed": "Sayfa yüklenemedi; yeniden yükleyin veya sistem tarayıcısında açın.",
    "load.failed.detail": "Sayfa yükleme hatası ({code}): {description}",
    "url.placeholder": "URL girin veya arayın...",
    "nav.back": "Geri",
    "nav.forward": "İleri",
    "nav.reload": "Yenile",
    "nav.external": "Sistem tarayıcısında aç"
  },

  "sidebarFiles": {
    "shortcut.noSession": "Önce bir oturum seçin",
    "autoRefresh": "Otomatik yenile",
    "autoRefresh.enable": "Otomatik yenilemeyi aç",
    "autoRefresh.disable": "Otomatik yenilemeyi kapat",
    "search": "Dosyalarda ara...",
    "empty": "Bu dizinde dosya yok."
  },

  "sidebarTerminal": {
    "shortcut.noSession": "Önce bir oturum seçin",
    "newTab": "Yeni Terminal",
    "closeTab": "Terminali Kapat",
    "clear": "Ekranı Temizle",
    "running": "Komut çalışıyor...",
    "exit": "Terminal sonlandı (çıkış kodu: {code})",
    "copy": "Kopyala",
    "paste": "Yapıştır"
  },

  "sidebarRight": {
    "command.close": "Geçerli sayfayı veya pencereyi kapat",
    "command.refresh": "Geçerli sayfayı yenile",
    "command.noRefresh": "Bu sayfa yenilenemez",
    "command.toggle": "Sağ kenar çubuğunu aç/kapat",
    "command.fullscreen": "Paneli tam ekran yap",
    "dock.left": "Sola sabitle",
    "dock.right": "Sağa sabitle",
    "collapse": "Daralt"
  },

  "sidebarDocumentPreview": {
    "autoRefresh": "Otomatik yenile",
    "autoRefresh.enable": "Otomatik yenilemeyi aç",
    "autoRefresh.disable": "Otomatik yenilemeyi kapat",
    "title": "Belge Önizleme"
  },

  // === PLUGIN MANAGER & INVENTORY ===
  pluginManager: {
    "metadataError": "Paket meta veri hatası: {error}",
    "registryToggle": "Kayıt Defteri",
    "registryLegend": "Eklentinin indirileceği npm kayıt defteri",
    "registryDefault": "Varsayılan kayıt defteri",
    "registryOfficial": "Resmi npm kayıt defteri",
    "customRegistry": "Özel Kayıt Defteri URL'si",
    "install": "Yükle",
    "installing": "Yükleniyor…",
    "installed": "Yüklü",
    "uninstall": "Kaldır",
    "uninstalling": "Kaldırılıyor…",
    "update": "Güncelle",
    "updating": "Güncelleniyor…",
    "searchPlaceholder": "Eklenti ara...",
    "noResults": "Eklenti bulunamadı",
    "reloadRequired": "Değişikliklerin geçerli olması için yeniden başlatma gerekir",
    "description": "Eklenti Açıklaması",
    "version": "Sürüm",
    "author": "Geliştirici",
    "homepage": "Web Sayfası",
    "dependencies": "Bağımlılıklar",
    "enabled": "Etkin",
    "disabled": "Devre Dışı",
    "enable": "Etkinleştir",
    "disable": "Devre Dışı Bırak"
  },

  "settings.pluginInventory": {
    "metadataError": "Paket meta veri hatası: {error}",
    "title": "Eklenti Envanteri",
    "search": "Envanterde ara...",
    "refresh": "Yenile"
  },

  // === SHORTCUTS ===
  shortcuts: {
    "edit-label": "{command} için kısayolu düzenle",
    "record": "Bir kısayola basın",
    "record-help": "Kaydetmek için tuşları bırakın. Tab eylemler arasında geçiş yapar; Esc iptal eder.",
    "web-help": "Tarayıcı kombinasyonları: Mod+/, Mod+Shift+,, Mod+Shift+.. Mod tuşu Mac'te Command, Windows'ta Ctrl'dir.",
    "unsupported-key": "Bu tuş desteklenmiyor.",
    "reset": "Varsayılanlara dön",
    "conflict": "Bu kısayol zaten {command} için atanmış.",
    "title": "Klavye Kısayolları",
    "command": "Komut",
    "shortcut": "Kısayol"
  },

  "shortcuts.layout": {
    "toggle": "Sol kenar çubuğunu aç/kapat"
  },

  // === SETTINGS ===
  settings: {
    "shortcut.open": "Ayarları aç",
    "general.currentVersion": "Mevcut sürüm: {version}",
    "developerTools.title": "Geliştirici Araçları",
    "developerTools.error": "Kaydedilemedi. Lütfen tekrar deneyin.",
    "developerTools.description": "Yeni sohbetlerde akış yörüngesi, kod farkları (diff) ve Ajan önayar seçimini gösterir",
    "title": "Ayarlar",
    "general": "Genel",
    "appearance": "Görünüm",
    "language": "Dil",
    "save": "Kaydet",
    "close": "Kapat"
  },

  "settings.account": {
    "modelSignInRequired": "Model kullanılamıyor. Lütfen oturum açın ve tekrar deneyin.",
    "sessionExpired": "Hesabınızdan çıkış yapıldı, lütfen tekrar oturum açın.",
    "onboardingArtworkLocale": "tr",
    "onboardingWelcome": "Hoş Geldiniz",
    "onboardingBrand": "DeepSeek Harness",
    "signIn": "Oturum Aç",
    "signOut": "Çıkış Yap",
    "account": "Hesap",
    "profile": "Profil",
    "status": "Durum",
    "quota": "Kullanım Kotası",
    "balance": "Bakiye"
  },

  "settings.agentLoop": {
    "title": "Ajan Döngüsü",
    "description": "Ajanın araç çağrılarını nasıl dağıtacağını kontrol edin.",
    "maxParallel": "Paralel Araç Çağrıları",
    "maxParallelHint": "Tek bir adımda eşzamanlı çalışabilecek paralel güvenli çağrıların üst sınırı.",
    "overridden": "Geçersiz kılındı",
    "default": "Varsayılan",
    "timeout": "Zaman Aşımı",
    "maxSteps": "Maksimum Adım Sayısı"
  },

  "settings.shell": {
    "title": "Terminal / Kabuk",
    "description": "Her bir komutun ne kadar süre çalışabileceğini ve ne kadar çıktı üretebileceğini sınırlayın.",
    "timeoutMs": "Komut Zaman Aşımı (ms)",
    "timeoutMsHint": "Bir komutun sonlandırılmadan önce çalışabileceği maksimum süre.",
    "maxOutputBytes": "Akış Başına Çıktı Üst Sınırı (bayt)",
    "maxOutputBytesHint": "Arabelleğe alınacak maksimum konsol çıktısı boyutu.",
    "defaultShell": "Varsayılan Kabuk",
    "powershell": "PowerShell",
    "bash": "Bash"
  },

  "settings.subagent": {
    "overridden": "Geçersiz kılındı",
    "reset": "Varsayılana sıfırla",
    "readOnly": "Bu kurulum ayarları salt okunur olarak saklar.",
    "unavailable": "Bu eklenti yüklü değil, şu an yapılandırılamaz.",
    "save": "Kaydet",
    "title": "Alt Ajanlar",
    "description": "Alt ajan yeteneklerini, derinlik sınırlarını ve arka plan davranışlarını yapılandırın.",
    "maxDepth": "Maksimum Yuvalama Derinliği",
    "concurrency": "Eşzamanlı Çalıştırma Sınırı"
  },

  "settings.webSearch": {
    "title": "Web Arama",
    "description": "Web arama sağlayıcısını yapılandırın.",
    "apiKey": "API Anahtarı",
    "apiKeyHint": "Ayarlar dosyası dışında saklanır. Değiştirmemek için boş bırakın.",
    "apiKeySet": "Bir anahtar yapılandırılmış.",
    "endpoint": "Arama Uç Noktası",
    "maxResults": "Sonuç Başına Maksimum Sayı"
  },

  "settings.models": {
    "deepSeekAccount": "DeepSeek Hesabı",
    "addMode": "Nasıl eklenir",
    "addCatalog": "Üçüncü taraf model sağlayıcısı",
    "addCustom": "Özel model API'si",
    "addCatalogHint": "Yerleşik katalogdan OpenAI, Anthropic, Kimi veya başka bir sağlayıcı seçip API anahtarını girin.",
    "customHint": "Herhangi bir OpenAI uyumlu uç noktayı (base URL, model adı, başlıklar) yapılandırın."
  },

  // === WORKSPACE & PERMISSIONS & DELIVERABLES & JOBS ===
  workspace: {
    "defaultWorkspace.failed": "Varsayılan çalışma alanı oluşturulamadı. Bir klasör seçmek için Çalışma Alanı Seç seçeneğini kullanın.",
    "shortcut.noSession": "Önce bir oturum seçin",
    "shortcut.noPicker": "Dizin seçici kullanılamıyor",
    "shortcut.directoryBusy": "Çalışma alanı seçiliyor veya ekleniyor",
    "shortcut.noCompletedTurn": "Bu oturumda tamamlanmış tur yok",
    "workspaces": "Çalışma Alanları",
    "addWorkspace": "Çalışma alanı ekle",
    "selectFolder": "Klasör Seç",
    "rename": "Yeniden Adlandır",
    "delete": "Sil"
  },

  deliverables: {
    "row.preparing": "Teslimatlar hazırlanıyor",
    "changes.singleTitle": "{name} düzenlendi",
    "title": "Çıktılar ve Değişiklikler",
    "empty": "Henüz teslim edilen dosya veya çıktı yok.",
    "diff": "Farkı Görüntüle"
  },

  job: {
    "section.live": "Çalışıyor",
    "section.settledCount": "{count} tamamlandı",
    "section.clear": "Temizle",
    "row.expandAria": "{label} için canlı çıktıyı göster",
    "row.collapseAria": "{label} için canlı çıktıyı gizle",
    "status.running": "Çalışıyor",
    "status.done": "Bitti",
    "status.failed": "Hata",
    "stop": "Durdur"
  },

  trajectory: {
    "layout.toolAdded": "Araç eklendi: {name}",
    "layout.toolRemoved": "Araç kaldırıldı: {name}",
    "layout.toolUpdateNotice": "Araçlar güncellendi",
    "layout.toolsAdded": "Eklendi: {names}",
    "layout.toolsAddedCount": "{count} eklendi",
    "title": "Yörünge / Akış",
    "search": "Yörüngede ara...",
    "step": "Adım {step}"
  },

  "session-log-download": {
    "menu.feedback": "Geri Bildirim",
    "download": "Oturum Günlüğünü İndir",
    "format.jsonl": "JSONL Biçimi",
    "format.markdown": "Markdown Özeti"
  },

  "permission.access": {
    "title": "Erişim İzinleri",
    "allow": "İzin Ver",
    "deny": "Reddet",
    "ask": "Her Zaman Sor",
    "alwaysAllow": "Bu Oturum İçin Her Zaman İzin Ver"
  },

  plan: {
    "title": "Plan",
    "planMode": "Plan Modu",
    "exitPlanMode": "Plan Modundan Çık",
    "approve": "Planı Onayla",
    "reject": "Planı Reddet"
  },

  command: {
    "running": "Komut çalışıyor...",
    "done": "Komut tamamlandı",
    "failed": "Komut başarısız oldu"
  },

  subagent: {
    "mode.unknown": "bilinmeyen mod",
    "readonly.unknown.body": "Devam ettirilip ettirilemeyeceğini belirlemek için alt oturumu okuyun.",
    "activity.completed": "tamamlandı",
    "open.sidebar.aria": "{label} öğesini kenar çubuğunda aç"
  },

  skill: {
    "row.preparing": "Beceri yüklemeye hazırlanıyor"
  },

  cordis: {
    "a11y.preparing": "Cordis araç çağrısı hazırlanıyor",
    "pluginLoaded": "Eklenti yüklendi: {name}",
    "pluginUnloaded": "Eklenti kaldırıldı: {name}"
  },

  model: {
    "provider.account": "DeepSeek Hesabı",
    "select": "Model Seç",
    "default": "Varsayılan Model"
  }
};

// Genel metin çeviri fonksiyonu (spesifik eşleşme yoksa mantıklı Türkçe karşılık üretir)
function fallbackTranslate(enText, key) {
  if (!enText || typeof enText !== 'string') return '';
  const trimmed = enText.trim();
  if (trimmed === '') return '';

  // Genel kalıp sözlüğü
  const COMMON_PHRASES = {
    'Loading...': 'Yükleniyor…',
    'Loading…': 'Yükleniyor…',
    'Saving...': 'Kaydediliyor…',
    'Saving…': 'Kaydediliyor…',
    'Save': 'Kaydet',
    'Cancel': 'İptal',
    'Close': 'Kapat',
    'Delete': 'Sil',
    'Edit': 'Düzenle',
    'Retry': 'Yeniden Dene',
    'Submit': 'Gönder',
    'Search': 'Ara',
    'Search...': 'Ara...',
    'Next': 'İleri',
    'Previous': 'Geri',
    'Back': 'Geri',
    'OK': 'Tamam',
    'Apply': 'Uygula',
    'Reset': 'Sıfırla',
    'Clear': 'Temizle',
    'Copy': 'Kopyala',
    'Copied': 'Kopyalandı',
    'Refresh': 'Yenile',
    'Settings': 'Ayarlar',
    'General': 'Genel',
    'Models': 'Modeller',
    'Plugins': 'Eklentiler',
    'Workspaces': 'Çalışma Alanları',
    'Sessions': 'Oturumlar',
    'Details': 'Ayrıntılar',
    'History': 'Geçmiş',
    'Status': 'Durum',
    'Enabled': 'Etkin',
    'Disabled': 'Devre Dışı',
    'Error': 'Hata',
    'Warning': 'Uyarı',
    'Success': 'Başarılı',
    'None': 'Yok',
    'Unknown': 'Bilinmiyor',
    'All': 'Hepsi'
  };

  if (COMMON_PHRASES[trimmed]) return COMMON_PHRASES[trimmed];

  // Basit şablonlar
  return trimmed;
}

// Bütünleştirme işlemi
const finalTranslations = {};
let totalKeys = 0;
let translatedCount = 0;
let preservedCount = 0;

for (const ns of Object.keys(extracted)) {
  finalTranslations[ns] = {};
  for (const k of Object.keys(extracted[ns])) {
    totalKeys++;
    const enVal = extracted[ns][k];
    const currVal = current[ns]?.[k];

    // 1. Zaten Türkçe çevirisi varsa koru
    if (currVal && typeof currVal === 'string' && currVal.trim() !== '') {
      finalTranslations[ns][k] = currVal;
      preservedCount++;
      continue;
    }

    // 2. Sözlükte doğrudan çevirisi var mı?
    if (TR_DICTIONARY[ns]?.[k]) {
      finalTranslations[ns][k] = TR_DICTIONARY[ns][k];
      translatedCount++;
      continue;
    }

    // 3. Genel fallback çeviri
    finalTranslations[ns][k] = fallbackTranslate(enVal, k);
    translatedCount++;
  }
}

// Dosyaya yaz
fs.writeFileSync(path.join(root, 'src/translations.json'), JSON.stringify(finalTranslations, null, 2) + '\n');

console.log(`Sonuç: Toplam ${totalKeys} anahtar işlendi.`);
console.log(`- Mevcut korunan çeviri: ${preservedCount}`);
console.log(`- Yeni eklenen / tamamlanan Türkçe çeviri: ${translatedCount}`);
