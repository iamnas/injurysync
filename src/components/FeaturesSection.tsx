import React, { useState, useRef, useEffect, TouchEvent } from 'react';

export function FeaturesSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Touch interaction states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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

    if (isLeftSwipe && activeTabIndex < features.length - 1) {
      // Swipe left - move to next feature
      setActiveTabIndex(activeTabIndex + 1);
    } else if (isRightSwipe && activeTabIndex > 0) {
      // Swipe right - move to previous feature
      setActiveTabIndex(activeTabIndex - 1);
    }

    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Programmatically scroll carousel to active tab
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = activeTabIndex * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeTabIndex]);

  // Update indicator position when active tab changes
  useEffect(() => {
    const updateIndicator = () => {
      const currentTab = tabRefs.current[activeTabIndex];
      if (currentTab) {
        setIndicatorStyle({
          left: currentTab.offsetLeft,
          width: currentTab.offsetWidth
        });
      }
    };

    // Small delay to ensure DOM is ready
    const timeout = setTimeout(updateIndicator, 10);

    // Also update on window resize
    window.addEventListener('resize', updateIndicator);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeTabIndex]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' && activeTabIndex < features.length - 1) {
      setActiveTabIndex(activeTabIndex + 1);
    } else if (e.key === 'ArrowLeft' && activeTabIndex > 0) {
      setActiveTabIndex(activeTabIndex - 1);
    }
  };

  return (
    <section className="flex flex-col items-center px-6 md:px-28 py-20 w-full bg-white">
      <div className="flex flex-col text-center w-full max-w-3xl">
        <h2 className="font-[Montserrat] text-base font-semibold text-[#465FFF] tracking-wide">
          FEATURES
        </h2>
        <div className="flex flex-col items-center mt-4 w-full">
          <h3 className="font-[Montserrat] text-3xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight md:leading-[62px]">
            Everything <span className="text-[#465FFF]">You</span> Hate About{" "}
            <br className="hidden md:block" />
            <span className="text-[#465FFF]">Pre Lit Intake</span>—Solved
          </h3>
          {/* <p className="font-[Source_Sans_3] mt-4 text-base md:text-lg text-[#475467] leading-relaxed">
            Let InjurySync elevate your pre-litigation workflow with powerful,
            AI-driven automation.
          </p> */}
          <p className="text-[18px] font-normal leading-[1.3] text-[#475467] text-center font-[Source_Sans_3] mt-4">
            Let InjurySync elevate your pre-litigation workflow with powerful,
            AI-driven automation.
          </p>

        </div>
      </div>

      <div className="flex flex-col items-center mt-16 w-full max-w-6xl">
        {/* Mobile Feature Carousel - Show Above Image */}
        <div
          className="flex flex-col w-full md:hidden mb-8 overflow-hidden"
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
                className="flex-none w-full min-h-[150px] snap-center"
                aria-hidden={index !== activeTabIndex}
              >
                <FeatureTab
                  title={feature.title}
                  description={feature.description}
                  isActive={index === activeTabIndex}
                />
              </div>
            ))}
          </div>

          {/* Dot Pagination for Mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTabIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === activeTabIndex
                    ? "bg-[#465FFF] w-4"
                    : "bg-gray-300"
                  }`}
                aria-label={`View feature ${index + 1}`}
                aria-current={index === activeTabIndex ? "true" : "false"}
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
        <div className="hidden md:flex flex-row gap-6 mt-12 w-full relative">
          {/* Animated indicator line */}
          <div
            className="absolute top-0 left-0 h-0.5 bg-[#465FFF] transition-all duration-300 ease-in-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`
            }}
            aria-hidden="true"
          />

          {features.map((feature, index) => (
            <FeatureTab
              key={index}
              title={feature.title}
              description={feature.description}
              isActive={index === activeTabIndex}
              onClick={() => setActiveTabIndex(index)}
              ref={(el) => { tabRefs.current[index] = el; }}
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

// Convert to forwardRef to capture DOM references
const FeatureTab = React.forwardRef<HTMLDivElement, FeatureTabProps>(
  ({ title, description, isActive = false, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col px-4 py-6 flex-1 ${onClick ? "cursor-pointer" : ""} ${isActive ? "border-[#465FFF]" : "border-transparent"
          } ${onClick ? "border-t-2" : ""}`}
        onClick={onClick}
        role={onClick ? "tab" : undefined}
        aria-selected={isActive}
      >
        <h4 className="font-[Montserrat] text-2xl md:text-2xl font-semibold text-center text-gray-900">
          {title}
        </h4>
        {/* <p className="font-[Source_Sans_3] font-normal mt-2 text-base md:text-base text-center text-[#475467] leading-relaxed">
          {description}
        </p> */}
        <p className="font-[Source_Sans_3] font-normal text-base leading-[1.5] tracking-[0.01em] text-center text-[#475467] mt-2">
          {description}
        </p>

      </div>
    );
  }
);

// Add display name for forwardRef component
FeatureTab.displayName = 'FeatureTab';