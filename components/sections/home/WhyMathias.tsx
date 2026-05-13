import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

interface StatItem {
  number: string;
  label: string;
  description: string;
}

const STATS: StatItem[] = [
  {
    number: "15+",
    label: "Years Experience",
    description: "Trusted expertise in residential rentals and property management.",
  },
  {
    number: "200+",
    label: "Happy Residents",
    description: "We prioritize tenant satisfaction and quality of life.",
  },
  {
    number: "100%",
    label: "Quality Standard",
    description: "Every property meets rigorous standards before and after work.",
  },
];

export default function WhyMathias() {
  return (
    <section className="py-24 bg-brand-100">
      <Container>
        <SectionHeader
          title="Why Choose Mathias Rentals"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-serif text-5xl font-bold text-accent mb-3">
                {stat.number}
              </div>
              <h3 className="font-semibold text-text-primary mb-3 uppercase text-sm tracking-wide">
                {stat.label}
              </h3>
              <p className="text-text-secondary text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
