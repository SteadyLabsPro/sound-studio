import type { Metadata } from "next";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Gallery - Sound Studio | Christchurch & Mudeford, Dorset",
  description:
    "A glimpse inside Sound Studio - sound baths, crystal singing bowls and immersive healing sessions in Mudeford, Christchurch, Dorset.",
};

export default function GalleryPage() {
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
              The <em className="font-light italic">Gallery</em>
            </h1>
          </div>
        </section>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
