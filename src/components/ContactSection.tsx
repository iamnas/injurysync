// import React, { useState } from "react";

// export function ContactSection() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center lg:items-start px-4 sm:px-6 lg:px-28 py-12 lg:py-20 bg-white">

//       <div className="w-full max-w-md lg:max-w-lg">
//         <div className="w-full text-center lg:text-left">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
//             Contact us
//           </h2>
//           <p className="mt-4 text-base tracking-normal leading-6 text-slate-600">
//             Contact us today to schedule a consultation and discover how we can
//             help you achieve your goals.
//           </p>
//         </div>
//         <div className="mt-8 w-full text-lg sm:text-xl leading-tight text-slate-600">
//           <div className="flex gap-2 items-center w-full justify-center lg:justify-start">
//             <img
//               src="frame.png"
//               alt="Phone icon"
//               className="object-contain w-6 h-6 sm:w-7 sm:h-7 aspect-square"
//             />
//             <a
//               href="tel:+10000000000"
//               className="self-stretch my-auto hover:text-indigo-600"
//             >
//               (+1) 000 0000 000
//             </a>
//           </div>
//           <div className="flex gap-2 items-center mt-6 w-full justify-center lg:justify-start">
//             <img
//               src="mail.png"
//               alt="Email icon"
//               className="object-contain w-6 h-6 sm:w-7 sm:h-7 aspect-square"
//             />
//             <a
//               href="mailto:mail@injuy-sync.com"
//               className="self-stretch my-auto hover:text-indigo-600 break-all"
//             >
//               mail@injuy-sync.com
//             </a>
//           </div>
//         </div>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md lg:max-w-lg text-sm leading-none"
//       >
//         <div className="w-full">
//           <label className="font-medium text-slate-700" htmlFor="fullName">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             placeholder="Enter full name"
//             className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-gray-400 bg-white rounded-lg shadow-sm min-h-11 focus:outline-none focus:ring-2 focus:ring-[#465FFF]"
//             value={formData.fullName}
//             onChange={(e) =>
//               setFormData({ ...formData, fullName: e.target.value })
//             }
//           />
//         </div>

//         <div className="mt-5 w-full">
//           <label className="font-medium text-slate-700" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter email address"
//             className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-gray-400 bg-white rounded-lg shadow-sm min-h-11 focus:outline-none focus:ring-2 focus:ring-[#465FFF]"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />
//         </div>

//         <div className="mt-5 w-full">
//           <label className="font-medium text-slate-700" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             id="message"
//             placeholder="Enter your message"
//             className="flex overflow-hidden gap-2 items-start px-4 py-3 mt-1.5 w-full h-40 text-gray-400 bg-white rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#465FFF]"
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//           />
//         </div>

//         <button
//           type="submit"
//           className="flex gap-2 justify-center items-center px-4 py-3.5 mt-5 w-full sm:max-w-xs font-medium text-white bg-[#465FFF] rounded-lg border border-[#465FFF] border-solid shadow-sm"
//         >
//           <span>Send Message</span>
//           <img
//             src="send.png"
//             alt="Send icon"
//             className="object-contain w-5 h-5 aspect-square"
//           />
//         </button>
//       </form>
//     </section>
//   );
// }


import React, { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center lg:items-start px-4 sm:px-6 lg:px-28 py-12 lg:py-20 bg-white">

      <div className="w-full max-w-md lg:max-w-lg">
        <div className="w-full text-center lg:text-left">
          <h2 className="font-[Montserrat] text-3xl sm:text-3xl lg:text-5xl font-semibold leading-tight text-gray-900">
            Contact us
          </h2>
        
          <p className="font-[Source_Sans_3] mt-4 text-base tracking-[0.01em] leading-6 text-slate-600">
            <span className=" hidden md:block">Ready to transform your practice with custom solutions? <br /></span>
            Contact us today to schedule a consultation and discover how we can help you achieve your goals.
          </p>

        </div>
        <div className="mt-8 w-full text-lg sm:text-xl leading-tight text-slate-600">
          <div className="font-[Source_Sans_3] flex gap-2 items-center w-full justify-center lg:justify-start">
            <img
              src="frame.png"
              alt="Phone icon"
              className="object-contain w-6 h-6 sm:w-7 sm:h-7 aspect-square"
            />
            <a
              href="tel:+10000000000"
              className="self-stretch my-auto hover:text-indigo-600"
            >
              (+1) 000 0000 000
            </a>
          </div>
          <div className="flex gap-2 items-center mt-6 w-full justify-center lg:justify-start">
            <img
              src="mail.png"
              alt="Email icon"
              className="object-contain w-6 h-6 sm:w-7 sm:h-7 aspect-square"
            />
            <a
              href="mailto:mail@injuy-sync.com"
              className="font-[Source_Sans_3] self-stretch my-auto hover:text-indigo-600 break-all"
            >
              mail@injuy-sync.com
            </a>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md lg:max-w-lg text-sm leading-none"
      >
        <div className="w-full font-[Montserrat]">
          <label className=" font-medium text-slate-700" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-gray-400 bg-white rounded-lg border border-[#D0D5DD] min-h-11 focus:outline-none focus:ring-2 focus:ring-[#465FFF]"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        </div>

        <div className="mt-5 w-full">
          <label className="font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-gray-400 bg-white rounded-lg border border-[#D0D5DD] min-h-11 focus:outline-none focus:ring-2 focus:ring-[#465FFF]"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="mt-5 w-full">
          <label className="font-medium text-slate-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="flex overflow-hidden gap-2 items-start px-4 py-3 mt-1.5 w-full h-40 text-gray-400 bg-white rounded-lg border border-[#D0D5DD] resize-none focus:outline-none focus:ring-2 focus:ring-[#465FFF]"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="flex gap-2 justify-center items-center px-4 py-3.5 mt-5 w-full sm:max-w-xs h-12 font-medium text-white bg-[#465FFF] rounded-lg border border-[#465FFF] border-solid shadow-[0px_4px_16px_1px_rgba(70,95,255,0.24)] hover:shadow-none transition-all"
        >
          <span>Send Message</span>
          <img
            src="send.png"
            alt="Send icon"
            className="object-contain w-5 h-5 aspect-square"
          />
        </button>
      </form>
    </section>
  );
}