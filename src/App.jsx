import React, { useState, useEffect } from 'react';

function App() {
  // Seçili dil filtresini tutan durum yapısı
  const [seciliDil, setSeciliDil] = useState('Hepsi');
  
  // E-posta kopyalama bildirimi durum yapısı
  const [kopyalandi, setKopyalandi] = useState(false);

  // Saate göre değişen dinamik karşılama metni
  const [selam, setSelam] = useState('Merhaba');

  useEffect(() => {
    const saat = new Date().getHours();
    if (saat >= 5 && saat < 12) setSelam('Günaydın');
    else if (saat >= 12 && saat < 18) setSelam('Tünaydın');
    else if (saat >= 18 && saat < 22) setSelam('İyi Akşamlar');
    else setSelam('İyi Geceler');
  }, []);

  // Sadece projesi olan ana dillerin listesi
  const diller = ["C#", "C++", "Python", "Java", "JavaScript"];

  const projeler = [
    { 
      id: 1, 
      başlık: "QR Destekli Spor Salonu Otomasyonu", 
      kategori: "Sistem ve Mobil Geliştirme", 
      açıklama: "Kullanıcıların QR kod ile anlık giriş-çıkış yapabildiği, spor aletlerindeki QR kodlar okutulduğunda hareketlerin rehber videolarını dinamik olarak ekrana getiren kapsamlı yazılım mimarisi.",
      teknolojiler: ["C#", "JavaScript"] 
    },
    { 
      id: 2, 
      başlık: "Diş Hastanesi Randevu Sistemi", 
      kategori: "Veritabanı Yönetimi", 
      açıklama: "Doktor çalışma saatleri ve hasta kayıtlarının takibini en yüksek kararlılıkla yöneten, randevu çakışmalarını tamamen önleyen akıllı algoritmalara sahip otomasyon çalışması.",
      teknolojiler: ["C++", "C#"] 
    },
    { 
      id: 3, 
      başlık: "Etkileşimli Çocuk Oyunları Platformu", 
      kategori: "Kullanıcı Arayüzü ve Oyun", 
      açıklama: "Çocukların motor becerilerini ve mantıksal düşünme yeteneklerini geliştiren, içerisinde birden fazla mini zeka oyunu barındıran modern ve akıcı arayüzlü oyun yazılımı.",
      teknolojiler: ["Python", "Java"] 
    },
    { 
      id: 4, 
      başlık: "Yapay Zeka Destekli Metin Analizörü", 
      kategori: "Veri Bilimi ve Yapay Zeka", 
      açıklama: "Sisteme girilen makalelerin duygu durum analizini yapan ve öne çıkan anahtar kelimeleri yüksek doğruluk oranıyla listeleyen gelişmiş veri madenciliği çalışması.",
      teknolojiler: ["Python"] 
    },
  ];

  // E-posta adresini panoya kopyalayan fonksiyon
  const epostaKopyala = () => {
    navigator.clipboard.writeText('hsnide3@gmail.com');
    setKopyalandi(true);
    setTimeout(() => setKopyalandi(false), 2000);
  };

  // Seçilen dile göre projeleri filtreleyen motor
  const filtrelenmisProjeler = seciliDil === 'Hepsi' 
    ? projeler 
    : projeler.filter(p => p.teknolojiler.includes(seciliDil));

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-slate-800 selection:text-white scroll-smooth">
      
      {/* NAVİGASYON BARU */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-16 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="text-lg font-black tracking-tight text-slate-900">
          Hasan Can İde
        </div>
        <div className="flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-slate-500">
          <a href="#hakkimda" className="hover:text-slate-900 transition-colors duration-200">Giriş</a>
          <a href="#projeler" className="hover:text-slate-900 transition-colors duration-200">Projeler</a>
          <a href="#iletisim" className="hover:text-slate-900 transition-colors duration-200">İletişim</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        
        {/* HAKKIMDA BÖLÜMÜ */}
        <section id="hakkimda" className="py-12 border-b border-slate-200">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">
                Girne Üniversitesi &bull; Yazılım Mühendisliği Bölümü
              </p>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/50 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] text-emerald-700 font-bold font-mono uppercase">Aktif</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              {selam}, Ben Hasan Can.<br />
              Sistemleri Doğru Mimariyle İnşa Ederim.
            </h1>
            
            <p className="pt-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Yazılım dünyasında karmaşık problemleri yüksek performanslı, estetik ve ölçeklenebilir sistemlere dönüştürmeyi hedefleyen bir mühendis adayıyım. C#, C++, Python ve Java dillerini kullanarak geliştirdiğim projelerle teorik altyapıyı modern ve güvenilir ürünlere dönüştürüyorum.
            </p>
          </div>
        </section>

        {/* PROGRAMLAMA DİLLERİ FİLTRE ALANI */}
        <section className="py-16 border-b border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">
              Yazılım Dilleri (Projeleri filtrelemek için bir dile tıklayabilirsiniz)
            </h2>
            {seciliDil !== 'Hepsi' && (
              <button 
                onClick={() => setSeciliDil('Hepsi')}
                className="text-xs font-bold text-blue-600 hover:underline font-mono"
              >
                [Tümünü Göster]
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setSeciliDil('Hepsi')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                seciliDil === 'Hepsi'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              Tüm Projeler
            </button>
            
            {diller.map((dil, index) => (
              <button 
                key={index} 
                onClick={() => setSeciliDil(dil)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                  seciliDil === dil
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                }`}
              >
                {dil}
              </button>
            ))}
          </div>
        </section>

        {/* PROJELER ALANI */}
        <section id="projeler" className="py-16 space-y-12">
          <div className="space-y-1">
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">Çalışmalar</p>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {seciliDil === 'Hepsi' ? 'Geliştirilen Yazılım Çözümleri' : `${seciliDil} İle Geliştirilen Projeler`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtrelenmisProjeler.map((proj) => (
              <div key={proj.id} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-mono block mb-2">{proj.kategori}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{proj.başlık}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">{proj.açıklama}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {proj.teknolojiler.map((arac) => (
                    <span key={arac} className="text-[10px] font-bold bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-lg">
                      {arac}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* İLETİŞİM ALANI */}
        <footer id="iletisim" className="pt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">Doğrudan İletişim</p>
            <div className="flex items-center gap-3">
              <a href="mailto:hsnide3@gmail.com" className="text-xl font-black text-slate-900 hover:text-slate-600 transition-colors duration-200 tracking-tight">
                hsnide3@gmail.com
              </a>
              <button 
                onClick={epostaKopyala}
                className="text-[11px] font-bold font-mono bg-slate-100 hover:bg-slate-200 text-slate-600 px-2.5 py-1 rounded-md transition-colors border border-slate-200/60"
              >
                {kopyalandi ? '✓ Kopyalandı!' : '[Adresi Kopyala]'}
              </button>
            </div>
          </div>
          <div className="text-center md:text-right text-xs text-slate-400 font-mono">
            <p>&copy; {new Date().getFullYear()} Hasan Can İde.</p>
            <p className="text-[10px] text-slate-300">Yazılım Mühendisliği Portfolyosu</p>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;