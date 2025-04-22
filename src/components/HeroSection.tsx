


export function HeroSection() {
  return (
    <section className="flex flex-col w-full min-h-fit md:min-h-[800px] lg:min-h-[1171px] relative mt-12 md:mt-0 bg-[#ECF3FF] md:bg-white">
      {/* Background Elements - All with lower z-index */}
      {/* <div className="flex justify-center items-center "> */}
      <div className="relative w-full">


        {/* Main background */}
        <div
          className="
            absolute
            w-full md:w-[1800px] lg:w-[2400px] 
            h-[180px] md:h-[320px] lg:h-[403.82px]
            top-[300px] md:top-[360px] lg:top-[387px] 
            left-0 md:left-[-240px] lg:left-[-480px]
            bg-[url('/background.png')] 
            bg-cover bg-center
            z-10
            mt-15 lg:mt-0 md:mt-0
            
          "
        />

        {/* Left band 4x */}
        <div
          className="


           
           absolute
           w-[673.56px] 
           h-[225.67px] 
           top-[598.41px] md:top-[710.41px] lg:top-[710.41px]
           left-[1px]
           bg-[url('left_band_4x.png')] 
           bg-contain bg-no-repeat
           z-10
           
           "
           />
         
        {/* border-2 border-amber-400 */}

        {/* Right band 4x */}
        <div
          className="
      absolute
      w-[946.67px] 
      h-[233.12px] 
      top-[495px] 
      left-[100px] md:left-[1000px] 
      bg-[url('right_band_4x.png')] 
      bg-contain bg-no-repeat
      z-30
    "
        />


      </div>

      


      {/* Main Content - Ensure z-index works properly with relative positioning */}

      <div className="flex flex-col pt-8 md:pt-14 lg:pt-20 w-full bg-[#ECF3FF] h-auto md:h-[400px] lg:h-[475px] relative z-20 mt-[80px]">
        <div className="flex flex-col items-center self-center max-w-full w-full md:w-[768px] lg:w-[1024px] px-4 md:px-8">
          <div className="flex flex-col items-center w-full text-center">
            <h1 className="font-[Montserrat] text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight md:leading-[60px] lg:leading-[67px]">
              <span className="text-[#101828]">Your New </span>
              <span className="text-[#465FFF]">Legal</span>
              <span className="text-[#101828]"> Teammates – </span>
              <br className="hidden md:block" />
              <span className="text-[#465FFF]">AI </span>
              <span className="text-[#101828]">Agents</span>
              <span className="text-[#101828]"> Built for Law Firms</span>
            </h1>
            <p className="font-[Source_Sans_3] text-center mt-4 md:mt-5 lg:mt-6 text-sm md:text-base lg:text-lg leading-5 md:leading-6 lg:leading-7 text-[#475467] w-full md:w-[600px] lg:w-[768px]">
              Case Pilot delivers smart automation tools that eliminate
              busywork, capture every opportunity, and simplify case management
              for plaintiff-side law firms.
            </p>
          </div>
          <div className=" mb-[64px] md:mb-0 flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center w-full pt-4 mt-4 md:mt-5 lg:mt-6 text-sm font-medium leading-none">
            <button
              className="w-full md:w-[160px] lg:w-[180px] h-12 gap-2 px-5 md:px-6 lg:px-7 py-3.5 rounded-lg bg-[#465fff] text-white shadow-[0px_4px_16px_1px_rgba(70,95,255,0.24)] hover:bg-[#3641F5] hover:shadow-none transition-all text-center font-semibold"
            >
              Get Started
            </button>
            <button className="w-full md:w-[160px] lg:w-[181px] h-12 flex items-center justify-center gap-2 px-5 md:px-6 lg:px-7 py-3.5 rounded-lg border border-[#D0D5DD]  text-slate-700 shadow-sm  hover:bg-[#F9FAFB] transition-colors">
              <img
                src="play.png"
                alt="Demo icon"
                className="w-5 aspect-square object-contain"
              />
              <span>Book a Demo</span>
            </button>
          </div>
        </div>
      </div>


      {/* Hero Image Container - Positioned with higher z-index than main content */}
      {/* <div className="flex flex-col items-center self-center max-w-full w-full px-4 md:px-6 lg:px-0 md:w-[700px] lg:w-[1049px] mt-6 md:mt-0 relative z-30"> */}
      <div className="flex flex-col items-center self-center max-w-full w-full px-4 md:px-6 lg:px-0 md:w-[700px] lg:w-[1049px] mt-6 md:mt-[55px] lg:mt-0  relative z-30">

        <div className="flex flex-col justify-center items-center p-2 md:p-3 w-full bg-gray-100 rounded-xl md:rounded-2xl">
          <img
            src="hero_4x.png"
            alt="Feature preview"
            className="object-contain w-full  rounded-lg aspect-auto md:aspect-[1.6] lg:aspect-[1.73]"
          />
        </div>
      </div>




    </section>
  );
}



