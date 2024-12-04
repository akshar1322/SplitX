// components/FAQSection.jsx
import { useState } from 'react';

const faqData = [
  {
    question: "What makes Splix stand out from other agencies?",
    answer: "At Splix, we combine innovation, expertise, and a user-first approach to deliver results that truly make an impact. Our dedicated team focuses on crafting unique solutions tailored to your business needs, ensuring exceptional quality and measurable outcomes.",
  },
  {
    question: "I love your work! How can I get started on a project?",
    answer: "Starting a project with us is simple! Just reach out via our contact form, email, or phone. We'll schedule a consultation to understand your requirements and guide you through the next steps.",
  },
  {
    question: "What services does Splix offer?",
    answer: "We specialize in a wide range of services, including: Web application development,UI/UX design,Mobile application development,Digital marketing strategies,Branding and creative services.",
  },
  {
    question: "What is Splix's core strategy?",
    answer: "Our core strategy revolves around understanding your goals, leveraging the latest technologies, and delivering tailored solutions that drive growth and success. We prioritize collaboration, transparency, and a results-driven approach.",
  },
  {
    question: "What information do you need to start a project?",
    answer: "To kickstart your project, we typically need: A clear project brief or idea,Your objectives and target audience,Any existing assets (logos, branding guidelines, etc.),Preferred timeline and budget considerations",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white rounded-t-2xl font-semibold p-8 overflow-hidden shadow-lg max-w-fitxl mx-auto">
      <h2 className="text-5xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <div
              className="flex items-center justify-between py-4 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              {/* this is change 900 to 500 */}
              <h3 className="text-xl font-medium">{item.question}</h3>
              <svg
                className={`w-6 h-6 transform transition-transform  text-lime-900 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openIndex === index && (
              <p className="text-gray-300 py-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
