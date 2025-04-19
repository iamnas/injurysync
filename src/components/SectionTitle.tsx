// export default function SectionTitle() {
//     return (
//         <header className="flex flex-col max-w-full text-center w-[768px]">
//             <h2 className="self-center  text-base font-bold text-indigo-500">
//                 FEATURES
//             </h2>
//             <div className="flex  flex-col justify-center items-center mt-4 w-full max-md:max-w-full">
//                 <h1 className="text-5xl  font-black text-gray-900 leading-[62px] max-md:max-w-full  max-md:text-4xl max-md:leading-10">
//                     <span
//                         style={{
//                             fontFamily:
//                                 "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
//                         }}
//                     >
//                         Everything{" "}
//                     </span>
//                     <span
//                         style={{
//                             fontFamily:
//                                 "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
//                             color: "rgba(70,95,255,1)",
//                         }}
//                     >
//                         You
//                     </span>
//                     <span
//                         style={{
//                             fontFamily:
//                                 "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
//                         }}
//                     >
//                         {" "}
//                         Hate About{" "}
//                     </span>
//                     <br className="hidden md:block" />
//                     <span
//                         style={{
//                             fontFamily:
//                                 "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
//                             color: "rgba(70,95,255,1)",
//                         }}
//                     >
//                         Case Management
//                     </span>
//                     <span
//                         style={{
//                             fontFamily:
//                                 "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
//                         }}
//                     >
//                         —Solved
//                     </span>
//                 </h1>
//                 <p className="mt-6 text-base leading-6 text-slate-600 max-md:max-w-full">
//                     Let InjurySync streamline your workflow with AI-driven automation.
//                 </p>
//             </div>
//         </header>
//   )
// }



export default function SectionTitle() {
    return (
      <header className="flex flex-col max-w-full text-center w-[768px]">
        <h2 className="font-[Montserrat] text-base font-semibold text-[#465FFF] tracking-wide">
          FEATURES
        </h2>
        <div className="flex flex-col justify-center items-center mt-4 w-full max-md:max-w-full">
        <h1 className="font-[Montserrat] font-bold text-[30px] leading-[1.3] text-center md:text-5xl">
          {/* <h1 className="text-3xl md:text-5xl font-[700] text-gray-900 leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-10 font-[Montserrat]"> */}
            <span>Everything </span>
            <span className="text-[#465FFF]">You</span>
            <span> Hate About </span>
            <br className="hidden md:block" />
            <span className="text-[#465FFF]">Case Management</span>
            <span> —Solved</span>
          </h1>


          <p className="mt-6 text-base leading-6 text-slate-600 max-md:max-w-full font-[Source_Sans_3]">
            Let InjurySync streamline your workflow with AI-driven automation.
          </p>
        </div>
      </header>
    );
  }
  