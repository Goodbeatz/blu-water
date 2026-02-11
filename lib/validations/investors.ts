import { z } from "zod";

export const investorInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  firm: z.string().min(1, "Firm or organization is required"),
  linkedin_url: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  investment_focus: z.string().min(10, "Please describe your investment focus"),
  message: z.string().min(10, "Please include a message"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type InvestorInquiryInput = z.infer<typeof investorInquirySchema>;
