
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
    <section className="flex flex-wrap gap-16 justify-center items-start px-28 py-20 bg-white min-w-[375px] max-md:px-5 max-md:max-w-full">
      <div className="min-w-[343px] w-[576px] max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-5xl font-semibold leading-tight text-gray-900 max-md:max-w-full max-md:text-4xl">
            Contact us
          </h2>
          <p className="mt-4 text-base tracking-normal leading-6 text-slate-600 max-md:max-w-full">
            Ready to transform your practice with custom solutions? <br />
            Contact us today to schedule a consultation and discover how we can
            help you achieve your goals.
          </p>
        </div>
        <div className="mt-8 w-full text-xl leading-tight min-w-[343px] text-slate-600 max-md:max-w-full">
          <div className="flex flex-wrap gap-2 items-center w-full max-md:max-w-full">
            <img
              src="frame.png"
              alt="Phone icon"
              className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            />
            <a
              href="tel:+10000000000"
              className="self-stretch my-auto hover:text-indigo-600"
            >
              (+1) 000 0000 000
            </a>
          </div>
          <div className="flex flex-wrap gap-2 items-center mt-6 w-full whitespace-nowrap max-md:max-w-full">
            <img
              src="mail.png"
              alt="Email icon"
              className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            />
            <a
              href="mailto:mail@injuy-sync.com"
              className="self-stretch my-auto hover:text-indigo-600"
            >
              mail@injuy-sync.com
            </a>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="text-sm leading-none min-w-[343px] w-[576px] max-md:max-w-full"
      >
        <div className="flex gap-5 items-start w-full min-w-[343px] max-md:max-w-full">
          <div className="flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <label className="font-medium text-slate-700" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter full name"
                className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-gray-400 bg-white rounded-lg shadow-sm min-h-11 max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-5 w-full min-w-[343px] max-md:max-w-full">
          <label className="font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-gray-400 bg-white rounded-lg shadow-sm min-h-11 max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mt-5 w-full min-h-40 min-w-[343px] max-md:max-w-full">
          <label className="font-medium text-slate-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="flex overflow-hidden gap-2 items-start px-4 py-3 mt-1.5 w-full h-40 text-gray-400 bg-white rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="flex overflow-hidden gap-2 justify-center items-center px-4 py-3.5 mt-5 max-w-full font-medium text-white bg-indigo-500 rounded-lg border border-indigo-500 border-solid shadow-sm min-w-[343px] w-[343px]"
        >
          <span className="self-stretch my-auto">Send Message</span>
          <img
            src="send.png"
            alt="Send icon"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </button>
      </form>
    </section>
  );
}
