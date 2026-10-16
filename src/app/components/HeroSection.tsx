"use client";

import { CheckCircle2, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/905433027325?text=Merhaba%2C%20matematik%20dersi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const advantages = [
  "Güncel müfredata uygun içerikler",
  "Yeni nesil soru ve çözümleri",
  "Birebir ve yüz yüze özel ders",
  "Online ve interaktif dersler",
];

const books = [
  { label: "LGS", bg: "bg-indigo-700", text: "text-white" },
  { label: "8. SINIF", bg: "bg-pink-600", text: "text-white" },
  { label: "7. SINIF", bg: "bg-yellow-500", text: "text-white" },
  { label: "6. SINIF", bg: "bg-sky-500", text: "text-white" },
  { label: "5. SINIF", bg: "bg-purple-500", text: "text-white" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-8 pb-12 lg:pt-14 lg:pb-20">
      {/* Arka plan dekoratif daireler */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Sol Kolon: Metin */}
          <div className="animate-fade-in-up">
            {/* Rozet */}
            <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-5 py-2 mb-6 shadow-sm">
              <span className="font-bold text-[#121C3B] text-sm tracking-wide">
                5 · 6 · 7 · 8. SINIF · LGS
              </span>
            </div>

            {/* Ana Başlık */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-tight mb-5">
              <span className="flex items-center gap-2 flex-wrap">
                <span className="text-[#E11D74] animate-wiggle inline-block">✦</span>
                <span className="text-[#121C3B]">Matematiği</span>
              </span>
              <span className="text-[#E11D74]">Birlikte Başaralım!</span>
            </h1>

            {/* Alt Açıklama */}
            <p className="text-gray-500 text-base lg:text-lg mb-7 leading-relaxed max-w-lg">
              Sıfırdan zirveye: Kapsamlı konu anlatımları ve güncel testler ile
              matematikte başarı artık çok daha yakın.
            </p>

            {/* Avantaj Maddeler */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {advantages.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2
                    size={20}
                    className="text-[#22C55E] flex-shrink-0"
                  />
                  <span className="text-[#121C3B] font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Butonu */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageCircle size={20} />
              WhatsApp&apos;tan Bilgi Al →
            </a>

            {/* Alt not */}
            <p className="text-xs text-gray-400 mt-4">
              ⚡ Ücretsiz ön görüşme • Hızlı yanıt garantisi
            </p>
          </div>

          {/* Sağ Kolon: Görsel Kompozisyon */}
          <div className="relative flex justify-center items-end lg:items-center animate-float">
            <div className="relative w-full max-w-lg">
              {/* Arka plan – Yeşil Yazı Tahtası */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-600 rounded-3xl opacity-90 z-0" />

              {/* Tahta iç içeriği */}
              <div className="relative z-10 p-6 sm:p-8 rounded-3xl min-h-[340px] flex flex-col justify-between">
                {/* Tahta formülleri */}
                <div className="text-emerald-200 font-mono text-xs sm:text-sm leading-relaxed opacity-80 select-none">
                  <p>f(x) = √(x²−1)</p>
                  <p>x² + y² = 2 ± √(b²+2)</p>
                  <p>∫(x+12) = cb</p>
                  <p className="mt-1">a² + b² = c²</p>
                </div>

                {/* Post-it */}
                <div className="absolute top-4 right-4 bg-yellow-300 px-4 py-3 rounded-lg shadow-lg rotate-2">
                  <p className="font-extrabold text-[#121C3B] text-sm leading-tight">
                    Doğru<br />çalışmak<br />mümkün!
                  </p>
                </div>

                {/* Masa kompozisyonu */}
                <div className="flex items-end gap-4 mt-8">
                  {/* Kitap kulesi */}
                  <div className="flex flex-col gap-0.5 items-center animate-pulse-soft">
                    {books.map((b) => (
                      <div
                        key={b.label}
                        className={`${b.bg} ${b.text} font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded w-24 sm:w-28 text-center shadow-sm`}
                      >
                        {b.label}
                      </div>
                    ))}
                  </div>

                  {/* Laptop */}
                  <div className="flex-1 bg-gray-800 rounded-xl p-2 shadow-xl">
                    <div className="bg-white rounded-lg p-2 min-h-[100px] flex flex-col gap-1">
                      <p className="font-bold text-[#121C3B] text-xs text-center">matematik</p>
                      <div className="flex gap-1 items-end justify-center mt-1">
                        <div className="w-2 bg-pink-400 rounded-sm" style={{ height: "30px" }} />
                        <div className="w-2 bg-indigo-400 rounded-sm" style={{ height: "50px" }} />
                        <div className="w-2 bg-yellow-400 rounded-sm" style={{ height: "40px" }} />
                        <div className="w-2 bg-green-400 rounded-sm" style={{ height: "60px" }} />
                        <div className="w-2 bg-purple-400 rounded-sm" style={{ height: "45px" }} />
                      </div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-b-xl mt-1" />
                  </div>

                  {/* Sağ aksesuarlar */}
                  <div className="flex flex-col gap-2 items-center text-2xl">
                    <span title="Kalemlik">🖊️</span>
                    <span title="Dünya">🌍</span>
                    <span title="Hesap Makinesi">🧮</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
