import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Mathias Rentals LLC | Quality Rental Homes & Renovation Services",
  description:
    "Mathias Rentals LLC offers premium rental homes and professional renovation services. Reliable, quality-focused, and built around better living spaces.",
  keywords:
    "rental homes, property renovations, home improvements, residential rentals",
  openGraph: {
    title: "Mathias Rentals LLC | Quality Rental Homes & Renovation Services",
    description:
      "Premium rental homes and professional renovation services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-50 text-text-primary">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
