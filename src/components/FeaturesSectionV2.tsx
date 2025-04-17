"use client";
import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col items-start w-full">
      <h3 className="text-2xl font-semibold leading-tight text-gray-900">
        {title}
      </h3>
      <p className="mt-4 text-base tracking-normal leading-6 text-slate-600">
        {description}
      </p>
    </article>
  );
};

const SectionTitle = () => {
  return (
    <header className="flex flex-col max-w-full text-center w-[768px]">
      <h2 className="self-center text-base font-bold text-indigo-500">
        FEATURES
      </h2>
      <div className="flex flex-col justify-center items-center mt-4 w-full max-md:max-w-full">
        <h1 className="text-5xl font-bold text-gray-900 leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
          <span
            style={{
              fontFamily:
                "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Everything{" "}
          </span>
          <span
            style={{
              fontFamily:
                "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
              color: "rgba(70,95,255,1)",
            }}
          >
            You
          </span>
          <span
            style={{
              fontFamily:
                "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {" "}
            Hate About{" "}
          </span>
          <span
            style={{
              fontFamily:
                "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
              color: "rgba(70,95,255,1)",
            }}
          >
            Case Management
          </span>
          <span
            style={{
              fontFamily:
                "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            —Solved
          </span>
        </h1>
        <p className="mt-6 text-base leading-6 text-slate-600 max-md:max-w-full">
          Let InjurySync streamline your workflow with AI-driven automation.
        </p>
      </div>
    </header>
  );
};

const ImageSection = () => {
  return (
    <div className="overflow-hidden grow shrink self-stretch my-auto min-w-60 w-[419px] max-md:max-w-full">
      <div className="flex flex-col justify-center px-5 py-32 bg-gray-50 rounded-lg max-md:py-24 max-md:max-w-full">
        <div className="mb-0 rounded-md border border-gray-300 border-solid min-h-[259px] max-md:mb-2.5 max-md:max-w-full">
          <figure className="flex flex-col justify-center items-center p-1.5 w-full bg-gray-100 rounded-md max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1f422244b23a4ad2a41c1ac7a1c2c8d7/086729ee203858caf51c40bc636a0c7b7d58e05d?placeholderIfAbsent=true"
              alt="Feature illustration"
              className="object-contain max-w-full rounded aspect-[1.73] w-[430px]"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

function FeaturesSectionV2() {
  return (
    <section className="flex flex-col items-center px-28 py-20 bg-white max-md:px-5">
      <SectionTitle />

      <div className="mt-20 w-full max-w-[1216px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
          <div className="grow shrink self-stretch my-auto text-center min-w-60 w-[242px]">
            <FeatureCard
              title="Doctor Portal"
              description="Say goodbye to endless email threads. Automatically notify providers when liens are sent, approved, and paid. Negotiate and sign directly through our intuitive platform."
            />
            <div className="mt-16 max-md:mt-10">
              <FeatureCard
                title="Tasks Done, Not Listed"
                description="Forget manual task management. InjurySync intelligently creates actionable tasks from client intake, automatically follows up to gather critical case details, and seamlessly collects bills, medical records, and essential documentation."
              />
            </div>
          </div>

          <ImageSection />

          <div className="grow shrink self-stretch my-auto text-center min-w-60 w-[242px]">
            <FeatureCard
              title="Automated Treatment & Lien Negotiation"
              description="Instantly connect your clients to LOP doctors through the CasePilot portal, or  add your existing provider contacts. Streamline bills, medical records, and lien negotiations, making the process nearly automatic and entirely hassle-free."
            />
            <div className="mt-16 max-md:mt-10">
              <FeatureCard
                title="Seamless CRM Integration"
                description="Easily integrate InjurySync with Filevine, Clio, or your preferred case management software, keeping all your critical data synchronized and up-to-date."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSectionV2;
