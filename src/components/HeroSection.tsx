export function HeroSection() {
  return (
    <section className="flex flex-col w-full min-h-[1171px] max-md:max-w-full">
      <div className="flex flex-col pt-20 w-full bg-indigo-50 h-[475px] max-md:max-w-full">
        <div className="flex flex-col items-center self-center max-w-full w-[1024px]">
          <div className="flex flex-col items-center w-full text-center">
            <h1 className="text-6xl font-bold text-black leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              <span className="text-[64px] text-[#101828]">Your New </span>
              <span className="text-[64px] text-[#465FFF]">Legal</span>
              <span className="text-[64px] text-[#101828]"> Teammates – </span>
              <span className="text-[64px] text-[#465FFF]">AI </span>
              <span className="text-[64px] text-[#101828]">Agents</span>
              <span className="text-[64px] text-[#101828]">
                {" "}
                Built for Law Firms
              </span>
            </h1>
            <p className="mt-6 text-lg leading-7 text-slate-600 w-[768px] max-md:max-w-full">
              Case Pilot delivers smart automation tools that eliminate
              busywork, capture every opportunity, and simplify case management
              for plaintiff-side law firms.
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center pt-4 mt-6 text-sm font-medium leading-none">
            <button className="overflow-hidden gap-2 self-stretch px-7 py-3.5 my-auto text-white bg-indigo-600 rounded-lg shadow-sm max-md:px-5">
              Get Started
            </button>
            <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch py-3.5 px-7 my-auto bg-gray-50 rounded-lg shadow-sm text-slate-700 max-md:px-5">
              <img
                src="play.png"
                alt="Demo icon"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <span>Book a Demo</span>
            </button>
          </div>
        </div>
        <img
          src="background.png"
          alt="Hero illustration"
          className="object-contain aspect-[14.93] w-[1440px] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col items-center self-center max-w-full min-h-[616px] w-[1049px]">
        <div className="flex flex-col justify-center items-center p-3 w-full bg-gray-100 rounded-2xl min-h-[616px]">
          <img
            src="hero.png"
            alt="Feature preview"
            className="object-contain w-full rounded-lg aspect-[1.73]"
          />
        </div>
      </div>
    </section>
  );
}
