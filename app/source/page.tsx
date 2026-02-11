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
      <section className="relative py-24 lg:py-32 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Our Source
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Born From the Rainforest
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Deep within Costa Rica&apos;s protected rainforest, artesian
              springs hold water that has been naturally filtered through
              volcanic rock for centuries.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-square relative bg-secondary/30 rounded-lg overflow-hidden">
              <Image
                src="/images/source-mountains.jpg"
                alt="Costa Rican rainforest landscape"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-text tracking-tight">
                Protected Rainforest
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed">
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

      {/* Artesian Purity */}
      <section className="py-24 lg:py-32 bg-background-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-light text-text tracking-tight">
                Artesian Purity
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed">
                As rainwater descends through layers of volcanic rock, it undergoes
                a natural filtration process that takes centuries. This journey
                enriches the water with essential minerals — calcium, magnesium,
                potassium — while maintaining exceptional purity.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                The result is water with a naturally alkaline pH of 7.7 and a
                balanced mineral profile that delivers a clean, silky mouthfeel
                with subtle mineral sweetness.
              </p>
            </div>
            <div className="aspect-[4/3] relative bg-secondary/30 rounded-lg overflow-hidden">
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

      {/* Bottled at Origin */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-text tracking-tight">
            Bottled at Origin
          </h2>
          <p className="mt-6 text-text-muted leading-relaxed">
            Every bottle of Blu is filled at our facility adjacent to the source.
            The water travels mere meters from aquifer to bottle — no tanker trucks,
            no bulk transport, no intermediate storage. This ensures maximum freshness
            and eliminates any opportunity for contamination between source and seal.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-3xl font-light text-primary">0</p>
              <p className="mt-1 text-xs text-text-muted uppercase tracking-wider">Miles transported</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-primary">7.7</p>
              <p className="mt-1 text-xs text-text-muted uppercase tracking-wider">Natural pH</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-primary">100%</p>
              <p className="mt-1 text-xs text-text-muted uppercase tracking-wider">Source purity</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
