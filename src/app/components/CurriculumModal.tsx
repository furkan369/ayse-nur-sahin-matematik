"use client";

import { X, BookOpen, Hash, Ruler, BarChart3, Calculator, Triangle, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export type GradeKey = "5" | "6" | "7" | "8";

type Topic = string;
type TopicGroup = {
  title: string;
  icon: React.ReactNode;
  topics: Topic[];
};

const curriculumData: Record<
  GradeKey,
  {
    grade: string;
    subtitle: string;
    bg: string;
    accent: string;
    textAccent: string;
    borderAccent: string;
    badgeBg: string;
    badgeText: string;
    groups: TopicGroup[];
  }
> = {
  "5": {
    grade: "5. Sınıf",
    subtitle: "Türkiye Yüzyılı Maarif Modeli",
    bg: "from-purple-50 to-white",
    accent: "#A855F7",
    textAccent: "text-purple-700",
    borderAccent: "border-purple-200",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    groups: [
      {
        title: "Sayılar ve Nicelikler",
        icon: <Hash size={18} />,
        topics: [
          "Doğal sayılar (okuma, yazma ve basamak kavramı)",
          "Doğal sayılarla dört işlem ve zihinden işlemler",
          "Kesir kavramı, birim kesirler ve kesirlerle işlemler",
          "Ondalık gösterim ve basamak basamak çözümleme",
          "Yüzdeler ve kesir-ondalık-yüzde ilişkisi",
        ],
      },
      {
        title: "İşlemlerle Cebirsel Düşünme",
        icon: <Calculator size={18} />,
        topics: [
          "İşlem önceliği",
          "Eşitliğin korunumu ve aritmetik işlemler",
          "Sayı ve şekil örüntüleri, temel algoritma mantığı",
        ],
      },
      {
        title: "Geometrik Şekiller ve Nicelikler",
        icon: <Triangle size={18} />,
        topics: [
          "Temel geometrik kavramlar (doğru, doğru parçası, ışın)",
          "Açılar ve açı çeşitleri (dar, dik, geniş, doğru açı)",
          "Çokgenler, üçgen ve dörtgen çeşitleri",
          "Zaman, uzunluk ve çevre ölçme",
          "Dikdörtgenin alanı ve alan problemleri",
        ],
      },
      {
        title: "İstatistiksel Araştırma Süreci ve Olasılık",
        icon: <BarChart3 size={18} />,
        topics: [
          "Kategorik veriler ve araştırma sorusu oluşturma",
          "Sıklık tablosu ve sütun grafiği",
          "Olasılık spektrumu, kesin ve imkânsız olaylar",
        ],
      },
    ],
  },
  "6": {
    grade: "6. Sınıf",
    subtitle: "Güncel Müfredat İçerikleri",
    bg: "from-sky-50 to-white",
    accent: "#0EA5E9",
    textAccent: "text-sky-700",
    borderAccent: "border-sky-200",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-700",
    groups: [
      {
        title: "Sayılar ve İşlemler",
        icon: <Hash size={18} />,
        topics: [
          "Doğal sayılarda çarpanlar ve katlar",
          "Asallık, asal çarpanlar, EBOB - EKOK temelleri",
          "Tam sayılar (pozitif-negatif sayılar, mutlak değer)",
          "Kesirlerle toplama, çıkarma, çarpma ve bölme",
          "Ondalık gösterimlerle dört işlem ve yuvarlama",
          "Oran kavramı ve birimli/birimsiz oran",
        ],
      },
      {
        title: "Cebir",
        icon: <Calculator size={18} />,
        topics: [
          "Cebirsel ifadelere giriş, terim, katsayı ve sabit terim",
          "Cebirsel ifadelerin değerini hesaplama ve örüntüler",
        ],
      },
      {
        title: "Geometri ve Ölçme",
        icon: <Triangle size={18} />,
        topics: [
          "Komşu, tümler, bütünler ve ters açılar",
          "Üçgende yükseklik ve alan bağıntısı",
          "Paralelkenarda alan bağıntısı",
          "Alan ve arazi ölçme birimleri",
          "Çemberin elemanları ve çemberin çevre uzunluğu",
          "Dikdörtgenler prizmasının hacmi ve sıvı ölçme birimleri",
        ],
      },
      {
        title: "Veri İşleme ve Olasılık",
        icon: <BarChart3 size={18} />,
        topics: [
          "İki gruba ait araştırma soruları ve ikili sütun grafiği",
          "Merkezi eğilim ve yayılım ölçüleri (Aritmetik ortalama ve açıklık)",
          "Basit olasılık deneyleri",
        ],
      },
    ],
  },
  "7": {
    grade: "7. Sınıf",
    subtitle: "Güncel Müfredat İçerikleri",
    bg: "from-emerald-50 to-white",
    accent: "#10B981",
    textAccent: "text-emerald-700",
    borderAccent: "border-emerald-200",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    groups: [
      {
        title: "Sayılar ve İşlemler",
        icon: <Hash size={18} />,
        topics: [
          "Tam sayılarla toplama, çıkarma, çarpma ve bölme işlemleri",
          "Tam sayıların kuvvetleri (üslü ifadeler)",
          "Rasyonel sayılar ve sayı doğrusunda gösterimi",
          "Rasyonel sayılarla dört işlem ve problemler",
          "Oran, orantı, doğru/ters orantı ve orantı sabiti",
          "Yüzdeler (hesaplama, artış-azalış ve kâr-zarar problemleri)",
        ],
      },
      {
        title: "Cebir",
        icon: <Calculator size={18} />,
        topics: [
          "Cebirsel ifadelerle toplama ve çıkarma",
          "Bir doğal sayı ile cebirsel ifadeyi çarpma",
          "Birinci dereceden bir bilinmeyenli denklemler ve eşitliğin korunumu",
          "Birinci dereceden bir bilinmeyenli denklem problemleri",
        ],
      },
      {
        title: "Geometri ve Ölçme",
        icon: <Triangle size={18} />,
        topics: [
          "Bir açının açıortayı",
          "Paralel iki doğrunun bir kesenle yaptığı açılar (yöndeş, iç ters, dış ters)",
          "Düzgün çokgenler, iç ve dış açı özellikleri",
          "Özel dörtgenler (yamuk, eşkenar dörtgen, paralelkenar) ve alan formülleri",
          "Çemberde merkez açı, çember yayı uzunluğu ve daire diliminin alanı",
        ],
      },
      {
        title: "Veri İşleme",
        icon: <BarChart3 size={18} />,
        topics: [
          "Çizgi grafiği ve daire grafiği (grafik dönüşümleri)",
          "Verilere uygun grafik türünü belirleme",
          "Tepe değer (mod) ve ortanca (medyan)",
        ],
      },
    ],
  },
  "8": {
    grade: "8. Sınıf",
    subtitle: "LGS Odaklı Müfredat",
    bg: "from-indigo-50 to-white",
    accent: "#6366F1",
    textAccent: "text-indigo-700",
    borderAccent: "border-indigo-200",
    badgeBg: "bg-indigo-100",
    badgeText: "text-indigo-700",
    groups: [
      {
        title: "1. Dönem — Sayılar ve Cebir",
        icon: <Hash size={18} />,
        topics: [
          "Çarpanlar ve Katlar: Pozitif tam sayı çarpanları, EBOB-EKOK uygulamaları",
          "Üslü İfadeler: Tam sayı kuvvetleri, üslü ifadelerle temel kurallar, bilimsel gösterim",
          "Kareköklü İfadeler: Tam kare sayılar, karekök dışına çıkarma/içine alma, dört işlem",
          "Veri Analizi: Çizgi, sütun ve daire grafiklerini yorumlama ve dönüştürme",
          "Basit Olayların Olma Olasılığı: Olası durumlar, olasılık karşılaştırması",
          "Cebirsel İfadeler ve Özdeşlikler: Çarpma, iki kare farkı, tam kare, çarpanlara ayırma",
        ],
      },
      {
        title: "2. Dönem — Denklemler ve Geometri",
        icon: <Triangle size={18} />,
        topics: [
          "Doğrusal Denklemler: Birinci dereceden denklemler, koordinat sistemi, doğru grafikleri ve eğim",
          "Eşitsizlikler: Birinci dereceden bir bilinmeyenli eşitsizlikler ve sayı doğrusunda çözüm",
          "Üçgenler: Kenarortay, açıortay, yükseklik; üçgen eşitsizliği, Pisagor bağıntısı",
          "Eşlik ve Benzerlik: Geometrik şekillerde eşlik, benzerlik oranı ve üçgenlerde benzerlik",
          "Dönüşüm Geometrisi: Öteleme, yansıma ve simetri",
          "Geometrik Cisimler: Dik prizmalar, silindir (yüzey alanı ve hacmi), piramit ve koni",
        ],
      },
    ],
  },
};

interface CurriculumModalProps {
  gradeKey: GradeKey | null;
  onClose: () => void;
}

export default function CurriculumModal({ gradeKey, onClose }: CurriculumModalProps) {
  const data = gradeKey ? curriculumData[gradeKey] : null;

  // ESC ile kapatma
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Scroll kilidi
  useEffect(() => {
    if (gradeKey) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [gradeKey]);

  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${data.grade} Müfredatı`}
    >
      {/* Arka plan overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal kutusu */}
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b ${data.bg} rounded-3xl shadow-2xl border ${data.borderAccent}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 rounded-t-3xl border-b"
          style={{ background: "white", borderColor: "#e5e7eb" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${data.accent}20` }}
            >
              <BookOpen size={20} style={{ color: data.accent }} />
            </div>
            <div>
              <h2 className={`font-extrabold text-xl text-[#121C3B]`}>
                {data.grade} Matematik
              </h2>
              <p className="text-xs text-gray-400 font-medium">{data.subtitle}</p>
            </div>
          </div>

          {/* Kapat butonu */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Kapat"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* İçerik */}
        <div className="px-6 py-6 flex flex-col gap-5">
          {data.groups.map((group, gi) => (
            <div
              key={gi}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Grup başlığı */}
              <div
                className={`flex items-center gap-2.5 px-5 py-3.5 ${data.badgeBg}`}
              >
                <span style={{ color: data.accent }}>{group.icon}</span>
                <h3 className={`font-bold text-sm ${data.textAccent}`}>
                  {group.title}
                </h3>
              </div>

              {/* Konu listesi */}
              <ul className="divide-y divide-gray-50">
                {group.topics.map((topic, ti) => (
                  <li
                    key={ti}
                    className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight
                      size={15}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: data.accent }}
                    />
                    <span className="text-sm text-[#121C3B] leading-snug">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Alt CTA */}
          <div
            className="rounded-2xl p-5 text-center"
            style={{ background: `${data.accent}10`, border: `1px solid ${data.accent}30` }}
          >
            <p className="text-sm font-semibold text-[#121C3B] mb-3">
              {data.grade} konularında destek almak ister misiniz?
            </p>
            <a
              href={`https://wa.me/905433027325?text=${encodeURIComponent(`Merhaba, ${data.grade} matematik dersi hakkında bilgi almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow"
              style={{ background: "#22C55E" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
