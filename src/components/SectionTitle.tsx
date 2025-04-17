export default function SectionTitle() {
    return (
        <header className="flex flex-col max-w-full text-center w-[768px]">
            <h2 className="self-center text-base font-bold text-indigo-500">
                FEATURES
            </h2>
            <div className="flex flex-col justify-center items-center mt-4 w-full max-md:max-w-full">
                <h1 className="text-5xl font-extrabold text-gray-900 leading-[62px] max-md:max-w-full max-md:text-3xl max-md:leading-[58px]">
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
  )
}