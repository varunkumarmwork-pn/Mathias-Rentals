import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

interface Step {
  number: number;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  { number: 1, title: "Enquire", description: "Tell us what you need" },
  { number: 2, title: "Discuss", description: "We explore options" },
  { number: 3, title: "Plan", description: "Timeline & details" },
  { number: 4, title: "Execute", description: "We deliver results" },
  { number: 5, title: "Support", description: "Ongoing assistance" },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          title="Our Process"
          description="From initial enquiry through handover, we keep you informed and in control."
          centered
        />
        <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-between gap-6 relative">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="flex-1 relative flex items-center">
              {/* Line (hidden on mobile) */}
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-accent -z-10" />
              )}

              {/* Step */}
              <div className="flex gap-4 w-full">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 py-2">
                  <h4 className="font-semibold text-text-primary">{step.title}</h4>
                  <p className="text-sm text-text-secondary">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
