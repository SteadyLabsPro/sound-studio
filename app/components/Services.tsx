import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "sound-baths",
    label: "01",
    title: "Sound Baths",
    subtitle: "Group Sessions",
    description:
      "Lie back and be immersed in waves of healing sound from crystal singing bowls, gongs and chimes. Group sound baths held regularly in our Mudeford studio.",
    detail: "60 - 75 min · Group",
    image: "/images/wellness-relaxtion-sound-studio.jpeg",
    imageAlt: "Sound healing session space set up for a group sound bath",
    objectPosition: "center 30%",
  },
  {
    id: "sound-therapy",
    label: "02",
    title: "Sound Therapy",
    subtitle: "Private Sessions",
    description:
      "A deeply personal one-to-one experience tailored to your wellbeing goals. Instruments are placed on and around the body for a full vibrational reset.",
    detail: "60 min · 1:1",
    image: "/images/sound-studio-healing-mudeford.jpeg",
    imageAlt: "Group sound bath session at Sound Studio Mudeford",
    objectPosition: "center 45%",
  },
  {
    id: "tarot",
    label: "03",
    title: "Tarot",
    subtitle: "Intuitive Readings",
    description:
      "A reflective and intuitive tarot reading to gain clarity, perspective and insight. Available as a standalone session or paired with sound healing.",
    detail: "45 min · 1:1",
    image: "/images/sound-studio-mudeford-beach.jpeg",
    imageAlt: "Sound bowl held at sunset on the beach at Mudeford",
    objectPosition: "center 60%",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-parchment py-24 md:py-32">
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
          <p className="font-sans text-sm text-dark/50 max-w-xs leading-relaxed">
            Every session is held with care, intention and a deep reverence for the healing power of sound.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
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
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                <p className="font-sans text-sm text-dark/55 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-dark/10">
                  <span className="font-sans text-xs tracking-wider uppercase text-muted">
                    {service.detail}
                  </span>
                  <span className="font-sans text-xs tracking-widest uppercase text-dark group-hover:text-gold transition-colors flex items-center gap-2">
                    View &amp; Book
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
