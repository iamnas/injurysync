
import  { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden w-full bg-white rounded-2xl ${answer ? "rounded-2xl" : "rounded-xl"}`}
    >
      <button
        className="flex flex-wrap justify-between items-center px-6 py-4 w-full bg-white max-md:px-5 max-md:max-w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="flex-1 shrink self-stretch my-auto text-lg font-medium leading-loose text-gray-900 basis-0 max-md:max-w-full text-left">
          {question}
        </h3>
        <div className="flex gap-2.5 items-center self-stretch p-1 my-auto w-7 h-7 bg-gray-900 rounded-[999px]">
          <img
            src={isOpen ? "minus icon.png":"plus_icon.png"}
            alt={isOpen ? "Close" : "Open"}
            className="object-contain self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </button>
      {answer && isOpen && (
        <div className="flex-1 shrink gap-2.5 self-stretch p-6 w-full text-base leading-7 basis-0 text-slate-600 max-md:px-5 max-md:max-w-full border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
}
