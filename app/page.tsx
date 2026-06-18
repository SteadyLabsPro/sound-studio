import Nav from "./components/Nav";
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
