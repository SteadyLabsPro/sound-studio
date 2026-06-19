import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] bg-cream flex flex-col md:flex-row overflow-hidden">

      {/* "€"€ Mobile image "€"€ */}
      <div className="relative w-full h-[65vh] md:hidden order-first flex-shrink-0">
        <Image
          src="/images/sam-sound-studio.jpeg"
          alt="Sam, sound healer and founder of Sound Studio, Mudeford, Christchurch, Dorset"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
      </div>

      {/* "€"€ Left "" text panel "€"€ */}
      {/* Asymmetric padding: more left room, less right so content reaches toward image */}
      <div
        className="relative z-10 flex flex-col justify-center w-full md:w-[40%] pr-8 md:pr-12 lg:pr-16 pb-8 md:pb-0 pt-6 md:pt-16"
        style={{ paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 2.5rem))" }}
      >

        <h1 className="font-display text-dark leading-[1.1] mb-3">
          <span className="inline sm:block font-medium text-[2rem] sm:text-[3.2rem] md:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.8rem] tracking-tight">
            Find Stillness
          </span>
          <span className="inline sm:block font-light italic text-[2rem] sm:text-[3.2rem] md:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.8rem] tracking-tight sm:-mt-1 md:-mt-2">
            {" "}in the Noise
          </span>
        </h1>

        <p className="font-sans text-[0.72rem] md:text-sm tracking-[0.28em] uppercase text-gold mb-7">
          Sound Baths &nbsp;·&nbsp; Sound Healing &nbsp;·&nbsp; Tarot
        </p>

        <div className="flex flex-row items-center gap-6">
          <a
            href="https://bookwhen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 bg-gold text-ink text-[0.65rem] tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300 whitespace-nowrap"
          >
            Book a Sound Bath
          </a>
        </div>

        {/* "€"€ Sam strip "" shown on both mobile and desktop, below CTAs "€"€ */}
        <div className="mt-8 flex items-center gap-4 pt-7 border-t border-dark/10">
          <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-gold/25">
            <Image
              src="/images/sam-sound-studio-christchurch-uk.jpeg"
              alt="Sam, accredited sound healer and founder of Sound Studio, Christchurch, Dorset"
              fill
              className="object-cover object-top"
              sizes="80px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-2xl italic font-medium text-dark">Sam</p>
            <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.22em] uppercase text-dark/45 mt-0.5">
              Sound Healer &amp; Therapist
            </p>
            <Link
              href="/about"
              className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-dark/90 hover:text-dark inline-flex items-center gap-1.5 transition-colors mt-2"
            >
              About
              <span className="block h-px w-3 bg-current" />
            </Link>
          </div>
        </div>

      </div>

      {/* "€"€ Right "" image panel (desktop only) "€"€ */}
      <div className="hidden md:block relative md:w-[60%] flex-shrink-0">
        <Image
          src="/images/sam-sound-studio.jpeg"
          alt="Sam, sound healer and founder of Sound Studio, Mudeford, Christchurch, Dorset"
          fill
          className="object-cover object-[center_5%]"
          style={{ transform: "scaleX(-1)" }}
          priority
          sizes="60vw"
        />
      </div>

    </section>
  );
}
