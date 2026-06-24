import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "sound-baths",
    href: "/group-sound-baths",
    label: "01",
    title: "Sound Baths",
    subtitle: "Group Sessions",
    description:
      "Gentle group sound healing in a welcoming space.",
    detail: "60 - 75 min · Group",
    image: "/images/wellness-relaxtion-sound-studio.jpeg",
    imageAlt: "Group sound bath room with crystal singing bowls and candles at Sound Studio, Mudeford, Christchurch",
    objectPosition: "center 30%",
  },
  {
    id: "sound-therapy",
    label: "02",
    title: "Private Sessions",
    subtitle: "One-To-One",
    description:
      "Personal sound healing & tarot sessions for deeper relaxation.",
    detail: "60 min · 1:1",
    image: "/images/private-sound-bath.jpeg",
    imageAlt: "Sam performing a private 1:1 sound healing session with a client at Sound Studio, Christchurch, Dorset",
    objectPosition: "center 45%",
  },
  {
    id: "tarot",
    label: "03",
    title: "Tarot",
    subtitle: "Intuitive Readings",
    description:
      "Private tarot readings with optional sound healing.",
    detail: "45 min · 1:1",
    image: "/images/tarot-reading-christchurch-uk.jpeg",
    imageAlt: "Tarot cards laid out during an intuitive reading session at Sound Studio, Christchurch, Dorset",
    objectPosition: "center 85%",
  },
  {
    id: "corporate",
    label: "04",
    title: "Corporate & Events",
    subtitle: "Wellness Events",
    description:
      "Wellbeing sound baths for workplaces and gatherings.",
    detail: "Bespoke · On request",
    image: "/images/sound-bath-chewton-glen-hampshire.jpeg",
    imageAlt: "Sam performing a corporate sound bath at Chewton Glen Hotel & Spa, Hampshire",
    objectPosition: "center 50%",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-parchment pt-14 pb-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans mb-4">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark font-medium">
              Experiences
              <br />
              <em className="font-light italic">crafted for you</em>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-dark/50 max-w-xs leading-relaxed">
            Every session is held with care, intention and a deep reverence for the healing power of sound.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={(service as any).href ?? `/services#${service.id}`}
              className="group bg-cream overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: service.objectPosition }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs tracking-[0.25em] uppercase text-gold font-sans mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-dark font-light mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-dark/10">
                  <span className="font-sans text-xs tracking-wider uppercase text-muted">
                    {service.detail}
                  </span>
                  <span className="font-sans text-xs tracking-widest uppercase text-dark group-hover:text-gold transition-colors flex items-center gap-2">
                    View
                    <span className="inline-block w-4 h-px bg-current" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
