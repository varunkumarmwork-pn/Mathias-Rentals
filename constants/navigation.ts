import { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Rentals", href: "/rentals" },
  { label: "Renovations", href: "/renovations" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Home Rentals", href: "/rentals" },
    { label: "Renovations", href: "/renovations" },
    { label: "Property Management", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Get in Touch", href: "/contact" },
  ],
};

export const CONTACT_INFO = {
  email: "hello@mathiasrentals.com",
  phone: "(555) 123-4567",
  hours: "Monday – Friday: 9am – 6pm",
};
