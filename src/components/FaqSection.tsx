
// import React, { useState } from "react";
import { FaqItem } from "./FaqItem";

export function FaqSection() {
  const faqs = [
    {
      question: "How does this software improve client intake for law firms?",
      answer: "",
    },
    {
      question:
        "Is the client intake process secure and compliant with legal regulations?",
      answer:
        "Yes, our platform uses bank-grade encryption and complies with data privacy laws such as GDPR and HIPAA. We prioritize security to ensure sensitive client information remains protected at all times.",
    },
    {
      question:
        "Can this software integrate with our existing case management system?",
      answer: "",
    },
    {
      question: "How easy is it for clients to complete the intake process?",
      answer: "",
    },
    {
      question: "Do you offer a free trial or demo?",
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col items-center px-28 py-20 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
      <div className="max-w-full text-center w-[768px]">
        <h2 className="text-5xl font-semibold leading-tight text-gray-900 max-md:max-w-full max-md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-md:max-w-full">
          Get answers to commonly asked questions.
        </p>
      </div>
      <div className="mt-16 max-w-full w-[768px] max-md:mt-10">
        <div className="flex gap-8 items-start w-full max-md:max-w-full">
          <div className="flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full space-y-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 py-10 mt-16 w-full bg-white rounded-2xl max-w-[1216px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          src="avatar.png"
          alt="Support illustration"
          className="object-contain gap-0 self-center w-32 max-w-full aspect-[2.67]"
        />
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="w-full leading-snug text-center max-md:max-w-full">
            <h3 className="text-2xl font-semibold text-gray-900 max-md:max-w-full">
              Still have questions?
            </h3>
            <p className="mt-2 text-lg text-slate-600 max-md:max-w-full">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div className="flex gap-4 justify-center items-start pt-4 mt-4 w-full text-sm font-medium leading-5 text-white max-md:max-w-full">
            <button className="overflow-hidden gap-2 self-stretch px-8 py-3.5 bg-indigo-500 rounded-lg shadow-sm max-md:px-5">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
