import Image from "next/image";
import Link from "next/link";

export default function ServicesDetail() {
  return (
    <div>

      {/* Page header */}
      <section className="bg-cream pt-24 md:pt-40 pb-10 md:pb-20 border-b border-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-6">
            Sound Studio
          </p>
          <h1 className="font-display font-medium text-dark text-5xl md:text-[4.2rem] xl:text-[4.8rem] leading-tight">
            Sessions &amp; <em className="font-light italic">Pricing</em>
          </h1>
        </div>
      </section>

      {/* Group Sound Baths — linen */}
      <section id="sound-baths" className="bg-linen py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">

          <div className="flex flex-col gap-5">
            <h2 className="font-display text-4xl md:text-5xl text-dark font-medium leading-tight">
              Group<br /><em className="font-light italic">Sound Baths</em>
            </h2>
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/images/wellness-relaxtion-sound-studio.jpeg"
                alt="Group sound bath room with crystal singing bowls, gong and yoga mats at Sound Studio, Mudeford, Christchurch"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-4">
            <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-prose">
              Lie back and be immersed in waves of healing sound from crystal singing bowls, gongs and chimes. Group sound baths are held regularly - all are welcome, no experience necessary.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-cream p-6">
                <p className="font-display text-xl text-dark mb-1">1 Hour Sound Bath</p>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">Group Session</p>
                <p className="font-display text-3xl text-dark font-light">
                  &pound;20 <span className="font-sans text-xs text-dark/40 tracking-wider">per person</span>
                </p>
              </div>
              <div className="bg-cream p-6">
                <p className="font-display text-xl text-dark mb-1">90 Minute Sound Bath</p>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">Group Session</p>
                <p className="font-display text-3xl text-dark font-light">
                  &pound;25 <span className="font-sans text-xs text-dark/40 tracking-wider">per person</span>
                </p>
              </div>
            </div>
            <a
              href="https://bookwhen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300 w-fit"
            >
              Book a Sound Bath
            </a>
          </div>
        </div>
      </section>

      {/* Private Sound Healing & Tarot — cream */}
      <section id="sound-therapy" className="bg-cream py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">

          <div className="flex flex-col gap-5">
            <h2 className="font-display text-4xl md:text-5xl text-dark font-medium leading-tight">
              Private Sound<br /><em className="font-light italic">&amp; Tarot</em>
            </h2>
            <div className="relative aspect-[6/5] overflow-hidden">
              <Image
                src="/images/private-sound-bath.jpeg"
                alt="Sam performing a private 1:1 sound healing session with a client at Sound Studio, Christchurch, Dorset"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-4">
            <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-prose">
              A deeply personal experience combining intuitive tarot guidance with a restorative sound healing journey - designed to bring clarity, insight, and deep relaxation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-linen p-6">
                <p className="font-display text-xl text-dark mb-1">1:1 Tarot &amp; Sound Healing</p>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-3">Private Session</p>
                <p className="font-sans text-xs md:text-sm text-dark/45 leading-relaxed mb-4">
                  A personalised session combining intuitive tarot guidance with a restorative sound healing journey.
                </p>
                <p className="font-display text-3xl text-dark font-light">&pound;65</p>
              </div>
              <div className="bg-linen p-6">
                <p className="font-display text-xl text-dark mb-1">2:1 Tarot &amp; Sound Healing</p>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-3">Shared Session</p>
                <p className="font-sans text-xs md:text-sm text-dark/45 leading-relaxed mb-4">
                  Share the experience with a friend, partner, or family member in a supportive setting.
                </p>
                <p className="font-display text-3xl text-dark font-light">&pound;95</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 border border-dark/30 text-dark text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-dark hover:text-cream transition-all duration-300 w-fit"
            >
              Enquire to Book
            </Link>
          </div>
        </div>
      </section>

      {/* Tarot — deep linen */}
      <section id="tarot" className="bg-[#D6C9B5] py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">

          <div className="flex flex-col gap-5">
            <h2 className="font-display text-4xl md:text-5xl text-dark font-medium leading-tight">
              Tarot<br /><em className="font-light italic">Readings</em>
            </h2>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/tarot-reading-mudeford.jpeg"
                alt="Tarot cards laid out during an intuitive reading session at Sound Studio, Mudeford, Dorset"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-4">
            <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-prose">
              Gain clarity, guidance, and insight through an intuitive tarot reading tailored to your current situation and intentions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-cream p-6">
                <p className="font-display text-xl text-dark mb-1">Tarot Reading</p>
                <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-3">1:1 Session</p>
                <p className="font-sans text-xs md:text-sm text-dark/45 leading-relaxed mb-4">
                  An intuitive reading tailored to your current situation and intentions.
                </p>
                <p className="font-display text-3xl text-dark font-light">&pound;40</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 border border-dark/30 text-dark text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-dark hover:text-cream transition-all duration-300 w-fit"
            >
              Enquire to Book
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate — linen */}
      <section id="corporate" className="bg-linen py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">

          <div className="flex flex-col gap-5">
            <h2 className="font-display text-4xl md:text-5xl text-dark font-medium leading-tight">
              Corporate<br /><em className="font-light italic">&amp; Events</em>
            </h2>
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/images/sound-bath-chewton-glen-hampshire.jpeg"
                alt="Corporate sound bath wellness event at Chewton Glen, Hampshire — Sound Studio corporate experiences"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-4">
            <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-prose">
              Sam is available to bring sound healing to your corporate event, wellness day, or team building session. Whether you&apos;re looking to reduce stress, improve focus, or offer your team something genuinely restorative - Sam creates a tailored experience to suit your group and setting.
            </p>
            <div className="bg-cream p-6 w-fit">
              <p className="font-display text-xl text-dark mb-1">Bespoke Event</p>
              <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.2em] uppercase text-dark/40 mb-4">Corporate &amp; Private Events</p>
              <p className="font-display text-3xl text-dark font-light">Price on Application</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-gold text-ink text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300 w-fit"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          <div className="h-px flex-1 bg-dark/10 hidden md:block" />
          <p className="font-sans text-sm md:text-base text-dark/50 leading-relaxed max-w-lg">
            All private sessions take place in Sam&apos;s peaceful wellness pod in Mudeford - a calm and nurturing environment for healing, reflection, and reconnection. Questions?{" "}
            <Link href="/contact" className="text-dark underline underline-offset-4 hover:text-gold transition-colors">
              Get in touch
            </Link>.
          </p>
          <div className="h-px flex-1 bg-dark/10 hidden md:block" />
        </div>
      </section>

    </div>
  );
}
