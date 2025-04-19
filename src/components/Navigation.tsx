import { useState, useEffect, useRef } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('closed');
  const [isPastHero, setIsPastHero] = useState(false);
  
  // Reference to check when scrolled past hero section
  const heroSectionRef = useRef<Element | null>(null);

  // Update check for scroll position relative to hero section
  useEffect(() => {
    // Function to find hero section element
    const findHeroSection = () => {
      // Try different methods to find the hero section
      const heroSection = 
        document.querySelector('.hero-section') || // If you have a class on your hero
        document.querySelector('header') ||       // Common for hero sections
        document.querySelector('main > div:first-child') || // First div in main
        document.querySelector('body > div:first-child') || // First div in body
        null;
      
      return heroSection;
    };

    const handleScroll = () => {
      const heroSection = heroSectionRef.current || findHeroSection();
      
      if (heroSection) {
        // Save the ref for future scroll events
        heroSectionRef.current = heroSection;
        
        // Get the bottom position of the hero section
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        // Check if we've scrolled past the hero section
        // Small offset (10px) for a smoother transition
        setIsPastHero(heroBottom <= 10);
      } else {
        // Fallback if hero section can't be found - use a reasonable pixel value
        setIsPastHero(window.scrollY > 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once to initialize
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Start closing animation
      setMenuAnimation('closing');
      // After animation completes, fully close the menu
      setTimeout(() => {
        setIsMenuOpen(false);
        setMenuAnimation('closed');
      }, 300); // Match this duration with CSS transition duration
    } else {
      setIsMenuOpen(true);
      // Start opening animation after a tiny delay to ensure DOM is ready
      setTimeout(() => {
        setMenuAnimation('open');
      }, 10);
    }
  };

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        setMenuAnimation('closed');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <div className="w-full">
      {/* Desktop Navigation - Sticky - only shows at lg breakpoint and above */}
      <nav className={`hidden lg:flex justify-between items-center px-6 md:px-10 lg:px-16 xl:px-28 w-full min-h-20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isPastHero ? 'bg-white shadow-md' : 'bg-[#ECF3FF]'
      }`}>
        <div className="flex gap-3 items-center">
          <img
            src="logo.png"
            alt="Company Logo"
            className="object-contain aspect-[8.77] w-[180px] lg:w-[210px]"
          />
        </div>
        <div className="flex flex-wrap justify-end gap-4 lg:gap-10 items-center">
          <div className="flex gap-4 lg:gap-10 items-center text-sm lg:text-base leading-relaxed text-slate-600">
            <a
              href="#"
              className="font-semibold text-[#465FFF]"
            >
              Home
            </a>
            <a href="#pricing">
              Pricing
            </a>
            <a href="#contact">
              Contact Us
            </a>
          </div>
          <div className="flex gap-2 lg:gap-6 items-center text-xs lg:text-sm font-medium leading-none">
            <button className="py-2.5 lg:py-3.5 px-4 lg:px-7 rounded-lg shadow-sm text-slate-700">
              Sign In
            </button>
            <button className="px-4 lg:px-7 py-2.5 lg:py-3.5 text-white bg-indigo-600 rounded-lg shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar - Sticky - shows up to lg breakpoint */}
      <nav className={`lg:hidden flex justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isPastHero ? 'bg-white shadow-md' : 'bg-[#ECF3FF]'
      }`}>
        <div className="flex items-center">
          <img
            src="group.png"
            alt="InjurySync Logo"
            className="object-contain"
          />
        </div>
        <button onClick={toggleMenu} className="focus:outline-none">
          <img src="actions.png" alt="Menu" className="w-8 h-8" />
        </button>
      </nav>

      {/* Add spacing to prevent content from hiding behind fixed nav */}
      {/* <div className="h-16 lg:h-20"></div> */}

      {/* Mobile Menu with Animation - shows up to lg breakpoint */}
      {isMenuOpen && (
        <div 
          className={`lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 transition-transform duration-300 ease-in-out ${
            menuAnimation === 'open' 
              ? 'transform translate-y-0' 
              : 'transform -translate-y-full'
          }`}
        >
          <div className="flex flex-col py-4 relative">
            {/* Close button */}
            <button 
              onClick={toggleMenu} 
              className="absolute right-5 top-4 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className='mb-8 mt-4 px-5'>
              <img
                src="mobile_logo.png"
                alt="Company Logo"
                className="object-contain aspect-[8.77] w-[210px]"
              />
            </div>
            
            <div className="px-5 py-2 font-semibold text-[#465FFF]">
              <a href="#">Home</a>
            </div>
            <div className="px-5 py-2 text-slate-600">
              <a href="#pricing">Pricing</a>
            </div>
            <div className="px-5 py-2 text-slate-600 mb-5">
              <a href="#contact">Contact Us</a>
            </div>
            <div className="mx-5 mt-4 flex flex-col gap-2">
              <button className="w-full py-3 mb-3 text-center rounded-lg shadow-sm text-slate-700 bg-white border border-gray-200">
                Sign In
              </button>
              <button className="w-full py-3 text-center text-white bg-indigo-600 rounded-lg shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Overlay for when menu is open - shows up to lg breakpoint */}
      {isMenuOpen && (
        <div 
          className={`lg:hidden fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
            menuAnimation === 'open' ? 'opacity-50' : 'opacity-0'
          }`} 
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
