'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import { Youtube, Linkedin, Twitter } from 'lucide-react';
import Testimonials from './Testimonials';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

export default function Community() {
  return (
    <div className="w-full py-55">
      <div className="py-13">
        {/* Heading */}
        <div className="text-center mb-13">
          <h2 className={`${inter.className} text-white text-[40px] font-medium leading-[48px] tracking-[-0.03em]`}>
            Be a part of our community
          </h2>
        </div>

        {/* Social Media Stats */}
        <div className="grid grid-cols-3 gap-0 border border-[#1A1A1A] last:border-r-0 last:border-l-0">
          {/* YouTube */}
          <div className="flex flex-col border-r border-[#1A1A1A] last:border-r-0 py-10 pl-10">
            <div className={`${inter.className} text-white text-[54px] font-medium leading-[56px] tracking-[-0.03em] mb-4`}>
              160K+
            </div>
            <div className="flex text-center">
              <Youtube className="w-6 h-6 text-[#828282] fill-[#828282]" />
              <div className={`${inter.className} text-[#828282] font-medium text-[20px] leading-[24px] tracking-[-0.03em] pl-3`}>
              Youtube
            </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col border-r border-[#1A1A1A] last:border-r-0 py-10 pl-10">
            <div className={`${inter.className}  text-white text-[54px] font-medium leading-[56px] tracking-[-0.03em] mb-4`}>
              100K+
            </div>
            <div className="flex text-center">
              <Linkedin className="w-6 h-6 text-[#828282] fill-[#828282]" />
              <div className={`${inter.className} text-[#828282] font-medium text-[20px] leading-[24px] tracking-[-0.03em] pl-3`}>
              Linkedin
            </div>
            </div>
          </div>

          {/* Twitter */}
          <div className="flex flex-col border-r border-[#1A1A1A] last:border-r-0 py-10 pl-10">
            <div className={`${inter.className} text-white text-[54px] font-medium leading-[56px] tracking-[-0.03em] mb-4`}>
              25K+
            </div>
            <div className="flex text-center">
              <Twitter className="w-6 h-6 text-[#828282] fill-[#828282]" />
              <div className={`${inter.className} text-[#828282] font-medium text-[20px] leading-[24px] tracking-[-0.03em] pl-3`}>
              Twitter
            </div>
            </div>
                     </div>
         </div>
       </div>
       
       {/* Testimonials Section */}
       <Testimonials />
     </div>
   );
 }
