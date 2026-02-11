import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Please include a message (at least 10 characters)"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
