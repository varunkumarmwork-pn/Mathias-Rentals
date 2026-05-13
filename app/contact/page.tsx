import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT_INFO } from "@/constants/navigation";

export const metadata = {
  title: "Contact Us | Mathias Rentals LLC",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-900/80 text-white py-20 md:py-32">
        <Container className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90">
            Let's discuss what you're looking for and how we can help.
          </p>
        </Container>
      </section>

      {/* Form */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <SectionHeader
                title="Tell Us What You're Looking For"
                description="Whether it's a rental home, renovation support, or property owner services, we'll help you take the next step. Fill out the form below and we'll be in touch within 24 hours."
                centered
              />
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-brand-100">
        <Container>
          <SectionHeader title="Other Ways to Reach Us" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl text-accent mb-3">Email</h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-text-secondary hover:text-accent transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl text-accent mb-3">Phone</h3>
              <a
                href={`tel:+15550123567`}
                className="text-text-secondary hover:text-accent transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl text-accent mb-3">Hours</h3>
              <p className="text-text-secondary">{CONTACT_INFO.hours}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
