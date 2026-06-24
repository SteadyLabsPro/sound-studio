import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "All Services — Sound Studio Christchurch",
  description:
    "Browse all sound healing and tarot sessions at Sound Studio, Mudeford, Christchurch, Dorset. Group sound baths from £20, private sessions, tarot readings, and corporate events.",
};

const listings = [
  {
    label: "01",
    subtitle: "Group Sessions",
    title: "Group Sound Baths",
    description:
      "Lie back and be immersed in waves of healing sound from crystal singing bowls, gongs and chimes. Held regularly in Mudeford — all are welcome, no experience necessary.",
    price: "from £20",
    priceDetail: "per person",
    image: "/images/wellness-relaxtion-sound-studio.jpeg",
    imagePosition: "center 30%",
    href: "/group-sound-baths",
    bookHref: "https://bookwhen.com/soundstudio",
    bookExternal: true,
  },
  {
    label: "02",
    subtitle: "One-To-One",
    title: "Private Sessions",
    description:
      "Choose from a deeply restorative private soundbath, or combine intuitive tarot guidance with sound healing for a truly personal experience.",
    price: "from £65",
    priceDetail: "per session",
    image: "/images/private-sound-bath.jpeg",
    imagePosition: "center center",
    href: "/private-healing-sessions",
    bookHref: "/contact",
    bookExternal: false,
  },
  {
    label: "03",
    subtitle: "Intuitive Readings",
    title: "Tarot Readings",
    description:
      "Gain clarity, guidance, and insight through an intuitive reading tailored to your current situation and intentions. Held in our peaceful studio in Mudeford.",
    price: "£40",
    priceDetail: "per session",
    image: "/images/tarot-reading-mudeford.jpeg",
    imagePosition: "center center",
    href: "/tarot-readings",
    bookHref: "/contact",
    bookExternal: false,
  },
  {
    label: "04",
    subtitle: "Wellness Events",
    title: "Corporate & Events",
    description:
      "Sam brings sound healing to corporate events, wellness days, and team building sessions — creating a fully tailored experience for your group and setting.",
    price: "POA",
    priceDetail: "price on application",
    image: "/images/sound-bath-chewton-glen-hampshire.jpeg",
    imagePosition: "center center",
    href: "/corporate-events",
    bookHref: "/contact",
    bookExternal: false,
  },
];

export default function AllServicesPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Page header */}
        <section className="bg-cream pt-28 md:pt-40 pb-10 md:pb-16 border-b border-dark/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-4">
                Sound Studio · Browse Sessions
              </p>
              <h1 className="font-display font-medium text-dark text-5xl md:text-[4.2rem] xl:text-[4.8rem] leading-tight">
                All <em className="font-light italic">Services</em>
              </h1>
            </div>
            <p className="font-sans text-sm md:text-base text-dark/50 max-w-xs leading-relaxed">
              From intimate studio sessions to luxury spa events — every experience is held with care and intention.
            </p>
          </div>
        </section>

        {/* Listings */}
        <section className="bg-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            {listings.map((item, index) => (
              <div
                key={item.label}
                className={`grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-0 md:gap-8 border-t border-dark/10 py-6 md:py-8 ${
                  index === listings.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Thumbnail */}
                <div className="relative h-60 md:h-auto md:min-h-[300px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: item.imagePosition }}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                {/* Content */}
                <div className="py-8 md:py-10 md:px-10 lg:px-14 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-dark/25">
                        {item.label}
                      </span>
                      <span className="font-sans text-[0.6rem] md:text-xs tracking-[0.3em] uppercase text-gold">
                        {item.subtitle}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-dark font-medium leading-tight mb-4">
                      {item.title}
                    </h2>
                    <p className="font-sans text-sm md:text-base text-dark/55 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>

                  {/* Price + CTAs */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-dark/10">
                    <div>
                      <p className="font-display text-2xl md:text-3xl text-dark font-light leading-none">
                        {item.price}
                      </p>
                      <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-dark/35 mt-1">
                        {item.priceDetail}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        href={item.href}
                        className="inline-flex items-center justify-center px-5 py-2.5 border border-dark/30 text-dark text-[0.6rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-dark hover:text-cream transition-all duration-300"
                      >
                        View
                      </Link>
                      {item.bookExternal ? (
                        <a
                          href={item.bookHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-gold text-ink text-[0.6rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300"
                        >
                          Book
                        </a>
                      ) : (
                        <Link
                          href={item.bookHref}
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-gold text-ink text-[0.6rem] md:text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold-light transition-colors duration-300"
                        >
                          Enquire
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <section className="bg-linen py-12 border-t border-dark/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
            <div className="h-px flex-1 bg-dark/10 hidden md:block" />
            <p className="font-sans text-sm md:text-base text-dark/50 leading-relaxed max-w-lg">
              Private and group sessions are held at our studio in Mudeford, Christchurch. Corporate and bespoke events are available at venues across Dorset, Hampshire, and beyond. Any questions?{" "}
              <Link href="/contact" className="text-dark underline underline-offset-4 hover:text-gold transition-colors">
                Get in touch
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
