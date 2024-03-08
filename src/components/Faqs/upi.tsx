import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { inter, grotesk } from "@/utils/fonts";

interface accordionData {
  question: string;
  answer: string;
}

interface accordionProps {
  data: accordionData[];
}

export function UpiFaqs({ data }: accordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-10 bg-gray-50 rounded-lg shadow border mx-2 sm:mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className={`${grotesk} text-2xl font-bold md:text-4xl md:leading-tight dark:text-white`}>
          Your questions, answered
        </h2>
        <p className={`${inter} mt-1 text-gray-600 dark:text-gray-400`}>
          Answers to the most frequently asked questions.
        </p>
      </div>
      <div className="hs-accordion-group">
        {data.map((item, index) => (
          <div
            key={index}
            className={`hs-accordion ${
              openIndex === index ? 'hs-accordion-active:bg-gray-100' : ''
            } rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active`}
          >
            <button
              className={`${grotesk} hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div
              className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                openIndex === index ? 'block' : 'hidden'
              }`}
            >
              <p className="text-gray-800 dark:text-gray-200">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
