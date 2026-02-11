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
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Trade Partners
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Partner With Blu
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Whether you represent a distribution network, luxury venue, or
              retail chain — we&apos;re ready to support your premium water needs.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-background-alt border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl font-light text-primary">24hr</p>
              <p className="mt-1 text-sm text-text-muted">Sample request response</p>
            </div>
            <div>
              <p className="text-2xl font-light text-primary">48hr</p>
              <p className="mt-1 text-sm text-text-muted">Trade account approval</p>
            </div>
            <div>
              <p className="text-2xl font-light text-primary">Global</p>
              <p className="mt-1 text-sm text-text-muted">Export capability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Request Form */}
      <section id="samples" className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-text tracking-tight">
              Request Samples
            </h2>
            <p className="mt-4 text-text-muted">
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
      <section id="account" className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-text tracking-tight">
              Open a Trade Account
            </h2>
            <p className="mt-4 text-text-muted">
              Apply for wholesale pricing and establish a supply partnership.
            </p>
          </div>
          <TradeApplicationForm />
        </div>
      </section>
    </>
  );
}
