import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { GALLERY_IMAGES } from "@/constants/images";

export default function RenovationsHighlight() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl mb-6">
              Professional Renovation Services
            </h2>
            <p className="text-text-secondary mb-6">
              We transform properties with precision and care. From kitchen
              upgrades to full interior redesigns, our team delivers quality
              results on time and on budget.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-text-primary font-semibold">
                ✓ Interior & Exterior Upgrades
              </p>
              <p className="text-text-primary font-semibold">
                ✓ Maintenance & Repairs
              </p>
              <p className="text-text-primary font-semibold">
                ✓ Turnover Preparation
              </p>
              <p className="text-text-primary font-semibold">
                ✓ Strategic Improvements
              </p>
            </div>
            <Button href="/renovations" variant="primary">
              See Our Work
            </Button>
          </div>

          {/* Image */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image
              src={GALLERY_IMAGES.kitchenReno}
              alt="Kitchen Renovation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
