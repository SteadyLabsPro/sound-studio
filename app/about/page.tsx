import type { Metadata } from "next";
import Nav from "../components/Nav";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About — Sound Studio | Christchurch & Mudeford, Dorset",
  description:
    "Meet Sam, the founder and sound practitioner behind Sound Studio — offering sound baths, private sound therapy and tarot in Mudeford, Christchurch, Dorset.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20 bg-cream">
        <About />
      </main>
      <Footer />
    </>
  );
}
