"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linen backdrop-blur-sm border-b border-dark/10">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/sound-studio.png"
            alt="Sound Studio"
            width={52}
            height={32}
            className="h-14 w-auto mix-blend-multiply"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg tracking-[0.2em] uppercase font-medium text-dark leading-tight">
              Sound Studio
            </span>
            <span className="font-sans text-[0.5rem] tracking-[0.25em] uppercase text-dark/45 leading-tight">
              Christchurch, Dorset
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase font-sans">
          {[
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-dark/65 hover:text-dark transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://bookwhen.com/soundstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-xs tracking-widest uppercase font-sans bg-cream border border-dark/30 text-dark hover:bg-dark hover:text-cream transition-all duration-300"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-dark transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-dark transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-dark transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden bg-linen border-t border-dark/10 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="px-6 py-6 flex flex-col gap-5 text-sm tracking-widest uppercase font-sans text-dark/70">
          {[
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-dark transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://bookwhen.com/soundstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-cream border border-dark/30 text-dark text-xs tracking-widest uppercase hover:bg-dark hover:text-cream transition-all duration-300"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

