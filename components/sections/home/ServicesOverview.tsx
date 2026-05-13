import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  description: string;
  href: string;
}

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Home Rentals",
    description: "Carefully selected residential properties for renters seeking quality and comfort.",
    href: "/rentals",
  },
  {
    id: 2,
    title: "Renovation Services",
    description: "Full-scale interior and exterior renovations with meticulous attention to detail.",
    href: "/renovations",
  },
  {
    id: 3,
    title: "Property Improvements",
    description: "Strategic upgrades to maximize property value and tenant satisfaction.",
    href: "/services",
  },
  {
    id: 4,
    title: "Owner Support",
    description: "Dedicated assistance for property owners throughout the rental and renovation lifecycle.",
    href: "/contact",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          title="How We Help"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-brand-50 border border-border rounded-lg p-8 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="font-serif text-xl mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="text-accent font-medium text-sm hover:text-accent-hover transition-colors"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
