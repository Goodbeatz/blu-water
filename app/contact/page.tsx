import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Blu Water. General inquiries, press, and partnership questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-t border-text/10 bg-white py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-6">
              Contact
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-text">
              Get in Touch
            </h1>
            <p className="mt-8 text-lg text-text-muted leading-relaxed max-w-2xl">
              Have a question that doesn&apos;t fit our trade or investor forms?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-text mb-4">
                  Email
                </h3>
                <a
                  href="mailto:team@blu.com"
                  className="inline-flex items-center gap-2 text-sm text-text border-b border-text pb-0.5 hover:opacity-60 transition-opacity"
                >
                  <Mail className="h-4 w-4" />
                  team@blu.com
                </a>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-text mb-4">
                  For Trade Inquiries
                </h3>
                <p className="text-sm text-text-muted mb-3">
                  Looking to request samples or open a trade account?
                </p>
                <Link
                  href="/trade"
                  className="text-sm text-text border-b border-text pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Visit Trade Partners &rarr;
                </Link>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-text mb-4">
                  For Investors
                </h3>
                <p className="text-sm text-text-muted mb-3">
                  Interested in investment opportunities?
                </p>
                <Link
                  href="/investors"
                  className="text-sm text-text border-b border-text pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Visit Investors &rarr;
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">
                Message
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-text tracking-tight mb-10">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
