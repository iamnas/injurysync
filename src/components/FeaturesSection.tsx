import { useState } from 'react';

export function FeaturesSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  
  const features = [
    {
      title: "AI-Powered Call Handling",
      description: "Transform your intake process. Let AI handle calls with unmatched professionalism—gathering crucial case details, screening potential leads, and directing them seamlessly to your team."
    },
    {
      title: "Smart Follow up",
      description: "Automate the collection of client information effortlessly. InjurySync uses dynamic, adaptive forms that update in real-time based on intake responses, ensuring you never miss critical details."
    },
    {
      title: "Lead Scoring",
      description: "Automatically identify and prioritize high-value leads. InjurySync evaluates case type, eligibility, and urgency, empowering your team to focus exclusively on the most promising opportunities."
    }
  ];

  return (
    <section className="flex flex-col items-center px-6 md:px-28 py-20 w-full bg-white">
      <div className="flex flex-col text-center w-full max-w-3xl">
        <h2 className="text-sm font-semibold text-[#465FFF] tracking-wide">
          FEATURES
        </h2>
        <div className="flex flex-col items-center mt-4 w-full">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight md:leading-[62px]">
            Everything <span className="text-[#465FFF]">You</span> Hate About{" "}
            <br className="hidden md:block" />
            <span className="text-[#465FFF]">Pre Lit Intake</span>—Solved
          </h3>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Let InjurySync elevate your pre-litigation workflow with powerful,
            AI-driven automation.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 w-full max-w-6xl">
        {/* Mobile Feature Carousel - Show Above Image */}
        <div className="flex flex-col w-full md:hidden mb-8">
          {/* Only show the active feature card */}
          <div className="w-full min-h-[150px]">
            <FeatureTab
              key={activeTabIndex}
              title={features[activeTabIndex].title}
              description={features[activeTabIndex].description}
              isActive={true}
            />
          </div>
          
          {/* Dot Pagination for Mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveTabIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeTabIndex 
                    ? "bg-[#465FFF] w-4" 
                    : "bg-gray-300"
                }`}
                aria-label={`View feature ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Feature Image */}
        <div className="w-full rounded-2xl border-4 border-gray-300">
          <div className="flex flex-col justify-center items-center w-full bg-gray-100 rounded-2xl">
            <img
              src="hero2.png"
              alt="Features illustration"
              className="object-contain max-w-full w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Feature Tabs for Desktop - Show Below Image */}
        <div className="hidden md:flex flex-row gap-6 mt-12 w-full">
          {features.map((feature, index) => (
            <FeatureTab
              key={index}
              title={feature.title}
              description={feature.description}
              isActive={index === activeTabIndex}
              onClick={() => setActiveTabIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureTabProps {
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

function FeatureTab({ title, description, isActive = false, onClick }: FeatureTabProps) {
  return (
    <div
      className={`flex flex-col px-4 py-6 flex-1 border-t-2 ${onClick ? "cursor-pointer" : ""} ${
        isActive ? "border-[#465FFF]" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-900">
        {title}
      </h4>
      <p className="mt-2 text-sm md:text-base text-center text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}