import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms & Conditions — Sound Studio Christchurch",
  description:
    "Booking terms, refund policy and health disclaimer for Sound Studio, Mudeford, Christchurch, Dorset.",
};

export default function TermsPage() {
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
              Terms &amp; <em className="font-light italic">Conditions</em>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-2xl">

              <p className="font-sans text-sm md:text-base text-dark/60 leading-relaxed mb-12">
                Terms &amp; Conditions, Refund Policy &amp; Disclaimer. Thank you for booking a sound bath with us. Please read the following terms before attending.
              </p>

              <PolicySection title="Bookings">
                <ul className="flex flex-col gap-2 list-none">
                  <PolicyItem>All bookings must be made in advance through our website or approved booking platform.</PolicyItem>
                  <PolicyItem>Your place is confirmed once payment has been received.</PolicyItem>
                  <PolicyItem>Spaces are limited and are allocated on a first-come, first-served basis.</PolicyItem>
                </ul>
              </PolicySection>

              <PolicySection title="Arrival">
                <ul className="flex flex-col gap-2 list-none">
                  <PolicyItem>Please arrive 10–15 minutes before the session begins.</PolicyItem>
                  <PolicyItem>Sessions start promptly. Late arrivals may not be admitted to avoid disrupting the experience for other participants.</PolicyItem>
                  <PolicyItem>Please silence mobile phones before entering the space.</PolicyItem>
                </ul>
              </PolicySection>

              <PolicySection title="Refund & Cancellation Policy">
                <p className="mb-5">We understand that plans can change.</p>
                <h3 className="font-sans text-[0.6rem] md:text-xs tracking-[0.25em] uppercase text-gold mb-3">Cancellations</h3>
                <ul className="flex flex-col gap-2 list-none mb-6">
                  <PolicyItem>Cancellations made more than 48 hours before the event will receive a full refund or the option to transfer to another available session.</PolicyItem>
                  <PolicyItem>Cancellations made within 48 hours of the event are non-refundable.</PolicyItem>
                  <PolicyItem>No refunds are available for missed sessions or no-shows.</PolicyItem>
                </ul>
                <h3 className="font-sans text-[0.6rem] md:text-xs tracking-[0.25em] uppercase text-gold mb-3">Transfers</h3>
                <p className="mb-6">Where possible, bookings may be transferred to another event if requested at least 48 hours before the session. Transfers are subject to availability.</p>
                <h3 className="font-sans text-[0.6rem] md:text-xs tracking-[0.25em] uppercase text-gold mb-3">Event Cancellation</h3>
                <p className="mb-3">If we need to cancel or reschedule a session due to unforeseen circumstances, you will be offered either:</p>
                <ul className="flex flex-col gap-2 list-none">
                  <PolicyItem>A full refund, or</PolicyItem>
                  <PolicyItem>A transfer to a future session.</PolicyItem>
                </ul>
              </PolicySection>

              <PolicySection title="Health Disclaimer">
                <p className="mb-4">Sound baths are intended to support relaxation and wellbeing but are not a substitute for medical treatment, diagnosis or professional healthcare.</p>
                <p className="mb-4">By attending, you acknowledge that you are participating voluntarily and accept full responsibility for your own health and wellbeing.</p>
                <p className="mb-3">Please consult your healthcare professional before attending if you:</p>
                <ul className="flex flex-col gap-2 list-none mb-6">
                  <PolicyItem>Are in the first trimester of pregnancy.</PolicyItem>
                  <PolicyItem>Have epilepsy or a history of seizures.</PolicyItem>
                  <PolicyItem>Have a pacemaker or other implanted medical device.</PolicyItem>
                  <PolicyItem>Have severe sound sensitivity.</PolicyItem>
                  <PolicyItem>Have a serious mental health condition where deep relaxation or meditation may not be appropriate.</PolicyItem>
                  <PolicyItem>Have any medical condition you believe may be affected by sound or vibration.</PolicyItem>
                </ul>
                <p className="mb-5">If you have any concerns, please <Link href="/contact" className="text-dark underline underline-offset-2 hover:text-gold transition-colors">contact us</Link> before booking.</p>
                <p className="mb-3">During the session you are encouraged to:</p>
                <ul className="flex flex-col gap-2 list-none">
                  <PolicyItem>Adjust your position whenever needed.</PolicyItem>
                  <PolicyItem>Leave the room quietly if necessary.</PolicyItem>
                  <PolicyItem>Listen to your body throughout the experience.</PolicyItem>
                </ul>
              </PolicySection>

              <PolicySection title="Liability">
                <p className="mb-4">While every effort is made to provide a safe and supportive environment, attendance is entirely at your own risk.</p>
                <p className="mb-3">We accept no responsibility for:</p>
                <ul className="flex flex-col gap-2 list-none mb-5">
                  <PolicyItem>Loss or damage to personal belongings.</PolicyItem>
                  <PolicyItem>Injury sustained as a result of failing to follow instructions.</PolicyItem>
                  <PolicyItem>Any physical or emotional responses experienced during or after the session.</PolicyItem>
                </ul>
                <p>By attending, you confirm that you have read and understood this disclaimer and accept these terms.</p>
              </PolicySection>

              <PolicySection title="Photography & Social Media">
                <p className="mb-4">Occasionally photographs or short videos may be taken for promotional purposes.</p>
                <p>We will always respect your privacy. If you would prefer not to appear in any photographs or videos, please let us know before the session begins.</p>
              </PolicySection>

              <PolicySection title="Contact">
                <p>
                  If you have any questions regarding these Terms &amp; Conditions, Refund Policy or Disclaimer, please{" "}
                  <Link href="/contact" className="text-dark underline underline-offset-2 hover:text-gold transition-colors">
                    get in touch
                  </Link>{" "}
                  before booking. We are always happy to help.
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
