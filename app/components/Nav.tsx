"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const servicesLinks = [
  { label: "All Sessions", href: "/services" },
  { label: "Group Sound Baths", href: "/group-sound-baths" },
  { label: "Private Sessions", href: "/private-healing-sessions" },
  { label: "Tarot Readings", href: "/tarot-readings" },
  { label: "Corporate & Events", href: "/corporate-events" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

          {/* Services with dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 uppercase text-dark/65 hover:text-dark transition-colors"
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown — pt-3 creates a transparent bridge so the mouse doesn't leave the hover zone */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-60 transition-all duration-200 ${
                servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <div className="bg-linen border border-dark/10 shadow-sm relative">
                {/* small notch */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-linen border-l border-t border-dark/10 rotate-45" />
                <ul className="py-2">
                {servicesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-5 py-3 text-[0.65rem] tracking-[0.2em] uppercase font-sans text-dark/60 hover:text-dark hover:bg-cream transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </li>

          {/* Other nav links */}
          {[
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
      <div className={`md:hidden bg-linen border-t border-dark/10 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="px-6 py-6 flex flex-col gap-5 text-sm tracking-widest uppercase font-sans text-dark/70">

          {/* Services with sub-links */}
          <li>
            <button
              className="flex items-center justify-between w-full uppercase hover:text-dark transition-colors"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <ul className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-56 mt-3" : "max-h-0"}`}>
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                    className="block py-2 pl-4 text-xs tracking-[0.2em] uppercase text-dark/50 hover:text-dark border-l border-dark/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {[
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
