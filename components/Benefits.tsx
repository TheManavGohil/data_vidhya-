'use client';

import React, { useState } from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';

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

export default function Benefits() {
  const [activeTab, setActiveTab] = useState('platform');

  return (
    <div className="w-full py-20">
      <div className="text-center">
        <p className={`${jetbrainsMono.className} text-[20px] leading-[20px] tracking-[-0.03em] text-[#828282] w-[65px] mx-auto mb-5`}>
          BENEFITS
        </p>
        
        <h2 className={`${inter.className} text-[40px] font-medium leading-[48px] tracking-[-0.03em] text-white mb-5`}>
          What we offer
        </h2>

        <p className={`${inter.className} text-[#828282] text-[20px] text-medium mx-auto mb-14 leading-[30px]`}>
          We offer expert-led courses and a<br />
          platform to help you become the best.
        </p>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2">
          <button
            onClick={() => setActiveTab('platform')}
            className={`py-7 text-center font-semibold text-[25px] border border-[#1A1A1A] hover:bg-[#1A1A1A] ${
              activeTab === 'platform'
                ? 'text-white border-b-3 border-b-white bg-[#1A1A1A]'
                : 'text-[#828282]'
            } transition-colors`}
          >
            Platform
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-7 text-center font-semibold text-[25px] border border-[#1A1A1A] hover:bg-[#1A1A1A] ${
              activeTab === 'courses'
                ? 'text-white border-b-3 border-b-white bg-[#1A1A1A]'
                : 'text-[#828282]'
            } transition-colors`}
          >
            Courses
          </button>
        </div>

        {/* Demo Image Box */}
        <div className="bg-[#0F0F0F] border border-[#1A1A1A] py-20 px-15">
          <Image
            src="/images/demo.svg"
            alt="Platform Demo"
            width={1000}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
