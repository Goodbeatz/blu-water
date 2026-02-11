import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using the Blu Water website.",
};

export default function TermsPage() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-neutral prose-sm max-w-none">
        <h1 className="text-3xl font-light text-text tracking-tight mb-8">Terms of Use</h1>
        <p className="text-sm text-text-muted mb-8">Last updated: February 11, 2026</p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Acceptance of Terms</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          By accessing and using the Blu Water website, you accept and agree to be bound
          by these terms of use. If you do not agree, please do not use this website.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Use of Website</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          This website is provided for informational purposes and to facilitate business
          inquiries. You agree to use the website only for lawful purposes and in
          accordance with these terms.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Intellectual Property</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          All content on this website, including text, images, logos, and design, is the
          property of Blu Premium Artesian Water and is protected by applicable intellectual
          property laws. You may not reproduce, distribute, or create derivative works
          without our written consent.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Form Submissions</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          By submitting information through our forms, you confirm that the information
          provided is accurate and that you are authorized to share it. We reserve the
          right to decline any application or request at our discretion.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Disclaimer</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          This website and its content are provided &quot;as is&quot; without warranties
          of any kind. We do not guarantee the accuracy, completeness, or timeliness
          of information presented.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          Blu Premium Artesian Water shall not be liable for any direct, indirect,
          incidental, or consequential damages arising from your use of this website.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Changes to Terms</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          We reserve the right to update these terms at any time. Changes will be
          posted on this page with an updated date.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Contact</h2>
        <p className="text-sm text-text-muted leading-relaxed">
          For questions about these terms, contact us at{" "}
          <a href="mailto:team@blu.com" className="text-primary hover:text-primary-light">
            team@blu.com
          </a>.
        </p>
      </div>
    </section>
  );
}
