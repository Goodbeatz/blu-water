import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Blu Water's privacy policy detailing how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-neutral prose-sm max-w-none">
        <h1 className="text-3xl font-light text-text tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-sm text-text-muted mb-8">Last updated: February 11, 2026</p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Information We Collect</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          When you submit a form on our website (trade account application, sample request,
          investor inquiry, or general contact), we collect the information you provide, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-text-muted mb-6">
          <li>Name and contact details (email, phone)</li>
          <li>Business name and type</li>
          <li>Shipping address</li>
          <li>Tax ID or business registration number (trade accounts only)</li>
          <li>LinkedIn profile URL (investor inquiries only)</li>
          <li>Any additional information you provide in form messages</li>
        </ul>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-4">We use your information to:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-text-muted mb-6">
          <li>Respond to your inquiries and requests</li>
          <li>Process trade account applications</li>
          <li>Fulfill sample requests</li>
          <li>Share investor materials with qualified parties</li>
          <li>Communicate with you about our products and services</li>
        </ul>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Data Storage</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          Your information is stored securely using Supabase, a managed database service.
          Data is encrypted in transit and at rest. We do not sell or share your information
          with third parties except as necessary to provide our services.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Cookies</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          This website uses only essential cookies required for basic functionality.
          We do not use tracking cookies or third-party analytics cookies.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Your Rights</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          You may request access to, correction of, or deletion of your personal
          information at any time by contacting us at{" "}
          <a href="mailto:team@blu.com" className="text-primary hover:text-primary-light">
            team@blu.com
          </a>.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-4">Contact</h2>
        <p className="text-sm text-text-muted leading-relaxed">
          For questions about this privacy policy, contact us at{" "}
          <a href="mailto:team@blu.com" className="text-primary hover:text-primary-light">
            team@blu.com
          </a>.
        </p>
      </div>
    </section>
  );
}
