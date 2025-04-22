// import { useState } from 'react';
// import FeatureCard from "./FeatureCard";
// import ImageSection from "./ImageSection";
// import SectionTitle from "./SectionTitle";

// function FeaturesSectionV2() {
//   const [activeCardIndex, setActiveCardIndex] = useState(0);
  
//   // Define all features in an array for easier mobile carousel handling
//   const features = [
//     {
//       title: "Doctor Portal",
//       description: "Say goodbye to endless email threads. Automatically notify providers when liens are sent, approved, and paid. Negotiate and sign directly through our intuitive platform."
//     },
//     {
//       title: "Tasks Done, Not Listed",
//       description: "Forget manual task management. InjurySync intelligently creates actionable tasks from client intake, automatically follows up to gather critical case details, and seamlessly collects bills, medical records, and essential documentation."
//     },
//     {
//       title: "Automated Treatment & Lien Negotiation",
//       description: "Instantly connect your clients to LOP doctors through the CasePilot portal, or add your existing provider contacts. Streamline bills, medical records, and lien negotiations, making the process nearly automatic and entirely hassle-free."
//     },
//     {
//       title: "Seamless CRM Integration",
//       description: "Easily integrate InjurySync with Filevine, Clio, or your preferred case management software, keeping all your critical data synchronized and up-to-date."
//     }
//   ];

//   return (
//     <section className="flex flex-col items-center px-28 py-20 bg-white max-md:px-5">
//       <SectionTitle />

//       {/* Desktop View - Original Layout */}
//       <div className="mt-20 w-full max-w-[1216px] max-md:hidden max-md:mt-10 max-md:max-w-full">
//         <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
//           <div className="grow shrink self-stretch my-auto text-center min-w-60 w-[242px]">
//             <FeatureCard
//               title="Doctor Portal"
//               description="Say goodbye to endless email threads. Automatically notify providers when liens are sent, approved, and paid. Negotiate and sign directly through our intuitive platform."
//             />
//             <div className="mt-16 max-md:mt-10">
//               <FeatureCard
//                 title="Tasks Done, Not Listed"
//                 description="Forget manual task management. InjurySync intelligently creates actionable tasks from client intake, automatically follows up to gather critical case details, and seamlessly collects bills, medical records, and essential documentation."
//               />
//             </div>
//           </div>

//           <ImageSection />

//           <div className="grow shrink self-stretch my-auto text-center min-w-60 w-[242px]">
//             <FeatureCard
//               title="Automated Treatment & Lien Negotiation"
//               description="Instantly connect your clients to LOP doctors through the CasePilot portal, or add your existing provider contacts. Streamline bills, medical records, and lien negotiations, making the process nearly automatic and entirely hassle-free."
//             />
//             <div className="mt-16 max-md:mt-10">
//               <FeatureCard
//                 title="Seamless CRM Integration"
//                 description="Easily integrate InjurySync with Filevine, Clio, or your preferred case management software, keeping all your critical data synchronized and up-to-date."
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile View - Carousel with Dot Pagination */}
//       <div className="hidden max-md:flex flex-col items-center mt-10 w-full">
//         {/* Feature Card Carousel */}
//         <div className="w-full min-h-[200px]">
//           <FeatureCard
//             title={features[activeCardIndex].title}
//             description={features[activeCardIndex].description}
//           />
//         </div>

//         {/* Dot Pagination */}
//         <div className="flex justify-center gap-2 mt-6 mb-10">
//           {features.map((_, index) => (
//             <button 
//               key={index}
//               onClick={() => setActiveCardIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 index === activeCardIndex 
//                   ? "bg-[#465FFF] w-4" 
//                   : "bg-gray-300"
//               }`}
//               aria-label={`View feature ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Image Section - Below Feature Cards in Mobile */}
//         <div className="w-full">
//           <ImageSection />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturesSectionV2;


import { useState, useRef, useEffect, TouchEvent } from 'react';
import FeatureCard from "./FeatureCard";
import ImageSection from "./ImageSection";
import SectionTitle from "./SectionTitle";

function FeaturesSectionV2() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Touch interaction states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
  
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

  // Handle touch start event
  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move event
  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end event - process swipe
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && activeCardIndex < features.length - 1) {
      // Swipe left - move to next feature
      setActiveCardIndex(activeCardIndex + 1);
    } else if (isRightSwipe && activeCardIndex > 0) {
      // Swipe right - move to previous feature
      setActiveCardIndex(activeCardIndex - 1);
    }
    
    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Programmatically scroll carousel to active card
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = activeCardIndex * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeCardIndex]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' && activeCardIndex < features.length - 1) {
      setActiveCardIndex(activeCardIndex + 1);
    } else if (e.key === 'ArrowLeft' && activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  return (
    <section className="mt-[80px] flex flex-col items-center px-28 py-20 bg-white max-md:px-5">
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

      {/* Mobile View - Carousel with Dot Pagination and Swipe Functionality */}
      <div className="hidden max-md:flex flex-col items-center mt-10 w-full">
        {/* Feature Card Carousel Container */}
        <div 
          className="w-full overflow-hidden"
          role="region"
          aria-label="Feature carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* Horizontally scrollable container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden snap-x snap-mandatory w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex-none w-full min-h-[200px] snap-center"
                aria-hidden={index !== activeCardIndex}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
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
              aria-current={index === activeCardIndex ? "true" : "false"}
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