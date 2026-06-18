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
      <main className="pt-16 md:pt-20">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
