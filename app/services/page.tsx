import type { Metadata } from "next";
import Nav from "../components/Nav";
import ServicesDetail from "../components/ServicesDetail";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sessions & Pricing — Sound Studio | Christchurch & Mudeford, Dorset",
  description:
    "Group sound baths from £20, private tarot & sound healing sessions, and corporate events. Held in Mudeford, Christchurch, Dorset.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <ServicesDetail />
      </main>
      <Footer />
    </>
  );
}
