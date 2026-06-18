"use client";

import { useState, useRef, useEffect } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const ENQUIRY_OPTIONS = [
  { value: "Sound Bath",      label: "Group Sound Bath" },
  { value: "Private Session", label: "Private Sound Therapy" },
  { value: "Tarot",           label: "Tarot Reading" },
  { value: "Corporate",       label: "Corporate / Event Enquiry" },
  { value: "General",         label: "General Question" },
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [enquiry, setEnquiry] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // To activate: sign up at formspree.io with hello@soundstudio.co.uk,
      // create a form, and replace YOUR_FORM_ID with the ID it gives you.
      // Formspree will email every submission straight to that address.
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
        setEnquiry("");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="py-16 text-center md:text-left">
        <div className="h-px w-10 bg-gold mb-8" />
        <p className="font-display text-3xl md:text-4xl text-dark font-light mb-4">
          Thank you.
        </p>
        <p className="font-sans text-base text-dark/55 leading-relaxed">
          Your message has been received. Sam will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">

      {/* Formspree magic fields - sets reply-to and subject on received emails */}
      <input type="hidden" name="_replyto" value="" />
      <input type="hidden" name="_subject" value="New enquiry via Sound Studio" />

      {/* Name + Email - side by side on wider screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <Field label="Your Name *">
          <input
            type="text"
            name="name"
            required
            placeholder="-"
            className="bg-transparent font-sans text-sm text-dark placeholder-dark/35 outline-none w-full"
          />
        </Field>
        <Field label="Email Address *">
          <input
            type="email"
            name="email"
            required
            placeholder="-"
            className="bg-transparent font-sans text-sm text-dark placeholder-dark/35 outline-none w-full"
          />
        </Field>
      </div>

      {/* Telephone */}
      <Field label="Telephone">
        <input
          type="tel"
          name="phone"
          placeholder="-"
          className="bg-transparent font-sans text-sm text-dark placeholder-dark/35 outline-none w-full"
        />
      </Field>

      {/* Enquiry type - custom dropdown */}
      <Field label="Type of Enquiry">
        <CustomSelect
          value={enquiry}
          onChange={setEnquiry}
          placeholder="Select one"
          options={ENQUIRY_OPTIONS}
        />
        <input type="hidden" name="enquiry" value={enquiry} />
      </Field>

      {/* Message */}
      <Field label="Message *">
        <textarea
          name="message"
          required
          rows={5}
          placeholder="-"
          className="bg-transparent font-sans text-sm text-dark placeholder-dark/35 outline-none resize-none leading-relaxed w-full"
        />
      </Field>

      {/* Submit */}
      <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-5">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center justify-center px-8 py-3 bg-gold text-ink text-[0.65rem] tracking-[0.22em] uppercase font-sans hover:bg-gold-light disabled:opacity-50 transition-colors duration-300 w-fit"
        >
          {state === "sending" ? "Sending…" : "Send Message"}
        </button>

        {state === "error" && (
          <p className="font-sans text-xs text-red-600/70">
            Something went wrong - please try again or email us directly.
          </p>
        )}
      </div>

    </form>
  );
}

// ─── Field wrapper ────────────────────────────────────────────────────────────

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-linen/40 px-4 pt-3.5 pb-4">
      <label className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-dark/60 mb-2.5">
        {label}
      </label>
      {children}
    </div>
  );
}

// ─── Custom select ────────────────────────────────────────────────────────────

function CustomSelect({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 bg-transparent outline-none cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={`font-sans text-sm ${selected ? "text-dark" : "text-dark/40"}`}>
          {selected ? selected.label : placeholder}
        </span>
        {/* Gold chevron */}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`flex-shrink-0 text-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Options panel */}
      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 z-50 mt-3 bg-parchment shadow-[0_8px_32px_rgba(44,31,26,0.08)] border border-dark/8"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={value === opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 font-sans text-sm transition-colors duration-150 ${
                value === opt.value
                  ? "text-dark bg-linen/60"
                  : "text-dark/60 hover:text-dark hover:bg-linen/40"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
