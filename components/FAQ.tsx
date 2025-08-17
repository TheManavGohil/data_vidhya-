'use client';

import React, { useState } from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ChevronDown } from 'lucide-react';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-45">
             <div className="grid grid-cols-26 border border-[#1A1A1A]">
         {/* Left Column - Title */}
         <div className="col-span-12 p-10 border-r border-[#1A1A1A]">
          <p className={`${jetbrainsMono.className} text-[20px] leading-[18px] tracking-[-0.03em] text-[#828282] mb-4`}>
            FAQs
          </p>
          <h2 className={`${inter.className} text-[40px] font-medium leading-[48px] tracking-[-0.03em] text-white`}>
            All You Need to Know
          </h2>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="col-span-14 pb-13">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#1A1A1A] last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left hover:bg-[#0A0A0A] transition-colors"
              >
                <span className={`${inter.className} text-white text-[24px] font-medium leading-[24px] tracking-[-0.03em] px-5 pt-3`}>
                  {faq.question}
                </span>
                    <ChevronDown 
                   className={`w-6 h-6 text-[#828282] fill-[#828282] transition-transform duration-200 mr-5 ${
                     openIndex === index ? 'rotate-180' : ''
                   }`}
                 />
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <p className={`${inter.className} text-[#828282] text-[18px] leading-[24px] tracking-[-0.03em] pl-5 pr-15`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
          
          {/* Email us section */}
          <div className="pt-6 mt-6">
            <p className={`${inter.className} text-white text-[20px] font-medium leading-[24px] tracking-[-0.03em] pl-5`}>
              Your question isn&apos;t listed here?{' '}
              <a href="mailto:contact@datavidhya.com" className="font-medium text-[#828282] underline hover:text-[#0050FF] transition-colors">
                Email us!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
