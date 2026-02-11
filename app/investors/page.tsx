import type { Metadata } from "next";
import { InvestorInquiryForm } from "@/components/forms/investor-inquiry-form";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Explore investment opportunities with Blu Premium Artesian Water. Request our investor overview.",
};

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-t border-text/10 bg-white py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-6">
              For Partners &amp; Investors
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-text">
              Join Us at the Source
            </h1>
            <p className="mt-8 text-lg text-text-muted leading-relaxed max-w-2xl">
              Blu is building the next generation of premium water brands —
              rooted in provenance, quality, and global ambition.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-32 lg:py-40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">
                Market Position
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-text tracking-tight">
                The Opportunity
              </h2>
              <p className="mt-8 text-text-muted leading-relaxed">
                The global premium bottled water market is projected to grow
                significantly over the next decade, driven by health-conscious
                consumers and the hospitality industry&apos;s demand for premium
                offerings.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                Blu occupies a unique position: a verified artesian spring in
                Costa Rica&apos;s protected rainforest, naturally alkaline
                water, and a brand designed for global distribution from day one.
              </p>
            </div>
            <div className="space-y-10">
              <div className="border-b border-border pb-8">
                <h3 className="font-heading text-lg font-normal italic text-text">
                  Source Defensibility
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  Protected artesian aquifer with exclusive access rights.
                  Geographic rarity creates natural barriers to competition.
                </p>
              </div>
              <div className="border-b border-border pb-8">
                <h3 className="font-heading text-lg font-normal italic text-text">
                  Export Ready
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  FDA compliant, export certified, and positioned for
                  international distribution across premium channels.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-normal italic text-text">
                  Dual-Channel Strategy
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  Glass collection for luxury hospitality. PET collection for
                  premium retail. Two revenue streams, one source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-32 lg:py-40 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">
              Get Started
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-text tracking-tight">
              Request Investor Overview
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Submit your details and we&apos;ll share our investor materials after review.
            </p>
          </div>
          <InvestorInquiryForm />
        </div>
      </section>
    </>
  );
}
