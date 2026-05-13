import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import PropertyCard from "@/components/ui/PropertyCard";
import { PROPERTIES } from "@/constants/properties";

export default function FeaturedRentals() {
  return (
    <section className="py-24 bg-brand-100">
      <Container>
        <SectionHeader
          title="Available Homes"
          description="Availability changes regularly. Browse our current listings or register for notifications."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PROPERTIES.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center">
          <Button href="/rentals" variant="secondary">
            View All Properties
          </Button>
        </div>
      </Container>
    </section>
  );
}
