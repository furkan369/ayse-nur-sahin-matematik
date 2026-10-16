"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Monitor, MessageCircle, User, Menu, X } from "lucide-react";
import AboutModal from "./AboutModal";

const navLinks = [
  { label: "ANA SAYFA", href: "#" },
  { label: "5. SINIF", href: "#siniflar" },
  { label: "6. SINIF", href: "#siniflar" },
  { label: "7. SINIF", href: "#siniflar" },
  { label: "8. SINIF", href: "#siniflar" },
  { label: "LGS", href: "#siniflar" },
  { label: "ÖZEL DERS", href: "#nasil-calisiyoruz" },
];

const WA_NUMBER = "+905433027325";
const WA_LINK = `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    setAboutOpen(true);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img
                src="/ayse-nur-sahin-matematik/logo.jpg"
                alt="Matematik Öğretmeni Ayşe Nur Şahin"
                className="h-16 lg:h-20 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigasyon */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#121C3B] font-semibold text-xs xl:text-sm px-2 xl:px-3 py-2 rounded-lg hover:text-[#E11D74] hover:bg-pink-50 transition-all duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}

              {/* Online Ders Butonu */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#FF7A00] text-white font-bold text-xs xl:text-sm px-3 xl:px-4 py-2 rounded-lg hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm whitespace-nowrap ml-1"
              >
                <Monitor size={15} />
                ONLINE DERS
              </a>

              {/* WhatsApp */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#16A34A] font-semibold text-xs xl:text-sm px-2 xl:px-3 py-2 rounded-lg hover:bg-green-50 hover:text-[#15803d] transition-all duration-200 whitespace-nowrap"
              >
                <MessageCircle size={16} className="text-[#22C55E]" />
                WHATSAPP
              </a>

              {/* Hakkımda */}
              <button
                type="button"
                onClick={handleOpenAbout}
                className="flex items-center gap-1.5 text-[#121C3B] font-semibold text-xs xl:text-sm px-2 xl:px-3 py-2 rounded-lg hover:text-[#E11D74] hover:bg-pink-50 transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <User size={16} className="text-[#E11D74]" />
                HAKKIMDA
              </button>
            </div>

            {/* Mobil Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#121C3B] hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menüyü aç/kapat"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobil Menü */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-screen pb-4 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#121C3B] font-semibold text-sm px-4 py-3 rounded-lg hover:text-[#E11D74] hover:bg-pink-50 transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FF7A00] text-white font-bold text-sm px-4 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200 mt-1"
                onClick={() => setMenuOpen(false)}
              >
                <Monitor size={16} />
                ONLINE DERS
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#16A34A] font-semibold text-sm px-4 py-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle size={16} />
                WHATSAPP
              </a>
              <button
                type="button"
                className="flex items-center gap-2 text-[#121C3B] font-semibold text-sm px-4 py-3 rounded-lg hover:text-[#E11D74] hover:bg-pink-50 transition-all duration-200 text-left w-full cursor-pointer"
                onClick={handleOpenAbout}
              >
                <User size={16} className="text-[#E11D74]" />
                HAKKIMDA
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hakkımda Modal */}
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
}
