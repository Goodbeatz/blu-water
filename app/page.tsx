import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Droplets, Mountain, Factory } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero-mountains.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/80" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            Naturally Alkaline.
            <br />
            <span className="font-normal">Artesian Source.</span>
            <br />
            Bottled at Origin.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Artesian spring water from the Costa Rican rainforest
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/50" />
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-background-alt py-6 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-sm font-medium tracking-widest uppercase text-text-muted">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-primary" />
              <span>Artesian Source</span>
            </div>
            <span className="hidden md:inline text-border">|</span>
            <div className="flex items-center gap-2">
              <Mountain className="h-4 w-4 text-primary" />
              <span>Naturally Alkaline</span>
            </div>
            <span className="hidden md:inline text-border">|</span>
            <div className="flex items-center gap-2">
              <Factory className="h-4 w-4 text-primary" />
              <span>Bottled at Origin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight">
              Two Collections, One Source
            </h2>
            <p className="mt-4 text-text-muted">
              Premium glass for tableside service. PET for everyday excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Glass */}
            <div className="group relative bg-secondary/30 rounded-lg p-8 lg:p-12 text-center hover:bg-secondary/50 transition-colors">
              <div className="w-40 h-40 mx-auto mb-8 relative rounded-full overflow-hidden">
                <Image
                  src="/images/glass-bottle.jpg"
                  alt="Blu glass bottle"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-text">Glass Collection</h3>
              <p className="mt-2 text-sm text-text-muted">
                330ml &middot; 500ml &middot; 750ml
              </p>
              <p className="mt-4 text-sm text-text-muted max-w-sm mx-auto">
                Designed for luxury hospitality. Premium glass bottles for tableside presentation
                at the world&apos;s finest venues.
              </p>
              <Link
                href="/products#glass"
                className="mt-6 inline-block text-sm font-medium text-primary hover:text-primary-light transition-colors"
              >
                Explore Glass &rarr;
              </Link>
            </div>

            {/* PET */}
            <div className="group relative bg-secondary/30 rounded-lg p-8 lg:p-12 text-center hover:bg-secondary/50 transition-colors">
              <div className="w-64 h-64 mx-auto mb-8 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/pet-bottle.jpg"
                  alt="Blu PET bottle on the beach"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-text">PET Collection</h3>
              <p className="mt-2 text-sm text-text-muted">
                500ml &middot; 1L &middot; 1.5L
              </p>
              <p className="mt-4 text-sm text-text-muted max-w-sm mx-auto">
                Everyday premium hydration. Lightweight, portable bottles for retail
                and distribution at scale.
              </p>
              <Link
                href="/products#pet"
                className="mt-6 inline-block text-sm font-medium text-primary hover:text-primary-light transition-colors"
              >
                Explore PET &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Source Teaser */}
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                From the Rainforest.
                <br />
                Artesian Purity.
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed">
                Our artesian spring water emerges naturally from deep aquifers beneath
                Costa Rica&apos;s protected rainforest. Filtered through volcanic
                rock over centuries, it reaches the surface naturally alkaline and
                mineral-rich — untouched by industrial processes.
              </p>
              <Link
                href="/source"
                className="mt-8 inline-block text-sm font-medium text-accent hover:text-accent-dark transition-colors"
              >
                Discover Our Source &rarr;
              </Link>
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/source-mountains.jpg"
                alt="Costa Rica mountain landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trade CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight">
            Partner With Blu
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            Whether you&apos;re a distributor, hospitality venue, or retail buyer —
            we&apos;d love to hear from you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/trade#samples"
              className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded transition-colors"
            >
              Request Samples
            </Link>
            <Link
              href="/trade"
              className="inline-flex items-center px-8 py-3 text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white rounded transition-colors"
            >
              Open Trade Account
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Teaser */}
      <section className="py-24 lg:py-32 bg-background-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight">
            Responsible by Nature
          </h2>
          <p className="mt-6 text-text-muted leading-relaxed">
            Bottled at source to minimize transport. Sourced from a protected aquifer
            to ensure long-term conservation. Glass collection designed for reuse
            and full recyclability.
          </p>
          <Link
            href="/sustainability"
            className="mt-8 inline-block text-sm font-medium text-primary hover:text-primary-light transition-colors"
          >
            Our Commitment &rarr;
          </Link>
        </div>
      </section>

      {/* Investor Teaser */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            For Partners &amp; Investors
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight">
            Join Us at the Source
          </h2>
          <p className="mt-6 text-text-muted leading-relaxed">
            Blu is building the next generation of premium water brands. If you share
            our vision for quality and global distribution, we&apos;d like to connect.
          </p>
          <Link
            href="/investors"
            className="mt-8 inline-flex items-center px-8 py-3 text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white rounded transition-colors"
          >
            Request Investor Overview
          </Link>
        </div>
      </section>
    </>
  );
}
