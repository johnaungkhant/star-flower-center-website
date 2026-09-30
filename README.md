# Star Flower Centre — Special Education Needs

Official website for Star Flower Centre, a charity school in Thailand for children with special needs.
Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS**, deployed on **Vercel**.

## Build commands

| Command         | Purpose                                   |
| --------------- | ----------------------------------------- |
| `npm install`   | Install dependencies                      |
| `npm run dev`   | Start local dev server at localhost:3000  |
| `npm run build` | Production build (what Vercel runs)       |
| `npm run start` | Serve the production build locally        |
| `npm run lint`  | Run ESLint (Next.js + TypeScript rules)   |

Requires Node.js 18.18+ (20 LTS recommended).

## File structure

```
├── public/
│   └── logo.jpg                  # Logo used in Navbar, Hero and Footer
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout: Nunito font, Navbar, Footer
│   │   ├── globals.css           # Tailwind layers + shared component classes
│   │   ├── page.tsx              # /            Home (Hero, 4 Pillars, Mission Snapshot)
│   │   ├── about/page.tsx        # /about       Story, Vision & Missions, Team, Volunteer form
│   │   ├── activities/page.tsx   # /activities  Therapy & Activities, Success Stories
│   │   ├── gallery/page.tsx      # /gallery     Tabbed gallery
│   │   ├── donate/page.tsx       # /donate      PromptPay QR, card donation, Craft Shop
│   │   └── contact/page.tsx      # /contact     Contact form, details, map
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with mobile menu
│   │   ├── Footer.tsx
│   │   ├── PageHeader.tsx        # Tinted page hero
│   │   ├── Reveal.tsx            # framer-motion scroll-in wrapper
│   │   ├── ImagePlaceholder.tsx  # Stand-in until real photos are added
│   │   ├── VolunteerForm.tsx
│   │   ├── GalleryTabs.tsx
│   │   ├── PromptPayDonation.tsx # Live THB → PromptPay QR (promptpay-qr + qrcode.react)
│   │   ├── IntlDonationCard.tsx  # Stripe-style card donation mock
│   │   ├── CraftShop.tsx         # Student craft e-commerce grid
│   │   └── ContactForm.tsx
│   ├── lib/site.ts               # Site-wide details: contact info, hours, PromptPay ID, nav links
│   └── types/promptpay-qr.d.ts   # Type declaration for promptpay-qr
├── tailwind.config.ts            # Brand colours: star-blue/green/red/yellow
├── next.config.ts
├── vercel.json
└── package.json
```

## Before going live

Edit `src/lib/site.ts`:

- `promptPayId` — replace the placeholder with the centre's registered PromptPay ID (phone, national ID, or e-wallet ID).
- `phone`, `email`, `address`, `hours`, `social` — real contact details.

Optional next steps:

- Add real photos to `public/images/` and swap out `ImagePlaceholder` usages.
- Connect `IntlDonationCard` to a Stripe Checkout API route and `ContactForm` / `VolunteerForm` to an email service.

## Deploy: GitHub → Vercel

### 1. Push to GitHub

Create an empty repository on GitHub (no README/.gitignore), then from this folder:

```bash
git init                      # skip if .git already exists
git add .
git commit -m "Star Flower Centre website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Alternatively, upload the folder contents through GitHub's **Add file → Upload files** button.

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New… → Project** and **Import** the repository.
3. Vercel auto-detects Next.js — leave Framework, Build Command (`next build`) and Output as default.
4. Click **Deploy**. The first build takes about a minute.
5. Your site is live at `https://<repo-name>.vercel.app`.

### 3. Updates & custom domain

- Every `git push` to `main` triggers a new production deployment automatically.
- To use your own domain: **Project → Settings → Domains → Add**, then point your DNS to the records Vercel shows.

