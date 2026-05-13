import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { GALLERY_IMAGES } from "@/constants/images";

export const metadata = {
  title: "Gallery | Mathias Rentals LLC",
};

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: "Living Room", category: "rentals", image: GALLERY_IMAGES.livingRoom },
  { id: 2, title: "Kitchen Renovation", category: "renovations", image: GALLERY_IMAGES.kitchenReno },
  { id: 3, title: "Bedroom", category: "interiors", image: GALLERY_IMAGES.bedroom },
  { id: 4, title: "Facade", category: "exteriors", image: GALLERY_IMAGES.facade },
  { id: 5, title: "Dining Area", category: "rentals", image: GALLERY_IMAGES.diningArea },
  { id: 6, title: "Bathroom Upgrade", category: "renovations", image: GALLERY_IMAGES.bathroomUpgrade },
  { id: 7, title: "Home Office", category: "interiors", image: GALLERY_IMAGES.homeOffice },
  { id: 8, title: "Landscaping", category: "exteriors", image: GALLERY_IMAGES.landscaping },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-900/80 text-white py-20 md:py-32">
        <Container className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Gallery</h1>
          <p className="text-xl text-white/90">
            Explore our rental properties and completed renovation projects.
          </p>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <Container>
          <div className="mb-12">
            <SectionHeader title="Filter by Category" />
            <div className="flex gap-4 flex-wrap">
              <Button href="/gallery" variant="primary" size="sm">
                All
              </Button>
              <Button variant="secondary" size="sm">
                Rental Homes
              </Button>
              <Button variant="secondary" size="sm">
                Renovations
              </Button>
              <Button variant="secondary" size="sm">
                Interiors
              </Button>
              <Button variant="secondary" size="sm">
                Exteriors
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="h-72 rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden relative bg-brand-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="font-serif text-xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
