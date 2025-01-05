import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    { question: "What is 'SkillUp' Club?", answer: "Lorem ipsum" },
    { question: "How can I join the club?", answer: "Lorem ipsum" },
    {
      question: "What activities does the club organize?",
      answer: "Lorem ipsum",
    },
    {
      question: "Who can participate in the club's events?",
      answer: "Lorem ipsum",
    },
    {
      question: "What benefits will I gain from joining the club?",
      answer: "Lorem ipsum",
    },
  ];

  return (
    <div className="min-h-fit py-10 md:min-h-[70vh] md:py-12 md:flex  w-full font-montserrat font-extrabold bg-svg-pattern bg-no-repeat bg-cover bg-center" id="faq-section">
      <div className="relative -z-0 max-w-3xl mx-auto flex flex-col gap-12  justify-center items-center min-h-full min-w-full  ">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#6C2BF7] text-white backdrop-blur rounded-lg border shadow-sm "
            >
              <AccordionTrigger className="px-6 font-montserrat text-[1.2rem] md:text-[1.2rem] font-semibold ">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 font-roboto  font-medium md:text-[1rem] ">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
