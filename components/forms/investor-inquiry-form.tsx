"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { investorInquirySchema, type InvestorInquiryInput } from "@/lib/validations/investors";

export function InvestorInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvestorInquiryInput>({
    resolver: zodResolver(investorInquirySchema),
  });

  async function onSubmit(data: InvestorInquiryInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/investors/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-light text-text">Thank You</h3>
        <p className="mt-4 text-text-muted">
          We&apos;ve received your inquiry. A member of our team will review and send
          the investor overview materials shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inv-name" className="block text-sm font-medium text-text mb-1.5">
            Name *
          </label>
          <input
            id="inv-name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-2.5 border border-border rounded bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="inv-email" className="block text-sm font-medium text-text mb-1.5">
            Email *
          </label>
          <input
            id="inv-email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-2.5 border border-border rounded bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inv-firm" className="block text-sm font-medium text-text mb-1.5">
            Firm / Organization *
          </label>
          <input
            id="inv-firm"
            type="text"
            {...register("firm")}
            className="w-full px-4 py-2.5 border border-border rounded bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          {errors.firm && <p className="mt-1 text-xs text-red-600">{errors.firm.message}</p>}
        </div>

        <div>
          <label htmlFor="inv-linkedin" className="block text-sm font-medium text-text mb-1.5">
            LinkedIn Profile URL
          </label>
          <input
            id="inv-linkedin"
            type="url"
            {...register("linkedin_url")}
            placeholder="https://linkedin.com/in/..."
            className="w-full px-4 py-2.5 border border-border rounded bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          {errors.linkedin_url && <p className="mt-1 text-xs text-red-600">{errors.linkedin_url.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="inv-focus" className="block text-sm font-medium text-text mb-1.5">
          Investment Focus *
        </label>
        <textarea
          id="inv-focus"
          rows={3}
          {...register("investment_focus")}
          placeholder="Describe your investment thesis and areas of focus..."
          className="w-full px-4 py-2.5 border border-border rounded bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
        />
        {errors.investment_focus && <p className="mt-1 text-xs text-red-600">{errors.investment_focus.message}</p>}
      </div>

      <div>
        <label htmlFor="inv-message" className="block text-sm font-medium text-text mb-1.5">
          Message *
        </label>
        <textarea
          id="inv-message"
          rows={3}
          {...register("message")}
          className="w-full px-4 py-2.5 border border-border rounded bg-white text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Request Investor Overview"}
      </button>
    </form>
  );
}
