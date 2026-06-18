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
  metadataBase: new URL("https://soundstudio.steadylabs.pro"),
  title: {
    template: "%s | Sound Studio",
    default: "Sound Studio — Sound Baths & Healing | Christchurch, Dorset",
  },
  description:
    "Sound baths, sound healing and tarot readings in Mudeford, Christchurch, Dorset. Weekly group sessions and private 1:1 experiences for relaxation, stress relief and deep restoration. Near Bournemouth.",
  keywords: [
    "sound bath Christchurch",
    "sound bath Dorset",
    "sound healing Mudeford",
    "sound therapy Bournemouth",
    "sound bath near Bournemouth",
    "crystal singing bowls Dorset",
    "gong bath Christchurch",
    "tarot reading Dorset",
    "wellness Christchurch",
    "relaxation therapy Dorset",
    "stress relief Bournemouth",
    "mind reset Dorset",
    "wellbeing Mudeford",
    "sound meditation Christchurch",
    "accredited sound healer Dorset",
  ],
  openGraph: {
    title: "Sound Studio — Sound Baths & Healing | Christchurch, Dorset",
    description:
      "Sound baths, sound healing and tarot in Mudeford, Christchurch. A calm space to reconnect through sound, stillness and self-discovery.",
    type: "website",
    images: [
      {
        url: "/images/sound-studio-branding.jpeg",
        width: 1200,
        height: 630,
        alt: "Sound Studio — Sound Baths & Healing in Mudeford, Christchurch, Dorset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/sound-studio-branding.jpeg"],
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
