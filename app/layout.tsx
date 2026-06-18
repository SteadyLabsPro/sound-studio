import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sound Studio — Sound Baths & Sound Healing | Dorset",
  description:
    "Immersive sound bath and sound healing experiences in Dorset. Group sound baths, private sessions, and tarot readings with Sam at Sound Studio.",
  keywords: [
    "sound bath Dorset",
    "sound healing",
    "sound therapy Christchurch",
    "Mudeford sound bath",
    "tarot reading",
    "wellbeing Dorset",
  ],
  openGraph: {
    title: "Sound Studio — Immersive Sound Experiences",
    description: "A calm space to reconnect through sound, stillness and self-discovery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
