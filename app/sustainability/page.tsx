import type { Metadata } from "next";
import { Leaf, Recycle, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Blu's commitment to environmental responsibility through source protection, bottling at origin, and recyclable packaging.",
};

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-t border-text/10 bg-white py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-6">
              Sustainability
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-text">
              Responsible by Nature
            </h1>
            <p className="mt-8 text-lg text-text-muted leading-relaxed max-w-2xl">
              Our approach to sustainability starts at the source — and extends
              through every decision we make.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32 lg:py-40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <Truck className="h-8 w-8 text-text mb-8" />
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">
                01
              </p>
              <h2 className="font-heading text-2xl font-normal text-text">
                Bottled at Source
              </h2>
              <p className="mt-5 text-sm text-text-muted leading-relaxed">
                By bottling directly at our artesian source, we eliminate the
                carbon footprint of bulk water transport. The water travels
                meters, not miles, from aquifer to bottle.
              </p>
            </div>

            <div>
              <Leaf className="h-8 w-8 text-text mb-8" />
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">
                02
              </p>
              <h2 className="font-heading text-2xl font-normal text-text">
                Source Protection
              </h2>
              <p className="mt-5 text-sm text-text-muted leading-relaxed">
                Our aquifer exists within Costa Rica&apos;s protected rainforest. We are
                committed to the long-term conservation of this natural
                resource and its surrounding ecosystem.
              </p>
            </div>

            <div>
              <Recycle className="h-8 w-8 text-text mb-8" />
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">
                03
              </p>
              <h2 className="font-heading text-2xl font-normal text-text">
                Recyclable Packaging
              </h2>
              <p className="mt-5 text-sm text-text-muted leading-relaxed">
                Our glass collection is designed for reuse in hospitality
                settings and is fully recyclable. We are actively exploring
                sustainable alternatives for our PET line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-32 lg:py-40 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">
            Our Promise
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-text tracking-tight">
            Our Commitment
          </h2>
          <p className="mt-8 text-text-muted leading-relaxed">
            We don&apos;t make claims we can&apos;t substantiate. As a young brand,
            our sustainability journey is just beginning. What we can promise
            is transparency about our practices and a genuine commitment to
            improving our environmental impact as we grow.
          </p>
        </div>
      </section>
    </>
  );
}
