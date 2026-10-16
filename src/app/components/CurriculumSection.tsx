"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import CurriculumModal, { type GradeKey } from "./CurriculumModal";

const cards = [
  {
    id: "sinif-5",
    gradeKey: "5" as GradeKey,
    label: "5. SINIFA HAZIRLIK",
    labelColor: "text-purple-700",
    labelBg: "bg-purple-100",
    title: "5. Sınıf Matematik",
    desc: "Konu anlatımları, kazanım testleri ve yazılıya hazırlık çalışmaları.",
    linkColor: "text-purple-600 hover:text-purple-800",
    topBg: "bg-gradient-to-br from-pink-200 via-purple-100 to-purple-200",
    emoji: ["5️⃣", "📓", "✏️"],
    accent: "#A855F7",
    nums: ["5", "9", "3", "+"],
  },
  {
    id: "sinif-6",
    gradeKey: "6" as GradeKey,
    label: "6. SINIF MATEMATİK",
    labelColor: "text-sky-700",
    labelBg: "bg-sky-100",
    title: "6. Sınıf Matematik",
    desc: "Konu anlatımları, kazanım testleri ve yazılıya hazırlık çalışmaları.",
    linkColor: "text-sky-600 hover:text-sky-800",
    topBg: "bg-gradient-to-br from-sky-200 via-blue-100 to-blue-200",
    emoji: ["6️⃣", "🔢", "🧮"],
    accent: "#0EA5E9",
    nums: ["2", "3", "5", "÷"],
  },
  {
    id: "sinif-7",
    gradeKey: "7" as GradeKey,
    label: "7. SINIF MATEMATİK",
    labelColor: "text-teal-700",
    labelBg: "bg-teal-100",
    title: "7. Sınıf Matematik",
    desc: "Konu anlatımları, kazanım testleri ve yazılıya hazırlık çalışmaları.",
    linkColor: "text-teal-600 hover:text-teal-800",
    topBg: "bg-gradient-to-br from-teal-200 via-emerald-100 to-cyan-200",
    emoji: ["7️⃣", "📐", "🧮"],
    accent: "#14B8A6",
    nums: ["+2", "-5", "÷", "10"],
  },
  {
    id: "sinif-8",
    gradeKey: "8" as GradeKey,
    label: "8. SINIF MATEMATİK",
    labelColor: "text-indigo-700",
    labelBg: "bg-indigo-100",
    title: "8. Sınıf Matematik",
    desc: "Konu anlatımları, kazanım testleri ve yazılıya hazırlık çalışmaları.",
    linkColor: "text-indigo-600 hover:text-indigo-800",
    topBg: "bg-gradient-to-br from-indigo-300 via-indigo-200 to-purple-300",
    emoji: ["8️⃣", "🔢", "🧮"],
    accent: "#6366F1",
    nums: ["12", "24", "6", "÷"],
  },
];

export default function CurriculumSection() {
  const [activeGrade, setActiveGrade] = useState<GradeKey | null>(null);

  return (
    <>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#121C3B] mb-3">
              Sınıf Dersleri &amp; İçerikler
            </h2>
            <p className="text-gray-500 text-base lg:text-lg max-w-xl mx-auto">
              Her sınıf için özel hazırlanmış konu anlatımları, testler ve güncel
              müfredat materyalleri.
            </p>
          </div>

          {/* Kartlar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Üst Renkli Alan */}
                <div
                  className={`${card.topBg} relative h-44 flex items-center justify-center overflow-hidden`}
                >
                  {/* Dekoratif arka plan sayılar */}
                  <div className="absolute inset-0 flex flex-wrap items-center justify-around p-2 opacity-30 select-none pointer-events-none">
                    {card.nums.map((n, i) => (
                      <span
                        key={i}
                        className="font-extrabold text-white text-xl"
                        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>

                  {/* Merkez emoji */}
                  <div className="relative z-10 text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-5xl shadow-lg border-4 border-white/60"
                      style={{ background: `${card.accent}30` }}
                    >
                      {card.emoji[0]}
                    </div>
                    <div className="flex gap-2 justify-center mt-2 text-2xl">
                      {card.emoji.slice(1).map((e, i) => (
                        <span key={i}>{e}</span>
                      ))}
                    </div>
                  </div>

                  {/* Sağ alt işaret */}
                  <div className="absolute bottom-3 right-3 bg-white/70 rounded-lg px-2 py-1 text-xs font-bold text-gray-600 backdrop-blur-sm">
                    🧮
                  </div>
                </div>

                {/* Alt İçerik */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Rozet */}
                  <span
                    className={`inline-block ${card.labelBg} ${card.labelColor} text-[10px] font-extrabold tracking-wide rounded-full px-3 py-1 mb-3 w-fit`}
                  >
                    {card.label}
                  </span>

                  <h3 className="font-extrabold text-[#121C3B] text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                    {card.desc}
                  </p>

                  {/* İncele Butonu — Modal açar */}
                  <button
                    onClick={() => setActiveGrade(card.gradeKey)}
                    className={`flex items-center gap-1 font-bold text-sm ${card.linkColor} transition-colors group w-fit`}
                  >
                    Güncel Müfredatı İncele
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müfredat Modalı */}
      <CurriculumModal
        gradeKey={activeGrade}
        onClose={() => setActiveGrade(null)}
      />
    </>
  );
}
