"use client";

import {
  CheckCircle,
  ClipboardList,
  PlayCircle,
  PenLine,
  MessageCircle,
  BookOpen,
  Target,
  Atom,
  Ruler,
  Hash,
  CheckCheck,
  ChevronRight,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/905433027325?text=Merhaba%2C%20%C3%BCcretsiz%20%C3%B6n%20g%C3%B6r%C3%BC%C5%9Fme%20yapmak%20istiyorum.";

const steps = [
  {
    num: "1",
    icon: CheckCircle,
    title: "Seviye Tespiti",
    desc: "Öğrencinin mevcut seviyesini ve eksik olduğu konuları birlikte belirliyoruz.",
    bg: "bg-[#F3EEFF]",
    iconColor: "text-purple-600",
    numBg: "bg-purple-600",
  },
  {
    num: "2",
    icon: ClipboardList,
    title: "Kişisel Program",
    desc: "Öğrencinin seviyesine ve hedeflerine uygun kişisel çalışma programı hazırlıyoruz.",
    bg: "bg-[#EBF5FF]",
    iconColor: "text-sky-600",
    numBg: "bg-sky-600",
  },
  {
    num: "3",
    icon: PlayCircle,
    title: "Birebir Ders",
    desc: "Konu anlatımı, örnekler ve yeni nesil sorularla konuları birlikte pekiştiriyoruz.",
    bg: "bg-[#EAF8F0]",
    iconColor: "text-emerald-600",
    numBg: "bg-emerald-600",
  },
  {
    num: "4",
    icon: PenLine,
    title: "Ödev ve Takip",
    desc: "Düzenli ödev ve soru çalışmalarıyla öğrenme sürecini yakından takip ediyoruz.",
    bg: "bg-[#FFF8E7]",
    iconColor: "text-yellow-600",
    numBg: "bg-yellow-500",
  },
];

const gradeCards = [
  {
    grade: "5. Sınıf",
    icon: BookOpen,
    bg: "bg-[#F3EEFF]",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    tickColor: "text-purple-500",
    linkColor: "text-purple-600 hover:text-purple-700",
    items: ["Konu Anlatımları", "Testler", "Yazılı Soruları", "PDF İndir"],
  },
  {
    grade: "6. Sınıf",
    icon: Hash,
    bg: "bg-[#EBF5FF]",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
    tickColor: "text-sky-500",
    linkColor: "text-sky-600 hover:text-sky-700",
    items: ["Konu Anlatımları", "Testler", "Yazılı Soruları", "PDF İndir"],
  },
  {
    grade: "7. Sınıf",
    icon: Ruler,
    bg: "bg-[#EAF8F0]",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    tickColor: "text-emerald-500",
    linkColor: "text-emerald-600 hover:text-emerald-700",
    items: ["Konu Anlatımları", "Testler", "Yazılı Soruları", "PDF İndir"],
  },
  {
    grade: "8. Sınıf",
    icon: Atom,
    bg: "bg-[#FFF8E7]",
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-100",
    tickColor: "text-yellow-500",
    linkColor: "text-yellow-600 hover:text-yellow-700",
    items: ["Konu Anlatımları", "Testler", "Yazılı Soruları", "PDF İndir"],
  },
  {
    grade: "LGS",
    icon: Target,
    bg: "bg-[#FFEFEF]",
    iconColor: "text-red-500",
    iconBg: "bg-red-100",
    tickColor: "text-red-400",
    linkColor: "text-red-500 hover:text-red-600",
    items: ["Konu Anlatımları", "Deneme Sınavları", "Çıkmış Sorular", "Stratejiler"],
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="nasil-calisiyoruz" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Başlık */}
        <div className="mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#121C3B] mb-3">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl">
            Öğrencinin seviyesini belirliyor, ihtiyacına göre kişisel bir
            çalışma süreci oluşturuyoruz.
          </p>
        </div>

        {/* 4 Adım Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`${step.bg} rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Numara + İkon */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`${step.numBg} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}
                  >
                    {step.num}
                  </div>
                  <Icon size={20} className={step.iconColor} />
                </div>
                <h3 className="font-bold text-[#121C3B] text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ara CTA Kutusu */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-50 rounded-2xl px-6 py-5 mb-12 border border-gray-100">
          <p className="font-semibold text-[#121C3B] text-sm sm:text-base max-w-lg">
            Çocuğunuz için uygun çalışma programını birlikte belirleyelim.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm px-5 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            <MessageCircle size={16} />
            WhatsApp&apos;tan Ücretsiz Ön Görüşme →
          </a>
        </div>

        {/* Sınıf Özellik Kartları */}
        <div id="siniflar" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {gradeCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.grade}
                className={`${card.bg} rounded-2xl p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                {/* İkon + Başlık */}
                <div
                  className={`${card.iconBg} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}
                >
                  <Icon size={20} className={card.iconColor} />
                </div>
                <h3 className="font-bold text-[#121C3B] text-sm mb-3">
                  {card.grade} <span className="block text-xs font-semibold text-gray-400">Matematik</span>
                </h3>

                {/* Madde Listesi */}
                <ul className="flex flex-col gap-1.5 flex-1">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <CheckCheck size={13} className={card.tickColor} />
                      <span className="text-xs text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* İncele Linki */}
                <a
                  href="#"
                  className={`mt-4 flex items-center gap-1 text-xs font-bold ${card.linkColor} transition-colors`}
                >
                  İncele <ChevronRight size={12} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
