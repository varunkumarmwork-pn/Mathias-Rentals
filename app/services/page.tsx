import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Our Services | Mathias Rentals LLC",
};

interface ServiceDetail {
  title: string;
  who: string;
  included: string;
  benefit: string;
  cta: { text: string; href: string };
}

const SERVICES: ServiceDetail[] = [
  {
    title: "Home Rentals",
    who: "Renters seeking quality, well-maintained residential properties.",
    included: "Professional property management, responsive maintenance, community support.",
    benefit: "Peace of mind knowing your home is managed by experienced professionals.",
    cta: { text: "View Available Homes", href: "/rentals" },
  },
  {
    title: "Property Rentals",
    who: "Property owners looking to manage residential investments.",
    included: "Tenant screening, rent collection, property maintenance coordination.",
    benefit: "Maximize rental income while we handle the operational burden.",
    cta: { text: "Get Started", href: "/contact" },
  },
  {
    title: "Rental Property Improvements",
    who: "Landlords wanting to increase property value and tenant retention.",
    included: "Strategic upgrades, modernization, aesthetic improvements.",
    benefit: "Higher rental rates and longer tenant tenancy.",
    cta: { text: "See Examples", href: "/gallery" },
  },
  {
    title: "Renovation Planning",
    who: "Anyone planning a renovation but unsure where to start.",
    included: "Scope assessment, budget guidance, timeline development.",
    benefit: "Clear roadmap and realistic expectations before breaking ground.",
    cta: { text: "Schedule Consultation", href: "/contact" },
  },
  {
    title: "Interior & Exterior Upgrades",
    who: "Property owners seeking to modernize living spaces.",
    included: "Kitchen & bathroom renovations, flooring, painting, landscaping.",
    benefit: "Transformed spaces that increase property appeal and value.",
    cta: { text: "Get a Quote", href: "/contact" },
  },
  {
    title: "Maintenance Coordination",
    who: "Property managers seeking reliable maintenance support.",
    included: "Preventive maintenance scheduling, emergency repairs, contractor coordination.",
    benefit: "Well-maintained properties, lower vacancy rates, tenant satisfaction.",
    cta: { text: "Learn More", href: "/contact" },
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-900/80 text-white py-20 md:py-32">
        <Container className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Our Services</h1>
          <p className="text-xl text-white/90">
            Complete rental and renovation solutions tailored to your needs.
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      Who it's for
                    </p>
                    <p className="text-text-secondary">{service.who}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      What's included
                    </p>
                    <p className="text-text-secondary">{service.included}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                      Key benefit
                    </p>
                    <p className="text-text-secondary">{service.benefit}</p>
                  </div>
                </div>
                <Button
                  href={service.cta.href}
                  variant="primary"
                  size="sm"
                  className="mt-auto pt-6"
                >
                  {service.cta.text}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Turnover Section */}
      <section className="py-24 bg-brand-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6">
                Turnover Renovation Support
              </h2>
              <p className="text-text-secondary mb-4">
                Between tenants, properties need rapid transformation. We
                specialize in fast-track renovations that prepare homes for new
                residents—cleaning, painting, repairs, and upgrades completed
                efficiently and to our high standards.
              </p>
              <p className="text-text-primary font-semibold mb-4">
                Typical timeline: 1–3 weeks depending on scope.
              </p>
              <p className="text-text-primary font-semibold mb-6">
                Our approach: Maximize property readiness without sacrificing
                quality.
              </p>
              <Button href="/contact" variant="primary">
                Discuss Your Timeline
              </Button>
            </div>
            <div className="h-96 bg-gradient-to-br from-accent via-amber-600 to-amber-700 rounded-lg" />
          </div>
        </Container>
      </section>
    </>
  );
}
