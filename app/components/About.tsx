import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Image — founder portrait */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/Images/sam-sound-studio-christchurch-uk.jpeg"
                alt="Sam — founder and sound practitioner at Sound Studio, Christchurch"
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

          {/* Text — personal, warm, human */}
          <div className="flex flex-col md:pt-6">
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans mb-6">
              About
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-dark font-light leading-tight mb-8">
              A space held
              <br />
              <em className="italic">with care</em>
            </h2>

            <div className="h-px w-10 bg-gold/60 mb-8" />

            <p className="font-sans text-base text-dark/65 leading-relaxed mb-5">
              Hi, I'm Sam. I created Sound Studio because I believe that real rest — the kind that actually restores you — is something everyone deserves access to, not just those who can afford a five-star spa retreat.
            </p>
            <p className="font-sans text-base text-dark/65 leading-relaxed mb-5">
              Based in Mudeford, Christchurch, our studio is a sanctuary I've designed with intention — from the lighting to the linens. Every session is guided with care, using crystal singing bowls, gongs and chimes to create an environment where your nervous system can genuinely let go.
            </p>
            <p className="font-sans text-base text-dark/65 leading-relaxed mb-10">
              Whether you're coming to manage stress, sleep better, or simply carve out an hour of stillness in a busy week — you're in the right place.
            </p>

            {/* Offerings list */}
            <div className="pt-8 border-t border-dark/10 grid grid-cols-1 gap-4">
              {[
                { title: "Group Sound Baths", detail: "Held weekly in Mudeford · All welcome" },
                { title: "Private Sessions", detail: "1:1 sound therapy, tailored to you" },
                { title: "Tarot Readings", detail: "Intuitive guidance & reflection" },
              ].map((item) => (
                <div key={item.title} className="flex items-baseline gap-4">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <div>
                    <p className="font-sans text-sm text-dark font-medium">{item.title}</p>
                    <p className="font-sans text-xs text-dark/40 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

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
