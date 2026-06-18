import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#38342F] text-cream/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <WaveLogoLight />
              <span className="font-display text-lg tracking-[0.2em] uppercase text-cream font-medium">
                Sound Studio
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-cream/50 max-w-xs mb-6">
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
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-cream/30 mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3 font-sans text-sm text-cream/55">
              {["Services", "About", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cream transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-cream/30 mb-5">
              Find Us
            </p>
            <address className="font-sans text-sm text-cream/55 not-italic flex flex-col gap-2">
              <span>Mudeford</span>
              <span>Christchurch</span>
              <span>Dorset</span>
              <a
                href="mailto:hello@soundstudio.co.uk"
                className="mt-3 hover:text-cream transition-colors"
              >
                hello@soundstudio.co.uk
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-cream/25">
            © {year} Sound Studio. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/20">
            Site by{" "}
            <a
              href="https://steadylabs.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/40 transition-colors"
            >
              Steady Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function WaveLogoLight() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gold"
    >
      <circle cx="50" cy="44" r="22" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path
        d="M18 68 Q30 55 42 62 Q54 70 66 58 Q78 46 90 55"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M22 76 Q34 63 46 70 Q58 78 70 66 Q82 54 94 63"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
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
