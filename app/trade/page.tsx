import type { Metadata } from "next";
import { SampleRequestForm } from "@/components/forms/sample-request-form";
import { TradeApplicationForm } from "@/components/forms/trade-application-form";

export const metadata: Metadata = {
  title: "Trade",
  description:
    "Request Blu water samples or open a trade account for wholesale pricing. For distributors, hospitality, and retail partners.",
};

export default function TradePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-t border-text/10 bg-white py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-6">
              Trade Partners
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-text">
              Partner With Blu
            </h1>
            <p className="mt-8 text-lg text-text-muted leading-relaxed max-w-2xl">
              Whether you represent a distribution network, luxury venue, or
              retail chain — we&apos;re ready to support your premium water needs.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 border-t border-border border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-heading text-3xl font-light text-text">24hr</p>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-text-muted">
                Sample request response
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-light text-text">48hr</p>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-text-muted">
                Trade account approval
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-light text-text">Global</p>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-text-muted">
                Export capability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Request Form */}
      <section id="samples" className="py-32 lg:py-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">
              Samples
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-text tracking-tight">
              Request Samples
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Taste the difference. Request a sample shipment for evaluation.
            </p>
          </div>
          <SampleRequestForm />
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <hr className="border-border" />
      </div>

      {/* Trade Account Form */}
      <section id="account" className="py-32 lg:py-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">
              Trade Account
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-text tracking-tight">
              Open a Trade Account
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Apply for wholesale pricing and establish a supply partnership.
            </p>
          </div>
          <TradeApplicationForm />
        </div>
      </section>
    </>
  );
}
