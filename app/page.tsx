import Hero from "@/components/sections/home/Hero";
import TrustBar from "@/components/sections/home/TrustBar";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import FeaturedRentals from "@/components/sections/home/FeaturedRentals";
import RenovationsHighlight from "@/components/sections/home/RenovationsHighlight";
import WhyMathias from "@/components/sections/home/WhyMathias";
import Process from "@/components/sections/home/Process";
import GalleryStrip from "@/components/sections/home/GalleryStrip";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <FeaturedRentals />
      <RenovationsHighlight />
      <WhyMathias />
      <Process />
      <GalleryStrip />
      <CTABanner />
    </>
  );
}
