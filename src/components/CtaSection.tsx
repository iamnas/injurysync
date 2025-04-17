export function CtaSection() {
  return (
    <section className="flex relative flex-col items-start self-center px-28 py-20 mt-20 w-full bg-[#465FFF] rounded-2xl max-w-[1216px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex z-0 flex-col items-center self-center max-w-full w-[768px]">
        <h2 className="text-5xl font-bold text-center text-gray-50 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Ready to Automate Your Practice?Book your demo today and meet the AI
          agents built to power the modern law firm.
        </h2>
        <p className="mt-6 text-lg text-center text-white max-md:max-w-full">
          Experience the future of client intake with Caseflow. Schedule a demo
          and see it in action!
        </p>
        <div className="flex gap-4 justify-center items-start pt-4 mt-6 max-w-full text-sm font-medium leading-5 text-[#465FFF] w-[513px]">
          <button className="w-full overflow-hidden gap-2 self-stretch px-7 py-3.5 bg-white rounded-lg md:w-[184px] max-md:px-5">
            Book a Demo
          </button>
        </div>
      </div>
      <img
        src="Burst-pucker-2.png"
        alt="Decorative element 1"
        className="object-contain absolute z-0 w-16 h-16 aspect-square bottom-[205px] left-[214px]"
      />
      <img
        src="Burst-pucker-2.png"
        alt="Decorative element 2"
        className="object-contain absolute top-20 z-0 w-16 h-16 aspect-square right-[118px]"
      />
    </section>
  );
}
