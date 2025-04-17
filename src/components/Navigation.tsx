export function Navigation() {
  return (
    <nav className="flex flex-wrap gap-10 justify-between items-center px-28 w-full bg-indigo-50 min-h-20 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 items-center self-stretch my-auto min-w-60">
        <img
          src="logo.png"
          alt="Company Logo"
          className="object-contain self-stretch my-auto aspect-[8.77] w-[210px]"
        />
      </div>
      <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
        <div className="flex gap-10 items-center self-stretch my-auto text-base leading-relaxed min-w-60 text-slate-600">
          <a
            href="#"
            className="self-stretch my-auto font-semibold text-indigo-500"
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
          <button className="overflow-hidden gap-2 self-stretch py-3.5 px-7 my-auto rounded-lg shadow-sm text-slate-700 max-md:px-5">
            Sign In
          </button>
          <button className="overflow-hidden gap-2 self-stretch px-7 py-3.5 my-auto text-white bg-indigo-600 rounded-lg shadow-sm max-md:px-5">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
