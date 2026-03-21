# 🖤 Dark Minimal Portfolio — Next.js + Tailwind + Framer Motion

A sleek, scroll-animated dark portfolio built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Tailwind imports + noise overlay + custom utilities
│   ├── layout.tsx           # Root layout with Google Fonts (Syne, Space Mono, DM Sans)
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── CursorGlow.tsx       # Mouse-following radial glow effect
│   ├── Navbar.tsx           # Sticky nav with scroll-hide behavior
│   ├── Hero.tsx             # Hero with staggered title animation + grid bg
│   ├── About.tsx            # About section with photo placeholder + stats
│   ├── Skills.tsx           # 4-card skill grid with hover effects
│   ├── Projects.tsx         # Project cards with mock browser previews
│   ├── Experience.tsx       # Vertical timeline with accent dots
│   ├── Contact.tsx          # Contact form + social links
│   ├── Footer.tsx           # Minimal footer with social links
│   ├── ScrollReveal.tsx     # Reusable Framer Motion scroll-reveal wrapper
│   └── SectionHeader.tsx    # Reusable section tag + title
├── lib/
│   └── data.ts              # ⭐ ALL portfolio content lives here — edit this file!
├── tailwind.config.ts       # Custom theme: colors, fonts, animations
├── postcss.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## ✏️ How to Customize

**All your personal content is in one file:** `lib/data.ts`

Edit `siteConfig`, `heroData`, `aboutData`, `skillsData`, `projectsData`, `experienceData`, and `contactData` to make it yours.

---

## 🎨 Design System

| Token            | Value                          |
|------------------|--------------------------------|
| Background       | `#0a0a0b`                      |
| Card BG          | `#161618`                      |
| Accent           | `#c8ff00` (lime green)         |
| Text Primary     | `#f0eeeb`                      |
| Text Secondary   | `#8a8a8d`                      |
| Display Font     | Syne (800 weight)              |
| Mono Font        | Space Mono                     |
| Body Font        | DM Sans                        |

---

## 🧰 Tech Stack

- **Next.js 14** — App Router, server components
- **Tailwind CSS 3.4** — Utility-first styling
- **Framer Motion 11** — Scroll-triggered animations
- **Lucide React** — Icon library
- **TypeScript** — Full type safety

---

## 📦 Deploy

```bash
npm run build
```

Deploy to **Vercel** with one click, or any Node.js host.
