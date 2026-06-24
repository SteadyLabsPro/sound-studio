import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Group Sound Baths — Sound Studio Christchurch",
  description:
    "Join a group sound bath in Mudeford, Christchurch, Dorset. Lie back and be immersed in waves of healing sound from crystal singing bowls, gongs and chimes. From £20 per person.",
};

export default function GroupSoundBathsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero — text left, image right on desktop */}
        <section className="bg-cream border-b border-dark/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

              {/* Left: text + CTAs — below image on mobile, left on desktop */}
              <div className="pt-4 lg:pt-40 pb-10 lg:pb-16 flex flex-col justify-center order-2 lg:order-1">
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-2 lg:mb-4">
                  Sound Studio · Group Sessions
                </p>
                <h1 className="font-display font-medium text-dark text-5xl md:text-[4.2rem] xl:text-[4.8rem] leading-tight mb-6">
                  Group <em className="font-light italic">Sound Baths</em>
                </h1>
                <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-md mb-8">
                  Lie back and be immersed in waves of healing sound from crystal singing bowls, gongs and chimes. Group sound baths are held regularly — all are welcome, no experience necessary.
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-sm">
                  <a
                    href="https://bookwhen.com/soundstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300"
                  >
                    Book a Date
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center px-4 py-3 border border-dark/30 text-dark text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-dark hover:text-cream transition-all duration-300"
                  >
                    View Pricing
                  </a>
                </div>
              </div>

              {/* Right: image — first on mobile, right on desktop */}
              <div className="relative mt-24 mb-6 lg:my-14 h-72 lg:h-auto lg:min-h-[500px] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/images/wellness-relaxtion-sound-studio.jpeg"
                  alt="Group sound bath room with crystal singing bowls, gong and yoga mats at Sound Studio, Mudeford, Christchurch"
                  fill
                  priority
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Pricing + bullet points — bg-linen contrasts with cream above */}
        <section id="pricing" className="bg-linen py-14 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

              {/* Left: heading + price cards + CTA */}
              <div>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-4">
                  Sessions &amp; Pricing
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-dark font-medium leading-tight mb-8">
                  Choose your <em className="font-light italic">session</em>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-cream p-6 flex flex-col">
                    <p className="font-display text-xl text-dark mb-1">1 Hour Sound Bath</p>
                    <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">Group Session</p>
                    <p className="font-display text-3xl text-dark font-light mb-4">
                      &pound;20 <span className="font-sans text-xs text-dark/40 tracking-wider">per person</span>
                    </p>
                    <a
                      href="https://bookwhen.com/soundstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/50 hover:text-gold transition-colors flex items-center gap-2 w-fit"
                    >
                      Book <span className="block w-4 h-px bg-current" />
                    </a>
                  </div>
                  <div className="bg-cream p-6 flex flex-col">
                    <p className="font-display text-xl text-dark mb-1">90 Minute Sound Bath</p>
                    <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">Group Session</p>
                    <p className="font-display text-3xl text-dark font-light mb-4">
                      &pound;25 <span className="font-sans text-xs text-dark/40 tracking-wider">per person</span>
                    </p>
                    <a
                      href="https://bookwhen.com/soundstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/50 hover:text-gold transition-colors flex items-center gap-2 w-fit"
                    >
                      Book <span className="block w-4 h-px bg-current" />
                    </a>
                  </div>
                </div>
                <a
                  href="https://bookwhen.com/soundstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300 w-fit"
                >
                  Calendar
                </a>
              </div>

              {/* Right: bullet points */}
              <div className="lg:pt-16">
                <ul className="flex flex-col gap-4">
                  {[
                    "Join a group sound bath on a scheduled date",
                    "Mats and blankets provided",
                    "Arrive 5–10 minutes before your session",
                    "Suitable for all ages and abilities",
                    "Located in Mudeford, Christchurch, Dorset",
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

        {/* Footer note */}
        <section className="bg-cream py-10 border-t border-dark/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
            <div className="h-px flex-1 bg-dark/10 hidden md:block" />
            <p className="font-sans text-sm md:text-base text-dark/50 leading-relaxed max-w-lg">
              Looking for a private or bespoke experience?{" "}
              <Link href="/services" className="text-dark underline underline-offset-4 hover:text-gold transition-colors">
                View all sessions
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-dark underline underline-offset-4 hover:text-gold transition-colors">
                get in touch
              </Link>.
            </p>
            <div className="h-px flex-1 bg-dark/10 hidden md:block" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
