# Spoiler Defendant — Landing Page

> *You know the movie. You don't know whose side you're on.*

Phase One landing page for **Spoiler Defendant**, a YouTube-first mystery movie recap brand where famous films are retold from an inverted moral perspective. Built with Next.js 14, TypeScript, and Tailwind CSS. Deployable as a static site on Cloudflare Pages.

---

## Project structure

```
spoiler-defendant/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind imports + custom utility classes
│   │   ├── layout.tsx         # Root layout: fonts, SEO metadata, grain overlay
│   │   └── page.tsx           # Main page: assembles all section components
│   ├── components/
│   │   ├── Hero.tsx           # Full-screen hero with headline and CTAs
│   │   ├── ConceptSection.tsx # Format explanation (4 Roman-numeral steps)
│   │   ├── SampleCases.tsx    # Three cryptic case exhibit cards
│   │   ├── HowItWorks.tsx     # Viewer loop (Watch → Guess → Argue → Suggest)
│   │   ├── WhyItWorks.tsx     # Central insight quote + proof points
│   │   ├── DocketSection.tsx  # Season One docket table with case entries
│   │   ├── SignupSection.tsx  # Email capture + movie suggestion forms
│   │   └── Footer.tsx         # Brand, nav, social links, copyright
│   └── config/
│       └── site.ts            # ALL content constants — edit copy here first
├── .env.example               # Environment variable template
├── next.config.ts             # Next.js config (static export for CF Pages)
├── tailwind.config.ts         # Custom color palette + typography tokens
└── README.md
```

---

## Local development

**Prerequisites:** Node.js 18+, npm 9+

```bash
# 1. Clone the repo
git clone https://github.com/gngengwe/spoiler-defendant.git
cd spoiler-defendant

# 2. Install dependencies
npm install

# 3. Copy environment template
cp .env.example .env.local

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Editing content

All copy, links, social handles, docket entries, and form labels live in one file:

```
src/config/site.ts
```

You should never need to touch individual component files just to change copy. Edit `site.ts` and the changes propagate everywhere.

---

## Building for production

```bash
npm run build
```

This produces a fully static export in the `out/` directory (configured via `output: "export"` in `next.config.ts`). No Node.js server is required at runtime.

---

## Deploying to Cloudflare Pages

### Via the Cloudflare dashboard (recommended for Phase One)

1. Push the repo to GitHub (`gngengwe/spoiler-defendant`).
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project** → **Connect to Git**.
3. Select the `spoiler-defendant` repo.
4. Configure the build:
   | Setting | Value |
   |---|---|
   | Framework preset | Next.js (Static HTML Export) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Node.js version | `18` |
5. Add environment variables from `.env.example` if needed.
6. Click **Save and Deploy**.

### Custom domain (subdomain under ngengwe.com)

After the first deploy:

1. In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain**.
2. Enter: `spoilerdefendant.ngengwe.com`
3. Cloudflare will prompt you to add a CNAME record — since ngengwe.com DNS is already managed by Cloudflare, it will add it automatically.
4. SSL is provisioned automatically. No additional configuration needed.

Target URL: **https://spoilerdefendant.ngengwe.com**

---

## Wiring up forms (when ready)

The email and movie suggestion forms in `SignupSection.tsx` are currently client-side only — they show a success state without sending data anywhere.

To activate them, add a Formspree endpoint (free tier works fine for Phase One):

1. Create a form at [formspree.io](https://formspree.io) and copy the form ID.
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_EMAIL_ID=your_form_id
   NEXT_PUBLIC_FORMSPREE_SUGGEST_ID=your_other_form_id
   ```
3. In `SignupSection.tsx`, replace the `// TODO:` placeholder in `handleSubmit` with:
   ```ts
   await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_EMAIL_ID}`, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ email }),
   });
   ```

Alternative integrations: ConvertKit, Buttondown, Loops, Resend.

---

## What was built (Phase One summary)

| Section | Status |
|---|---|
| Hero (headline, tagline, CTAs) | ✅ Complete |
| Concept Section (format explained) | ✅ Complete |
| Sample Case Exhibits (3 cards) | ✅ Complete |
| How It Works (viewer loop) | ✅ Complete |
| Why It Works (central insight) | ✅ Complete |
| Season One Docket | ✅ Complete |
| Email signup form (UI) | ✅ Complete |
| Movie suggestion form (UI) | ✅ Complete |
| Footer | ✅ Complete |
| SEO metadata | ✅ Complete |
| Responsive (mobile + desktop) | ✅ Complete |
| Static export for Cloudflare Pages | ✅ Complete |
| Form backend integration | 🔲 Phase 1.5 |
| Analytics | 🔲 Phase 1.5 |
| OG image | 🔲 Phase 1.5 |
| YouTube channel link | 🔲 Phase 2 |
| Episode pages / CMS | 🔲 Phase 2 |

---

## What to build next (Phase Two)

After the landing page is live and approved:

1. **Form backend** — wire Formspree (or equivalent) to the email and suggest forms.
2. **OG / social card image** — static `og-image.png` for Twitter/Facebook previews.
3. **Cloudflare Analytics** — add the `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` to the layout for privacy-safe traffic tracking.
4. **Episode page template** — a route for each case file (e.g. `/case/001-the-bedroom-regime`) to host the YouTube embed and show notes.
5. **YouTube channel integration** — link social handles once the channel is created.
6. **Email service** — move from Formspree to a proper email service (ConvertKit/Loops) for broadcast capability.

---

## Tech stack

- **Next.js 14** — static export, App Router
- **React 18** — client components for interactive forms
- **TypeScript** — strict mode
- **Tailwind CSS 3** — custom navy/crimson/gold palette
- **Google Fonts** — Playfair Display (display), Inter (body)
- **Cloudflare Pages** — deployment target

---

*Built by George Ngengwe / becomiNG · Spoiler Defendant*
