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
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Have a question that doesn&apos;t fit our trade or investor forms?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-text mb-3">
                  Email
                </h3>
                <a href="mailto:team@blu.com" className="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors">
                  <Mail className="h-4 w-4" />
                  team@blu.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-text mb-3">
                  For Trade Inquiries
                </h3>
                <p className="text-sm text-text-muted mb-2">
                  Looking to request samples or open a trade account?
                </p>
                <Link href="/trade" className="text-sm text-primary hover:text-primary-light transition-colors">
                  Visit Trade Partners &rarr;
                </Link>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-text mb-3">
                  For Investors
                </h3>
                <p className="text-sm text-text-muted mb-2">
                  Interested in investment opportunities?
                </p>
                <Link href="/investors" className="text-sm text-primary hover:text-primary-light transition-colors">
                  Visit Investors &rarr;
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-light text-text tracking-tight mb-8">
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
