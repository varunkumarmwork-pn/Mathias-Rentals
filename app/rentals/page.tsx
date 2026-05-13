import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import PropertyCard from "@/components/ui/PropertyCard";
import { PROPERTIES } from "@/constants/properties";

export const metadata = {
  title: "Rental Homes | Mathias Rentals LLC",
  description:
    "Browse quality rental properties with Mathias Rentals LLC. Comfortable, well-maintained homes available now.",
};

export default function RentalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-900/80 text-white py-20 md:py-32">
        <Container className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">
            Available Rental Homes
          </h1>
          <p className="text-xl text-white/90">
            Quality properties carefully selected for comfort and reliability.
          </p>
        </Container>
      </section>

      {/* Listings */}
      <section className="py-24 bg-white">
        <Container>
          <div className="mb-12">
            <SectionHeader
              title="Find Your Next Home"
            />
            <div className="flex gap-4 flex-wrap">
              <Button href="/rentals" variant="primary" size="sm">
                All Properties
              </Button>
              <Button variant="secondary" size="sm">
                Available Now
              </Button>
              <Button variant="secondary" size="sm">
                Coming Soon
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-brand-100 p-12 rounded-lg">
            <h3 className="font-serif text-2xl mb-2">
              Don't see what you're looking for?
            </h3>
            <p className="text-text-secondary mb-6">
              New properties become available regularly. Join our waitlist for
              personalized notifications.
            </p>
            <Button href="/contact" variant="primary">
              Join Waitlist
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
