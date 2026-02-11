import { z } from "zod";

export const sampleRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(1, "Company name is required"),
  role: z.string().optional(),
  product_interest: z.array(z.enum(["glass", "pet"])).min(1, "Please select at least one product"),
  quantity: z.string().min(1, "Please select a quantity"),
  shipping_address: z.string().min(10, "Please enter your full shipping address"),
  reason: z.string().min(10, "Please tell us why you're requesting samples"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type SampleRequestInput = z.infer<typeof sampleRequestSchema>;
