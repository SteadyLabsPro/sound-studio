import Image from "next/image";

const images = [
  {
    src: "/images/sound-bath-chewton-glen-hampshire.jpeg",
    alt: "Sound bath wellness event at Chewton Glen hotel, Hampshire — corporate sound healing by Sound Studio",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/sound-studio-healing-mudeford.jpeg",
    alt: "Sam playing crystal singing bowls during a sound healing session at Sound Studio, Mudeford, Christchurch, Dorset",
    className: "col-span-1 row-span-1",
    objectPosition: "center 25%",
  },
  {
    src: "/images/wellness-relaxtion-sound-studio.jpeg",
    alt: "Relaxation and wellness at a group sound bath session at Sound Studio, Christchurch, Dorset",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/sound-healing-dorset.jpeg",
    alt: "Outdoor sound healing at golden hour near Mudeford beach, Christchurch, Dorset — Sound Studio",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/mindfull-healing-sound-studio.jpeg",
    alt: "Mindful sound healing and deep relaxation session at Sound Studio, Mudeford, Dorset — stress relief and mind reset",
    className: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans mb-4">
              The Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-dark font-medium">
              Inside the <em className="font-light italic">Studio</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/soundstudio_00"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-dark/50 hover:text-dark flex items-center gap-2 transition-colors self-start md:self-auto"
          >
            @soundstudio_00
            <span className="inline-block w-4 h-px bg-current" />
          </a>
        </div>

        {/* Grid "" desktop mosaic, mobile stack */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[600px]">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden group ${img.className}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                sizes="(max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Mobile "" 2-column grid */}
        <div className="grid md:hidden grid-cols-2 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group aspect-square ${i === 0 ? "col-span-2 aspect-video" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
