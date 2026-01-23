## ASA Website – Developer Handover Guide

This folder contains the main SFU Accounting Student Association (ASA) marketing site built with **Next.js App Router**, **TypeScript**, **Tailwind**, **shadcn/ui**, and **Sanity CMS**.

This README is intended for new developers taking over the project.

---

## Tech Stack

- **Next.js 14+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Sanity CMS** (separate Studio app in `../sanity-studio`)
- **Nodemailer** for the contact form email delivery

---

## Project Structure (high level)

```text
asa-website/
├── app/
│   ├── layout.tsx          # Global layout, navbar/footer, metadata
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About/values page
│   ├── our-team/page.tsx   # Team page
│   ├── tax-program/page.tsx
│   ├── contact-us/page.tsx
│   └── api/
│       └── contact/route.ts # Contact form API (Nodemailer)
├── components/
│   ├── ui/                 # shadcn + shared UI components
│   ├── ui/layout/          # Layout pieces (Navbar, Footer, etc.)
│   └── ...                 # Section components
├── lib/
│   ├── content.ts          # **Static fallback content** (see below)
│   └── sanity.ts           # Sanity client/helpers
└── sanity-studio/          # Sanity Studio (separate Next app, sibling folder)
```

---

## Content Sources: Sanity vs `lib/content.ts`

- **Sanity CMS (preferred for production)**
  - Used for dynamic, editable content (pages, team members, etc.).
  - Non-technical ASA members can update content via the Studio UI.
  - Configured in the separate `sanity-studio` folder.

- **`lib/content.ts` – static fallback content**
  - This file provides **hard-coded default content** for various sections (hero, events, team sections, contact copy, etc.).
  - It is used:
    - As a **fallback** when Sanity is unavailable.
    - As a quick way to display content during development/seeding.
  - You can safely edit the objects/arrays in this file to adjust fallback copy and images.
  - It is **not** connected to the Sanity schema; changes here do **not** affect Sanity data.

When you add new sections/pages that should be editable:
- Define schemas in `sanity-studio`.
- Fetch data via `lib/sanity.ts`.
- Optionally add a matching fallback shape in `lib/content.ts` for resilience.

---

## Running the Project Locally

You typically want **two processes** running:

### 1. Next.js app (this folder)

From `asa-website/`:

```bash
npm install           # first time only
npm run dev
```

Then open `http://localhost:3000`.

### 2. Sanity Studio (separate module)

From the repo root:

```bash
cd sanity-studio
npm install           # first time only
npm run dev
```

By default this runs the Studio on `http://localhost:3333` (or whichever port Sanity chooses).  
Log in with the configured Sanity project to edit content.

---

## Environment Variables

Create `.env.local` in `asa-website/` with at least:

```bash
# Sanity (examples – use your real values)
NEXT_PUBLIC_SANITY_PROJECT_ID=97kwgu13
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Contact form (Nodemailer using Gmail App Password)
EMAIL_USER=your.email@example.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=asa.inbox@example.com   # optional; defaults to EMAIL_USER
```

Additional env vars may exist in the deployed environment (Vercel, etc.); copy them if you’re rotating credentials.

---

## Contact Form API (`app/api/contact/route.ts`)

- Accepts JSON with:
  - `firstName` (required)
  - `lastName` (required)
  - `email` (required, validated)
  - `subject` (optional but recommended)
  - `message` (optional, but at least `subject` or `message` must be provided)
- Performs **basic server-side validation**:
  - Ensures required fields are present.
  - Enforces reasonable max lengths.
  - Validates email format.
  - Rejects invalid/empty payloads with `400` and a `details` array.
- Uses Nodemailer to:
  - Send the contact details to the ASA inbox.
  - Send a confirmation email back to the user.

If you change fields on the frontend contact form, make sure to keep the API contract in sync.

---

## Common Dev Tasks

- **Start dev server:** `npm run dev`
- **Type-check / build:** `npm run build`
- **Run Sanity Studio locally:** `cd sanity-studio && npm run dev`

Deployment is typically handled via **Vercel** (for the Next.js app) and Sanity’s own hosting for the Studio.  
If you’re taking over deployment, check the existing Vercel project and Sanity project (`projectId: 97kwgu13`, dataset `production`) for configuration.

---

## Handover Notes for New Devs

- **When adding features**:
  - Decide early if the content should live in **Sanity** or **only in `lib/content.ts`**.
  - Prefer Sanity for anything non-static or managed by ASA executives.
- **When editing layout/branding**:
  - Check `app/layout.tsx`, `components/ui/layout/*`, and the Tailwind config.
- **When troubleshooting content**:
  - If data looks stale or missing, confirm whether it’s coming from Sanity or from `lib/content.ts`.
  - Remember that fallback content will still render even if Sanity is down.

Keep this README updated as you change the content model or deployment setup so the next team can onboard quickly. 
