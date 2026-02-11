import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Blu's premium glass and PET water collections. Naturally alkaline artesian water with a unique mineral profile.",
};

function MineralBar({ label, value, max }: { label: string; value: number; max: number }) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-text-muted font-body">{label}</span>
        <span className="font-medium text-text">{value} mg/L</span>
      </div>
      <div className="h-px bg-border overflow-hidden">
        <div
          className="h-full bg-text transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const glass = products.find((p) => p.tier === "glass")!;
  const pet = products.find((p) => p.tier === "pet")!;

  return (
    <>
      {/* Glass Collection */}
      <section id="glass" className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[3/4] relative overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/glass-bottle.jpg"
                alt="Blu glass bottle"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
                Glass Collection
              </p>
              <h1 className="text-4xl md:text-5xl font-light text-text tracking-tight font-heading">
                {glass.name}
              </h1>
              <p className="mt-3 text-text-muted italic font-heading">
                {glass.sizes.map((s) => s.volume).join(" · ")}
              </p>
              <p className="mt-8 text-text-muted leading-relaxed">
                Designed for luxury hospitality and tableside service. Our glass
                collection delivers an uncompromised tasting experience in a bottle
                worthy of the world&apos;s finest venues.
              </p>

              <div className="mt-10">
                <h3 className="text-xs tracking-[0.2em] uppercase text-text mb-5">
                  Tasting Notes
                </h3>
                <ul className="space-y-3">
                  {glass.tastingNotes.map((note) => (
                    <li key={note} className="flex items-center gap-3 text-sm text-text-muted">
                      <span className="w-4 h-px bg-text" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex gap-6">
                <Link
                  href="/trade#samples"
                  className="inline-flex items-center px-8 py-3 text-sm tracking-wide uppercase bg-text text-white hover:opacity-80 transition-opacity"
                >
                  Request Samples
                </Link>
                <Link
                  href={glass.specSheetUrl}
                  className="inline-flex items-center px-8 py-3 text-sm tracking-wide uppercase border border-text text-text hover:bg-text hover:text-white transition-colors"
                >
                  Spec Sheet (PDF)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-border" />
      </div>

      {/* PET Collection */}
      <section id="pet" className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
                PET Collection
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-text tracking-tight font-heading">
                {pet.name}
              </h2>
              <p className="mt-3 text-text-muted italic font-heading">
                {pet.sizes.map((s) => s.volume).join(" · ")}
              </p>
              <p className="mt-8 text-text-muted leading-relaxed">
                Premium hydration for everyday moments. Our PET collection makes
                artesian quality accessible for retail distribution and on-the-go
                consumption without compromise.
              </p>

              <div className="mt-10">
                <h3 className="text-xs tracking-[0.2em] uppercase text-text mb-5">
                  Tasting Notes
                </h3>
                <ul className="space-y-3">
                  {pet.tastingNotes.map((note) => (
                    <li key={note} className="flex items-center gap-3 text-sm text-text-muted">
                      <span className="w-4 h-px bg-text" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex gap-6">
                <Link
                  href="/trade#samples"
                  className="inline-flex items-center px-8 py-3 text-sm tracking-wide uppercase bg-text text-white hover:opacity-80 transition-opacity"
                >
                  Request Samples
                </Link>
                <Link
                  href={pet.specSheetUrl}
                  className="inline-flex items-center px-8 py-3 text-sm tracking-wide uppercase border border-text text-text hover:bg-text hover:text-white transition-colors"
                >
                  Spec Sheet (PDF)
                </Link>
              </div>
            </div>
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/pet-bottle.jpg"
                alt="Blu PET bottle on the beach"
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

      {/* Mineral Profile */}
      <section id="mineral-profile" className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
              Analysis
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-text tracking-tight font-heading">
              Mineral Profile
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Naturally occurring minerals from artesian springs deep beneath the Costa Rican rainforest.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* pH and TDS highlights */}
            <div className="grid grid-cols-2 gap-px bg-border mb-16">
              <div className="text-center py-10 px-6 bg-white">
                <p className="text-5xl font-light text-text font-heading">{glass.mineralProfile.ph}</p>
                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-text-muted">pH Level</p>
                <p className="mt-1 text-sm italic font-heading text-accent">Naturally Alkaline</p>
              </div>
              <div className="text-center py-10 px-6 bg-white">
                <p className="text-5xl font-light text-text font-heading">{glass.mineralProfile.tds}</p>
                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-text-muted">TDS (mg/L)</p>
                <p className="mt-1 text-sm italic font-heading text-accent">Total Dissolved Solids</p>
              </div>
            </div>

            {/* Mineral bars */}
            <div className="space-y-6">
              <MineralBar label="Calcium (Ca)" value={glass.mineralProfile.calcium} max={100} />
              <MineralBar label="Magnesium (Mg)" value={glass.mineralProfile.magnesium} max={50} />
              <MineralBar label="Sodium (Na)" value={glass.mineralProfile.sodium} max={50} />
              <MineralBar label="Potassium (K)" value={glass.mineralProfile.potassium} max={20} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
