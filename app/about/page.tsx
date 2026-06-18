import type { Metadata } from "next";
import Nav from "../components/Nav";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About - Sound Studio | Christchurch & Mudeford, Dorset",
  description:
    "Meet Sam, the founder and sound practitioner behind Sound Studio - offering sound baths, private sound therapy and tarot in Mudeford, Christchurch, Dorset.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-cream pt-32 md:pt-40 pb-6 md:pb-10 px-6 md:px-10 border-b border-dark/10">
          <div className="max-w-7xl mx-auto">
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
