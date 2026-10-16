"use client";

import { MessageCircle, Heart, ChevronRight } from "lucide-react";

// Instagram SVG ikonu (Lucide'de mevcut değil)
function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const WA_LINK =
  "https://wa.me/905433027325?text=Merhaba%2C%20matematik%20dersi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const footerLinks = {
  lgs: [
    { label: "5. Sınıf Matematik", href: "#" },
    { label: "6. Sınıf Matematik", href: "#" },
    { label: "7. Sınıf Matematik", href: "#" },
    { label: "8. Sınıf Matematik", href: "#" },
    { label: "LGS Matematik", href: "#" },
  ],
  site: [
    { label: "Matematik Özel Ders", href: "#" },
    { label: "Başarılarımız", href: "#" },
    { label: "Hakkımda", href: "#hakkimda" },
    { label: "İletişim", href: WA_LINK },
  ],
};

export default function Footer() {
  return (
    <footer>
      {/* CTA Banner */}
      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Sol */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Heart size={20} className="text-white/80 fill-white/80" />
                <h3 className="text-white font-extrabold text-xl lg:text-2xl">
                  Matematikte birlikte ilerleyelim 🤍
                </h3>
              </div>
              <p className="text-white/80 text-sm lg:text-base max-w-xl leading-relaxed">
                Özel ders, çalışma programı ve öğrencinizin seviyesi hakkında
                bilgi almak için iletişime geçebilirsiniz.
              </p>
            </div>

            {/* Sağ Buton */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#121C3B] font-bold text-sm lg:text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap flex-shrink-0"
            >
              <MessageCircle size={18} className="text-[#22C55E]" />
              WhatsApp&apos;tan Bilgi Al →
            </a>
          </div>
        </div>
      </div>

      {/* Koyu Footer */}
      <div className="bg-[#110E27] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Sütun 1: Marka */}
            <div>
              <h4 className="font-extrabold text-white text-lg mb-3">
                Matematik Öğretmeni
              </h4>
              <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
                Matematiği anlamayı kolaylaştıran konu anlatımları, testler ve
                online özel dersler.
              </p>
              <div className="flex gap-3">
                {/* Instagram Butonu */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white font-bold text-xs px-4 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow"
                  style={{
                    background:
                      "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  <InstagramIcon size={15} />
                  Instagram
                </a>

                {/* WhatsApp Butonu */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-xs px-4 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Sütun 2: LGS Matematik */}
            <div>
              <h4 className="font-bold text-white text-base mb-4">
                LGS Matematik
              </h4>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.lgs.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ChevronRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sütun 3: Site Linkleri */}
            <div>
              <h4 className="font-bold text-white text-base mb-4">
                Matematik Öğretmeni
              </h4>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.site.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ChevronRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Alt Çizgi */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © 2026 aysenurhocailematematik.com • Tüm Hakları Saklıdır.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-xs transition-colors"
            >
              İletişim
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
