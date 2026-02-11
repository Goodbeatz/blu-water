# Blu Water Website - Product Requirements Document

**Project Name:** Blu Premium Artesian Water Website  
**Project Type:** Micro Business / Investor-Ready Web Presence  
**Launch Deadline:** February 11, 2026 (TOMORROW)  
**Expected Traffic:** 100-1,000 monthly visitors initially (small business scale)  
**Data Sensitivity:** Moderate (contact forms, trade account applications)  

**Last Updated:** February 10, 2026  
**Version:** 1.0

---

## 1. Project Overview

### Core Value Proposition
Blu is an emerging premium spring water brand sourcing naturally alkaline artesian water from protected mountain terrain in Costa Rica. This website serves as the institutional brand presence for:
- **Export readiness**: Signal global distribution capability
- **Investor confidence**: Professional, scalable brand presence
- **Hospitality partnerships**: B2B gateway for high-end venues
- **Trade relationships**: Distributor and retail buyer acquisition

### Project Objectives
1. Launch investor-safe, institutional website by February 11, 2026
2. Enable sample requests and trade account creation with pricing access
3. Establish premium brand perception (10x larger than current reality)
4. Support frequent content updates (Instagram integration, news, updates)
5. Create clear funnel from visitor → sample request → trade account → partnership

### Design Philosophy
- **Institutional over startup**: Restraint and confidence
- **Cinematic**: Large imagery, minimal text, emotional resonance
- **Hospitality-grade**: Premium feel worthy of luxury hotels/restaurants
- **Provenance-driven**: Emphasize geographic rarity and source protection

---

## 2. Project Scope and Scale

### User Base
- **Initial:** 100-1,000 monthly visitors
- **Growth projection:** 5,000+ within 12 months
- **Primary traffic sources:** Direct (investors), organic search, social media (Instagram)

### Project Classification
- **Type:** Small business website with B2B functionality
- **Not enterprise:** No need for enterprise-grade infrastructure
- **Scalability approach:** Start simple, upgrade as needed

### Data Sensitivity
- **Moderate sensitivity data:**
  - Contact form submissions (name, email, phone, company)
  - Trade account applications (business details, tax ID, shipping address)
  - Sample request forms (delivery addresses)
- **No payment processing:** Trade accounts receive pricing after approval
- **No user authentication:** Admin panel for reviewing submissions only

### Timeline
- **Launch:** February 11, 2026 (24 hours from now)
- **MVP Focus:** Core pages with sample/trade account forms
- **Phase 2** (post-launch): Instagram feed integration, blog/news section

---

## 3. Target Audience

### Primary Personas

#### 1. Premium Distributors
- **Profile:** Regional distributors for high-end food/beverage
- **Needs:** Product specs, wholesale pricing, minimum orders, certifications
- **Actions:** Request samples, open trade account, contact for partnership
- **Pain points:** Want verified source quality, regulatory compliance proof

#### 2. Hospitality Buyers
- **Profile:** Purchasing managers for luxury hotels, high-end restaurants
- **Needs:** Premium story, guest-facing brand appeal, reliable supply
- **Actions:** Request samples for tasting, evaluate pricing, establish account
- **Pain points:** Need assured supply chain, brand that enhances their positioning

#### 3. Investors
- **Profile:** Beverage industry investors, CPG venture capital
- **Needs:** Brand legitimacy, market positioning, growth potential signals
- **Actions:** Review overview materials, request investor deck, schedule calls
- **Pain points:** Want proof of concept, professional execution

#### 4. Retail Buyers
- **Profile:** Specialty grocery, gourmet markets, high-end retail
- **Needs:** Shelf appeal, margin structure, brand differentiation
- **Actions:** Request samples, evaluate pricing, open account
- **Pain points:** Shelf space is limited, need compelling brand story

---

## 4. Core Features and Functionality

### MVP Features (Launch Feb 11, 2026)

#### Feature 1: Home Page Hero & Brand Narrative
**Description:**  
Cinematic hero section with mountain/water imagery that immediately signals global ambition and premium positioning.

**User Stories:**
- As a visitor, I want to instantly understand this is a premium, export-ready water brand
- As an investor, I want to see institutional credibility within 3 seconds
- As a buyer, I want to feel this brand elevates my venue/offering

**Acceptance Criteria:**
- [ ] Full-viewport hero with high-res Costa Rica mountain imagery
- [ ] Minimal headline: "Naturally Alkaline. Artesian Source. Bottled at Origin."
- [ ] Subtle scroll indicator (no aggressive CTAs in hero)
- [ ] Proof strip section: "Artesian Source | Naturally Alkaline | Bottled at Origin"
- [ ] Mobile-optimized with equal impact to desktop
- [ ] Maximum 3-second load time for hero section

**Technical Considerations:**
- Use Next.js Image component for optimization
- Lazy load below-the-fold content
- Implement blur placeholder for hero image
- Consider using Cloudinary or Vercel Image Optimization

---

#### Feature 2: Product Showcase (Glass & PET)
**Description:**  
Separate, premium presentation for glass (hero tier) and PET (secondary but premium) bottles with tasting notes and mineral profile.

**User Stories:**
- As a hospitality buyer, I want to understand the premium glass option for tableside service
- As a distributor, I want to see PET options for volume/retail
- As a consumer, I want to understand what makes this water special

**Acceptance Criteria:**
- [ ] Dedicated section for Glass bottles with lifestyle imagery
- [ ] Dedicated section for PET bottles with use-case focus
- [ ] Tasting notes UI component (visual, not just text list)
- [ ] Mineral profile data visualization (pH, TDS, mineral composition)
- [ ] Bottle size specifications (330ml, 500ml, 750ml, etc.)
- [ ] Download spec sheets (PDF) for each product tier

**Technical Considerations:**
- Create reusable `ProductCard` component
- Use shadcn/ui Card and Tabs components
- Implement data-driven mineral profile chart (Recharts or similar)
- Store product data in structured JSON for easy updates

**Data Model:**
```typescript
interface Product {
  id: string;
  tier: 'glass' | 'pet';
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
```

---

#### Feature 3: Source Story Page
**Description:**  
Make the water feel geographically rare and protected. Emphasize Costa Rica mountain terrain, artesian purity, and bottling-at-source.

**User Stories:**
- As an investor, I want to understand supply defensibility
- As a buyer, I want a compelling story to tell my customers
- As a consumer, I want to feel connected to the source

**Acceptance Criteria:**
- [ ] Large map visual showing Costa Rica location
- [ ] Imagery: mountains, mist, natural landscape (from Instagram)
- [ ] Story sections: "Protected Terrain" / "Artesian Purity" / "Bottled at Origin"
- [ ] No generic stock photos - only source-specific imagery
- [ ] Maximum 500 words total copy (restraint is luxury)
- [ ] Mobile-friendly layout

**Technical Considerations:**
- Use Mapbox or Google Maps for interactive map
- Implement scroll-triggered image reveals
- Lazy load images below fold

---

#### Feature 4: Quality & Testing Page
**Description:**  
Signal regulatory competence without overwhelming. Show certifications, testing protocols, and quality assurance.

**User Stories:**
- As a distributor, I need proof of regulatory compliance
- As a hospitality buyer, I need assurance of consistent quality
- As an investor, I want to see operational maturity

**Acceptance Criteria:**
- [ ] Certifications display (FDA, local Costa Rica, export permits)
- [ ] Testing frequency and protocols (brief, not exhaustive)
- [ ] Third-party lab partnerships mentioned
- [ ] Quality seals/badges visually prominent
- [ ] Downloadable quality documentation (PDF)
- [ ] Avoid scientific jargon - keep approachable

**Technical Considerations:**
- Grid layout for certification badges
- PDF hosting via Vercel Blob or similar
- `CertificationBadge` reusable component

---

#### Feature 5: Trade Account System
**Description:**  
Form for distributors, hospitality, and retail buyers to request access to wholesale pricing and open trade accounts.

**User Stories:**
- As a distributor, I want to request pricing and minimum order quantities
- As a buyer, I want to establish an account to place orders
- As Blu admin, I want to review and approve applications before sharing pricing

**Acceptance Criteria:**
- [ ] Trade account application form with fields:
  - Business name (required)
  - Contact name (required)
  - Email (required, validated)
  - Phone (required)
  - Business type (dropdown: Distributor, Hospitality, Retail, Other)
  - Tax ID / Business registration number
  - Estimated monthly order volume (dropdown ranges)
  - Shipping address (multi-line)
  - Message / Additional information (optional)
- [ ] Form submission sends email to Blu admin
- [ ] Auto-reply email to applicant confirming receipt
- [ ] Success page after submission
- [ ] Validation: email format, required fields
- [ ] Honeypot spam protection
- [ ] Rate limiting (max 5 submissions per IP per day)

**API Endpoints:**
- `POST /api/trade/apply` - Submit trade account application

**Email Flow:**
1. **To Admin:** "New Trade Account Application from [Business Name]"
2. **To Applicant:** "Your Blu Trade Account Application - Next Steps"

**Technical Considerations:**
- Use React Hook Form for form state
- Zod for validation schema
- Resend for transactional emails
- Store submissions in Supabase `trade_applications` table
- Admin can review via Supabase dashboard (no custom admin panel for MVP)

**Data Model:**
```typescript
interface TradeApplication {
  id: string;
  business_name: string;
  contact_name: string;
  email: string;
  phone: string;
  business_type: 'distributor' | 'hospitality' | 'retail' | 'other';
  tax_id?: string;
  estimated_volume: string;
  shipping_address: string;
  message?: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: timestamp;
  updated_at: timestamp;
}
```

---

#### Feature 6: Sample Request System
**Description:**  
Allow potential buyers to request product samples (glass and/or PET).

**User Stories:**
- As a buyer, I want to taste the product before committing
- As a distributor, I want to test market reception
- As Blu admin, I want to qualify leads before shipping samples

**Acceptance Criteria:**
- [ ] Sample request form with fields:
  - Name (required)
  - Email (required, validated)
  - Phone (required)
  - Company (required)
  - Role/Title
  - Product interest (checkboxes: Glass, PET, Both)
  - Quantity needed (dropdown: 6, 12, 24 bottles)
  - Shipping address (multi-line, required)
  - Reason for request (textarea, required)
- [ ] Form submission sends email to Blu admin
- [ ] Auto-reply email to requester
- [ ] Success page with "Next Steps" messaging
- [ ] Validation and spam protection
- [ ] Rate limiting

**API Endpoints:**
- `POST /api/samples/request` - Submit sample request

**Email Flow:**
1. **To Admin:** "New Sample Request from [Name] at [Company]"
2. **To Requester:** "Your Blu Sample Request Received"

**Technical Considerations:**
- Same tech stack as trade account form
- Store submissions in Supabase `sample_requests` table

**Data Model:**
```typescript
interface SampleRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role?: string;
  product_interest: Array<'glass' | 'pet'>;
  quantity: number;
  shipping_address: string;
  reason: string;
  status: 'pending' | 'fulfilled' | 'declined';
  created_at: timestamp;
  updated_at: timestamp;
}
```

---

#### Feature 7: Investor Overview Request
**Description:**  
Controlled CTA for serious investor inquiries without publishing confidential materials.

**User Stories:**
- As an investor, I want to request detailed business overview
- As Blu, I want to qualify investors before sharing sensitive docs
- As a founder, I want to track investor interest

**Acceptance Criteria:**
- [ ] Dedicated "For Partners / Investors" page
- [ ] Professional layout explaining brand positioning
- [ ] CTA: "Request Investor Overview"
- [ ] Form fields:
  - Name (required)
  - Email (required)
  - Firm/Organization (required)
  - LinkedIn profile URL
  - Investment focus (textarea)
  - Message (textarea)
- [ ] Email notification to Blu admin
- [ ] Auto-reply: "Thank you for your interest"
- [ ] No immediate document download (human review required)

**API Endpoints:**
- `POST /api/investors/request` - Submit investor inquiry

**Technical Considerations:**
- Similar form implementation to trade/samples
- Store in Supabase `investor_inquiries` table

**Data Model:**
```typescript
interface InvestorInquiry {
  id: string;
  name: string;
  email: string;
  firm: string;
  linkedin_url?: string;
  investment_focus: string;
  message: string;
  status: 'pending' | 'sent' | 'declined';
  created_at: timestamp;
  updated_at: timestamp;
}
```

---

#### Feature 8: Sustainability Page
**Description:**  
Brief, confident sustainability messaging (no greenwashing, no excessive detail).

**User Stories:**
- As a conscious buyer, I want to know Blu's environmental impact
- As a hospitality venue, I want to align with sustainable brands
- As an investor, I want to see ESG awareness

**Acceptance Criteria:**
- [ ] Bottled-at-source reduces transport emissions
- [ ] Protected source area conservation
- [ ] Glass bottle recyclability emphasis
- [ ] Maximum 300 words
- [ ] Imagery: natural landscape, glass bottles
- [ ] No excessive certifications or claims (keep it simple)

**Technical Considerations:**
- Static content page
- Can be markdown-based for easy updates

---

#### Feature 9: Contact & General Inquiry Form
**Description:**  
General contact form for inquiries that don't fit trade/samples/investor categories.

**Acceptance Criteria:**
- [ ] Contact form fields:
  - Name, Email, Phone
  - Subject (dropdown or text)
  - Message
- [ ] Email to Blu admin
- [ ] Auto-reply to sender
- [ ] Success confirmation

**API Endpoints:**
- `POST /api/contact` - General inquiry submission

---

### Post-MVP Features (Phase 2 - Post-Launch)

#### Instagram Feed Integration
- Pull recent posts from @blu.agua.alcalina
- Display 6-9 most recent posts on homepage
- Link to full Instagram profile
- Use Instagram Basic Display API or third-party service

#### News/Updates Section
- Blog-style layout for company updates
- Filterable by category: Press, Partnerships, Launches
- Markdown-based content management
- SEO optimization for each post

#### Enhanced Analytics
- Google Analytics 4 integration
- Form conversion tracking
- UTM parameter support for investor/partner tracking

#### Content Management
- Consider Sanity or Contentful for non-technical content updates
- Or simple markdown files in repo for developer updates

---

## 5. Technical Stack Recommendations

### Frontend Framework
**Next.js 15.5.12** (Latest Stable)
- **Why:** Server-side rendering for SEO, fast static generation, optimal for marketing sites
- **Performance:** Automatic code splitting, image optimization
- **Deployment:** Native Vercel integration (fastest deployment)

### UI Framework & Styling
**React 19.2.4** (Latest Stable)
- **Why:** Concurrent features, improved performance
- **Note:** Fully compatible with Next.js 15.5

**Tailwind CSS 4.1.18** (Latest Stable)
- **Why:** Utility-first, minimal CSS bundle, rapid development
- **v4 Benefits:** Faster builds, CSS layers, automatic content detection
- **Design tokens:** Define in `@theme` directive

**shadcn/ui** (CLI-based component system)
- **Why:** Copy/paste components into codebase (you own the code)
- **Components needed:** Button, Card, Form, Input, Textarea, Select, Dialog, Tabs
- **Installation:** `npx shadcn@latest init`
- **Style:** Use "New York" style (cleaner for institutional brand)

### Language
**TypeScript 5.9.x** (Latest Stable)
- **Why:** Type safety, better DX, catches errors pre-deployment
- **Note:** v6.0 and v7.0 coming soon but stick with 5.9 for stability

### Database & Backend
**Supabase** (PostgreSQL-based)
- **Why:** Managed database, auth (if needed later), real-time subscriptions
- **Free tier:** 500MB database, 2GB bandwidth (sufficient for MVP)
- **Tables needed:** `trade_applications`, `sample_requests`, `investor_inquiries`, `contact_submissions`

### Email Service
**Resend**
- **Why:** Modern email API, generous free tier (100 emails/day), excellent DX
- **Use cases:** Form notifications, auto-replies
- **Alternative:** SendGrid, Postmark (if higher volume needed)

### Image Hosting & Optimization
**Vercel Image Optimization** (built-in)
- **Why:** Automatic resizing, format conversion, CDN delivery
- **Fallback:** Cloudinary (if custom transformations needed)

### Deployment & Hosting
**Vercel**
- **Why:** Built by Next.js creators, zero-config deployment, edge network
- **Features:** Preview deployments, automatic HTTPS, analytics
- **Timeline:** Push to deploy (< 2 minutes from commit to live)

### Forms & Validation
**React Hook Form 7.x**
- **Why:** Performant, minimal re-renders, great DX
**Zod 3.x**
- **Why:** TypeScript-first schema validation, runtime type checking

### Analytics (Post-Launch)
**Google Analytics 4** or **Vercel Analytics**
- **Why:** Track conversions, form submissions, traffic sources

---

## 6. Dependencies and Versions

**Last Updated:** February 10, 2026  
**Research Date:** February 10, 2026

### Core Framework
- **Next.js:** `15.5.12` (latest stable, released Jan 29, 2026)
- **React:** `19.2.4` (latest stable, includes concurrent features)
- **React DOM:** `19.2.4` (must match React version)
- **TypeScript:** `5.9.x` (latest stable, avoid 6.0/7.0 beta for now)

### Styling & UI
- **Tailwind CSS:** `4.1.18` (latest stable, v4 with CSS layers)
- **@tailwindcss/vite:** `4.1.18` (if using Vite, else use PostCSS)
- **shadcn/ui:** CLI-based (no package version, use `npx shadcn@latest`)
- **Radix UI:** `radix-ui` unified package (for shadcn components)
- **Lucide React:** `^0.460.0` (icons)

### Forms & Validation
- **React Hook Form:** `^7.54.0`
- **Zod:** `^3.24.1`
- **@hookform/resolvers:** `^3.9.1` (for Zod integration)

### Database & Backend
- **@supabase/supabase-js:** `^2.46.2`

### Email
- **Resend:** `^4.0.1`

### Development Tools
- **ESLint:** `^8.57.0` (Next.js config includes this)
- **Prettier:** `^3.4.2` (code formatting)
- **@types/node:** `^22.10.2`
- **@types/react:** `^19.0.6`
- **@types/react-dom:** `^19.0.3`

### Compatibility Notes
- **Next.js 15.5 + React 19.2:** Fully compatible
- **Tailwind v4:** Breaking changes from v3, use upgrade tool if migrating
- **shadcn/ui:** Works with both Tailwind v3 and v4
- **TypeScript 5.9:** Stable, avoid 6.0/7.0 native previews for production

### Version Sources
- All versions verified via npm registry, official documentation, and GitHub releases
- Next.js: https://github.com/vercel/next.js/releases
- React: https://github.com/facebook/react/releases
- Tailwind CSS: https://github.com/tailwindlabs/tailwindcss/releases
- TypeScript: https://www.typescriptlang.org/docs/handbook/release-notes/

---

## 7. Data Architecture

### Database Tables (Supabase PostgreSQL)

#### Table: `trade_applications`
```sql
CREATE TABLE trade_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_type TEXT NOT NULL CHECK (business_type IN ('distributor', 'hospitality', 'retail', 'other')),
  tax_id TEXT,
  estimated_volume TEXT NOT NULL,
  shipping_address TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for admin queries
CREATE INDEX idx_trade_applications_status ON trade_applications(status);
CREATE INDEX idx_trade_applications_created_at ON trade_applications(created_at DESC);
```

#### Table: `sample_requests`
```sql
CREATE TABLE sample_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT,
  product_interest TEXT[] NOT NULL, -- Array of 'glass', 'pet'
  quantity INTEGER NOT NULL,
  shipping_address TEXT NOT NULL,
  reason TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'fulfilled', 'declined')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_sample_requests_status ON sample_requests(status);
CREATE INDEX idx_sample_requests_created_at ON sample_requests(created_at DESC);
```

#### Table: `investor_inquiries`
```sql
CREATE TABLE investor_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  firm TEXT NOT NULL,
  linkedin_url TEXT,
  investment_focus TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'declined')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_investor_inquiries_status ON investor_inquiries(status);
CREATE INDEX idx_investor_inquiries_created_at ON investor_inquiries(created_at DESC);
```

#### Table: `contact_submissions`
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
```

### Data Flow

1. **User submits form** → Client-side validation (Zod schema)
2. **POST to API route** → `/api/trade/apply`, `/api/samples/request`, etc.
3. **Server-side validation** → Re-validate with Zod, honeypot check, rate limit
4. **Database insert** → Supabase client inserts record
5. **Email notifications** → Resend API sends admin notification + user auto-reply
6. **Response to client** → Success/error status
7. **Admin review** → Access Supabase dashboard, update status manually

---

## 8. User Interface and Experience

### Design Principles
1. **Luxury = Restraint**
   - Abundant whitespace
   - Minimal copy (maximum 3 sentences per section)
   - Large, high-quality imagery
   - No cluttered layouts

2. **Institutional Credibility**
   - Professional typography (Inter, Helvetica, or similar)
   - Muted color palette (blues, grays, whites)
   - Avoid bright colors, gradients, or playful elements
   - Clean, grid-based layouts

3. **Cinematic Feel**
   - Full-bleed hero images
   - Scroll-triggered animations (subtle, tasteful)
   - Video backgrounds (optional, if performance allows)
   - Imagery focus: mountains, water movement, glass bottles, mist

4. **Mobile-First**
   - 60%+ of traffic will be mobile
   - Touch-friendly form inputs
   - Readable font sizes (16px+ body text)
   - Fast load times on mobile networks

### Key User Flows

#### Flow 1: Hospitality Buyer → Sample Request
1. Land on homepage → Scroll to "Trusted by premium venues"
2. Click "Request Samples" CTA
3. Fill sample request form (30 seconds)
4. Submit → Success page: "We'll be in touch within 24 hours"
5. Receive auto-reply email with brand story PDF

#### Flow 2: Distributor → Trade Account
1. Land on homepage or Trade page
2. Review product specs, pricing tiers (without actual prices)
3. Click "Open Trade Account" CTA
4. Fill trade application form (60-90 seconds)
5. Submit → Success page: "Application under review"
6. Receive auto-reply email: "We'll respond within 48 hours with pricing"

#### Flow 3: Investor → Overview Request
1. Land on homepage → See "For Partners & Investors" in nav
2. Click to Investor page
3. Review high-level brand positioning
4. Click "Request Investor Overview" CTA
5. Fill inquiry form (LinkedIn, investment focus, etc.)
6. Submit → Success page: "We'll send materials shortly"
7. Blu admin manually emails investor deck

### Wireframe References
- **Homepage:** Hero → Proof strip → Product preview → Source teaser → Trade CTA → Sustainability → Investor teaser
- **Product Page:** Glass hero section → PET section → Mineral profile table → Spec sheet downloads
- **Trade Page:** B2B value props → "Request Samples" + "Open Account" CTAs side-by-side
- **Source Page:** Map → Imagery gallery → Story sections (3-4 max)

### Accessibility
- **WCAG 2.1 Level AA compliance**
  - Color contrast ratios: 4.5:1 for text
  - Keyboard navigation for all interactive elements
  - ARIA labels for form fields
  - Focus indicators on buttons/links
- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Alt text** for all images (descriptive, not keyword-stuffed)

---

## 9. Security and Privacy

### Security Level: **Small Business / Moderate Sensitivity**

Given the project scale (micro business, non-sensitive data), security should be **appropriate but not over-engineered**.

#### Authentication
- **No user authentication required** for MVP
- Admin access: Supabase dashboard (built-in auth)
- Future: Add admin panel with email/password auth (NextAuth.js or Clerk)

#### Form Security
1. **Input Validation**
   - Client-side: Zod schemas
   - Server-side: Re-validate all inputs with same Zod schemas
   - Sanitize all inputs before database insertion
   
2. **Spam Protection**
   - Honeypot field (hidden, if filled = spam)
   - Rate limiting: Max 5 form submissions per IP per day
   - Consider adding Cloudflare Turnstile (free, privacy-friendly CAPTCHA alternative)

3. **Email Validation**
   - Regex validation on client + server
   - Consider email verification for trade accounts (Phase 2)

#### Data Protection
1. **HTTPS Only**
   - Vercel provides automatic HTTPS
   - Enforce HTTPS redirects in `next.config.js`

2. **Environment Variables**
   - Store API keys in `.env.local` (local dev)
   - Store in Vercel environment variables (production)
   - Never commit `.env.local` to git

3. **Database Security**
   - Supabase Row Level Security (RLS) policies
   - API endpoints use service role key (not anon key)
   - No direct database access from client

4. **Data Retention**
   - No automatic deletion (small volume)
   - Manual cleanup via Supabase dashboard as needed
   - Privacy policy states data retention practices

#### GDPR/Privacy Compliance
- **Privacy Policy page** (required)
  - What data is collected (contact info, business details)
  - How data is used (respond to inquiries, process orders)
  - Data storage location (Supabase servers in US/EU region)
  - User rights (request deletion)
- **Cookie Consent** (simple banner)
  - Only essential cookies for session management
  - No tracking cookies (Google Analytics is optional, post-launch)
- **Terms of Use page** (recommended)
  - Website usage terms
  - No warranties or guarantees

#### Rate Limiting Implementation
```typescript
// middleware.ts or API route
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 d"), // 5 requests per day
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return new Response("Too many requests", { status: 429 });
  }
  
  // Process form submission
}
```

**Alternative (Simpler):** Use Vercel's built-in rate limiting for Pro plan, or implement IP-based tracking in Supabase.

---

## 10. Third-Party Integrations

### Critical for MVP

#### Supabase
- **Purpose:** Database, API backend
- **Authentication:** Service role key (server-side only)
- **Rate Limits:** Free tier allows 500MB database, 2GB bandwidth
- **Cost:** $0/month for MVP (upgrade to $25/month when traffic grows)

#### Resend
- **Purpose:** Transactional emails
- **Authentication:** API key (server-side)
- **Rate Limits:** Free tier = 100 emails/day, 3,000/month
- **Cost:** $0/month for MVP ($20/month for 10k emails)
- **Email Templates:** Use React Email for HTML email templates

#### Vercel
- **Purpose:** Hosting, deployments, edge functions
- **Authentication:** GitHub integration (auto-deploy on push)
- **Rate Limits:** Hobby plan = unlimited bandwidth (fair use)
- **Cost:** $0/month for MVP (upgrade to $20/month Pro if needed)

### Optional / Post-Launch

#### Instagram Basic Display API
- **Purpose:** Pull recent posts from @blu.agua.alcalina
- **Authentication:** OAuth token (manual refresh every 60 days)
- **Alternative:** Use third-party services like SnapWidget, Curator.io

#### Google Analytics 4
- **Purpose:** Traffic analytics, conversion tracking
- **Privacy:** Requires cookie consent
- **Cost:** Free

#### Cloudflare Turnstile
- **Purpose:** Spam protection (CAPTCHA alternative)
- **Cost:** Free
- **Privacy-friendly:** No user tracking

---

## 11. Development Phases and Milestones

### Phase 1: MVP Launch (Feb 11, 2026) ✅
**Goal:** Core pages live, forms functional, investor-ready

**Deliverables:**
- [ ] Homepage (hero, proof strip, product preview, CTAs)
- [ ] Products page (glass vs PET, mineral profile)
- [ ] Source page (map, imagery, story)
- [ ] Quality page (certifications, testing)
- [ ] Trade page (sample request + account application forms)
- [ ] Investors page (overview request form)
- [ ] Sustainability page
- [ ] Contact page (general inquiry form)
- [ ] Privacy Policy + Terms of Use
- [ ] Functional email notifications (Resend)
- [ ] Database setup (Supabase tables)
- [ ] Deployed to Vercel with custom domain

**Success Metrics:**
- Site loads in < 3 seconds
- All forms submit successfully
- Emails deliver to admin + users
- Mobile-responsive across devices
- Zero console errors

---

### Phase 2: Content & Analytics (Feb 12-20, 2026)
**Goal:** Add dynamic content, track performance

**Deliverables:**
- [ ] Instagram feed integration on homepage
- [ ] Google Analytics 4 setup
- [ ] Form conversion tracking
- [ ] Blog/news section (markdown-based)
- [ ] SEO optimization (meta tags, sitemap, robots.txt)
- [ ] Open Graph tags for social sharing

**Success Metrics:**
- Track form conversion rates
- Monitor traffic sources
- 50+ website visitors in first week

---

### Phase 3: Admin Panel & Automation (March 2026)
**Goal:** Streamline admin workflows

**Deliverables:**
- [ ] Custom admin panel (Next.js dashboard)
- [ ] Review/approve trade applications in-app
- [ ] Mark sample requests as fulfilled
- [ ] Auto-send pricing sheets to approved accounts
- [ ] Email template improvements

**Success Metrics:**
- Admin can process applications in < 5 minutes each
- Zero manual database queries needed

---

### Phase 4: Scale & Optimize (April-June 2026)
**Goal:** Handle traffic growth, improve performance

**Deliverables:**
- [ ] CDN optimization for images
- [ ] Implement caching strategies
- [ ] Database query optimization
- [ ] Add testimonials section
- [ ] Press/media page
- [ ] Trade account pricing portal (login required)

**Success Metrics:**
- Handle 10,000+ monthly visitors
- < 2 second page load times
- 10+ active trade accounts

---

## 12. Technical Challenges and Solutions

### Challenge 1: Tomorrow Launch Deadline
**Problem:** 24 hours to build and deploy a professional website.

**Solution:**
- **Use proven stack:** Next.js + Vercel = zero deployment friction
- **Pre-built components:** shadcn/ui eliminates custom CSS time
- **Managed services:** Supabase + Resend = no backend infrastructure setup
- **MVP scope:** Core pages + forms only, defer Instagram/blog to Phase 2
- **Parallel work:** Design system first, then pages simultaneously
- **AI coding assistant:** Use AI to generate boilerplate, forms, components

**Estimated Timeline:**
- 0-2 hours: Project setup, dependencies, design tokens
- 2-6 hours: Core pages (homepage, product, source, quality)
- 6-10 hours: Forms + API routes (trade, samples, investor, contact)
- 10-12 hours: Database setup, email templates
- 12-14 hours: Testing, bug fixes, mobile optimization
- 14-16 hours: Deploy to Vercel, DNS configuration
- 16-18 hours: Final QA, content review
- 18-20 hours: Launch! 🚀

---

### Challenge 2: Content Not Final
**Problem:** Images, copy, and brand assets may not be 100% ready.

**Solution:**
- **Placeholder images:** Use high-quality water/mountain stock photos initially
- **Instagram as source:** Pull imagery from @blu.agua.alcalina
- **Editable content:** Store all copy in markdown files or JSON for easy updates
- **Component-based:** Swap images/copy without touching code structure
- **Launch with placeholders:** Better to launch with "good enough" than delay

---

### Challenge 3: No Backend Engineering Experience
**Problem:** Building forms, databases, email systems requires backend knowledge.

**Solution:**
- **Supabase:** No SQL required, use dashboard for setup
- **API routes:** Next.js makes API endpoints as easy as creating files
- **Type safety:** TypeScript + Zod catch errors before runtime
- **Resend:** Modern email API with simple setup (no mail server config)
- **AI assistance:** Use AI to generate form handlers, validation logic

**Code Example (API Route):**
```typescript
// app/api/trade/apply/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';

const schema = z.object({
  business_name: z.string().min(1),
  contact_name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  business_type: z.enum(['distributor', 'hospitality', 'retail', 'other']),
  estimated_volume: z.string(),
  shipping_address: z.string().min(10),
});

export async function POST(request: Request) {
  const body = await request.json();
  const validated = schema.parse(body);
  
  // Insert to database
  const { data, error } = await supabase
    .from('trade_applications')
    .insert([validated])
    .select();
  
  if (error) throw error;
  
  // Send emails
  await resend.emails.send({
    from: 'Blu Water <team@blu.com>',
    to: 'admin@blu.com',
    subject: `New Trade Application: ${validated.business_name}`,
    html: `<p>New application from ${validated.contact_name}...</p>`,
  });
  
  return NextResponse.json({ success: true });
}
```

---

### Challenge 4: SEO for New Brand
**Problem:** No domain authority, need to rank for "premium alkaline water" etc.

**Solution:**
- **Technical SEO basics:** Sitemap, robots.txt, meta tags
- **Page titles:** "[Page] | Blu - Premium Alkaline Artesian Water"
- **Meta descriptions:** Unique for each page, 120-160 characters
- **Open Graph tags:** For social media previews
- **Structured data:** Schema.org markup for products
- **Content strategy:** Source story page targets "Costa Rica artesian water"
- **Backlinks (Phase 2):** Press releases, Instagram links, partner mentions

**Example Meta Tags:**
```tsx
// app/page.tsx
export const metadata = {
  title: 'Blu - Premium Alkaline Artesian Water from Costa Rica',
  description: 'Naturally alkaline artesian water bottled at origin in protected Costa Rican mountains. Trusted by luxury hospitality worldwide.',
  openGraph: {
    title: 'Blu Water - Naturally Alkaline Artesian Water',
    description: 'Premium spring water bottled at source in Costa Rica.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};
```

---

### Challenge 5: Image Optimization & Performance
**Problem:** Large hero images slow down site, hurt SEO.

**Solution:**
- **Next.js Image component:** Automatic lazy loading, responsive sizes
- **WebP format:** Smaller file sizes, wider browser support
- **Blur placeholders:** Show blurred preview while loading
- **Priority loading:** Mark hero image as priority
- **Responsive images:** Serve different sizes for mobile/desktop

**Example:**
```tsx
import Image from 'next/image';

<Image
  src="/hero-mountains.jpg"
  alt="Costa Rican mountains at sunrise"
  fill
  priority
  sizes="100vw"
  quality={90}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

---

## 13. Cost Estimates

### Monthly Costs (MVP - First 3 Months)

| Service | Plan | Monthly Cost | Notes |
|---------|------|--------------|-------|
| **Vercel** | Hobby | $0 | Free tier sufficient for < 10k visitors/month |
| **Supabase** | Free | $0 | 500MB DB, 2GB bandwidth, 50k MAUs |
| **Resend** | Free | $0 | 100 emails/day, 3,000/month |
| **Domain** | .com | $12/year | ~$1/month (GoDaddy, Namecheap) |
| **Total** | - | **~$1/month** | Essentially free for MVP |

### Costs at Scale (10k+ Visitors/Month)

| Service | Plan | Monthly Cost | Notes |
|---------|------|--------------|-------|
| **Vercel** | Pro | $20 | Needed for analytics, more bandwidth |
| **Supabase** | Pro | $25 | 8GB DB, 50GB bandwidth, 100k MAUs |
| **Resend** | Startup | $20 | 10k emails/month |
| **Domain** | .com | $1 | Annual cost amortized |
| **Total** | - | **~$66/month** | At 10k+ visitors, 50+ leads/month |

### One-Time Costs

| Item | Cost | Notes |
|------|------|-------|
| **Development** | $0 | You're building it yourself with AI |
| **Design** | $0 | Using existing Instagram imagery + stock |
| **Photography** | $0 | Existing Instagram content |
| **Total** | **$0** | - |

### Future Costs (Optional)

| Service | Cost | Purpose |
|---------|------|---------|
| **Cloudinary** | $0-89/month | Advanced image optimization |
| **Google Ads** | Variable | Paid search marketing |
| **SEO Tools** | $99+/month | Ahrefs, SEMrush (overkill for micro business) |
| **Professional Photography** | $2,000-5,000 | Product shots, lifestyle imagery |

---

## 14. Future Expansion Possibilities

### Phase 5: E-Commerce Direct Sales (6-12 Months)
- Add Shopify integration or Stripe checkout
- Sell 6-packs, 12-packs direct to consumers
- Subscription model for recurring orders
- Retail customers can order without trade account

### Phase 6: Wholesale Portal (12+ Months)
- Private trade portal for approved distributors
- Real-time pricing, inventory, order placement
- Order history, invoices, shipping tracking
- Tiered pricing based on volume

### Phase 7: Investor Dashboard
- Private investor portal (password-protected)
- Monthly metrics: revenue, distribution, new accounts
- Downloadable quarterly reports
- Cap table visualization

### Phase 8: International Expansion
- Multi-language support (Spanish for LATAM, Mandarin for Asia)
- Regional distributors page
- Currency conversion for pricing
- Localized content (regional certifications, compliance)

### Phase 9: Mobile App
- iOS/Android app for trade accounts
- Push notifications for order updates
- Mobile ordering for approved buyers
- Loyalty program integration

---

## 15. Developer Handoff Notes

### Getting Started

#### Prerequisites
- Node.js 20.x LTS
- npm or pnpm package manager
- Git
- Vercel account (free)
- Supabase account (free)
- Resend account (free)

#### Setup Steps

1. **Create Next.js Project**
```bash
npx create-next-app@latest blu-water --typescript --tailwind --app
cd blu-water
```

2. **Install Dependencies**
```bash
npm install @supabase/supabase-js resend react-hook-form @hookform/resolvers zod
npx shadcn@latest init
```

3. **Initialize shadcn/ui**
```bash
# Choose "New York" style
# Choose "Neutral" color scheme
npx shadcn@latest add button card form input textarea select dialog tabs
```

4. **Environment Variables** (`.env.local`)
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_key
```

5. **Database Setup**
- Create Supabase project
- Run SQL from "Data Architecture" section
- Copy connection details to `.env.local`

6. **Deploy to Vercel**
```bash
git init
git add .
git commit -m "Initial commit"
vercel --prod
```

### Project Structure
```
blu-water/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx           # Homepage
│   │   ├── products/page.tsx
│   │   ├── source/page.tsx
│   │   ├── quality/page.tsx
│   │   ├── trade/page.tsx
│   │   ├── investors/page.tsx
│   │   ├── sustainability/page.tsx
│   │   └── contact/page.tsx
│   ├── api/
│   │   ├── trade/apply/route.ts
│   │   ├── samples/request/route.ts
│   │   ├── investors/request/route.ts
│   │   └── contact/route.ts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                    # shadcn components
│   ├── forms/
│   │   ├── trade-application-form.tsx
│   │   ├── sample-request-form.tsx
│   │   └── investor-inquiry-form.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── proof-strip.tsx
│   │   ├── product-preview.tsx
│   │   └── mineral-profile.tsx
│   └── layout/
│       ├── header.tsx
│       └── footer.tsx
├── lib/
│   ├── supabase.ts
│   ├── resend.ts
│   ├── validations/
│   │   ├── trade.ts          # Zod schemas
│   │   ├── samples.ts
│   │   └── investors.ts
│   └── types.ts
├── public/
│   ├── images/
│   ├── fonts/
│   └── og-image.jpg
├── styles/
│   └── globals.css
└── package.json
```

### Environment Setup

**Development:**
```bash
npm run dev
```

**Build:**
```bash
npm run build
```

**Deployment:**
- Push to GitHub main branch
- Vercel auto-deploys
- Preview deployments for PRs

### Testing Strategy

**Manual Testing Checklist:**
- [ ] All pages render correctly
- [ ] Forms submit successfully
- [ ] Emails deliver (check spam)
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Images load optimized
- [ ] Links work
- [ ] Performance Lighthouse score > 90

**Unit Tests (Phase 2):**
- Zod schema validation
- Form submission handlers
- API route logic

### Deployment Considerations

**DNS Configuration:**
1. Point domain to Vercel nameservers
2. Add custom domain in Vercel dashboard
3. Wait for SSL certificate provisioning (automatic)

**Performance:**
- Enable Vercel Analytics (optional, $10/month)
- Set up Web Vitals monitoring
- Use Lighthouse CI for automated testing

**Monitoring:**
- Vercel logs for errors
- Supabase logs for database issues
- Resend dashboard for email delivery

---

## 16. Documentation Standards

### Code Comments
- **Component headers:** Explain purpose, props, usage
- **Complex logic:** Inline comments for non-obvious code
- **API routes:** Document request/response schemas

### README.md
Include:
- Project overview
- Setup instructions
- Environment variables
- Deployment steps
- Contributing guidelines

### API Documentation
- Document all API endpoints
- Request/response examples
- Error codes and handling
- Rate limits

---

## Success Metrics (Post-Launch)

### Week 1 (Feb 11-18, 2026)
- [ ] 50+ website visitors
- [ ] 5+ sample requests
- [ ] 2+ trade account applications
- [ ] 1+ investor inquiry
- [ ] Zero critical bugs

### Month 1 (Feb 11 - Mar 11, 2026)
- [ ] 500+ website visitors
- [ ] 20+ sample requests
- [ ] 10+ trade account applications
- [ ] 3+ investor inquiries
- [ ] Form conversion rate > 5%

### Month 3 (Feb 11 - May 11, 2026)
- [ ] 2,000+ website visitors
- [ ] 50+ sample requests
- [ ] 20+ trade accounts opened
- [ ] 5+ investor meetings scheduled
- [ ] Featured in 1+ press articles

---

## Appendix: Quick Reference

### Brand Voice
- **Confident, not arrogant**
- **Minimal, not sparse**
- **Premium, not pretentious**
- **Global, not vague**

### Color Palette (Suggested)
- Primary: Deep ocean blue (#1E3A5F)
- Secondary: Soft glacier (#E8F1F5)
- Accent: Pale gold (#C9B88D)
- Text: Near-black (#1A1A1A)
- Background: Off-white (#FAFAF8)

### Typography
- **Headings:** Inter, Helvetica Neue, or SF Pro (clean, modern)
- **Body:** Inter or system-ui (readable, web-safe)
- **Accent:** Optional serif for quotes (Playfair Display, Lora)

### Imagery Guidelines
- **Mountains, water, glass**
- **Natural light, muted tones**
- **No people (unless hands holding bottle)**
- **Avoid clichés (water droplets, splashes)**
- **Source:** Instagram @blu.agua.alcalina + stock (Unsplash, Pexels)

### Contact Information
- **Email:** team@blu.com
- **Instagram:** @blu.agua.alcalina
- **Address:** (TBD - Costa Rica operations)

---

## Final Notes for AI Coding Assistant

**Prioritization for Tomorrow Launch:**
1. ✅ Homepage + navigation
2. ✅ Trade + sample request forms
3. ✅ Product + source pages
4. ✅ Email notifications working
5. ⚠️ Quality + sustainability pages (simpler if time-limited)
6. ⚠️ Investors page (can be basic landing page)
7. ❌ Instagram feed (defer to Phase 2)
8. ❌ Blog/news (defer to Phase 2)

**Code Quality Principles:**
- **TypeScript strict mode:** Catch errors early
- **Component reusability:** DRY (Don't Repeat Yourself)
- **Semantic HTML:** Accessibility matters
- **Performance:** < 3 second load times

**Testing Focus:**
- Form submissions end-to-end
- Email delivery (real test sends)
- Mobile responsive breakpoints
- Cross-browser (Chrome, Safari, Firefox)

**Launch Checklist:**
- [ ] All environment variables set in Vercel
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Forms tested with real data
- [ ] Admin emails receiving notifications
- [ ] Privacy policy + terms live
- [ ] Google Analytics (optional) installed
- [ ] Favicon and OG image set
- [ ] 404 page styled
- [ ] Sitemap generated

---

**🚀 Ready for handoff to AI coding assistant. Build begins now!**
