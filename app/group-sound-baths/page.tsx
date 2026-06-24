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

        {/* Page header */}
        <section className="bg-cream pt-24 md:pt-40 pb-10 md:pb-16 border-b border-dark/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-6">
              Sound Studio · Group Sessions
            </p>
            <h1 className="font-display font-medium text-dark text-5xl md:text-[4.2rem] xl:text-[4.8rem] leading-tight mb-6">
              Group <em className="font-light italic">Sound Baths</em>
            </h1>
            <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-xl">
              Lie back and be immersed in waves of healing sound from crystal singing bowls, gongs and chimes. Group sound baths are held regularly — all are welcome, no experience necessary.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="bg-linen">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <Image
                src="/images/wellness-relaxtion-sound-studio.jpeg"
                alt="Group sound bath room with crystal singing bowls, gong and yoga mats at Sound Studio, Mudeford, Christchurch"
                fill
                priority
                className="object-cover object-[center_30%]"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          </div>
        </section>

        {/* About the session */}
        <section className="bg-linen pb-14 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-dark font-medium leading-tight mb-6">
                What to <em className="font-light italic">expect</em>
              </h2>
              <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed mb-4">
                Arrive, settle in and let the sound do the rest. Each session begins gently, guiding you into a deep state of rest as layers of sound wash over and through you.
              </p>
              <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed">
                Sessions are held in Sam&apos;s peaceful wellness pod in Mudeford — a calm, nurturing space created for healing and reconnection. Bring a yoga mat or use ours, wear comfortable clothing, and come with an open mind.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-dark font-medium leading-tight mb-6">
                Good to <em className="font-light italic">know</em>
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "No experience or prior knowledge needed",
                  "Mats and blankets provided",
                  "Arrive 5–10 minutes before your session",
                  "Suitable for all ages and abilities",
                  "Located in Mudeford, Christchurch, Dorset",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm md:text-base text-dark/55 leading-relaxed">
                    <span className="mt-2 block w-4 h-px bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Pricing */}
        <section className="bg-cream py-14 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-4">
              Sessions &amp; Pricing
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-dark font-medium leading-tight mb-10">
              Choose your <em className="font-light italic">session</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mb-10">
              <div className="bg-linen p-6">
                <p className="font-display text-xl text-dark mb-1">1 Hour Sound Bath</p>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">Group Session</p>
                <p className="font-display text-3xl text-dark font-light">
                  &pound;20 <span className="font-sans text-xs text-dark/40 tracking-wider">per person</span>
                </p>
              </div>
              <div className="bg-linen p-6">
                <p className="font-display text-xl text-dark mb-1">90 Minute Sound Bath</p>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">Group Session</p>
                <p className="font-display text-3xl text-dark font-light">
                  &pound;25 <span className="font-sans text-xs text-dark/40 tracking-wider">per person</span>
                </p>
              </div>
            </div>
            <a
              href="https://bookwhen.com/soundstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300 w-fit"
            >
              Book a Sound Bath
            </a>
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
