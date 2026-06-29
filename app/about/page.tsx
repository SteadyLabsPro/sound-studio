import type { Metadata } from "next";
import Nav from "../components/Nav";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Sam — Accredited Sound Healer & Therapist",
  description:
    "Meet Sam — accredited sound healer, therapist and founder of Sound Studio in Mudeford, Christchurch, Dorset. Passionate about guiding others to stillness, relaxation and self-discovery through sound healing near Bournemouth.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20 bg-cream">
        <About isPage />
      </main>
      <Footer />
    </>
  );
}
