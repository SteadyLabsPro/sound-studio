import Image from "next/image";

export default function BookingCTA() {
  return (
    <section className="relative bg-ink overflow-hidden py-28 md:py-40">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/sound-healing-dorset.jpeg"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-gold font-sans mb-6">
          Ready to Begin?
        </p>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-medium leading-tight mb-6">
          Your next session
          <br />
          <em className="font-light italic text-gold">awaits you</em>
        </h2>
        <div className="h-px w-12 bg-gold/50 mx-auto mb-8" />
        <p className="font-sans text-base text-cream/55 leading-relaxed max-w-md mx-auto mb-12">
          Browse upcoming group sound baths, book a private session or enquire about a tarot reading. Booking is quick and easy via Bookwhen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://bookwhen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-ink text-xs tracking-widest uppercase font-sans hover:bg-gold-light transition-colors duration-300"
          >
            View All Sessions
          </a>
          <a
            href="mailto:hello@soundstudio.co.uk"
            className="inline-flex items-center justify-center px-10 py-4 border border-cream/25 text-cream text-xs tracking-widest uppercase font-sans hover:border-cream/60 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16 pt-12 border-t border-cream/10">
          {[
            { label: "Group Sessions", value: "Weekly" },
            { label: "Private Sessions", value: "By appointment" },
            { label: "Location", value: "Mudeford, Dorset" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-xl text-cream mb-1">{item.value}</p>
              <p className="font-sans text-xs tracking-widest uppercase text-cream/40">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
