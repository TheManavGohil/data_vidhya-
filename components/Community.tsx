'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import { Youtube, Linkedin, Twitter } from 'lucide-react';

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
              <div className='text-[#828282]'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
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
            <div className='text-[#828282]'>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
              <div className={`${inter.className} text-[#828282] font-medium text-[20px] leading-[24px] tracking-[-0.03em] pl-3`}>
              Twitter
            </div>
            </div>
          </div>
         </div>
       </div>
     </div>
   );
 }
