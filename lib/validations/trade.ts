import { z } from "zod";

export const tradeApplicationSchema = z.object({
  business_name: z.string().min(1, "Business name is required"),
  contact_name: z.string().min(1, "Contact name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  business_type: z.enum(["distributor", "hospitality", "retail", "other"], {
    message: "Please select a business type",
  }),
  tax_id: z.string().optional(),
  estimated_volume: z.string().min(1, "Please select estimated volume"),
  shipping_address: z.string().min(10, "Please enter your full shipping address"),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type TradeApplicationInput = z.infer<typeof tradeApplicationSchema>;
