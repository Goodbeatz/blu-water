# Blu Water Website — Project Knowledge

## Project Overview

Premium artesian water brand website for **Blu** — a Costa Rica-sourced alkaline water company. The site targets distributors, hospitality buyers, investors, and retail buyers. The goal is to project institutional credibility well beyond the company's current size.

Full PRD: `Docs/BLU_WATER_PRD.md`

## Architecture

### Stack
- **Framework:** Next.js 16.1.6 (App Router) + React 19.2.4
- **Language:** TypeScript 5.9.3 (strict)
- **Styling:** Tailwind CSS 4.1.18 with custom `@theme` tokens in `app/globals.css`
- **Forms:** React Hook Form 7.71.1 + Zod 4.3.6
- **Database:** Supabase (PostgreSQL) — server-side only via service role key
- **Email:** Resend — transactional notifications + auto-replies
- **Hosting:** Vercel (auto-deploys from GitHub `main` branch)
- **Repo:** https://github.com/Goodbeatz/blu-water

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
- Custom color tokens defined via Tailwind v4 `@theme` directive in `globals.css`
- Color names: `primary`, `primary-light`, `secondary`, `accent`, `accent-dark`, `text`, `text-muted`, `background`, `background-alt`, `border`
- Font: Inter for both headings and body
- Design philosophy: luxury restraint — whitespace, minimal copy, large imagery

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
