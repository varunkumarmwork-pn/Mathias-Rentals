import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata = {
  title: "About Mathias Rentals LLC | Rentals & Renovations",
};

const VALUES = [
  {
    title: "Reliability",
    description:
      "We follow through on commitments. Fast response times, professional communication, and dependable execution are non-negotiable.",
  },
  {
    title: "Quality First",
    description:
      "We refuse shortcuts. Every property, every renovation, every interaction reflects our commitment to excellence and attention to detail.",
  },
  {
    title: "People-Focused",
    description:
      "Tenants, owners, and our team all matter. We listen, respond, and build relationships based on honesty and respect.",
  },
];

const STATS = [
  { number: "15+", label: "Years in Business" },
  { number: "48", label: "Properties Managed" },
  { number: "200+", label: "Happy Residents" },
  { number: "96%", label: "Satisfaction Rate" },
];

const TESTIMONIALS = [
  {
    quote:
      "Mathias Rentals made the entire process seamless. From my first enquiry to moving in, everything was professional and transparent. The home is immaculate.",
    author: "Sarah M.",
    role: "Resident",
  },
  {
    quote:
      "After years managing properties myself, I handed everything over to Mathias. Best decision I made. Tenant satisfaction is higher, and I actually get to sleep at night.",
    author: "James P.",
    role: "Property Owner",
  },
  {
    quote:
      "The renovation team completely transformed our rental unit. Timeline was tight, quality was perfect. We've already booked them for the next property.",
    author: "Michelle R.",
    role: "Landlord",
  },
  {
    quote:
      "Professional, trustworthy, and genuinely invested in the work. You can tell they care about the details. Highly recommend.",
    author: "David K.",
    role: "Client",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-900/80 text-white py-20 md:py-32">
        <Container className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">About Mathias Rentals</h1>
          <p className="text-xl text-white/90">
            Our story, values, and commitment to better living spaces.
          </p>
        </Container>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6">Built on Trust and Quality</h2>
              <p className="text-text-secondary mb-4">
                Mathias Rentals started with a simple idea: that residential
                properties should be managed with the same care and attention
                you'd give your own home. Over the years, we've grown to serve
                hundreds of residents and property owners, but our core
                principle remains unchanged.
              </p>
              <p className="text-text-secondary">
                We believe that quality living spaces improve lives. Whether
                you're renting a home or investing in property, you deserve
                professionals who understand that detail matters—from the finish
                on a kitchen counter to the responsiveness of a maintenance team.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-accent to-amber-700 rounded-lg" />
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-100">
        <Container>
          <SectionHeader title="Our Values" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-text-secondary text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader title="By the Numbers" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-serif text-5xl font-bold text-accent mb-3">
                  {stat.number}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-900 text-white">
        <Container>
          <SectionHeader
            title="What Our Clients Say"
            centered
            className="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={idx}
                className="border-l-4 border-accent bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              >
                <p className="text-white/90 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-accent">{testimonial.author}</p>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
