
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { PricingSection } from "./PricingSection";
import { FaqSection } from "./FaqSection";
import { ContactSection } from "./ContactSection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";
import FeaturesSectionV2 from "./FeaturesSectionV2";

export function LandingPage() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FeaturesSectionV2 />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
