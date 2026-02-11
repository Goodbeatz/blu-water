"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sampleRequestSchema, type SampleRequestInput } from "@/lib/validations/samples";

export function SampleRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleRequestInput>({
    resolver: zodResolver(sampleRequestSchema),
  });

  async function onSubmit(data: SampleRequestInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/samples/request", {
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
        <h3 className="text-2xl font-serif font-light text-text">Thank You</h3>
        <p className="mt-4 text-sm text-text-muted leading-relaxed">
          Your sample request has been received. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Honeypot */}
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="sr-name" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Name *
          </label>
          <input
            id="sr-name"
            type="text"
            {...register("name")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="sr-email" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Email *
          </label>
          <input
            id="sr-email"
            type="email"
            {...register("email")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="sr-phone" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Phone *
          </label>
          <input
            id="sr-phone"
            type="tel"
            {...register("phone")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="sr-company" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Company *
          </label>
          <input
            id="sr-company"
            type="text"
            {...register("company")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.company && <p className="mt-1.5 text-xs text-red-600">{errors.company.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="sr-role" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
          Role / Title
        </label>
        <input
          id="sr-role"
          type="text"
          {...register("role")}
          className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Product Interest *
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 text-sm text-text-muted">
              <input type="checkbox" value="glass" {...register("product_interest")} className="rounded-none border-text" />
              Glass Collection
            </label>
            <label className="flex items-center gap-3 text-sm text-text-muted">
              <input type="checkbox" value="pet" {...register("product_interest")} className="rounded-none border-text" />
              PET Collection
            </label>
          </div>
          {errors.product_interest && (
            <p className="mt-1.5 text-xs text-red-600">{errors.product_interest.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="sr-quantity" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Quantity *
          </label>
          <select
            id="sr-quantity"
            {...register("quantity")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          >
            <option value="">Select quantity</option>
            <option value="6">6 bottles</option>
            <option value="12">12 bottles</option>
            <option value="24">24 bottles</option>
          </select>
          {errors.quantity && <p className="mt-1.5 text-xs text-red-600">{errors.quantity.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="sr-address" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
          Shipping Address *
        </label>
        <textarea
          id="sr-address"
          rows={3}
          {...register("shipping_address")}
          className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text resize-none"
        />
        {errors.shipping_address && (
          <p className="mt-1.5 text-xs text-red-600">{errors.shipping_address.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="sr-reason" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
          Reason for Request *
        </label>
        <textarea
          id="sr-reason"
          rows={3}
          {...register("reason")}
          className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text resize-none"
        />
        {errors.reason && <p className="mt-1.5 text-xs text-red-600">{errors.reason.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3.5 text-sm font-medium tracking-wider uppercase text-white bg-text hover:bg-text-muted rounded-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Request Samples"}
      </button>
    </form>
  );
}
