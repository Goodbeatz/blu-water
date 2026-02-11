import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, FileCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Testing",
  description:
    "Blu's commitment to quality through rigorous testing protocols, certifications, and third-party lab verification.",
};

const certifications = [
  {
    icon: ShieldCheck,
    title: "FDA Compliant",
    description: "Meets all U.S. Food and Drug Administration requirements for bottled water.",
  },
  {
    icon: FileCheck,
    title: "Costa Rica Export Certified",
    description: "Full compliance with Costa Rican export regulations and health standards.",
  },
  {
    icon: FlaskConical,
    title: "Third-Party Lab Tested",
    description: "Independent laboratory testing for purity, mineral content, and contaminant screening.",
  },
  {
    icon: Award,
    title: "Source Protection Certified",
    description: "Our aquifer zone within the Costa Rican rainforest is designated as a protected natural resource area.",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
              Quality &amp; Testing
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-text font-heading">
              Trust, Verified
            </h1>
            <p className="mt-8 text-lg text-text-muted leading-relaxed">
              Every bottle carries the assurance of rigorous testing,
              regulatory compliance, and independent verification.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Certifications Grid */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
              Standards
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight font-heading">
              Certifications &amp; Compliance
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Meeting international standards for safety, purity, and quality assurance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="text-center p-10 bg-white"
              >
                <cert.icon className="h-8 w-8 text-text mx-auto mb-5 stroke-[1.5]" />
                <h3 className="text-base font-medium text-text">{cert.title}</h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Testing Protocol */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
                Protocol
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight font-heading">
                Testing Protocol
              </h2>
            </div>

            <div className="space-y-0 border-t border-border">
              <div className="flex gap-8 py-10 border-b border-border">
                <div className="flex-shrink-0 w-10 h-10 bg-text text-white flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-text">Source Monitoring</h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    Continuous monitoring of the artesian source for flow rate,
                    temperature, and baseline mineral composition.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 py-10 border-b border-border">
                <div className="flex-shrink-0 w-10 h-10 bg-text text-white flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-text">In-Line Quality Checks</h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    Real-time analysis during bottling for pH, TDS, turbidity,
                    and microbial safety standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 py-10 border-b border-border">
                <div className="flex-shrink-0 w-10 h-10 bg-text text-white flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-text">Batch Testing</h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    Every production batch undergoes laboratory analysis for full
                    mineral composition and contaminant screening.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 py-10 border-b border-border">
                <div className="flex-shrink-0 w-10 h-10 bg-text text-white flex items-center justify-center text-sm font-medium">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-text">Third-Party Verification</h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    Independent laboratory partners conduct quarterly comprehensive
                    analyses and annual audits of our facility and processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Documentation */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
            Access
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight font-heading">
            Documentation
          </h2>
          <p className="mt-6 text-text-muted leading-relaxed">
            Quality documentation available for qualified trade partners.
            Request access through our trade account application.
          </p>
          <a
            href="/trade"
            className="mt-10 inline-flex items-center px-10 py-3.5 text-sm tracking-wide uppercase bg-text text-white hover:opacity-80 transition-opacity"
          >
            Apply for Trade Account
          </a>
        </div>
      </section>
    </>
  );
}
