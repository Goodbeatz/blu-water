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
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Quality &amp; Testing
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Trust, Verified
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Every bottle carries the assurance of rigorous testing,
              regulatory compliance, and independent verification.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-text tracking-tight">
              Certifications &amp; Compliance
            </h2>
            <p className="mt-4 text-text-muted">
              Meeting international standards for safety, purity, and quality assurance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="text-center p-8 bg-secondary/30 rounded-lg"
              >
                <cert.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-base font-medium text-text">{cert.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Protocol */}
      <section className="py-24 lg:py-32 bg-background-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-text tracking-tight text-center mb-12">
              Testing Protocol
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-text">Source Monitoring</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    Continuous monitoring of the artesian source for flow rate,
                    temperature, and baseline mineral composition.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-text">In-Line Quality Checks</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    Real-time analysis during bottling for pH, TDS, turbidity,
                    and microbial safety standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-text">Batch Testing</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    Every production batch undergoes laboratory analysis for full
                    mineral composition and contaminant screening.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-text">Third-Party Verification</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    Independent laboratory partners conduct quarterly comprehensive
                    analyses and annual audits of our facility and processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-light text-text tracking-tight">
            Documentation
          </h2>
          <p className="mt-4 text-text-muted">
            Quality documentation available for qualified trade partners.
            Request access through our trade account application.
          </p>
          <a
            href="/trade"
            className="mt-8 inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded transition-colors"
          >
            Apply for Trade Account
          </a>
        </div>
      </section>
    </>
  );
}
