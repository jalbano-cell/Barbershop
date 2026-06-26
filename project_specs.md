# project_specs.md — Gill Barber Landing Page (Tailwind + shadcn/ui Rebuild)

## What the app does & who uses it
Same public-facing landing page for **Gill Barber**. Same content, same layout — tech stack swap only.

---

## Tech Stack
- **Framework:** Next.js 14 (App Router) — required by shadcn/ui
- **Styling:** Tailwind CSS v3
- **Components:** shadcn/ui — Button, Card, Badge, Separator
- **Fonts:** Playfair Display + Inter (via next/font/google)
- **Theme:** Dark (CSS variables set via shadcn's theming system)

---

## Pages & Sections (single page, same order as current site)

| Section | shadcn components used |
|---|---|
| Nav | Button (Book Now CTA) |
| Hero | Button (primary + ghost) |
| Features | Card, CardHeader, CardContent |
| Gallery (The Work) | — (CSS grid + next/image) |
| Reviews (Client Reviews) | Card, CardContent, Badge, Separator |
| Booking | — (Setmore iframe embed) |
| Footer | Separator |

---

## Project Structure
```
BarberwBooking/
├── CLAUDE.md
├── project_specs.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Gallery.tsx
│   ├── Reviews.tsx
│   ├── Booking.tsx
│   └── Footer.tsx
├── components/ui/          ← shadcn generated
├── lib/utils.ts
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Content (unchanged)
- Address: 7215 Goreway Dr #1c17, Mississauga, ON L4T 0B4
- Phone: (647) 679-9829
- Booking: https://gillbarber.setmore.com
- Hero image: Freepik barbershop tools URL
- Gallery: 6 real images (Fade, Skin Fade, Taper, Beard Trim, Classic Cut, Line Up)
- Reviews: 4 Google review cards + map embed

---

## Design (preserved from current site)
- Background: `#0a0a0a`, Surface: `#111111`, Accent: `#c9a84c` (gold)
- Playfair Display for headings, Inter for body
- Lightbox on gallery click
- Fade-up scroll animations
- Nav glass effect on scroll
- Scroll indicator in hero
