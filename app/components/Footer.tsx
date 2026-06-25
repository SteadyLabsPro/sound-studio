import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#D6C9B5] text-dark/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/sound-studio.png" alt="Sound Studio" width={52} height={32} className="h-14 w-auto mix-blend-multiply" />
              <span className="font-display text-lg tracking-[0.2em] uppercase text-dark font-medium">
                Sound Studio
              </span>
            </div>
            <p className="font-sans text-sm md:text-base leading-relaxed text-dark/50 max-w-xs mb-6">
              Immersive sound experiences for modern wellbeing. A calm space to reconnect through sound, stillness and self-discovery.
            </p>
            <a
              href="https://www.instagram.com/soundstudio_00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors"
            >
              <InstagramIcon />
              @soundstudio_00
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-dark/35 mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3 font-sans text-sm md:text-base text-dark/55">
              {[
                { label: "All Services", href: "/all-services" },
                { label: "Group Sound Baths", href: "/group-sound-baths" },
                { label: "Private Sessions", href: "/private-healing-sessions" },
                { label: "Tarot Readings", href: "/tarot-readings" },
                { label: "Corporate & Events", href: "/corporate-events" },
                { label: "About", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-dark transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-dark/35 mb-5">
              Find Us
            </p>
            <address className="font-sans text-sm md:text-base text-dark/55 not-italic flex flex-col gap-2">
              <span>Mudeford</span>
              <span>Christchurch</span>
              <span>Dorset</span>
              <Link href="/contact" className="mt-3 hover:text-dark transition-colors">
                Get in touch
              </Link>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <p className="font-sans text-xs text-dark/30">
              © {year} Sound Studio. All rights reserved.
            </p>
            <Link href="/gdpr" className="font-sans text-xs text-dark/30 hover:text-dark/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-sans text-xs text-dark/30 hover:text-dark/50 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="font-sans text-xs text-dark/25">
            Site by{" "}
            <a
              href="https://steadylabs.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dark/50 transition-colors"
            >
              Steady Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}


function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
