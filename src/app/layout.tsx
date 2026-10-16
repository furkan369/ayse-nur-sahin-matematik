import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ayşe Nur Şahin | Matematik Öğretmeni – 5, 6, 7, 8. Sınıf & LGS",
  description:
    "Ayşe Nur Şahin ile 5, 6, 7 ve 8. sınıf matematik dersleri, LGS hazırlık, birebir özel ders ve online interaktif dersler. Kapsamlı konu anlatımları, güncel testler ve yazılı soruları.",
  keywords: [
    "matematik öğretmeni",
    "özel ders",
    "LGS matematik",
    "5. sınıf matematik",
    "6. sınıf matematik",
    "7. sınıf matematik",
    "8. sınıf matematik",
    "online matematik dersi",
    "Ayşe Nur Şahin",
  ],
  openGraph: {
    title: "Ayşe Nur Şahin | Matematik Öğretmeni",
    description: "Matematiği birlikte başaralım! Birebir özel ders ve online dersler.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
