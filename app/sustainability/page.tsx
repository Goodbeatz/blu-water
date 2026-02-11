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
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Sustainability
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Responsible by Nature
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Our approach to sustainability starts at the source — and extends
              through every decision we make.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Truck className="h-10 w-10 text-primary mx-auto mb-6" />
              <h2 className="text-xl font-medium text-text">Bottled at Source</h2>
              <p className="mt-4 text-sm text-text-muted leading-relaxed">
                By bottling directly at our artesian source, we eliminate the
                carbon footprint of bulk water transport. The water travels
                meters, not miles, from aquifer to bottle.
              </p>
            </div>

            <div className="text-center">
              <Leaf className="h-10 w-10 text-primary mx-auto mb-6" />
              <h2 className="text-xl font-medium text-text">Source Protection</h2>
              <p className="mt-4 text-sm text-text-muted leading-relaxed">
                Our aquifer exists within Costa Rica&apos;s protected rainforest. We are
                committed to the long-term conservation of this natural
                resource and its surrounding ecosystem.
              </p>
            </div>

            <div className="text-center">
              <Recycle className="h-10 w-10 text-primary mx-auto mb-6" />
              <h2 className="text-xl font-medium text-text">Recyclable Packaging</h2>
              <p className="mt-4 text-sm text-text-muted leading-relaxed">
                Our glass collection is designed for reuse in hospitality
                settings and is fully recyclable. We are actively exploring
                sustainable alternatives for our PET line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple commitment statement */}
      <section className="py-24 lg:py-32 bg-background-alt">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-text tracking-tight">
            Our Commitment
          </h2>
          <p className="mt-6 text-text-muted leading-relaxed">
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
