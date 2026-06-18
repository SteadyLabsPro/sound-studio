import type { Metadata } from "next";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Gallery — Inside Sound Studio",
  description:
    "A glimpse inside Sound Studio — a serene wellness space in Mudeford, Christchurch offering immersive sound baths, crystal singing bowls and sound healing near Bournemouth, Dorset.",
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20">
        <Gallery isPage />
      </main>
      <Footer />
    </>
  );
}
