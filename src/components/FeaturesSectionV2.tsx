import { useState } from 'react';
import FeatureCard from "./FeatureCard";
import ImageSection from "./ImageSection";
import SectionTitle from "./SectionTitle";

function FeaturesSectionV2() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  // Define all features in an array for easier mobile carousel handling
  const features = [
    {
      title: "Doctor Portal",
      description: "Say goodbye to endless email threads. Automatically notify providers when liens are sent, approved, and paid. Negotiate and sign directly through our intuitive platform."
    },
    {
      title: "Tasks Done, Not Listed",
      description: "Forget manual task management. InjurySync intelligently creates actionable tasks from client intake, automatically follows up to gather critical case details, and seamlessly collects bills, medical records, and essential documentation."
    },
    {
      title: "Automated Treatment & Lien Negotiation",
      description: "Instantly connect your clients to LOP doctors through the CasePilot portal, or add your existing provider contacts. Streamline bills, medical records, and lien negotiations, making the process nearly automatic and entirely hassle-free."
    },
    {
      title: "Seamless CRM Integration",
      description: "Easily integrate InjurySync with Filevine, Clio, or your preferred case management software, keeping all your critical data synchronized and up-to-date."
    }
  ];

  return (
    <section className="flex flex-col items-center px-28 py-20 bg-white max-md:px-5">
      <SectionTitle />

      {/* Desktop View - Original Layout */}
      <div className="mt-20 w-full max-w-[1216px] max-md:hidden max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
          <div className="grow shrink self-stretch my-auto text-center min-w-60 w-[242px]">
            <FeatureCard
              title="Doctor Portal"
              description="Say goodbye to endless email threads. Automatically notify providers when liens are sent, approved, and paid. Negotiate and sign directly through our intuitive platform."
            />
            <div className="mt-16 max-md:mt-10">
              <FeatureCard
                title="Tasks Done, Not Listed"
                description="Forget manual task management. InjurySync intelligently creates actionable tasks from client intake, automatically follows up to gather critical case details, and seamlessly collects bills, medical records, and essential documentation."
              />
            </div>
          </div>

          <ImageSection />

          <div className="grow shrink self-stretch my-auto text-center min-w-60 w-[242px]">
            <FeatureCard
              title="Automated Treatment & Lien Negotiation"
              description="Instantly connect your clients to LOP doctors through the CasePilot portal, or add your existing provider contacts. Streamline bills, medical records, and lien negotiations, making the process nearly automatic and entirely hassle-free."
            />
            <div className="mt-16 max-md:mt-10">
              <FeatureCard
                title="Seamless CRM Integration"
                description="Easily integrate InjurySync with Filevine, Clio, or your preferred case management software, keeping all your critical data synchronized and up-to-date."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Carousel with Dot Pagination */}
      <div className="hidden max-md:flex flex-col items-center mt-10 w-full">
        {/* Feature Card Carousel */}
        <div className="w-full min-h-[200px]">
          <FeatureCard
            title={features[activeCardIndex].title}
            description={features[activeCardIndex].description}
          />
        </div>

        {/* Dot Pagination */}
        <div className="flex justify-center gap-2 mt-6 mb-10">
          {features.map((_, index) => (
            <button 
              key={index}
              onClick={() => setActiveCardIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeCardIndex 
                  ? "bg-[#465FFF] w-4" 
                  : "bg-gray-300"
              }`}
              aria-label={`View feature ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Section - Below Feature Cards in Mobile */}
        <div className="w-full">
          <ImageSection />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSectionV2;