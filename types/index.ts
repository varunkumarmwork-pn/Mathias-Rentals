// Section Props
export interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

// Property Types
export interface Property {
  id: number;
  name: string;
  beds: number;
  baths: number;
  status: "available" | "coming";
  description: string;
  image?: string;
}

// Service Types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

// Gallery Types
export interface GalleryItem {
  id: number;
  title: string;
  category: "rentals" | "renovations" | "interiors" | "exteriors";
  image?: string;
}

// Testimonial Types
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  rating: number;
  avatar?: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
}

// CTA Button Types
export interface CTAButton {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}
