"use client";

import { UserCircle2, Trophy, Heart, ChevronRight } from "lucide-react";

const studentResults = [
  {
    id: "result-1",
    title: "Matematik Deneme Sonucu",
    rows: [
      { label: "Matematik", before: "45", after: "95" },
    ],
    comment: "Öğrencimizin netlerindeki bu harika yükseliş bizi gururlandırdı!",
    who: "7. Sınıf Öğrencisi",
    beforeLabel: "Derslerden önce",
    afterLabel: "Derslerden sonra",
  },
  {
    id: "result-2",
    title: "Öğrenci Gelişim Raporu",
    rows: [
      { label: "Mat. 1. Sınav", before: "52", after: "" },
      { label: "Mat. Son Sınav", before: "96", after: "" },
    ],
    comment: "LGS hazırlık sürecindeki bu istikrarlı gelişim muazzam! ❤️",
    who: "8. Sınıf Öğrencisi",
    isProgress: true,
  },
  {
    id: "result-3",
    title: "Deneme Sınavı",
    tableHeaders: ["Ders", "Doğru", "Yanlış", "Boş"],
    tableRows: [
      ["Türkçe", "18", "2", "0"],
      ["Matematik", "19", "1", "0"],
    ],
    comment: "Son deneme sınavında neredeyse tam çıkardık! 🎉",
    who: "Öğrenci",
  },
];

const testimonials = [
  {
    id: "t1",
    text: "Ayşe Nur hocamızın ilgisi ve motivasyonu sayesinde kızımın matematiğe olan önyargısı tamamen yıkıldı. Artık derslere severek katılıyor ve netleri hızla artıyor! Çok teşekkür ederiz.",
    who: "Veli",
  },
  {
    id: "t2",
    text: "Oğlumun LGS hazırlık sürecinde en büyük şansımız Ayşe Nur Hanım oldu. Sadece ders anlatmıyor, öğrencisiyle harika bir bağ kurup yol gösteriyor. Netlerimiz 8'den 18'e çıktı!",
    who: "Veli",
  },
  {
    id: "t3",
    text: "Matematikten korkan kızım, Ayşe Nur öğretmenimizin sabrı ve tatlı diliyle artık dersi sabırsızlıkla bekliyor. Son denemede sadece 1 yanlışı çıktı, emekleriniz için minnettarız! ⭐",
    who: "LGS Öğrenci Velisi",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Sol: Gerçek Öğrenci Sonuçları */}
          <div>
            <div className="flex items-center gap-2 mb-7">
              <Trophy size={22} className="text-yellow-500" />
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#121C3B]">
                Gerçek Öğrenci Sonuçları
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {/* Kart 1 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#121C3B] text-sm mb-3">
                  {studentResults[0].title}
                </h4>
                <table className="w-full text-sm mb-3 border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left text-xs text-gray-400 font-semibold py-1.5">SINAV</th>
                      <th className="text-center text-xs text-gray-400 font-semibold py-1.5">ÖNCE</th>
                      <th className="text-center text-xs text-gray-400 font-semibold py-1.5">SONRA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 text-[#121C3B] font-semibold text-xs">Matematik</td>
                      <td className="py-2 text-center font-bold text-gray-600 text-sm">45</td>
                      <td className="py-2 text-center font-bold text-emerald-600 text-sm">95</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex gap-2 mb-3">
                  <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded">
                    Derslerden önce
                  </span>
                  <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded">
                    Derslerden sonra
                  </span>
                </div>
                <p className="text-xs text-gray-500 italic mb-2">
                  ⭐ &quot;{studentResults[0].comment}&quot;
                </p>
                <div className="flex items-center gap-2">
                  <UserCircle2 size={18} className="text-yellow-500" />
                  <span className="text-xs font-semibold text-gray-500">{studentResults[0].who}</span>
                </div>
              </div>

              {/* Kart 2 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#121C3B] text-sm mb-3">
                  {studentResults[1].title}
                </h4>
                <table className="w-full text-sm mb-3 border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left text-xs text-gray-400 font-semibold py-1.5">DERS</th>
                      <th className="text-center text-xs text-gray-400 font-semibold py-1.5">PUAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1.5 text-[#121C3B] font-semibold text-xs">Matematik 1. Sınav</td>
                      <td className="py-1.5 text-center font-bold text-gray-500 text-sm">52</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-[#121C3B] font-semibold text-xs">Matematik Son Sınav</td>
                      <td className="py-1.5 text-center font-bold text-emerald-600 text-sm">96</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 italic mb-2">
                  ⭐ &quot;{studentResults[1].comment}&quot;
                </p>
                <div className="flex items-center gap-2">
                  <UserCircle2 size={18} className="text-yellow-500" />
                  <span className="text-xs font-semibold text-gray-500">{studentResults[1].who}</span>
                </div>
              </div>

              {/* Kart 3 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#121C3B] text-sm mb-3">
                  {studentResults[2].title}
                </h4>
                <table className="w-full text-sm mb-3 border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left text-xs text-gray-400 font-semibold py-1.5">DERS</th>
                      <th className="text-center text-xs text-gray-400 font-semibold py-1.5">DOĞRU</th>
                      <th className="text-center text-xs text-gray-400 font-semibold py-1.5">YANLIŞ</th>
                      <th className="text-center text-xs text-gray-400 font-semibold py-1.5">BOŞ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1.5 text-xs text-[#121C3B] font-semibold">Türkçe</td>
                      <td className="py-1.5 text-center text-xs font-bold text-emerald-600">18</td>
                      <td className="py-1.5 text-center text-xs font-bold text-red-500">2</td>
                      <td className="py-1.5 text-center text-xs font-bold text-gray-400">0</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 text-xs text-[#121C3B] font-semibold">Matematik</td>
                      <td className="py-1.5 text-center text-xs font-bold text-emerald-600">19</td>
                      <td className="py-1.5 text-center text-xs font-bold text-red-500">1</td>
                      <td className="py-1.5 text-center text-xs font-bold text-gray-400">0</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 italic mb-2">
                  ⭐ &quot;{studentResults[2].comment}&quot;
                </p>
                <div className="flex items-center gap-2">
                  <UserCircle2 size={18} className="text-yellow-500" />
                  <span className="text-xs font-semibold text-gray-500">{studentResults[2].who}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ: Veli Yorumları */}
          <div>
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-2">
                <Heart size={22} className="text-red-500 fill-red-500" />
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#121C3B]">
                  Velilerimiz Ne Diyor?
                </h2>
              </div>
              <a
                href="#"
                className="text-[#E11D74] hover:text-pink-700 text-sm font-bold flex items-center gap-1 transition-colors"
              >
                Tüm Yorumları Gör <ChevronRight size={14} />
              </a>
            </div>

            <div className="flex flex-col gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Yıldızlar */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center">
                      <UserCircle2 size={22} className="text-yellow-500" />
                    </div>
                    <span className="font-semibold text-sm text-[#121C3B]">
                      {t.who}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
