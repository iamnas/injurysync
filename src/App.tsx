// import { LandingPage } from "./components/LandingPage"

import { ContactSection } from "./components/ContactSection"
import { CtaSection } from "./components/CtaSection"
import { FaqSection } from "./components/FaqSection"
import { FeaturesSection } from "./components/FeaturesSection"
import FeaturesSectionV2 from "./components/FeaturesSectionV2"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import { Navigation } from "./components/Navigation"
import { PricingSection } from "./components/PricingSection"

function App() {

  return (
    <>
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
    </>
  )
}

export default App
