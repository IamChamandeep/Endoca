import React, { useState } from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  { question: "Are these products legal?", answer: "100% yes. EU-compliant, 0% THC, fully legal hemp extracts." },
  { question: "Will I feel 'high'?", answer: "No. Topical use only. No intoxicating effects." },
  { question: "How fast do they work?", answer: "Most users feel relief within 15-20 minutes of application." },
  { question: "Can I use multiple products together?", answer: "Absolutely. They're designed to layer beautifully." },
  { question: "What if I'm not satisfied?", answer: "30-day money-back guarantee. No questions asked." },
  { question: "Where do you ship?", answer: "Across the EU. Free shipping over €50. Arrives in 3-5 days." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section className="bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal">Quick Answers</h2>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div 
                className={`border rounded-xl transition-all duration-300 ${openIndex === idx ? 'border-teal-800 bg-mint/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-poppins font-semibold text-lg ${openIndex === idx ? 'text-teal-900' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  {openIndex === idx ? 
                    <Minus className="text-teal-800 flex-shrink-0" size={20} /> : 
                    <Plus className="text-gray-400 flex-shrink-0" size={20} />
                  }
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;