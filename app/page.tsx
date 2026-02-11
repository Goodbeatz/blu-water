import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section — editorial, white, serif */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-8">
              Premium Artesian Water
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight">
              Naturally
              <br />
              Alkaline.
              <br />
              <em className="italic">Artesian Source.</em>
            </h1>
            <p className="mt-8 text-lg text-text-muted max-w-md leading-relaxed">
              Bottled at origin in the Costa Rican rainforest.
            </p>
            <div className="mt-12 flex items-center gap-8">
              <Link
                href="/products"
                className="text-xs tracking-[0.15em] uppercase border-b border-text pb-1 hover:text-text-muted hover:border-text-muted transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href="/source"
                className="text-xs tracking-[0.15em] uppercase text-text-muted hover:text-text transition-colors"
              >
                Our Source
              </Link>
            </div>
          </div>
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src="/images/hero-mountains.jpg"
              alt="Costa Rican mountains at sunrise"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="border-y border-border py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <span className="text-xs tracking-[0.2em] uppercase text-text-muted">Artesian Source</span>
            <span className="hidden md:block w-12 h-px bg-border" />
            <span className="text-xs tracking-[0.2em] uppercase text-text-muted">Naturally Alkaline</span>
            <span className="hidden md:block w-12 h-px bg-border" />
            <span className="text-xs tracking-[0.2em] uppercase text-text-muted">Bottled at Origin</span>
          </div>
        </div>
      </section>

      {/* Product Preview — full-width alternating blocks */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Collections</p>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-20">
            Two Collections,<br /><em className="italic">One Source</em>
          </h2>

          {/* Glass */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/glass-bottle.jpg"
                alt="Blu glass bottle"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Glass Collection</p>
              <h3 className="text-3xl font-normal tracking-tight mb-6">
                Designed for<br /><em className="italic">Tableside Service</em>
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">
                330ml &middot; 500ml &middot; 750ml
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Premium glass bottles crafted for luxury hospitality. Elegant presentation
                at the world&apos;s finest venues.
              </p>
              <Link
                href="/products#glass"
                className="text-xs tracking-[0.15em] uppercase border-b border-text pb-1 hover:text-text-muted hover:border-text-muted transition-colors"
              >
                View Glass Collection
              </Link>
            </div>
          </div>

          {/* PET */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2 aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/pet-bottle.jpg"
                alt="Blu PET bottle"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-1 lg:pr-8">
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">PET Collection</p>
              <h3 className="text-3xl font-normal tracking-tight mb-6">
                Everyday<br /><em className="italic">Premium Hydration</em>
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">
                500ml &middot; 1L &middot; 1.5L
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Lightweight, portable bottles for retail and distribution at scale.
                The same artesian purity, designed for everyday life.
              </p>
              <Link
                href="/products#pet"
                className="text-xs tracking-[0.15em] uppercase border-b border-text pb-1 hover:text-text-muted hover:border-text-muted transition-colors"
              >
                View PET Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Source Teaser — full-bleed image with text */}
      <section className="relative">
        <div className="aspect-[21/9] relative overflow-hidden">
          <Image
            src="/images/source-mountains.jpg"
            alt="Costa Rica mountain landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Origin</p>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
                From the Rainforest.<br /><em className="italic">Artesian Purity.</em>
              </h2>
              <Link
                href="/source"
                className="text-xs tracking-[0.15em] uppercase text-white border-b border-white/60 pb-1 hover:border-white transition-colors"
              >
                Discover Our Source
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trade CTA */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Partnership</p>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
            Partner <em className="italic">With Blu</em>
          </h2>
          <p className="text-text-muted leading-relaxed mb-12 max-w-lg mx-auto">
            Whether you&apos;re a distributor, hospitality venue, or retail buyer —
            we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/trade#samples"
              className="px-10 py-3.5 text-xs tracking-[0.15em] uppercase bg-text text-white hover:bg-text-muted transition-colors"
            >
              Request Samples
            </Link>
            <Link
              href="/trade"
              className="px-10 py-3.5 text-xs tracking-[0.15em] uppercase border border-text text-text hover:bg-text hover:text-white transition-colors"
            >
              Open Trade Account
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Teaser */}
      <section className="border-t border-border py-32 lg:py-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Sustainability</p>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8">
            Responsible <em className="italic">by Nature</em>
          </h2>
          <p className="text-text-muted leading-relaxed max-w-lg mx-auto mb-10">
            Bottled at source to minimize transport. Sourced from a protected aquifer
            to ensure long-term conservation. Glass collection designed for reuse
            and full recyclability.
          </p>
          <Link
            href="/sustainability"
            className="text-xs tracking-[0.15em] uppercase border-b border-text pb-1 hover:text-text-muted hover:border-text-muted transition-colors"
          >
            Our Commitment
          </Link>
        </div>
      </section>

      {/* Investor Teaser */}
      <section className="border-t border-border py-32 lg:py-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">
            For Partners &amp; Investors
          </p>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
            Join Us <em className="italic">at the Source</em>
          </h2>
          <p className="text-text-muted leading-relaxed mb-12 max-w-lg mx-auto">
            Blu is building the next generation of premium water brands. If you share
            our vision for quality and global distribution, we&apos;d like to connect.
          </p>
          <Link
            href="/investors"
            className="px-10 py-3.5 text-xs tracking-[0.15em] uppercase border border-text text-text hover:bg-text hover:text-white transition-colors"
          >
            Request Investor Overview
          </Link>
        </div>
      </section>
    </>
  );
}
