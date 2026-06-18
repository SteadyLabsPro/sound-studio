import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Sound Studio | Christchurch & Mudeford, Dorset",
  description:
    "Get in touch with Sound Studio to book a sound bath, private sound therapy session or tarot reading in Christchurch and Mudeford, Dorset.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ── Page header ── */}
        <section className="bg-cream pt-32 md:pt-40 pb-6 md:pb-10 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-6">
              Sound Studio
            </p>
            <h1 className="font-display font-medium text-dark text-5xl md:text-[4.2rem] xl:text-[4.8rem] leading-tight mb-6">
              Get in <em className="font-light italic">Touch</em>
            </h1>
            <div className="h-px w-10 bg-gold/40" />
          </div>
        </section>

        {/* ── Main contact section ── */}
        <section className="bg-cream pb-24 md:pb-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

            {/* Left - form */}
            <div>
              <p className="font-sans text-sm text-dark/70 leading-relaxed mb-10 max-w-md">
                Whether you'd like to book a session, ask a question or simply find out more - we'd love to hear from you.
              </p>
              <ContactForm />
            </div>

            {/* Right - map + contact details */}
            <div className="flex flex-col gap-10">

              {/* Google Map */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <iframe
                  title="Sound Studio location - Mudeford, Christchurch, Dorset"
                  src="https://maps.google.com/maps?q=Mudeford,Christchurch,Dorset,BH23,UK&output=embed&z=13&hl=en"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Contact details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2 border-t border-dark/10">

                <div>
                  <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">
                    Location
                  </p>
                  <p className="font-sans text-sm text-dark/80 leading-relaxed">
                    Mudeford<br />
                    Christchurch<br />
                    Dorset
                  </p>
                </div>

                <div>
                  <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:hello@soundstudio.co.uk"
                    className="font-sans text-sm text-dark/80 hover:text-dark transition-colors leading-relaxed"
                  >
                    hello@soundstudio.co.uk
                  </a>
                </div>

                <div>
                  <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/soundstudio_00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-dark/80 hover:text-dark transition-colors"
                  >
                    @soundstudio_00
                  </a>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
