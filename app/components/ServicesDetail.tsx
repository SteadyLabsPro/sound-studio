import Link from "next/link";

export default function ServicesDetail() {
  return (
    <div className="bg-cream">

      {/* ── Page header ── */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10 border-b border-dark/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[0.6rem] tracking-[0.35em] uppercase text-gold mb-6">
            Sound Studio
          </p>
          <h1 className="font-display font-light text-dark text-5xl md:text-7xl leading-tight mb-4">
            Sessions &amp;
            <br />
            <em className="italic">Pricing</em>
          </h1>
          <p className="font-sans text-sm text-dark/50 mt-6 max-w-md leading-relaxed">
            All sessions are held with care and intention. Private sessions take place in Sam&apos;s peaceful wellness pod in Mudeford.
          </p>
        </div>
      </section>

      {/* ── Group Sound Baths ── */}
      <section id="sound-baths" className="py-20 md:py-28 px-6 md:px-10 border-b border-dark/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-4">01</p>
            <h2 className="font-display text-3xl md:text-4xl text-dark font-light leading-tight">
              Group<br /><em className="italic">Sound Baths</em>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-sans text-sm text-dark/55 leading-relaxed max-w-prose">
              Lie back and be immersed in waves of healing sound from crystal singing bowls, gongs and chimes. Group sound baths are held regularly - all are welcome, no experience necessary.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-linen/50 p-6">
                <p className="font-display text-xl text-dark mb-1">1 Hour Sound Bath</p>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-dark/40 mb-4">Group Session</p>
                <p className="font-display text-3xl text-dark font-light">£20 <span className="font-sans text-xs text-dark/40 tracking-wider">per person</span></p>
              </div>
              <div className="bg-linen/50 p-6">
                <p className="font-display text-xl text-dark mb-1">90 Minute Sound Bath</p>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-dark/40 mb-4">Group Session</p>
                <p className="font-display text-3xl text-dark font-light">£25 <span className="font-sans text-xs text-dark/40 tracking-wider">per person</span></p>
              </div>
            </div>

            <a
              href="https://bookwhen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 bg-gold text-ink text-[0.65rem] tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300 w-fit mt-2"
            >
              Book a Sound Bath
            </a>
          </div>
        </div>
      </section>

      {/* ── Private Sound Healing & Tarot ── */}
      <section id="sound-therapy" className="py-20 md:py-28 px-6 md:px-10 border-b border-dark/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-4">02</p>
            <h2 className="font-display text-3xl md:text-4xl text-dark font-light leading-tight">
              Private Sound<br /><em className="italic">&amp; Tarot</em>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-sans text-sm text-dark/55 leading-relaxed max-w-prose">
              A deeply personal experience combining intuitive tarot guidance with a restorative sound healing journey - designed to bring clarity, insight, and deep relaxation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-linen/50 p-6">
                <p className="font-display text-xl text-dark mb-1">1:1 Tarot &amp; Sound Healing</p>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-dark/40 mb-3">Private Session</p>
                <p className="font-sans text-xs text-dark/45 leading-relaxed mb-4">
                  A personalised session combining intuitive tarot guidance with a restorative sound healing journey.
                </p>
                <p className="font-display text-3xl text-dark font-light">£65</p>
              </div>
              <div className="bg-linen/50 p-6">
                <p className="font-display text-xl text-dark mb-1">2:1 Tarot &amp; Sound Healing</p>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-dark/40 mb-3">Shared Session</p>
                <p className="font-sans text-xs text-dark/45 leading-relaxed mb-4">
                  Share the experience with a friend, partner, or family member in a supportive setting.
                </p>
                <p className="font-display text-3xl text-dark font-light">£95</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 border border-dark/30 text-dark text-[0.65rem] tracking-[0.22em] uppercase font-sans hover:bg-dark hover:text-cream transition-all duration-300 w-fit mt-2"
            >
              Enquire to Book
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tarot ── */}
      <section id="tarot" className="py-20 md:py-28 px-6 md:px-10 border-b border-dark/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-4">03</p>
            <h2 className="font-display text-3xl md:text-4xl text-dark font-light leading-tight">
              Tarot<br /><em className="italic">Readings</em>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-sans text-sm text-dark/55 leading-relaxed max-w-prose">
              Gain clarity, guidance, and insight through an intuitive tarot reading tailored to your current situation and intentions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-linen/50 p-6">
                <p className="font-display text-xl text-dark mb-1">Tarot Reading</p>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-dark/40 mb-3">1:1 Session</p>
                <p className="font-sans text-xs text-dark/45 leading-relaxed mb-4">
                  An intuitive reading tailored to your current situation and intentions.
                </p>
                <p className="font-display text-3xl text-dark font-light">£40</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 border border-dark/30 text-dark text-[0.65rem] tracking-[0.22em] uppercase font-sans hover:bg-dark hover:text-cream transition-all duration-300 w-fit mt-2"
            >
              Enquire to Book
            </Link>
          </div>
        </div>
      </section>

      {/* ── Corporate ── */}
      <section id="corporate" className="py-20 md:py-28 px-6 md:px-10 border-b border-dark/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-4">04</p>
            <h2 className="font-display text-3xl md:text-4xl text-dark font-light leading-tight">
              Corporate<br /><em className="italic">&amp; Events</em>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-sans text-sm text-dark/55 leading-relaxed max-w-prose">
              Sam is available to bring sound healing to your corporate event, wellness day, or team building session. Whether you&apos;re looking to reduce stress, improve focus, or offer your team something genuinely restorative - Sam creates a tailored experience to suit your group and setting.
            </p>

            <div className="bg-linen/50 p-6 w-fit">
              <p className="font-display text-xl text-dark mb-1">Bespoke Event</p>
              <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-dark/40 mb-4">Corporate &amp; Private Events</p>
              <p className="font-display text-3xl text-dark font-light">Price on Application</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-gold text-ink text-[0.65rem] tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300 w-fit mt-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Private sessions note ── */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          <div className="h-px flex-1 bg-dark/10 hidden md:block" />
          <p className="font-sans text-sm text-dark/50 leading-relaxed max-w-lg">
            All private sessions take place in Sam&apos;s peaceful wellness pod in Mudeford - a calm and nurturing environment for healing, reflection, and reconnection. If you have any questions or would like to book a session, please{" "}
            <Link href="/contact" className="text-dark underline underline-offset-4 hover:text-gold transition-colors">
              get in touch
            </Link>.
          </p>
          <div className="h-px flex-1 bg-dark/10 hidden md:block" />
        </div>
      </section>

    </div>
  );
}
