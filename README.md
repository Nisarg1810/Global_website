# Global Tours & Travels 🌍

A modern, production-ready travel agency website built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**.

## ✨ Features

- 🎨 Premium design — glassmorphism nav, animated hero, Sora + Mulish fonts
- 📱 **Mobile-first** — horizontal swipe cards, proper touch targets, iOS-safe
- 🗺️ 6 destination cards with real photos (Goa, Manali, Kerala, Rajasthan, Andaman, Dubai)
- 📦 3 tour package tiers — Family, Friends (featured), Solo/Couple
- 💬 Contact form with success state + WhatsApp floating button
- 🔍 Full SEO — metadata, OpenGraph, semantic HTML
- ⚡ Static site generation (SSG) — deploys anywhere

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 | Framework (App Router, SSG) |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Google Fonts | Sora + Mulish |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
app/
  layout.tsx       # Root layout, fonts, SEO metadata
  page.tsx         # Main page — assembles all sections
  globals.css      # Design tokens, animations, global styles
components/
  Navbar.tsx       # Sticky glassmorphism nav + mobile drawer
  Hero.tsx         # Full-bleed hero with animated counters
  Destinations.tsx # 6 destination cards (swipe on mobile)
  Packages.tsx     # 3 package tiers
  WhyUs.tsx        # Why choose us section
  Testimonials.tsx # Traveler reviews (swipe on mobile)
  ContactForm.tsx  # Trip inquiry form with success state
  Footer.tsx       # 4-column footer
  FloatButtons.tsx # WhatsApp + back-to-top floating buttons
```

## 🌐 Deployment

Deploy instantly to **Vercel** (recommended for Next.js):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use Netlify, Railway, or any Node.js host.

---

**Founded by Nisarg Patel & Aryan Patel** · *Explore. Dream. Discover.*
