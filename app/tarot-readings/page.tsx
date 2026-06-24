import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Tarot Readings — Sound Studio Christchurch",
  description:
    "Intuitive tarot readings in Mudeford, Christchurch, Dorset. Gain clarity, guidance, and insight through a personalised tarot reading tailored to your current situation. £40 per session.",
};

export default function TarotReadingsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero — text left, image right on desktop */}
        <section className="bg-cream border-b border-dark/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">

              {/* Left: text + CTAs */}
              <div className="pt-2 lg:pt-40 pb-10 lg:pb-16 flex flex-col justify-center order-2 lg:order-1">
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mt-4 lg:mt-0 mb-2 lg:mb-4">
                  Sound Studio · Intuitive Readings
                </p>
                <h1 className="font-display font-medium text-dark text-5xl md:text-[4.2rem] xl:text-[4.8rem] leading-tight mb-6">
                  Tarot <em className="font-light italic">Readings</em>
                </h1>
                <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-md mb-8">
                  Gain clarity, guidance, and insight through an intuitive tarot reading tailored to your current situation and intentions.
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-sm">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300"
                  >
                    Enquire to Book
                  </Link>
                  <a
                    href="#sessions"
                    className="inline-flex items-center justify-center px-4 py-3 border border-dark/30 text-dark text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-dark hover:text-cream transition-all duration-300"
                  >
                    View Sessions
                  </a>
                </div>
              </div>

              {/* Right: image */}
              <div className="relative mt-24 lg:mt-24 lg:mb-14 h-72 lg:h-auto lg:min-h-[500px] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/images/tarot-reading-mudeford.jpeg"
                  alt="Tarot cards laid out during an intuitive reading session at Sound Studio, Mudeford, Dorset"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Sessions + info bullets */}
        <section id="sessions" className="bg-linen py-14 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

              {/* Left: heading + session card + CTA */}
              <div>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-4">
                  Sessions &amp; Pricing
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-dark font-medium leading-tight mb-8">
                  Choose your <em className="font-light italic">session</em>
                </h2>

                <div className="flex flex-col gap-4 mb-8">
                  <div className="bg-cream p-6 flex flex-col">
                    <p className="font-display text-xl text-dark mb-1">Tarot Reading</p>
                    <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">1:1 Session · 45 Min</p>
                    <p className="font-sans text-xs md:text-sm text-dark/55 leading-relaxed mb-5 flex-1">
                      An intuitive reading tailored to your current situation and intentions. Sam holds a calm, non-judgemental space to help you explore what the cards are revealing — whether you're seeking clarity on a specific area of life or simply open to what comes through.
                    </p>
                    <p className="font-display text-3xl text-dark font-light mb-5">&pound;40</p>
                    <Link
                      href="/contact"
                      className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/50 hover:text-gold transition-colors flex items-center gap-2 w-fit"
                    >
                      Enquire <span className="block w-4 h-px bg-current" />
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300 w-fit"
                >
                  Enquire to Book
                </Link>
              </div>

              {/* Right: bullet points */}
              <div className="lg:pt-16">
                <ul className="flex flex-col gap-4">
                  {[
                    "Sessions last approximately 45 minutes",
                    "Held in our peaceful studio in Mudeford, Christchurch",
                    "Intuitive readings tailored to your questions and intentions",
                    "No prior knowledge of tarot needed",
                    "Combine with a sound healing session for a deeper experience",
                    "Gift vouchers available on request",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm md:text-base text-dark/55 leading-relaxed">
                      <span className="mt-[0.45em] block w-4 h-px bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Private Sessions CTA — image right */}
        <section className="bg-parchment overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Text */}
              <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24 flex flex-col justify-center">
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-4">
                  Also Available
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-dark font-medium leading-tight mb-5">
                  Private <em className="font-light italic">Healing</em><br />Sessions
                </h2>
                <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-md mb-8">
                  Combine your tarot reading with a deeply restorative private soundbath for a truly personal experience. Available as a combined 1:1 or shared 2:1 session.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/private-healing-sessions"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300"
                  >
                    View Private Sessions
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-dark/30 text-dark text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-dark hover:text-cream transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-72 lg:h-auto min-h-[360px]">
                <Image
                  src="/images/private-sound-bath.jpeg"
                  alt="Sam performing a private 1:1 sound healing session at Sound Studio, Christchurch, Dorset"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
