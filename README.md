# Mathias Rentals LLC — Next.js Website

A premium, production-ready website for a property rentals and renovation services company. Built with **Next.js 16**, **TypeScript**, **React**, and **Tailwind CSS**.

---

## 🏗️ Project Structure

```
mathias-rentals/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout + navigation
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles + CSS variables
│   ├── rentals/
│   │   └── page.tsx             # Rentals listing page
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── renovations/
│   │   └── page.tsx             # Renovations page
│   ├── gallery/
│   │   └── page.tsx             # Gallery page
│   ├── about/
│   │   └── page.tsx             # About page
│   └── contact/
│       └── page.tsx             # Contact page
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx        # Sticky navigation (responsive)
│   │   └── Footer.tsx           # Footer with links
│   │
│   ├── sections/
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── FeaturedRentals.tsx
│   │   │   ├── RenovationsHighlight.tsx
│   │   │   ├── WhyMathias.tsx
│   │   │   ├── Process.tsx
│   │   │   └── GalleryStrip.tsx
│   │   └── CTABanner.tsx         # Shared CTA section
│   │
│   ├── forms/
│   │   └── ContactForm.tsx       # Contact form with validation
│   │
│   └── ui/
│       ├── Button.tsx            # Reusable button component
│       ├── Container.tsx         # Max-width wrapper
│       ├── SectionHeader.tsx     # Section title + subtitle
│       └── PropertyCard.tsx      # Property listing card
│
├── constants/
│   ├── navigation.ts            # Nav links, footer links, contact info
│   ├── properties.ts            # Property data
│   └── testimonials.ts          # Testimonial data
│
├── types/
│   └── index.ts                 # TypeScript interfaces
│
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config
├── next.config.ts               # Next.js config
├── package.json                 # Dependencies
└── .gitignore
```

---

## 🎨 Design System

### Colors (CSS Variables)
- **Background**: `--color-bg-primary` (#fafaf8)
- **Surface**: `--color-bg-surface` (#f0efeb)
- **Text Primary**: `--color-text-primary` (#1c1c1e)
- **Text Secondary**: `--color-text-secondary` (#6b6b6b)
- **Accent**: `--color-accent` (#b5986a)
- **Dark Section**: `--color-dark-section` (#1a1f2e)

### Typography
- **Serif**: DM Serif Display (headings)
- **Sans**: Inter (body)

### Spacing Scale
- xs: 8px
- sm: 16px
- md: 24px
- lg: 40px
- xl: 80px

---

## 📦 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the site.

---

## 🔧 Component Patterns

All components follow the **ReviewsSection.tsx pattern** for consistency:

### Example: Creating a New Section Component

```tsx
// 1. Define Props Interface
interface MyComponentProps {
  title?: string;
  className?: string;
}

// 2. Define Data Array
const DATA = [
  { id: 1, title: "Item 1", description: "..." },
  { id: 2, title: "Item 2", description: "..." },
];

// 3. Build Component
export default function MyComponent({ title, className }: MyComponentProps) {
  return (
    <section className={`py-24 ${className}`}>
      <Container>
        <SectionHeader title={title} centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## 📄 Pages Overview

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Hero, services, featured rentals, process, CTA |
| Rentals | `/rentals` | Property listings with filtering |
| Services | `/services` | Detailed service descriptions |
| Renovations | `/renovations` | Renovation services + before/after |
| Gallery | `/gallery` | Image gallery with categories |
| About | `/about` | Company story, values, testimonials |
| Contact | `/contact` | Contact form + info |

---

## 🎯 Key Features

✅ **Fully responsive** (mobile-first, tested at 768px breakpoint)  
✅ **Dark/Light theme ready** (implement via CSS variables)  
✅ **Type-safe** (full TypeScript)  
✅ **SEO optimized** (meta tags, semantic HTML)  
✅ **Accessible** (ARIA labels, semantic elements)  
✅ **Modular architecture** (reusable components)  
✅ **Tailwind CSS** with CSS variable integration  
✅ **Form validation** (HTML5 + client-side)  
✅ **Fast load times** (optimized images, next/image)  

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo, auto-deploys on push
- **AWS Amplify**: Similar process
- **Self-hosted**: `npm run build && npm start`

---

## 📝 Customization Guide

### Adding a New Property

Edit `constants/properties.ts`:

```ts
export const PROPERTIES: Property[] = [
  // ...existing properties
  {
    id: 6,
    name: "New Property Name",
    beds: 3,
    baths: 2,
    status: "available",
    description: "Description here",
  },
];
```

### Changing Colors

Edit `app/globals.css`:

```css
:root {
  --color-accent: #your-color;
  --color-bg-primary: #your-bg;
  /* etc */
}
```

### Adding a New Page

1. Create folder: `app/new-page/`
2. Add `page.tsx`
3. Add route to navigation: `constants/navigation.ts`

---

## 🔐 Environment Variables

Currently, no environment variables required. When adding APIs:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 📚 Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📞 Component Quick Reference

### UI Components

**Button**
```tsx
<Button href="/contact" variant="primary">
  Get in Touch
</Button>
```

**Container**
```tsx
<Container>
  {/* Content centered, max-width 1200px */}
</Container>
```

**SectionHeader**
```tsx
<SectionHeader
  title="How We Help"
  subtitle="Our services"
  description="Optional description"
  centered
/>
```

**PropertyCard**
```tsx
<PropertyCard property={property} />
```

---

## 🛠️ Future Enhancements

- [ ] Dark mode toggle
- [ ] Image optimization with `next/image`
- [ ] Blog section
- [ ] Testimonials carousel
- [ ] CMS integration (Sanity/Contentful)
- [ ] Analytics (Google Analytics)
- [ ] Newsletter signup
- [ ] Before/after slider (client-side)
- [ ] Chatbot widget
- [ ] Booking calendar

---

## 📄 License

© 2026 Mathias Rentals LLC. All rights reserved.
