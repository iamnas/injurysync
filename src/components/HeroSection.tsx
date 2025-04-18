export function HeroSection() {
  return (
    <section className="flex max-md:mt-12 hero-section flex-col w-full min-h-[1171px] max-md:min-h-fit relative">
      {/* Background Layer */}
      {/* <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-[475px] bg-[#ECF3FF]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="background_pattern.png"
            alt="Background pattern"
            className="object-cover w-full h-auto"
          />
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex flex-col pt-12 md:pt-20 w-full bg-[#ECF3FF] md:h-[475px] max-md:h-auto relative z-10">
        <div className="flex flex-col items-center self-center max-w-full w-[1024px] px-5 md:px-8">
          <div className="flex flex-col items-center w-full text-center">
            <h1 className="font-[Montserrat] text-4xl md:text-6xl font-bold text-black leading-[1.1] md:leading-[67px]">
              <span className="text-[#101828]">Your New </span>
              <span className="text-[#465FFF]">Legal</span>
              <span className="text-[#101828]"> Teammates – </span>
              <br className="hidden md:block" />
              <span className="text-[#465FFF]">AI </span>
              <span className="text-[#101828]">Agents</span>
              <span className="text-[#101828]"> Built for Law Firms</span>
            </h1>
            <p className="font-[Source_Sans_3] text-center mt-4 md:mt-6 text-base md:text-lg leading-6 md:leading-7 text-[#475467] w-full md:w-[768px]">
              Case Pilot delivers smart automation tools that eliminate
              busywork, capture every opportunity, and simplify case management
              for plaintiff-side law firms.
            </p>


          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center w-full pt-4 mt-4 md:mt-6 text-sm font-medium leading-none">
            {/* <button className="cursor-pointer w-full md:w-auto overflow-hidden gap-2 h-12 self-stretch px-5 md:px-7 py-3.5 my-auto text-white bg-[#465fff] rounded-lg shadow-[0px_4px_16px_1px_rgba(70,95,255,0.24)] hover:bg-[#3641F5] hover:shadow-none transition-all">
              Get Started
            </button> */}
            <button
              className="w-[180px] h-12 gap-2 px-7 py-3.5 rounded-lg bg-[#465fff] text-white shadow-[0px_4px_16px_1px_rgba(70,95,255,0.24)] hover:bg-[#3641F5] hover:shadow-none transition-all text-center font-semibold"
            >
              Get Started
            </button>

            {/* <button className="w-full cursor-pointer md:w-auto flex overflow-hidden gap-2 justify-center items-center self-stretch h-12 py-3.5 px-5 md:px-7 my-auto bg-gray-50 rounded-lg shadow-sm text-slate-700 hover:bg-[#F9FAFB] transition-colors">
              <img
                src="play.png"
                alt="Demo icon"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <span>Book a Demo</span>
            </button> */}
            <button className="w-[181px] h-12 flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-gray-100 bg-gray-50 text-slate-700 shadow-sm hover:bg-[#F9FAFB] transition-colors">
              <img
                src="play.png"
                alt="Demo icon"
                className="w-5 aspect-square object-contain"
              />
              <span>Book a Demo</span>
            </button>

          </div>
        </div>
        {/* Uncommented the background illustration for consistency */}
        <img
          src="background.png"
          alt="Hero illustration"
          className="object-contain w-full mt-8 md:mt-0 aspect-auto md:aspect-[14.93] max-w-full"
        />
      </div>
      <div className="flex flex-col items-center self-center max-w-full min-h-[300px] md:min-h-[616px] w-full px-4 md:px-0 md:w-[1049px] mt-4 md:mt-0 relative z-10">
        <div className="flex flex-col justify-center items-center p-2 md:p-3 w-full bg-gray-100 rounded-xl md:rounded-2xl  md:min-h-[616px]">
          <img
            src="hero.png"
            alt="Feature preview"
            className="object-contain  w-full rounded-lg aspect-auto md:aspect-[1.73]"
          />
        </div>
      </div>
    </section>
  );
}