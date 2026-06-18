import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Image "" founder portrait */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/sam-sound-studio-christchurch-uk.jpeg"
                alt="Sam - founder and sound practitioner at Sound Studio, Christchurch"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Accent frame */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-1/2 border border-gold/25 -z-10" />

            {/* Caption */}
            <div className="mt-5 pl-1">
              <p className="font-display text-lg text-dark italic">Sam</p>
              <p className="font-sans text-xs tracking-widest uppercase text-muted mt-0.5">
                Founder &amp; Sound Practitioner
              </p>
            </div>
          </div>

          {/* Text "" personal, warm, human */}
          <div className="flex flex-col md:pt-6">
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans mb-6">
              About
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-dark font-medium leading-tight mb-8">
              A space held
              <br />
              <em className="font-light italic">with care</em>
            </h2>

            <div className="h-px w-10 bg-gold/60 mb-8" />

            <p className="font-sans text-base text-dark/65 leading-relaxed mb-5">
              I&apos;m Sam, an accredited Sound Healer, wife, and mum of two. My journey into sound healing began not as a practitioner, but as someone who experienced firsthand the profound benefits of sound baths.
            </p>
            <p className="font-sans text-base text-dark/65 leading-relaxed mb-5">
              As I approached my 40th birthday, I found myself reflecting on a question many of us ask: What do I truly want to do with my life? The answer came unexpectedly during a sound bath in London. Immersed in the healing vibrations, I experienced a moment of clarity that changed everything. In that moment, I knew this was what I was meant to do.
            </p>
            <p className="font-sans text-base text-dark/65 leading-relaxed mb-5">
              I went home, researched training courses, and told my husband I was buying a gong. With his unwavering support, I began a new chapter and have never looked back.
            </p>
            <p className="font-sans text-base text-dark/65 leading-relaxed mb-5">
              Today, as an accredited Sound Healer, I create nurturing spaces where people can slow down, reconnect, and experience the restorative power of sound. Whether through crystal singing bowls, gongs, or guided relaxation, my intention is always the same: to help others find balance, calm, and connection within themselves.
            </p>
            <p className="font-sans text-base text-dark/65 leading-relaxed mb-5">
              The journey hasn&apos;t always been easy. There have been moments of self-doubt, tears, and challenges along the way, but I&apos;ve learned that growth happens when we step beyond our comfort zones.
            </p>
            <p className="font-sans text-base text-dark/65 leading-relaxed mb-5">
              It is a privilege to do something I genuinely love and to share it with others. I look forward to welcoming you to one of my sound baths and supporting you on your own journey of healing, self-discovery, and transformation.
            </p>
            <p className="font-sans text-base text-dark/65 leading-relaxed mb-10">
              With love,<br />Sam
            </p>

            <a
              href="https://bookwhen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 font-sans text-xs tracking-[0.22em] uppercase text-dark mt-10 w-fit"
            >
              <span className="border-b border-dark/30 pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                Book a Session
              </span>
              <span className="block h-px w-5 bg-dark/30 group-hover:bg-gold group-hover:w-8 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
