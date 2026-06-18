import type { Metadata } from "next";
import Nav from "../components/Nav";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Sam — Accredited Sound Healer & Therapist",
  description:
    "Meet Sam — accredited sound healer, therapist and founder of Sound Studio in Mudeford, Christchurch, Dorset. Passionate about guiding others to stillness, relaxation and self-discovery through sound healing near Bournemouth.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-cream pt-32 md:pt-40 pb-6 md:pb-10 border-b border-dark/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-6">
              Sound Studio
            </p>
            <h1 className="font-display font-medium text-dark text-5xl md:text-[4.2rem] xl:text-[4.8rem] leading-tight">
              About <em className="font-light italic">Sam</em>
            </h1>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}
