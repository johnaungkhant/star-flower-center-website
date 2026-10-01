# Technical Documentation for Star Flower Centre Website

This document explains how the project is structured, where the editable content lives, and how to change the page text, team members, and placeholder images without breaking the layout.

## 1. Project overview

### Framework
- Next.js 15 app router
- TypeScript
- Tailwind CSS
- React 19
- lucide-react for icons

### Main application entry points
- `src/app/layout.tsx` — global layout, metadata wrapper, shared shell
- `src/app/page.tsx` — homepage
- `src/app/about/page.tsx` — about page
- `src/app/activities/page.tsx` — activities and stories page
- `src/app/gallery/page.tsx` — gallery page
- `src/app/contact/page.tsx` — contact page
- `src/app/donate/page.tsx` — donation page

### Shared configuration and content
- `src/lib/site.ts` — business/contact data used by navigation, footer, contact page, donation form
- `src/components/*` — reusable UI buildings blocks
- `public/` — static assets such as logo and future images

---

## 2. Core site configuration

File: `src/lib/site.ts`

This file contains the most important editable business values.

```ts
export const site = {
  name: "Star Flower Centre",
  fullName: "Star Flower Centre Special Education Needs",
  tagline: "Work, learn and play together.",
  phone: "+66 (0) 2 000 0000",
  email: "hello@starflowercentre.org",
  address: {
    line1: "123 Sunflower Lane",
    line2: "Mae Sot, Tak Province 63110",
    country: "Thailand",
  },
  hours: [
    { day: "Monday – Friday", time: "09:00 – 15:00" },
    { day: "Saturday, Sunday & Public Holidays", time: "Closed" },
  ],
  promptPayId: "0812345678",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    line: "https://line.me",
  },
};
```

### How to change:
- Website name / branding: update `site.name`, `site.fullName`, `site.tagline`
- Contact information: update `site.phone`, `site.email`, `site.address`, `site.hours`
- Donation QR settings: update `site.promptPayId`
- Social links: update `site.social.facebook`, `site.social.instagram`, `site.social.line`

### Navigation data
```ts
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/activities", label: "Activities & Stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
```

These labels are used by:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`

---

## 3. Global reusable components

### 3.1 Navbar

File: `src/components/Navbar.tsx`

Purpose: top navigation bar for all pages.

Key variable definitions:
```ts
const [open, setOpen] = useState(false);
const pathname = usePathname();
```

Important content source:
```ts
import { navLinks, site } from "@/lib/site";
```

What it renders:
- brand logo image from `public/logo.jpg`
- menu items from `navLinks`
- support button linking to `/donate`
- mobile menu toggle

How to change nav items:
- edit `navLinks` in `src/lib/site.ts`

How to change the logo:
- replace `public/logo.jpg` with a new file of the same name, or update the `src` value in the `Image` component

---

### 3.2 Footer

File: `src/components/Footer.tsx`

Purpose: site-wide footer.

It reads shared contact content from `site` and renders links from `navLinks`.

Important text block:
```tsx
<p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">
  Our mission is simple and unwavering: every child...
</p>
```

How to change:
- update the static text directly in this file
- update contact details in `src/lib/site.ts`

---

### 3.3 PageHeader

File: `src/components/PageHeader.tsx`

Purpose: hero heading displayed at the top of each page.

Variable definitions:
```ts
type Props = {
  eyebrow: string;
  title: string;
  description: string;
  tint?: "blue" | "green" | "red" | "yellow";
};

const tints = {
  blue: "bg-blue-50/40",
  green: "bg-emerald-50/40",
  red: "bg-rose-50/40",
  yellow: "bg-amber-50/40",
};
```

Function signature:
```ts
export default function PageHeader({ eyebrow, title, description, tint = "blue" }: Props)
```

How to change page titles/descriptions:
- edit the page-level JSX where `<PageHeader ... />` is used in each page file

Example from About page:
```tsx
<PageHeader
  eyebrow="About Us"
  title="The only school of its kind on the Thai–Myanmar border"
  description="Star Flower Centre was created so that migrant children with disabilities in Mae Sot would no longer be left isolated at home. This is our history, our vision and the people who keep it alive."
/>
```

---

### 3.4 ImagePlaceholder

File: `src/components/ImagePlaceholder.tsx`

This is the central placeholder component used throughout the site for cards, photos, partner logos, and gallery items before real photography is added.

Variable definitions:
```ts
type Props = {
  label: string;
  tint?: "blue" | "green" | "red" | "yellow";
  className?: string;
};

const tints = {
  blue: "from-blue-100 to-blue-50 text-star-blue",
  green: "from-emerald-100 to-emerald-50 text-star-green",
  red: "from-rose-100 to-rose-50 text-star-red",
  yellow: "from-amber-100 to-amber-50 text-star-yellow",
};
```

Component function:
```ts
export default function ImagePlaceholder({ label, tint = "blue", className = "" }: Props)
```

This component renders:
- a gradient placeholder box
- an icon `ImageIcon`
- a text label in the center

How to change placeholder image styling:
- change `tints`
- change `className` when used in each page
- change the `label` prop to match the image content

How to change it to use actual photos:
- replace the entire component content with a Next `Image` component or create a dedicated real-image wrapper
- or replace the usage at the page level with `<Image src="/your-image.png" ... />`

Important note:
- Right now, the site uses placeholder blocks instead of real photographs. The text shown under the placeholder is driven by the `label` prop, not a database.

---

### 3.5 Reveal

File: `src/components/Reveal.tsx`

Purpose: scroll reveal animation for sections and cards.

Variable definitions:
```ts
type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};
```

Animation configuration:
```tsx
<motion.div
  className={className}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.55, ease: "easeOut", delay }}
>
```

How to change fade timing:
- edit `delay`
- edit `duration` or `y` offset

---

### 3.6 ScrollCue

File: `src/components/ScrollCue.tsx`

Purpose: floating anchor button that scrolls to the next section.

Variable definition:
```ts
type Props = {
  to: string;
  label?: string;
  className?: string;
  light?: boolean;
};
```

Scrolling behavior:
```ts
const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
  const target = document.getElementById(to);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${to}`);
};
```

How to change section jump labels:
- change `label` in the page call site
- change `to` to match a section `id`

---

## 4. Page-by-page documentation

## 4.1 Home page

File: `src/app/page.tsx`

### Purpose
Landing page for the organisation and overall mission.

### Primary variable definitions
```ts
const pillars = [ ... ]
const stats = [ ... ]
const missionPoints = [ ... ]
const activities = [ ... ]
const stories = [ ... ]
```

### What to edit for content changes
- `stats` — homepage metrics
- `pillars` — four key areas of the programme
- `missionPoints` — mission statements listed as bullets
- `activities` — cards in the programme section
- `stories` — testimonial cards and short narratives

### Example: homepage data object
```ts
const activities = [
  {
    title: "Individual Education Plans",
    icon: ClipboardList,
    tint: "blue",
    text: "Each child has ...",
  },
];
```

### Branding image
This page uses the logo image:
```tsx
<Image
  src="/logo.jpg"
  alt="Star Flower Centre Logo"
  width={180}
  height={180}
  className="h-64 w-64 rounded-[2rem] object-cover"
  priority
/>
```

How to change:
- replace `/public/logo.jpg`
- or change the value of `src` to a new asset path

---

## 4.2 About page

File: `src/app/about/page.tsx`

This is the page with the team update logic.

### Section structure
The page is divided into these sections:
- Story
- Vision & Principles
- Goals & Objectives
- Who We Serve
- Partners
- Team
- Volunteer callout + form

### Editable arrays for the page
```ts
const principles = [ ... ];
const goals = [ ... ];
const partners = [ ... ];
const admission = [ ... ];
const team = [ ... ];
```

### Where the team member content lives
The team cards are defined here:
```ts
const team = [
  {
    name: "Naw Thoo Mwe Paw",
    role: "Principal",
    note: "I want to support children with disabilities and help them build dignity, confidence and independence through education and care.",
    tint: "blue",
    image: null,
  },
  {
    name: "Saw Moo Kapaw Say Reh",
    role: "Curriculum Development Coordinator & Finance",
    note: "For the glory of God to be revealed through our work with children and families.",
    tint: "green",
    image: null,
  },
  // Every team member has image: null until their photo file is added.
] as const;
```

This is the exact place to change:
- staff names: `name`
- job titles: `role`
- description text: `note`
- placeholder color theme: `tint` (used only while displaying `ImagePlaceholder`)
- that staff member's photo path: `image` (`null` means no photo has been added yet)

The render block is here:
```tsx
{team.map((t, i) => (
  <Reveal key={t.name} delay={i * 0.05}>
    <article className="card h-full bg-white">
      {t.image ? (
        <Image
          src={t.image}
          alt={`Photo of ${t.name}`}
          width={600}
          height={400}
          className="h-40 w-full rounded-2xl object-cover"
        />
      ) : (
        <ImagePlaceholder label={`Photo: ${t.name}`} tint={t.tint} className="h-40 w-full rounded-2xl" />
      )}
      <h3 className="mt-4 text-lg font-bold">{t.name}</h3>
      <p className="text-sm font-semibold text-star-blue">{t.role}</p>
      <p className="mt-2 text-sm text-slate-600">{t.note}</p>
    </article>
  </Reveal>
))}
```

### How to change team member text
- Update the `team` array above
- Keep the same object shape: `name`, `role`, `note`, `tint`, `image`

### How to give each team member a different real photo

The team section is rendered with `team.map((t, i) => ...)`. For each pass through the array, `t` is one complete team object. That is why `t.name`, `t.role`, `t.note`, and `t.image` all belong to the same person. Add an `image` property to every object; do not create one separate image list, because its order could stop matching the team members.

1. Add each photo file inside the project's `public/images/team/` folder. For example:

```text
public/
  images/
    team/
      naw-thoo-mwe-paw.jpg
      saw-moo-kapaw-say-reh.jpg
```

2. Put each file's public URL path in the matching team object. The path starts with `/` and omits `public`; for example, `public/images/team/naw-thoo-mwe-paw.jpg` is referenced as `/images/team/naw-thoo-mwe-paw.jpg`. Until a photo is available, keep that person's `image` value as `null`.

```ts
const team = [
  {
    name: "Naw Thoo Mwe Paw",
    role: "Principal",
    note: "I want to support children with disabilities and help them build dignity, confidence and independence through education and care.",
    image: null, // Change to "/images/team/naw-thoo-mwe-paw.jpg" after adding that file.
  },
  {
    name: "Saw Moo Kapaw Say Reh",
    role: "Curriculum Development Coordinator & Finance",
    note: "For the glory of God to be revealed through our work with children and families.",
    image: null, // Change to "/images/team/saw-moo-kapaw-say-reh.jpg" after adding that file.
  },
  // Continue with one matching image path for every team member.
] as const;
```

3. In `src/app/about/page.tsx`, import Next.js `Image` near the top with the other imports:

```ts
import Image from "next/image";
```

4. The team card checks `t.image`. A real path displays the photo; `null` displays the existing placeholder. The current render is:

```tsx
{t.image ? (
  <Image
    src={t.image}
    alt={`Photo of ${t.name}`}
    width={600}
    height={400}
    className="h-40 w-full rounded-2xl object-cover"
  />
) : (
  <ImagePlaceholder label={`Photo: ${t.name}`} tint={t.tint} className="h-40 w-full rounded-2xl" />
)}
```

`src={t.image}` reads the path from the current team object. For example, when `t` is Naw Thoo Mwe Paw's object, it uses Naw's image path; when `t` is Saw Moo Kapaw Say Reh's object, it uses Saw's path. The `name`, `role`, and `note` continue to render from that same object below the photo.

For a member with a real photo, `label` and `tint` are not used for that displayed photo. Keep `tint` because it controls the fallback placeholder whenever `image` is `null`. Keep the `ImagePlaceholder` import because other About page sections also use placeholders, such as the story and partner sections.

**Adding another team member:** add their photo under `public/images/team/`, then add one object to `team` with that photo's matching `image` path plus their `name`, `role`, and `note`. The `.map()` automatically creates the extra card; no separate image JSX is needed for each person.

**Replacing a photo:** replace the file while keeping its filename, or change that person's `image` value to the new path. Filenames and extensions must match exactly, including letter case, because the deployed site runs on a case-sensitive filesystem.

**If some staff do not have photos yet:** set their `image` value to `null`. The team render then shows the placeholder for those entries. Do not set `src` to an empty string or a path to a file that does not exist.

### Partner image placeholders
This section also uses placeholder cards:
```tsx
{partners.map((p, i) => (
  <Reveal key={p.name} delay={i * 0.05}>
    <article className="card h-full">
      <ImagePlaceholder label={`Logo: ${p.name}`} tint={p.tint} className="h-24 w-full rounded-2xl" />
      <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
      <p className="text-xs font-semibold text-star-blue">{p.full}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
    </article>
  </Reveal>
))}
```

### How to change partner text/logo placeholders
- edit `partners` array at the top
- change `name`, `full`, `text`, and `tint`
- change placeholder label in `ImagePlaceholder`

---

## 4.3 Activities page

File: `src/app/activities/page.tsx`

### Main data arrays
```ts
const activities = [ ... ];
const stories = [ ... ];
```

### Activity card render
```tsx
{activities.map((a, i) => (
  <Reveal key={a.title} delay={i * 0.05}>
    <article className="card flex h-full flex-col gap-5">
      <ImagePlaceholder label={`Photo: ${a.title}`} tint={a.tint} className="h-40 w-full flex-none rounded-2xl" />
      <div>
        <a.icon className="h-7 w-7 text-slate-700" aria-hidden="true" />
        <h3 className="mt-3 text-lg font-bold">{a.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
      </div>
    </article>
  </Reveal>
))}
```

### Story card render
```tsx
{stories.map((s, i) => (
  <Reveal key={s.name} delay={i * 0.05}>
    <article className="card flex h-full flex-col overflow-hidden p-0">
      <ImagePlaceholder label={`Photo: ${s.name}`} tint={s.tint} className="h-44 w-full" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{s.tag}</span>
          <span className="text-slate-500">{s.label}</span>
        </div>
        <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.excerpt}</p>
      </div>
    </article>
  </Reveal>
))}
```

### How to change content
- Edit `activities` array for the activity cards
- Edit `stories` array for the testimonial blocks
- The image placeholder label is built from each item title/name

---

## 4.4 Gallery page

File: `src/app/gallery/page.tsx`

Purpose: top-level page that renders the gallery tab system.

Render:
```tsx
<PageHeader
  eyebrow="Gallery"
  title="A window into our days"
  description="Photographs are shared with family consent..."
  tint="yellow"
/>
<section className="container-x py-16">
  <GalleryTabs />
</section>
```

### GalleryTabs component
File: `src/components/GalleryTabs.tsx`

This component defines:
```ts
const tabs: { id: string; label: string; items: Item[] }[] = [
  {
    id: "activities",
    label: "School Activities & Therapies",
    items: [
      { title: "Morning circle", caption: "Songs, greetings and today's weather — in speech and sign.", tint: "blue" },
      ...
    ],
  },
  {
    id: "artworks",
    label: "Student Artworks & Crafts",
    items: [
      { title: "Sunflower field", caption: "Acrylic on canvas, by Fon (age 12).", tint: "yellow" },
      ...
    ],
  },
];
```

To change gallery items:
- edit `tabs` array
- change `title`, `caption`, `tint`
- change the active tab label text (`label`)

How to change placeholders:
```tsx
<ImagePlaceholder
  label={item.title}
  tint={item.tint}
  className="aspect-square w-full transition-transform duration-300 group-hover:scale-105"
/>
```

---

## 4.5 Contact page

File: `src/app/contact/page.tsx`

### Critical variables
```ts
const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
const mapsQuery = encodeURIComponent(`${site.name}, ${site.address.line1}, ${site.address.line2}, ${site.address.country}`);
```

These are used for:
- clickable phone link
- Google Maps search link

### Contact details render
The page reads from `site`:
```tsx
{site.address.line1}
{site.address.line2}
{site.address.country}
{site.phone}
{site.email}
{site.hours.map((h) => ... )}
```

### Contact form
File: `src/components/ContactForm.tsx`

Editable form options:
```ts
const subjects = [
  "Enrolling my child",
  "Volunteering",
  "Donations & sponsorship",
  "Partnerships / CSR",
  "Media enquiry",
  "Something else",
];
```

How to change:
- edit the `subjects` array
- edit the success message in the `sent` branch
- connect `handleSubmit` to email API / webhook if needed

---

## 4.6 Donate page

File: `src/app/donate/page.tsx`

### Impact variable
```ts
const impact = [
  { icon: Utensils, amount: "฿300", text: "One hour of speech or occupational therapy for a child." },
  ...
];
```

This drives the donation value cards at the top of the page.

### Donation components
- `src/components/PromptPayDonation.tsx` — Thai PromptPay QR code generator
- `src/components/IntlDonationCard.tsx` — international card donation interface
- `src/components/CraftShop.tsx` — handmade products for sale/support

#### PromptPay config
```ts
const presets = [100, 300, 500, 1000, 2000];
```

This controls quick amount buttons.

Important source value:
```ts
import { site } from "@/lib/site";
```

Used in:
```ts
const payload = useMemo(() => {
  if (!valid) return generatePayload(site.promptPayId);
  return generatePayload(site.promptPayId, { amount: Math.round(numeric * 100) / 100 });
}, [numeric, valid]);
```

#### International donation config
```ts
const presets = [10, 25, 50, 100, 250];
const currencies = ["USD", "EUR", "GBP", "AUD", "SGD"] as const;
```

#### Craft shop product data
```ts
const products: Product[] = [
  {
    id: "woven-basket",
    title: "Hand-Woven Rattan Basket",
    price: 450,
    maker: "Woven by Tee, age 14",
    description: "A sturdy basket ...",
    impact: "Proceeds fund weaving materials and occupational therapy sessions.",
    tint: "yellow",
  },
  ...
];
```

This is the main place to edit or add products sold in the craft shop.

---

## 5. Image management: where to replace visuals

The project currently uses placeholder visuals instead of real photography for most cards.

### A. Global placeholder component
File: `src/components/ImagePlaceholder.tsx`

This is the single most important component controlling placeholder visuals.

It is used in:
- About page: story image, partner cards, team cards
- Activities page: activity cards, stories cards
- Gallery page: gallery tab images
- Craft shop products

### B. Actual logo and branding images
The logo is rendered directly with Next `Image`:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/app/page.tsx`

Source file path:
- `public/logo.jpg`

To update the brand image:
- replace the file in `public/`
- or change the `src` path to a different asset

### C. Replace placeholder image with real photo
For an array-driven card section such as the team, store each image path on the corresponding data object. A path under `public/` is used in code without the `public` prefix. For example, `public/images/team/person.jpg` becomes `/images/team/person.jpg`.

The team pattern checks for an image path and falls back to the placeholder when the value is `null`:
```tsx
{t.image ? (
  <Image src={t.image} alt={`Photo of ${t.name}`} width={600} height={400} className="h-40 w-full rounded-2xl object-cover" />
) : (
  <ImagePlaceholder label={`Photo: ${t.name}`} tint={t.tint} className="h-40 w-full rounded-2xl" />
)}
```

Because `t` is the current item in `team.map(...)`, `t.image` selects the correct person's photo, while `t.name` supplies its accessible description. Apply this same data-object pattern to other mapped sections if each card needs its own image; do not hardcode a single image path in shared JSX when the cards need different photos.

### D. Replace all image placeholders globally
If you want a single project-wide change, update `ImagePlaceholder` only and all uses of it will inherit the new look.

---

## 6. How to change specific content

### Team member names and texts
File: `src/app/about/page.tsx`

Edit this array:
```ts
const team = [
  { name: "...", role: "...", note: "...", tint: "blue", image: null },
];
```

### Team member photos
File: `src/app/about/page.tsx`

Put each photo in `public/images/team/`, then set that person's `image` property to the corresponding URL path beginning with `/images/team/`. Until the file exists, leave `image: null`; the render will show the placeholder. The render uses the current array item's path:
```tsx
{t.image ? (
  <Image src={t.image} alt={`Photo of ${t.name}`} width={600} height={400} className="h-40 w-full rounded-2xl object-cover" />
) : (
  <ImagePlaceholder label={`Photo: ${t.name}`} tint={t.tint} className="h-40 w-full rounded-2xl" />
)}
```

Import `Image` from `next/image` at the top of the page file. To change only one person's photo, update only that person's `image` value; the other team cards keep their own paths.

### All image placeholders rendered as cards
Files using placeholder visuals:
- `src/app/about/page.tsx`
- `src/app/activities/page.tsx`
- `src/components/GalleryTabs.tsx`
- `src/components/CraftShop.tsx`

### Contact details
File: `src/lib/site.ts`

Edit:
```ts
phone, email, address, hours, promptPayId
```

### Navigation labels
File: `src/lib/site.ts`

Edit:
```ts
navLinks
```

---

## 7. Best maintenance practices

1. Keep business data in `src/lib/site.ts`.
2. Keep reusable UI in `src/components/*`.
3. Keep page-specific content in the page file arrays.
4. Use `ImagePlaceholder` for development visuals; replace with real images only when assets are ready.
5. If you add a new team member, keep the same object shape; set `image` to a path when their photo exists or `null` until then:
```ts
{ name, role, note, tint, image }
```
6. If you add a new gallery item, keep the same object shape:
```ts
{ title, caption, tint }
```

---

## 8. Quick lookup summary

### Editable text and values by file
- `src/lib/site.ts` — site name, contact info, nav links, PromptPay config
- `src/app/about/page.tsx` — principles, goals, partners, team members
- `src/app/activities/page.tsx` — activity cards, stories cards
- `src/components/GalleryTabs.tsx` — gallery tab items
- `src/components/ContactForm.tsx` — contact form subject choices
- `src/components/VolunteerForm.tsx` — volunteer role options
- `src/components/CraftShop.tsx` — craft shop products and pricing
- `src/components/PromptPayDonation.tsx` — QR donation presets
- `src/components/IntlDonationCard.tsx` — international donation presets
- `src/components/ImagePlaceholder.tsx` — placeholder look and color palette

This is the primary maintenance map for future edits.
