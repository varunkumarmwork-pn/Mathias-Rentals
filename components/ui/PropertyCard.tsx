import Image from "next/image";
import { Property } from "@/types";
import Button from "@/components/ui/Button";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const isAvailable = property.status === "available";

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="w-full h-72 bg-gradient-to-br from-brand-100 to-brand-50 relative overflow-hidden">
        {property.image ? (
          <Image
            src={property.image}
            alt={property.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-100 to-brand-50" />
        )}
      </div>

      {/* Info */}
      <div className="p-8">
        <span
          className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase mb-4 ${
            isAvailable
              ? "bg-green-100/50 text-green-700"
              : "bg-amber-100/50 text-amber-700"
          }`}
        >
          {isAvailable ? "Available" : "Coming Soon"}
        </span>

        <h3 className="font-serif text-xl mb-2">{property.name}</h3>
        <p className="text-text-primary font-semibold text-sm mb-2">
          {property.beds} Bed • {property.baths} Bath
        </p>
        <p className="text-text-secondary text-sm mb-6">{property.description}</p>

        <Button
          href="/contact"
          variant="primary"
          fullWidth
          size="sm"
        >
          {isAvailable ? "Enquire Now" : "Join Waitlist"}
        </Button>
      </div>
    </div>
  );
}
