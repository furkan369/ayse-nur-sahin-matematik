"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Compass,
  BookOpen,
  Heart,
  MessageCircle,
  GraduationCap,
  ArrowRight,
  Quote,
} from "lucide-react";
import AboutModal from "./AboutModal";

const WA_LINK =
  "https://wa.me/905433027325?text=Merhaba%20Ay%C5%9Fenur%20Hocam%2C%20matematik%20dersi%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum.";

const highlights = [
  {
    icon: Sparkles,
    title: "Ezberci Değil, Mantığı Kavratan",
    desc: "Formülleri ezberletmek yerine mantığını ve nereden geldiğini kavratıyoruz.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Compass,
    title: "Yeni Nesil Soru Stratejileri",
    desc: "LGS ve MEB sınav tarzı uzun problem çözme tekniklerini adım adım öğretiyoruz.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: BookOpen,
    title: "Düzenli Takip & Pekiştirme",
    desc: "Haftalık ödev takipleri, güncel denemeler ve eksik konu pekiştirme föyleri.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Heart,
    title: "Sınav Kaygısını Azaltan Rehberlik",
    desc: "Öğrencinin matematikle barışmasını ve kendine olan inancını güçlendiriyoruz.",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function AboutSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="hakkimda"
        className="py-16 lg:py-24 bg-gradient-to-b from-white via-pink-50/30 to-purple-50/20 relative overflow-hidden"
      >
        {/* Arka plan süslemeleri */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Üst Rozet ve Başlık */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-pink-100 text-[#E11D74] border border-pink-200 mb-3">
              <GraduationCap size={16} />
              ÖĞRETMENİNİZİ TANIYIN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121C3B] tracking-tight">
              Matematikle Barışmaya <span className="text-[#E11D74]">Hazır mısınız?</span>
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Öğrencilerimizin çekingen bakışlarını güven dolu bir tebessüme dönüştürüyoruz.
            </p>
          </div>

          {/* Ana Kart / Grid */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Sol / Üst Bölüm: Profil & Alıntı (4 Kolon) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#121C3B] via-[#1c274c] to-[#E11D74] p-8 sm:p-10 text-white flex flex-col justify-between relative">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-pink-200 text-xs font-semibold backdrop-blur-sm mb-6">
                    <Sparkles size={14} /> İlköğretim Matematik Öğretmeni
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                    Ayşenur Şahin
                  </h3>
                  <p className="text-pink-200 text-sm font-medium mb-6">
                    5, 6, 7, 8. Sınıf & LGS Matematik Uzmanı
                  </p>

                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 my-4">
                    <Quote className="text-pink-300 opacity-60 mb-2" size={28} />
                    <p className="text-sm sm:text-base italic leading-relaxed text-pink-50">
                      &ldquo;Bir öğrencinin <strong>&lsquo;Ben bu soruyu yapabiliyorum!&rsquo;</strong> dediği an, başarının kapısının aralandığı andır.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#121C3B] font-bold text-sm hover:bg-pink-50 transition-all shadow-md active:scale-95"
                  >
                    Detaylı Yazıyı Oku
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Sağ Bölüm: Mektup Metni ve İlkeler (7 Kolon) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#E11D74] mb-2">
                      Merhaba sevgili veliler ve kıymetli öğrenciler,
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Ben <strong>Ayşenur Şahin</strong>. Yıllardır tutkuyla sürdürdüğüm mesleğimde, öğrencilerin matematiğe karşı geliştirdiği o çekingen bakışı güven dolu bir tebessüme dönüştürmek en büyük motivasyonum oldu.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                      Matematik, çoğu zaman sayılardan ve ezber kurallardan ibaret bir engel gibi algılanıyor. Oysa doğru rehberlik, seviyeye uygun adımlar ve mantığı kavratan yöntemlerle hayatı anlamlandıran en keyifli derstir.
                    </p>
                  </div>

                  {/* 4 İlkeler Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                    {highlights.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="p-3.5 sm:p-4 rounded-2xl bg-gray-50 hover:bg-pink-50/50 border border-gray-100 hover:border-pink-200 transition-all cursor-pointer group"
                          onClick={() => setModalOpen(true)}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}
                            >
                              <Icon size={16} />
                            </div>
                            <div>
                              <h5 className="font-bold text-xs sm:text-sm text-[#121C3B] group-hover:text-[#E11D74] transition-colors leading-snug">
                                {item.title}
                              </h5>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Birebir özel ders ve butik grup dersleriyle başarı yolculuğuna birlikte başlayalım.
                  </p>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-xs sm:text-sm font-bold text-[#E11D74] hover:text-pink-700 flex items-center gap-1.5 transition-colors"
                  >
                    Tüm Detayları Gör
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Entegrasyonu */}
      <AboutModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
