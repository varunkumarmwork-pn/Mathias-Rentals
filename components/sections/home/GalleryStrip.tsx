import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { GALLERY_IMAGES } from "@/constants/images";

const GALLERY_PREVIEWS = [
  { id: 1, title: "Living Room", image: GALLERY_IMAGES.livingRoom },
  { id: 2, title: "Bedroom", image: GALLERY_IMAGES.bedroom },
  { id: 3, title: "Kitchen Renovation", image: GALLERY_IMAGES.kitchenReno },
  { id: 4, title: "Dining Area", image: GALLERY_IMAGES.diningArea },
];

export default function GalleryStrip() {
  return (
    <section className="py-24 bg-brand-100">
      <Container>
        <SectionHeader
          title="Recent Projects"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {GALLERY_PREVIEWS.map((item) => (
            <div key={item.id} className="h-72 relative rounded-lg overflow-hidden bg-brand-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/gallery" variant="secondary">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
