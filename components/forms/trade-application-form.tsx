"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tradeApplicationSchema, type TradeApplicationInput } from "@/lib/validations/trade";

export function TradeApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TradeApplicationInput>({
    resolver: zodResolver(tradeApplicationSchema),
  });

  async function onSubmit(data: TradeApplicationInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/trade/apply", {
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
      <div className="text-center py-16">
        <h3 className="text-2xl font-serif font-light text-text">Application Received</h3>
        <p className="mt-4 text-sm text-text-muted leading-relaxed">
          Your trade account application is under review. We&apos;ll respond within 48 hours with pricing details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="ta-business" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Business Name *
          </label>
          <input
            id="ta-business"
            type="text"
            {...register("business_name")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.business_name && <p className="mt-1.5 text-xs text-red-600">{errors.business_name.message}</p>}
        </div>

        <div>
          <label htmlFor="ta-contact" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Contact Name *
          </label>
          <input
            id="ta-contact"
            type="text"
            {...register("contact_name")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.contact_name && <p className="mt-1.5 text-xs text-red-600">{errors.contact_name.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="ta-email" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Email *
          </label>
          <input
            id="ta-email"
            type="email"
            {...register("email")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="ta-phone" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Phone *
          </label>
          <input
            id="ta-phone"
            type="tel"
            {...register("phone")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="ta-type" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Business Type *
          </label>
          <select
            id="ta-type"
            {...register("business_type")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          >
            <option value="">Select type</option>
            <option value="distributor">Distributor</option>
            <option value="hospitality">Hospitality</option>
            <option value="retail">Retail</option>
            <option value="other">Other</option>
          </select>
          {errors.business_type && <p className="mt-1.5 text-xs text-red-600">{errors.business_type.message}</p>}
        </div>

        <div>
          <label htmlFor="ta-volume" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Estimated Monthly Volume *
          </label>
          <select
            id="ta-volume"
            {...register("estimated_volume")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          >
            <option value="">Select range</option>
            <option value="100-500">100 - 500 units</option>
            <option value="500-2000">500 - 2,000 units</option>
            <option value="2000-5000">2,000 - 5,000 units</option>
            <option value="5000+">5,000+ units</option>
          </select>
          {errors.estimated_volume && <p className="mt-1.5 text-xs text-red-600">{errors.estimated_volume.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="ta-tax" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
          Tax ID / Business Registration Number
        </label>
        <input
          id="ta-tax"
          type="text"
          {...register("tax_id")}
          className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
        />
      </div>

      <div>
        <label htmlFor="ta-address" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
          Shipping Address *
        </label>
        <textarea
          id="ta-address"
          rows={3}
          {...register("shipping_address")}
          className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text resize-none"
        />
        {errors.shipping_address && <p className="mt-1.5 text-xs text-red-600">{errors.shipping_address.message}</p>}
      </div>

      <div>
        <label htmlFor="ta-message" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
          Additional Information
        </label>
        <textarea
          id="ta-message"
          rows={3}
          {...register("message")}
          className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3.5 text-sm font-medium tracking-wider uppercase text-white bg-text hover:bg-text-muted rounded-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Apply for Trade Account"}
      </button>
    </form>
  );
}
