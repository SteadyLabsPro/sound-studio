import type { Metadata } from "next";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Sound Studio — Sound Baths & Healing | Christchurch, Dorset",
  description:
    "Immersive sound baths, sound healing and tarot in Mudeford, Christchurch, Dorset. Weekly group sessions from £20 and private 1:1 experiences for deep relaxation, stress relief and mind reset. Near Bournemouth.",
};
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
