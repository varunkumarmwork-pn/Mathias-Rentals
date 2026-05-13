import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export default function CTABanner({
  title = "Ready to Take the Next Step?",
  description = "Whether you're searching for a rental home or planning a renovation, we're here to help.",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-br from-brand-900 to-brand-900/80 text-white py-24">
      <Container className="text-center">
        <h2 className="font-serif text-4xl mb-4">{title}</h2>
        <p className="text-lg text-white/80 mb-10">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
          <Button href="/rentals" variant="secondary">
            Browse Rentals
          </Button>
        </div>
      </Container>
    </section>
  );
}
