interface PricingCardProps {
  title: string;
  description: string;
  price: number | string;
  billingCycle: "monthly" | "yearly";
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({
  title,
  description,
  price,
  billingCycle,
  features,
  isPopular = false,
}: PricingCardProps) {
  const cardClass = isPopular
    ? "flex overflow-hidden gap-2.5 items-start self-stretch px-6 py-7 my-auto w-96 bg-[#465FFF] rounded-2xl shadow-lg min-h-[491px] min-w-60 max-md:px-5"
    : "flex overflow-hidden gap-2.5 items-start self-stretch px-6 py-7 my-auto w-96 bg-white rounded-2xl shadow-sm min-h-[491px] min-w-60 max-md:px-5";

  const textColorClass = isPopular ? "text-white" : "text-gray-900";
  const buttonClass = isPopular
    ? "overflow-hidden gap-2 self-stretch px-4 py-3 mt-10 w-full text-sm font-medium leading-none text-[#465FFF] bg-white rounded-lg"
    : "overflow-hidden gap-2 self-stretch px-4 py-3 mt-10 w-full text-sm font-medium leading-none text-white bg-[#465FFF] rounded-lg border border-[#465FFF] border-solid shadow-sm";

  return (
    <div className={cardClass}>
      <div className="flex-1 shrink w-full basis-0 min-w-60">
        <div className="w-full">
          <div className="flex flex-col items-center w-full">
            <div className="max-w-full w-[332px]">
              <div className="flex flex-col w-full max-w-[332px]">
                <div className="flex gap-3 items-center self-start">
                  <h3
                    className={`text-2xl font-semibold text-center ${textColorClass}`}
                  >
                    {title}
                  </h3>
                  {isPopular && (
                    <span className="gap-2.5 self-stretch px-3 py-1.5 my-auto text-base text-[#465FFF] bg-white rounded-[40px] shadow-[0px_4px_34px_rgba(0,0,0,0.1)]">
                      Most Popular
                    </span>
                  )}
                </div>
                <p
                  className={`mt-3 text-base ${isPopular ? "text-white" : "text-slate-600"}`}
                >
                  {description}
                </p>
              </div>
              <div className="mt-6 w-32 max-w-full">
                <div
                  className={`flex gap-1 w-full font-semibold ${isPopular ? "text-white" : "text-[#465FFF]"} whitespace-nowrap rounded-none`}
                >
                  {typeof price === "number" ? (
                    <>
                      <span className="my-auto text-3xl leading-snug">$</span>
                      <span className="text-6xl leading-tight max-md:text-4xl">
                        {price}
                      </span>
                    </>
                  ) : (
                    <span className="text-6xl leading-tight max-md:text-4xl">
                      {price}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-1 text-base leading-tight ${isPopular ? "text-white" : "text-slate-600"}`}
                >
                  billed {billingCycle}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`mt-6 w-full text-base ${isPopular ? "text-white" : "text-slate-600"}`}
          >
            <p>
              {title === "Enterprise Plan"
                ? "Everything on Pro plus:"
                : "Includes :"}
            </p>
            <ul className="flex flex-col items-start mt-5 w-full tracking-normal max-w-[326px] space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-3 items-center w-full">
                  <img
                    src={isPopular ? "tick2.png" : "tick.png"}
                    alt="Check icon"
                    className="object-contain shrink-0 w-2.5 aspect-[1.25]"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className={buttonClass}>
            Get Started with {title.split(" ")[0]}
          </button>
        </div>
      </div>
    </div>
  );
}
