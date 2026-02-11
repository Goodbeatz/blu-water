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
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-text-muted">{label}</span>
        <span className="font-medium text-text">{value} mg/L</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all"
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
      <section id="glass" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[3/4] relative bg-secondary/30 rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/glass-bottle.jpg"
                alt="Blu glass bottle"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Glass Collection
              </p>
              <h1 className="text-3xl md:text-4xl font-light text-text tracking-tight">
                {glass.name}
              </h1>
              <p className="mt-2 text-text-muted">
                {glass.sizes.map((s) => s.volume).join(" · ")}
              </p>
              <p className="mt-6 text-text-muted leading-relaxed">
                Designed for luxury hospitality and tableside service. Our glass
                collection delivers an uncompromised tasting experience in a bottle
                worthy of the world&apos;s finest venues.
              </p>

              <div className="mt-8">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-text mb-4">
                  Tasting Notes
                </h3>
                <ul className="space-y-2">
                  {glass.tastingNotes.map((note) => (
                    <li key={note} className="flex items-center gap-3 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/trade#samples"
                  className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded transition-colors"
                >
                  Request Samples
                </Link>
                <Link
                  href={glass.specSheetUrl}
                  className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white rounded transition-colors"
                >
                  Spec Sheet (PDF)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PET Collection */}
      <section id="pet" className="py-24 lg:py-32 bg-background-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                PET Collection
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight">
                {pet.name}
              </h2>
              <p className="mt-2 text-text-muted">
                {pet.sizes.map((s) => s.volume).join(" · ")}
              </p>
              <p className="mt-6 text-text-muted leading-relaxed">
                Premium hydration for everyday moments. Our PET collection makes
                artesian quality accessible for retail distribution and on-the-go
                consumption without compromise.
              </p>

              <div className="mt-8">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-text mb-4">
                  Tasting Notes
                </h3>
                <ul className="space-y-2">
                  {pet.tastingNotes.map((note) => (
                    <li key={note} className="flex items-center gap-3 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/trade#samples"
                  className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded transition-colors"
                >
                  Request Samples
                </Link>
                <Link
                  href={pet.specSheetUrl}
                  className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white rounded transition-colors"
                >
                  Spec Sheet (PDF)
                </Link>
              </div>
            </div>
            <div className="aspect-[3/4] relative bg-secondary/30 rounded-lg overflow-hidden">
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

      {/* Mineral Profile */}
      <section id="mineral-profile" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight">
              Mineral Profile
            </h2>
            <p className="mt-4 text-text-muted">
              Naturally occurring minerals from artesian springs deep beneath the Costa Rican rainforest.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* pH and TDS highlights */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <p className="text-4xl font-light text-primary">{glass.mineralProfile.ph}</p>
                <p className="mt-1 text-sm text-text-muted">pH Level</p>
                <p className="mt-1 text-xs text-accent font-medium">Naturally Alkaline</p>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <p className="text-4xl font-light text-primary">{glass.mineralProfile.tds}</p>
                <p className="mt-1 text-sm text-text-muted">TDS (mg/L)</p>
                <p className="mt-1 text-xs text-accent font-medium">Total Dissolved Solids</p>
              </div>
            </div>

            {/* Mineral bars */}
            <div className="space-y-5">
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
