import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-wrap gap-10 justify-between items-center px-28 w-full bg-indigo-50 min-h-20 max-md:px-5">
        <div className="flex gap-3 items-center self-stretch my-auto min-w-60">
          <img
            src="logo.png"
            alt="Company Logo"
            className="object-contain self-stretch my-auto aspect-[8.77] w-[210px]"
          />
        </div>
        <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-60">
          <div className="flex gap-10 items-center self-stretch my-auto text-base leading-relaxed min-w-60 text-slate-600">
            <a
              href="#"
              className="self-stretch my-auto font-semibold text-[#465FFF]"
            >
              Home
            </a>
            <a href="#pricing" className="self-stretch my-auto">
              Pricing
            </a>
            <a href="#contact" className="self-stretch my-auto">
              Contact Us
            </a>
          </div>
          <div className="flex gap-6 items-center self-stretch my-auto text-sm font-medium leading-none min-w-60">
            <button className="overflow-hidden gap-2 self-stretch py-3.5 px-7 my-auto rounded-lg shadow-sm text-slate-700">
              Sign In
            </button>
            <button className="overflow-hidden gap-2 self-stretch px-7 py-3.5 my-auto text-white bg-indigo-600 rounded-lg shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className="md:hidden flex justify-between items-center px-5 py-3 bg-indigo-50">
        <div className="flex items-center">
          <img
            src="group.png"
            alt="InjurySync Logo"
          // className="w-40 object-contain"
          />
        </div>
        <button onClick={toggleMenu} className="focus:outline-none">
          <img src="actions.png" alt="Menu" className="w-8 h-8" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="flex flex-col py-4">
            <div className=' mb-8 mt-4'>
              <img
                src="mobile_logo.png"
                alt="Company Logo"
                className="object-contain self-stretch my-auto aspect-[8.77] w-[210px]"
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
    </div>
  );
}