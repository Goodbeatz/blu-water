"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
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
        <h3 className="text-2xl font-serif font-light text-text">Message Sent</h3>
        <p className="mt-4 text-sm text-text-muted leading-relaxed">
          Thank you for reaching out. We&apos;ll respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="c-name" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Name *
          </label>
          <input
            id="c-name"
            type="text"
            {...register("name")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="c-email" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Email *
          </label>
          <input
            id="c-email"
            type="email"
            {...register("email")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="c-phone" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Phone
          </label>
          <input
            id="c-phone"
            type="tel"
            {...register("phone")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
        </div>

        <div>
          <label htmlFor="c-subject" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
            Subject
          </label>
          <input
            id="c-subject"
            type="text"
            {...register("subject")}
            className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text"
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className="block text-xs uppercase tracking-wider font-medium text-text-muted mb-2">
          Message *
        </label>
        <textarea
          id="c-message"
          rows={5}
          {...register("message")}
          className="w-full px-5 py-3.5 border border-border rounded-none bg-white text-text text-sm focus:outline-none focus:ring-1 focus:ring-text/20 focus:border-text resize-none"
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3.5 text-sm font-medium tracking-wider uppercase text-white bg-text hover:bg-text-muted rounded-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
