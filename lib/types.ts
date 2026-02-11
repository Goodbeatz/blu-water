export interface Product {
  id: string;
  tier: "glass" | "pet";
  name: string;
  sizes: Array<{ volume: string; unitPrice?: number }>;
  imageUrl: string;
  tastingNotes: string[];
  mineralProfile: {
    ph: number;
    tds: number;
    calcium: number;
    magnesium: number;
    sodium: number;
    potassium: number;
  };
  specSheetUrl: string;
}

export interface TradeApplication {
  id: string;
  business_name: string;
  contact_name: string;
  email: string;
  phone: string;
  business_type: "distributor" | "hospitality" | "retail" | "other";
  tax_id?: string;
  estimated_volume: string;
  shipping_address: string;
  message?: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  updated_at: string;
}

export interface SampleRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role?: string;
  product_interest: Array<"glass" | "pet">;
  quantity: number;
  shipping_address: string;
  reason: string;
  status: "pending" | "fulfilled" | "declined";
  created_at: string;
  updated_at: string;
}

export interface InvestorInquiry {
  id: string;
  name: string;
  email: string;
  firm: string;
  linkedin_url?: string;
  investment_focus: string;
  message: string;
  status: "pending" | "sent" | "declined";
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  created_at: string;
}
