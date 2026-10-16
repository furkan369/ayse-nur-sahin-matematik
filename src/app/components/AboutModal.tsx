"use client";

import { useEffect } from "react";
import {
  X,
  Heart,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  MessageCircle,
  Compass,
  GraduationCap,
} from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WA_LINK =
  "https://wa.me/905433027325?text=Merhaba%20Ay%C5%9Fenur%20Hocam%2C%20hakk%C4%B1n%C4%B1zdaki%20yaz%C4%B1y%C4%B1%20okudum%20ve%20dersler%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum.";

const approaches = [
  {
    icon: Sparkles,
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    title: "Ezberci Değil, Mantığı Kavratan Somut Anlatımlar",
    desc: "Formülleri ezberletmek yerine nereden çıktığını ve mantığını keşfettiriyoruz.",
  },
  {
    icon: Compass,
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
    title: "Yeni Nesil Soru Analizi ve Problem Çözme Stratejileri",
    desc: "Uzun metinli, şekilli LGS ve okul sınav sorularını adım adım çözme teknikleri.",
  },
  {
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    title: "Düzenli Takip, Deneme Sınavları ve Pekiştirme Fasikülleri",
    desc: "Sürekli geri bildirim ve eksik kazanım odaklı özel çalışma programları.",
  },
  {
    icon: Heart,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    title: "Sınav Kaygısını Azaltan, Özgüven Artıran Rehberlik",
    desc: "Öğrencinin matematiğe olan önyargısını kırıp 'ben yapabilirim' inancını kazandırma.",
  },
];

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-up border border-pink-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Üst Başlık Şeridi */}
        <div className="relative bg-gradient-to-r from-[#121C3B] via-[#241442] to-[#E11D74] p-6 sm:p-8 text-white flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
            aria-label="Kapat"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-pink-500/30 text-pink-200 border border-pink-300/30 uppercase flex items-center gap-1.5">
              <GraduationCap size={14} />
              Öğretmeninizi Tanıyın
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ayşenur Şahin
          </h2>
          <p className="text-pink-100/90 text-sm sm:text-base font-medium mt-1">
            İlköğretim Matematik Öğretmeni & LGS Hazırlık Rehberi
          </p>
        </div>

        {/* Gövde - İçerik */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#121C3B] text-sm sm:text-base leading-relaxed">
          {/* Giriş Hitabı */}
          <div className="bg-pink-50/70 border border-pink-100 rounded-2xl p-4 sm:p-5">
            <p className="font-bold text-[#E11D74] text-base sm:text-lg mb-2">
              Merhaba sevgili veliler ve kıymetli öğrenciler,
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ben <strong className="text-[#121C3B]">Ayşenur Şahin</strong>. İlköğretim matematik öğretmeniyim. 
              Yıllardır tutkuyla sürdürdüğüm mesleğimde, öğrencilerin matematiğe karşı geliştirdiği o çekingen bakışı 
              güven dolu bir tebessüme dönüştürmek en büyük motivasyonum oldu.
            </p>
          </div>

          {/* Felsefe / Bakış Açısı */}
          <div className="space-y-3 text-gray-700">
            <p>
              Matematik, çoğu zaman sayılardan ve ezber kurallardan ibaret, aşılması güç bir engel gibi algılanıyor. 
              Oysa doğru rehberlik, öğrencinin seviyesine uygun adımlar ve mantığı kavratan yöntemlerle yaklaşıldığında; 
              hayatı anlamlandıran, düşünme becerilerini geliştiren en keyifli derstir.
            </p>
            <p>
              Alanında uzman ve deneyimli bir eğitimci olarak, ortaokul kademesindeki öğrencilerimle birlikte bu yolculuğu 
              sağlam adımlarla inşa ediyoruz. <strong>5. sınıftan başlayarak</strong> temel kavramları oturtuyor, 
              okul yazılılarına eksiksiz hazırlanıyor ve <strong>8. sınıf LGS maratonunda</strong> yeni nesil soru mantığını 
              adım adım çözüyoruz.
            </p>
          </div>

          {/* Eğitim Yaklaşımı Kartları */}
          <div>
            <h3 className="font-extrabold text-[#121C3B] text-base sm:text-lg mb-3 flex items-center gap-2">
              <Award className="text-[#E11D74]" size={20} />
              Öğrenme Hızına ve İhtiyaçlara Odaklanan Yaklaşımımız
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Birebir özel dersler ve seviyeye uygun oluşturulmuş butik grup dersleriyle her öğrencinin potansiyelini zirveye taşıyoruz:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {approaches.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border ${item.border} ${item.bg} hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121C3B] text-sm leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Alıntı Söz Kartı */}
          <div className="relative rounded-2xl bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 p-5 sm:p-6 border border-pink-200/70 text-center">
            <span className="text-3xl text-pink-500 font-serif block mb-1">“</span>
            <blockquote className="font-bold text-base sm:text-lg text-[#121C3B] italic">
              Bir öğrencinin &ldquo;Ben bu soruyu yapabiliyorum!&rdquo; dediği an, başarının kapısının aralandığı andır.
            </blockquote>
          </div>

          {/* Kapanış Çağrısı */}
          <p className="text-gray-700 leading-relaxed text-center font-medium">
            Siz de çocuğunuzun matematikle barışmasını, sağlam bir temel kurarak okulda ve sınavlarda 
            hedeflerine güvenle ulaşmasını isterseniz, bu başarı yolculuğuna birlikte başlayabiliriz.
          </p>
        </div>

        {/* Alt Aksiyon Butonları */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-100 active:scale-95 transition-all order-2 sm:order-1"
          >
            Pencereyi Kapat
          </button>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all order-1 sm:order-2"
          >
            <MessageCircle size={18} />
            Hemen Tanışalım (WhatsApp)
          </a>
        </div>
      </div>
    </div>
  );
}
