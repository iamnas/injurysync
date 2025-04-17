
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { PricingSection } from "./PricingSection";
import { FaqSection } from "./FaqSection";
import { ContactSection } from "./ContactSection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
