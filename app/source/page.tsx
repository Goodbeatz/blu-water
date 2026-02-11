import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Source",
  description:
    "Discover Blu's artesian spring water source deep in the Costa Rican rainforest. Naturally filtered through volcanic rock.",
};

export default function SourcePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
              Our Source
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-text font-heading">
              Born From the Rainforest
            </h1>
            <p className="mt-8 text-lg text-text-muted leading-relaxed">
              Deep within Costa Rica&apos;s protected rainforest, artesian
              springs hold water that has been naturally filtered through
              volcanic rock for centuries.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Map Section */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src="/images/source-mountains.jpg"
                alt="Costa Rican rainforest landscape"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight font-heading">
                Protected Rainforest
              </h2>
              <p className="mt-8 text-text-muted leading-relaxed">
                Our source lies within a protected zone of Costa Rica&apos;s rainforest
                where human activity is carefully controlled. The dense canopy and
                volcanic geology act as natural barriers, shielding the aquifer from
                contamination and preserving the water in its purest form.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                This isn&apos;t a municipal water source. It&apos;s an artesian spring —
                water that rises to the surface under its own natural pressure,
                requiring no mechanical pumping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Artesian Purity */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight font-heading">
                Artesian Purity
              </h2>
              <p className="mt-8 text-text-muted leading-relaxed">
                As rainwater descends through layers of volcanic rock, it undergoes
                a natural filtration process that takes centuries. This journey
                enriches the water with essential minerals — calcium, magnesium,
                potassium — while maintaining exceptional purity.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                The result is water with a naturally alkaline pH of 7.7 and a
                balanced mineral profile that delivers a{" "}
                <em className="italic font-heading">clean, silky mouthfeel</em>{" "}
                with subtle mineral sweetness.
              </p>
            </div>
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/source-mist.jpg"
                alt="Misty Costa Rican rainforest"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Bottled at Origin */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight font-heading">
            Bottled at Origin
          </h2>
          <p className="mt-8 text-text-muted leading-relaxed">
            Every bottle of Blu is filled at our facility adjacent to the source.
            The water travels mere meters from aquifer to bottle — no tanker trucks,
            no bulk transport, no intermediate storage. This ensures maximum freshness
            and eliminates any opportunity for contamination between source and seal.
          </p>
          <div className="mt-16 grid grid-cols-3 gap-px bg-border">
            <div className="text-center py-10 px-6 bg-white">
              <p className="text-4xl font-light text-text font-heading">0</p>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-text-muted">Miles transported</p>
            </div>
            <div className="text-center py-10 px-6 bg-white">
              <p className="text-4xl font-light text-text font-heading">7.7</p>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-text-muted">Natural pH</p>
            </div>
            <div className="text-center py-10 px-6 bg-white">
              <p className="text-4xl font-light text-text font-heading">100%</p>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-text-muted">Source purity</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
