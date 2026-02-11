# Blu Water Website — Project Knowledge

## Project Overview

Premium artesian water brand website for **Blu** — a Costa Rica-sourced alkaline water company. The site targets distributors, hospitality buyers, investors, and retail buyers. The goal is to project institutional credibility well beyond the company's current size.

**Two design versions exist** to demonstrate range for a website pitch:
- **V1 (`main` branch):** Warm, blue/gold palette. Story-driven layout. Inter font for everything.
- **V2 (`design-v2` branch):** Monochrome editorial aesthetic inspired by VOSS Water. Playfair Display serif for headings, Inter for body. White-dominant, more vertical rhythm, full-bleed imagery.

Same content, same backend, same images, same middleware — different visual skin.

Full PRD: `docs/BLU_WATER_PRD.md`

## Architecture

### Stack
- **Framework:** Next.js 16.1.6 (App Router) + React 19.2.4
- **Language:** TypeScript 5.9.3 (strict)
- **Styling:** Tailwind CSS 4.1.18 with custom `@theme` tokens in `app/globals.css`
- **Forms:** React Hook Form 7.71.1 + Zod 4.3.6
- **Database:** Supabase (PostgreSQL) — server-side only via service role key
- **Email:** Resend — transactional notifications + auto-replies
- **Hosting:** Vercel (auto-deploys from GitHub). V1 deploys from `main`, V2 should deploy from `design-v2` as a separate Vercel project.
- **Repo:** https://github.com/Goodbeatz/blu-water
- **Branches:** `main` (V1), `design-v2` (V2)

### No shadcn/ui installed
Despite the PRD recommending shadcn/ui, the project does **not** use it. All components are hand-written with Tailwind utility classes. The only UI utility is `cn()` from `lib/utils.ts` (clsx + tailwind-merge).

### Project Structure
```
blu-water/
├── app/
│   ├── page.tsx                         # Homepage
│   ├── layout.tsx                       # Root layout (Header + Footer)
│   ├── globals.css                      # Tailwind @theme tokens + base styles
│   ├── products/page.tsx
│   ├── source/page.tsx
│   ├── quality/page.tsx
│   ├── trade/page.tsx
│   ├── investors/page.tsx
│   ├── sustainability/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── api/
│       ├── trade/apply/route.ts         # POST — trade account applications
│       ├── samples/request/route.ts     # POST — sample requests
│       ├── investors/request/route.ts   # POST — investor inquiries
│       └── contact/route.ts            # POST — general contact
├── components/
│   ├── layout/
│   │   ├── header.tsx                   # Fixed nav with mobile hamburger
│   │   └── footer.tsx                   # 4-column footer
│   └── forms/
│       ├── trade-application-form.tsx
│       ├── sample-request-form.tsx
│       ├── investor-inquiry-form.tsx
│       └── contact-form.tsx
├── lib/
│   ├── supabase.ts                      # Singleton Supabase client (service role)
│   ├── resend.ts                        # Singleton Resend client
│   ├── types.ts                         # All TypeScript interfaces
│   ├── products.ts                      # Product data (glass + PET)
│   ├── utils.ts                         # cn() utility
│   └── validations/
│       ├── trade.ts                     # Zod schema for trade applications
│       ├── samples.ts                   # Zod schema for sample requests
│       ├── investors.ts                 # Zod schema for investor inquiries
│       └── contact.ts                   # Zod schema for contact form
├── middleware.ts                         # Basic auth (Bluteam / GO!)
└── public/images/                       # Static images (hero, bottles, source)
```

## Key Patterns & Conventions

### API Routes
All 4 API routes follow the exact same pattern:
1. Parse JSON body
2. Honeypot check (if `body.honeypot` is truthy, return fake success)
3. Validate with Zod schema (shared between client and server)
4. Destructure out `honeypot` field before DB insert
5. Insert into Supabase table
6. Send admin notification email via Resend
7. Send auto-reply email to submitter via Resend
8. Return `{ success: true }` or error

### Supabase & Resend Clients
Both use a lazy singleton pattern (`getSupabase()`, `getResend()`) — initialized on first call, reused after. Server-side only.

### Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL     — Supabase project URL
SUPABASE_SERVICE_ROLE_KEY    — Supabase service role key (NOT anon key)
RESEND_API_KEY               — Resend API key
ADMIN_EMAIL                  — Email address for admin notifications
```
All set in Vercel dashboard for production. Local dev uses `.env.local`.

### Styling

#### V1 (`main` branch)
- Blue/gold warm palette defined via Tailwind v4 `@theme` directive in `globals.css`
- Font: Inter for both headings and body
- Design philosophy: warm, story-driven, blue accents

#### V2 (`design-v2` branch)
- Monochrome editorial palette in `globals.css`:
  - `--color-primary`: `#111111` (near-black)
  - `--color-text-muted`: `#777777` (cool gray)
  - `--color-background`: `#FFFFFF` (pure white)
  - `--color-border`: `#E0E0E0` (light gray)
- Fonts: Playfair Display (serif) for headings via `--font-heading`, Inter for body via `--font-body`
- Both loaded via `next/font/google` in `layout.tsx`, applied as CSS variables on `<html>`
- Common editorial patterns:
  - Section labels: `text-xs tracking-[0.2em] uppercase text-text-muted`
  - CTA links: underline style with `border-b border-text pb-1`
  - Buttons: `rounded-none` (sharp corners), `bg-text text-white` or `border border-text`
  - Sections: tall `py-32 lg:py-40`, separated by `border-t border-border`
  - Italic accents in headings: `<em className="italic">` for editorial flair
- Color names shared: `primary`, `primary-light`, `secondary`, `accent`, `accent-dark`, `text`, `text-muted`, `background`, `background-alt`, `border`

### Password Protection
`middleware.ts` implements HTTP Basic Auth on all routes except static assets. Credentials are hardcoded: `Bluteam` / `GO!`. This is temporary — intended to be removed or replaced before public launch.

### Email "From" Addresses
- Admin notifications: `Blu Water <notifications@blu.com>`
- Auto-replies: `Blu Water <team@blu.com>`
- These need to match a verified domain in Resend, or emails will fail silently.

## Known Gotchas

1. **Resend domain verification required.** The "from" addresses use `blu.com` — Resend won't send unless this domain is verified in their dashboard. Until then, use Resend's default `onboarding@resend.dev` or verify a real domain.

2. **Supabase tables must be created manually.** The SQL for all 4 tables is in the PRD (Section 7). Tables: `trade_applications`, `sample_requests`, `investor_inquiries`, `contact_submissions`. If tables don't exist, form submissions will fail with 500 errors.

3. **No RLS policies set up.** The Supabase client uses the service role key (bypasses RLS), so this works for now, but RLS should be configured before exposing any client-side Supabase access.

4. **No rate limiting implemented.** The PRD specifies Upstash Redis rate limiting, but this is not built yet. Forms are only protected by honeypot fields.

5. **Spec sheet PDFs don't exist.** `products.ts` references `/docs/blu-glass-spec-sheet.pdf` and `/docs/blu-pet-spec-sheet.pdf` — these files are not in `public/` yet.

6. **Sample request `quantity` field:** The Zod schema validates it as a string, but the API route parses it to int before DB insert (`parseInt(data.quantity, 10)`). The Supabase column expects INTEGER.

7. **Next.js version is 16.x** — this is newer than what the PRD specifies (15.5.12). The PRD version numbers are from research done Feb 10, but the actual installed versions are newer.

## Glossary

| Term | Meaning |
|------|---------|
| Glass Collection | Premium glass bottles (330ml, 500ml, 750ml) for luxury hospitality tableside service |
| PET Collection | Plastic (polyethylene terephthalate) bottles (500ml, 1L, 1.5L) for retail/distribution |
| Trade Account | B2B wholesale account — distributors, hospitality, retail buyers apply via form, get approved by admin, then receive pricing |
| Proof Strip | The horizontal bar on the homepage showing "Artesian Source | Naturally Alkaline | Bottled at Origin" |
| Honeypot | Hidden form field for spam protection — if filled (by bots), submission is silently accepted but not processed |
| Service Role Key | Supabase admin-level API key that bypasses Row Level Security — used server-side only |
| ADMIN_EMAIL | The email address that receives all form submission notifications (set via env var) |
| V1 / V2 | Two visual designs of the same site. V1 = `main` branch (warm/blue). V2 = `design-v2` branch (monochrome/editorial). Same content and backend. |
| Editorial Pattern | V2's repeating design motif: uppercase labels, serif headings with italic accents, thin borders, generous whitespace |
| `--font-heading` / `--font-body` | CSS custom properties set by `next/font/google` in V2. Heading = Playfair Display, Body = Inter. Applied via Tailwind's `font-heading` / `font-body` utilities. |
