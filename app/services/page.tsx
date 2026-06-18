import type { Metadata } from "next";
import Nav from "../components/Nav";
import ServicesDetail from "../components/ServicesDetail";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sessions & Pricing — Sound Baths, Healing & Tarot",
  description:
    "Group sound baths from £20, private sound healing and tarot sessions, and corporate wellness events in Mudeford, Christchurch, Dorset. Serving Bournemouth, the New Forest and surrounding areas.",
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
