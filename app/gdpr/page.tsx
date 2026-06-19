import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Sound Studio's privacy policy and GDPR information. Learn how we collect, use and protect your personal data when you contact us or book a sound healing session.",
};

export default function GdprPage() {
  return (
    <>
      <Nav />
      <main className="bg-cream min-h-screen">
        {/* Page header */}
        <section className="pt-32 md:pt-40 pb-10 md:pb-14 bg-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.35em] uppercase text-gold mb-4">
              Legal
            </p>
            <h1 className="font-display text-5xl md:text-[4.2rem] xl:text-[4.8rem] text-dark font-medium leading-[1.05] tracking-tight">
              Privacy <em className="font-light italic">Policy</em>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-2xl">
              <p className="font-sans text-sm md:text-base text-dark/60 leading-relaxed mb-12">
                Last updated: June 2025. This policy explains how Sound Studio collects, uses and protects any personal information you provide when using this website.
              </p>

              <PolicySection title="Who we are">
                <p>
                  Sound Studio is operated by Sam, a sole trader based in Mudeford, Christchurch, Dorset. We offer sound baths, sound healing and tarot sessions in person and at private events.
                </p>
                <p className="mt-3">
                  For any data-related queries, contact us at:{" "}
                  <a href="mailto:hello@soundstudio.co.uk" className="text-dark underline underline-offset-2 hover:text-gold transition-colors">
                    hello@soundstudio.co.uk
                  </a>
                </p>
              </PolicySection>

              <PolicySection title="What data we collect">
                <p>We only collect information you choose to give us. This may include:</p>
                <ul className="mt-3 flex flex-col gap-2 list-none">
                  <PolicyItem>Your name</PolicyItem>
                  <PolicyItem>Your email address</PolicyItem>
                  <PolicyItem>Your phone number (if provided)</PolicyItem>
                  <PolicyItem>Any message or enquiry you send via our contact form</PolicyItem>
                </ul>
                <p className="mt-4">
                  We do not collect payment information, run analytics tracking, or place marketing cookies on this website.
                </p>
              </PolicySection>

              <PolicySection title="How we use your data">
                <p>Information submitted through our contact form is used solely to:</p>
                <ul className="mt-3 flex flex-col gap-2 list-none">
                  <PolicyItem>Respond to your enquiry</PolicyItem>
                  <PolicyItem>Arrange or confirm a booking</PolicyItem>
                </ul>
                <p className="mt-4">
                  We will never sell your data or share it with third parties for marketing purposes.
                </p>
              </PolicySection>

              <PolicySection title="Third-party services">
                <p>
                  This website uses a small number of third-party services that may process your data:
                </p>
                <ul className="mt-4 flex flex-col gap-4">
                  <li>
                    <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.25em] uppercase text-gold mb-1">Formspree</p>
                    <p>Our contact form is processed by Formspree (formspree.io). When you submit the form, your details are transmitted to and stored by Formspree to deliver the message to us. Formspree's privacy policy applies to this data.</p>
                  </li>
                  <li>
                    <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.25em] uppercase text-gold mb-1">Vercel</p>
                    <p>This website is hosted by Vercel. Vercel may log basic server data (such as IP addresses and request metadata) for security and performance purposes. See Vercel's privacy policy for details.</p>
                  </li>
                  <li>
                    <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.25em] uppercase text-gold mb-1">Google Maps</p>
                    <p>Our contact page embeds a Google Maps frame to help you find us. If you interact with the map, Google's privacy policy applies. You can view our location without interacting with the embed.</p>
                  </li>
                  <li>
                    <p className="font-sans text-[0.6rem] md:text-xs tracking-[0.25em] uppercase text-gold mb-1">Bookwhen</p>
                    <p>Session bookings are handled through Bookwhen (bookwhen.com), a third-party booking platform. Their own privacy policy governs any data you provide when booking.</p>
                  </li>
                </ul>
              </PolicySection>

              <PolicySection title="Cookies">
                <p>
                  This website does not use any tracking or marketing cookies. Our hosting provider (Vercel) may set strictly necessary technical cookies to ensure the site functions correctly. No consent is required for these.
                </p>
              </PolicySection>

              <PolicySection title="How long we keep your data">
                <p>
                  Enquiries and contact form submissions are kept only for as long as necessary to respond to and fulfil your request — typically no longer than 12 months. You may request deletion at any time.
                </p>
              </PolicySection>

              <PolicySection title="Your rights">
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="mt-3 flex flex-col gap-2 list-none">
                  <PolicyItem>Access the personal data we hold about you</PolicyItem>
                  <PolicyItem>Have inaccurate data corrected</PolicyItem>
                  <PolicyItem>Request your data be deleted</PolicyItem>
                  <PolicyItem>Restrict how we process your data</PolicyItem>
                  <PolicyItem>Receive your data in a portable format</PolicyItem>
                  <PolicyItem>Object to our use of your data</PolicyItem>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please email{" "}
                  <a href="mailto:hello@soundstudio.co.uk" className="text-dark underline underline-offset-2 hover:text-gold transition-colors">
                    hello@soundstudio.co.uk
                  </a>
                  . We will respond within 30 days.
                </p>
              </PolicySection>

              <PolicySection title="Complaints">
                <p>
                  If you believe your data has been mishandled, you have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-dark underline underline-offset-2 hover:text-gold transition-colors">
                    ico.org.uk
                  </a>
                  .
                </p>
              </PolicySection>

              <PolicySection title="Changes to this policy">
                <p>
                  We may update this privacy policy from time to time. Any changes will be published on this page with an updated date at the top.
                </p>
              </PolicySection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 pb-10 border-b border-dark/10 last:border-none last:mb-0 last:pb-0">
      <h2 className="font-display text-xl md:text-2xl text-dark font-medium mb-4">{title}</h2>
      <div className="font-sans text-sm md:text-base text-dark/60 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function PolicyItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}
