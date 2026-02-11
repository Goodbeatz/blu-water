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
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              For Partners &amp; Investors
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Join Us at the Source
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Blu is building the next generation of premium water brands —
              rooted in provenance, quality, and global ambition.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl font-light text-text tracking-tight">
                The Opportunity
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed">
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
            <div className="space-y-8">
              <div className="p-6 bg-secondary/30 rounded-lg">
                <h3 className="font-medium text-text">Source Defensibility</h3>
                <p className="mt-2 text-sm text-text-muted">
                  Protected artesian aquifer with exclusive access rights.
                  Geographic rarity creates natural barriers to competition.
                </p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-lg">
                <h3 className="font-medium text-text">Export Ready</h3>
                <p className="mt-2 text-sm text-text-muted">
                  FDA compliant, export certified, and positioned for
                  international distribution across premium channels.
                </p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-lg">
                <h3 className="font-medium text-text">Dual-Channel Strategy</h3>
                <p className="mt-2 text-sm text-text-muted">
                  Glass collection for luxury hospitality. PET collection for
                  premium retail. Two revenue streams, one source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 lg:py-32 bg-background-alt">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-text tracking-tight">
              Request Investor Overview
            </h2>
            <p className="mt-4 text-text-muted">
              Submit your details and we&apos;ll share our investor materials after review.
            </p>
          </div>
          <InvestorInquiryForm />
        </div>
      </section>
    </>
  );
}
