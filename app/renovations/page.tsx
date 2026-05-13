import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import { RENOVATION_IMAGES, GALLERY_IMAGES } from "@/constants/images";

export const metadata = {
  title: "Property Renovation Services | Mathias Rentals LLC",
};

interface RenovationType {
  id: string;
  title: string;
  description: string;
}

const RENOVATION_TYPES: RenovationType[] = [
  { id: "kitchen", title: "Kitchen", description: "Upgrades & modernization" },
  {
    id: "bathroom",
    title: "Bathroom",
    description: "Refresh & renovation",
  },
  {
    id: "interior",
    title: "Full Interior",
    description: "Complete redesign",
  },
  { id: "exterior", title: "Exterior", description: "Exterior upgrades" },
  { id: "flooring", title: "Flooring", description: "Installation & refinishing" },
  { id: "turnover", title: "Turnover Prep", description: "Fast-track ready" },
];

const PROCESS_STEPS = [
  { number: 1, title: "Assessment", description: "Site inspection & scope" },
  { number: 2, title: "Planning", description: "Design & estimates" },
  { number: 3, title: "Approval", description: "Client sign-off" },
  { number: 4, title: "Execution", description: "Work completion" },
  { number: 5, title: "Final Review", description: "Quality verification" },
];

export default function RenovationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-900/80 text-white py-20 md:py-32">
        <Container className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">
            Property Renovation Services
          </h1>
          <p className="text-xl text-white/90">
            Professional renovations that transform spaces and increase value.
          </p>
        </Container>
      </section>

      {/* Service Selector */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader title="What Kind of Renovation?" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RENOVATION_TYPES.map((type) => (
              <button
                key={type.id}
                className="text-left border-2 border-border rounded-lg p-6 hover:border-accent hover:bg-brand-50 transition-all duration-200"
              >
                <h4 className="font-serif text-xl mb-2">{type.title}</h4>
                <p className="text-sm text-text-secondary">{type.description}</p>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Before/After */}
      <section className="py-24 bg-brand-100">
        <Container className="text-center">
          <SectionHeader title="Before & After" centered />
          <BeforeAfterSlider
            beforeImage={RENOVATION_IMAGES.before1}
            afterImage={RENOVATION_IMAGES.after1}
            beforeLabel="Before"
            afterLabel="After"
          />
          <p className="text-text-secondary mt-6">
            Drag the slider to see the transformation
          </p>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader title="Our Renovation Process" centered />
          <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-between gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.number} className="flex-1 relative flex items-center">
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-accent -z-10" />
                )}
                <div className="flex gap-4 w-full">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 py-2">
                    <h4 className="font-semibold text-text-primary">
                      {step.title}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-brand-100">
        <Container>
          <SectionHeader title="Recent Renovation Projects" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="h-72 relative rounded-lg overflow-hidden bg-brand-100">
              <Image
                src={GALLERY_IMAGES.kitchenReno}
                alt="Kitchen Renovation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="h-72 relative rounded-lg overflow-hidden bg-brand-100">
              <Image
                src={GALLERY_IMAGES.bathroomUpgrade}
                alt="Bathroom Upgrade"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="h-72 relative rounded-lg overflow-hidden bg-brand-100">
              <Image
                src={GALLERY_IMAGES.homeOffice}
                alt="Home Office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="h-72 relative rounded-lg overflow-hidden bg-brand-100">
              <Image
                src={GALLERY_IMAGES.landscaping}
                alt="Landscaping"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <Container className="text-center">
          <h2 className="font-serif text-4xl mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Let's discuss your renovation goals and create a plan together.
          </p>
          <Button href="/contact" variant="primary">
            Schedule a Consultation
          </Button>
        </Container>
      </section>
    </>
  );
}
