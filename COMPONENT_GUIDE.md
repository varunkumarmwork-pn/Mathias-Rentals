# Component Creation Guide

Follow this pattern to create new components matching the **ReviewsSection.tsx** architecture.

---

## 🗺️ Component Anatomy

Every component follows this structure:

```tsx
// 1. Import statements
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

// 2. Define TypeScript interfaces for props
interface MyComponentProps {
  variant?: "light" | "dark";
  title?: string;
  className?: string;
}

// 3. Define data array (hardcoded, can accept via props)
const DATA_ARRAY = [
  { id: 1, title: "Item 1", description: "..." },
  { id: 2, title: "Item 2", description: "..." },
];

// 4. Build component (functional, render JSX)
export default function MyComponent({ 
  variant = "light", 
  title = "Default Title",
  className = ""
}: MyComponentProps) {
  return (
    <section className={`py-24 ${className}`}>
      <Container>
        {/* Header */}
        <SectionHeader title={title} centered />
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA_ARRAY.map((item) => (
            {/* Card */}
            <div key={item.id} className="...">
              {/* Content */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## 📋 Step-by-Step Template

### 1. Create Props Interface

```tsx
interface YourComponentProps {
  // Optional variant for light/dark themes
  variant?: "light" | "dark";
  
  // Title prop (optional, can default in component)
  title?: string;
  
  // Custom class names for flexibility
  className?: string;
  
  // Data can be passed as prop or hardcoded
  items?: CustomItem[];
}
```

### 2. Define Data Array

```tsx
interface CustomItem {
  id: number;
  title: string;
  description: string;
  // Add fields as needed
}

const DEFAULT_ITEMS: CustomItem[] = [
  {
    id: 1,
    title: "First Item",
    description: "Description of first item"
  },
  // ... more items
];
```

### 3. Build Component with Theme Support

```tsx
export default function YourComponent({
  variant = "light",
  title = "Default Title",
  className = "",
  items = DEFAULT_ITEMS
}: YourComponentProps) {
  
  // Theme logic (optional)
  const isDark = variant === "dark";
  const bgClass = isDark ? "bg-brand-900 text-white" : "bg-white";
  const textClass = isDark ? "text-white" : "text-text-primary";
  
  return (
    <section className={`py-24 ${bgClass} ${className}`}>
      <Container>
        {/* Header Section */}
        <div className={isDark ? "text-white" : ""}>
          <SectionHeader 
            title={title} 
            centered
            className={isDark ? "text-white" : ""}
          />
        </div>
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div 
              key={item.id}
              className={`border border-border rounded-lg p-8 hover:shadow-md transition-shadow ${
                isDark ? "bg-white/5 border-white/10" : "bg-brand-50"
              }`}
            >
              <h3 className={`font-serif text-xl mb-3 ${textClass}`}>
                {item.title}
              </h3>
              <p className={isDark ? "text-white/80" : "text-text-secondary"}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## 📦 Available Components to Extend

### UI Components

**Button.tsx**
```tsx
<Button 
  href="/path"
  variant="primary" // "primary" | "secondary" | "dark"
  size="md" // "sm" | "md" | "lg"
  fullWidth
>
  Click me
</Button>
```

**Container.tsx**
```tsx
<Container className="extra-classes">
  {/* Centered, max-width 1200px content */}
</Container>
```

**SectionHeader.tsx**
```tsx
<SectionHeader
  title="Main Title"
  subtitle="Optional badge"
  description="Optional description"
  centered
  className="mb-custom"
/>
```

---

## 🎨 Grid Layouts

### Responsive Grid Patterns

```tsx
// 1 column mobile → 2 columns tablet → 3 columns desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// 1 column mobile → 4 columns desktop
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

// Custom: 1 mobile, 2 tablet, custom desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-8">
```

---

## 🌈 Color & Theme Usage

### Light Variant (Default)
```tsx
className="bg-white text-text-primary border border-border"
```

### Dark Variant
```tsx
className="bg-brand-900 text-white border border-white/10"
```

### Accent Highlights
```tsx
className="text-accent hover:text-accent-hover"
```

---

## 🏗️ Common Section Patterns

### Pattern 1: Header + Grid of Cards
```tsx
<section className="py-24 bg-white">
  <Container>
    <SectionHeader title="..." centered />
    <div className="grid ...">
      {data.map(item => <Card key={item.id} {...item} />)}
    </div>
  </Container>
</section>
```

### Pattern 2: Split Layout (Image + Text)
```tsx
<section className="py-24">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text */}
      <div>
        <h2>Title</h2>
        <p>Description</p>
        <Button>CTA</Button>
      </div>
      {/* Image */}
      <div className="h-96 bg-gradient-to-br from-accent to-amber-700 rounded-lg" />
    </div>
  </Container>
</section>
```

### Pattern 3: Stat Boxes
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
  {STATS.map((stat) => (
    <div key={stat.id} className="text-center">
      <div className="font-serif text-5xl text-accent mb-3">
        {stat.number}
      </div>
      <p className="text-xs uppercase tracking-wider">
        {stat.label}
      </p>
    </div>
  ))}
</div>
```

### Pattern 4: Testimonials / Cards with Border
```tsx
<div className="border-l-4 border-accent bg-white/5 p-8 rounded-lg">
  <p className="italic mb-4">{quote}</p>
  <p className="font-semibold text-accent">{author}</p>
</div>
```

---

## ✨ Interactive Elements

### Hover Effects
```tsx
className="hover:shadow-md transition-shadow duration-200"
className="hover:bg-brand-50 transition-colors"
className="hover:text-accent-hover transition-colors"
className="hover:scale-105 transition-transform"
```

### Focus States (Forms)
```tsx
className="focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
```

---

## 📝 Real Example: Testimonials Section

```tsx
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  variant?: "light" | "dark";
  title?: string;
  testimonials?: Testimonial[];
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Great service!",
    author: "John Doe",
    location: "New York",
    rating: 5
  },
  // ...
];

export default function TestimonialsSection({
  variant = "light",
  title = "What Our Clients Say",
  testimonials = DEFAULT_TESTIMONIALS
}: TestimonialsSectionProps) {
  
  const isDark = variant === "dark";
  
  return (
    <section className={`py-24 ${isDark ? "bg-brand-900 text-white" : "bg-white"}`}>
      <Container>
        <SectionHeader 
          title={title}
          centered
          className={isDark ? "text-white" : ""}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`border-l-4 border-accent p-8 rounded-lg ${
                isDark ? "bg-white/5" : "bg-brand-50"
              }`}
            >
              <p className={`italic mb-4 ${isDark ? "text-white/90" : "text-text-secondary"}`}>
                "{testimonial.quote}"
              </p>
              <div>
                <p className={`font-semibold ${isDark ? "text-white" : "text-accent"}`}>
                  {testimonial.author}
                </p>
                <p className={`text-sm ${isDark ? "text-white/70" : "text-text-secondary"}`}>
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## 🎯 Checklist for New Components

- [ ] Props interface defined
- [ ] Data array with types
- [ ] Container wrapping content
- [ ] SectionHeader for title
- [ ] Responsive grid (mobile → tablet → desktop)
- [ ] Theme support (light/dark) via `variant` prop
- [ ] Hover effects on interactive elements
- [ ] Proper spacing using CSS variables
- [ ] Semantic HTML (section, button, etc.)
- [ ] Accessibility (alt text, labels, aria)
- [ ] Exported as default
- [ ] Proper TypeScript types

---

## 🚀 Usage Examples

### In Home Page
```tsx
import TestimonialsSection from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <TestimonialsSection variant="light" />
      <CTABanner />
    </>
  );
}
```

### With Custom Data
```tsx
<TestimonialsSection 
  variant="dark"
  title="Client Success Stories"
  testimonials={customTestimonials}
/>
```

---

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Best Practices](https://react.dev)
