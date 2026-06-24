import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Corporate & Events — Sound Studio Christchurch",
  description:
    "Bespoke corporate sound bath wellness events by Sound Studio. Sam brings crystal singing bowls, gongs and chimes to your workplace, wellness day or private event across Dorset and Hampshire.",
};

export default function CorporateEventsPage() {
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
                  Sound Studio · Wellness Events
                </p>
                <h1 className="font-display font-medium text-dark text-5xl md:text-[4.2rem] xl:text-[4.8rem] leading-tight mb-6">
                  Corporate <em className="font-light italic">&amp; Events</em>
                </h1>
                <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-md mb-8">
                  Sam brings sound healing to corporate events, wellness days, and team building sessions — creating a tailored experience to suit your group and setting.
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-sm">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300"
                  >
                    Get in Touch
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
                  src="/images/sound-bath-chewton-glen-hampshire.jpeg"
                  alt="Corporate sound bath at Chewton Glen Hotel & Spa, Hampshire — bespoke wellness events by Sound Studio"
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

              {/* Left: heading + session cards + CTA */}
              <div>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-4">
                  Sessions &amp; Pricing
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-dark font-medium leading-tight mb-8">
                  Choose your <em className="font-light italic">experience</em>
                </h2>

                <div className="flex flex-col gap-4 mb-8">

                  {/* Chewton Glen */}
                  <div className="bg-cream p-6">
                    <p className="font-display text-xl text-dark mb-1">Monthly Floating Soundbath</p>
                    <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">Chewton Glen Hotel &amp; Spa</p>
                    <p className="font-sans text-xs md:text-sm text-dark/55 leading-relaxed mb-5">
                      Join Sam for a monthly floating soundbath experience at the award-winning Chewton Glen Hotel &amp; Spa in the New Forest, Hampshire. A truly immersive and luxurious way to experience the healing power of sound.
                    </p>
                    <a
                      href="https://www.chewtonglen.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/50 hover:text-gold transition-colors flex items-center gap-2 w-fit"
                    >
                      Contact Chewton Glen <span className="block w-4 h-px bg-current" />
                    </a>
                  </div>

                  {/* Bespoke */}
                  <div className="bg-cream p-6 flex flex-col">
                    <p className="font-display text-xl text-dark mb-1">Bespoke Event</p>
                    <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">Corporate &amp; Private Events</p>
                    <p className="font-sans text-xs md:text-sm text-dark/55 leading-relaxed mb-5 flex-1">
                      Sam creates a fully tailored sound healing experience for your team, wellness day, retreat, or private gathering. Whether you're looking to reduce stress, improve focus, or offer something genuinely restorative — every event is shaped around your group and intentions.
                    </p>
                    <p className="font-display text-3xl text-dark font-light mb-5">Price on Application</p>
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
                  Get in Touch
                </Link>
              </div>

              {/* Right: bullet points */}
              <div className="lg:pt-16">
                <ul className="flex flex-col gap-4">
                  {[
                    "Tailored to your group size, venue, and intentions",
                    "Available across Dorset, Hampshire, and the South",
                    "Instruments include crystal singing bowls, gongs and chimes",
                    "Suitable for wellness days, retreats, and team events",
                    "Monthly sessions at Chewton Glen Hotel & Spa",
                    "Enquire for availability and bespoke pricing",
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

        {/* Group Sound Baths CTA — image right */}
        <section className="bg-parchment overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Text */}
              <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24 flex flex-col justify-center">
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-4">
                  Also Available
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-dark font-medium leading-tight mb-5">
                  Group <em className="font-light italic">Sound Baths</em>
                </h2>
                <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-md mb-8">
                  Join one of our regular group sound baths — a shared journey of deep relaxation and healing open to everyone. From £20 per person.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/group-sound-baths"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300"
                  >
                    View Group Sessions
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
                  src="/images/wellness-relaxtion-sound-studio.jpeg"
                  alt="Group sound bath room with crystal singing bowls and gong at Sound Studio, Mudeford"
                  fill
                  className="object-cover object-[center_30%]"
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
