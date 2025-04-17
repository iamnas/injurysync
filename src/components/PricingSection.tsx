
import { useState } from "react";
import { PricingCard } from "./PricingCard";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );

  return (
    <section className="flex flex-col gap-16 items-center px-28 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full text-center w-[768px]">
        <div className="flex flex-col items-start w-full max-md:max-w-full">
          <h2 className="text-5xl font-semibold leading-tight text-gray-900 max-md:max-w-full max-md:text-4xl">
            Pricing That Works for You
          </h2>
          <p className="mt-4 text-base tracking-normal text-slate-600 max-md:max-w-full">
            Our pricing plans are designed to accommodate your requirements.
          </p>
        </div>
        <div className="flex gap-2 items-center self-center px-2 py-1.5 mt-8 text-base tracking-normal whitespace-nowrap bg-gray-50 rounded-[999px]">
          <button
            className={`gap-2.5 self-stretch px-3 py-1.5 my-auto rounded-[999px] ${
              billingCycle === "monthly"
                ? "bg-indigo-500 text-white"
                : "text-slate-600"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`flex gap-1 justify-center items-center self-stretch px-3 py-1.5 my-auto rounded-[999px] ${
              billingCycle === "yearly"
                ? "bg-indigo-500 text-white"
                : "text-slate-600"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            <span>Yearly</span>
            {billingCycle === "yearly" && (
              <span className="gap-2.5 px-1 py-0.5 text-indigo-500 bg-gray-50 rounded-lg">
                20%
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-center mt-16 max-md:mt-10 max-md:max-w-full">
        <PricingCard
          title="Basic Plan"
          description="Ideal for small practices with low lien volume."
          price={99}
          billingCycle={billingCycle}
          features={[
            "Up to 10 new patients per month",
            "Human review for accuracy",
            "Report tracking dashboard",
          ]}
        />
        <PricingCard
          title="Pro Plan"
          description="Perfect for growing practices."
          price={199}
          billingCycle={billingCycle}
          isPopular={true}
          features={[
            "Up to 50 new patients per month",
            "Human review for accuracy",
            "Report tracking dashboard",
          ]}
        />
        <PricingCard
          title="Enterprise Plan"
          description="Tailored for large organizations with high lien volume needs."
          price="Custom"
          billingCycle={billingCycle}
          features={[
            "Custom solutions to fit your needs.",
            "High volume report generation.",
            "Dedicated account manager.",
          ]}
        />
      </div>
    </section>
  );
}
