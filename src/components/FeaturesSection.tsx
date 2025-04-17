export function FeaturesSection() {
  return (
    <section className="flex flex-col items-center px-28 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full text-center w-[768px]">
        <h2 className="self-center text-base font-semibold text-indigo-500">
          FEATURES
        </h2>
        <div className="flex flex-col items-start mt-4 w-full max-md:max-w-full">
          <h3 className="text-5xl font-bold text-gray-900 leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
            Everything <span className="text-[#465FFF]">You</span> Hate About{" "}
            <span className="text-[#465FFF]">Pre Lit Intake</span>—Solved
          </h3>
          <p className="mt-6 text-lg leading-tight text-slate-600 max-md:max-w-full">
            Let InjurySync elevate your pre-litigation workflow with powerful,
            AI-driven automation.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 w-full max-w-[1216px] max-md:mt-10 max-md:max-w-full">
        <div className="w-full rounded-2xl border-4 border-gray-300 border-solid">
          <div className="flex flex-col justify-center items-center p-3 w-full bg-gray-100 rounded-2xl min-h-[714px] max-md:max-w-full">
            <img
              src="hero2.png"
              alt="Features illustration"
              className="object-contain max-w-full rounded-lg aspect-[1.73] w-[1188px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-1 items-start mt-16 w-full max-md:mt-10">
          <FeatureTab
            title="AI-Powered Call Handling"
            description="Transform your intake process. Let AI handle calls with unmatched professionalism—gathering crucial case details, screening potential leads, and directing them seamlessly to your team."
            isActive={true}
          />
          <FeatureTab
            title="Smart Follow up"
            description="Automate the collection of client information effortlessly. InjurySync uses dynamic, adaptive forms that update in real-time based on intake responses, ensuring you never miss critical details."
          />
          <FeatureTab
            title="Lead Scoring"
            description="Automatically identify and prioritize high-value leads. InjurySync evaluates case type, eligibility, and urgency, empowering your team to focus exclusively on the most promising opportunities."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureTabProps {
  title: string;
  description: string;
  isActive?: boolean;
}

function FeatureTab({ title, description, isActive = false }: FeatureTabProps) {
  return (
    <div
      className={`flex flex-col flex-1 shrink px-4 py-6 ${isActive ? "border-t-2 border-indigo-500" : ""} basis-0 min-w-60`}
    >
      <h4 className="self-center text-2xl font-semibold leading-tight text-gray-900">
        {title}
      </h4>
      <p className="mt-2 text-base tracking-normal leading-6 text-center text-slate-600">
        {description}
      </p>
    </div>
  );
}
