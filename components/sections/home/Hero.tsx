import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-900 to-brand-900/80 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
          Quality Rentals. Thoughtful Renovations. Better Living.
        </h1>
        <p className="text-xl text-white/90 mb-10 font-light">
          Premium residential properties and professional renovation services for
          homeowners, renters, and property investors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/rentals" variant="primary">
            Explore Rentals
          </Button>
          <Button href="/renovations" variant="secondary">
            Learn About Renovations
          </Button>
        </div>
      </div>
    </section>
  );
}
