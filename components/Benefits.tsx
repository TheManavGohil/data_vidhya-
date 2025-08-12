'use client';

import React, { useState } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
});

export default function Benefits() {
  const [activeTab, setActiveTab] = useState('platform');

  return (
    <div className="w-full py-20">
      <div className="text-center">
        <p className={`${jetbrainsMono.className} text-[14px] leading-[12px] tracking-[-0.03em] text-[#828282] w-[65px] mx-auto mb-4`}>
          BENEFITS
        </p>
        
        <h2 className="text-[30px] font-medium leading-[24px] tracking-[-0.03em] text-white font-inter mb-4">
          What we offer
        </h2>

        <p className="text-[#828282] text-lg max-w-[422px] mx-auto mb-12">
          We offer expert-led courses and<br />
          a platform to help you become the best.
        </p>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2">
          <button
            onClick={() => setActiveTab('platform')}
            className={`py-4 text-center border border-[#1A1A1A] ${
              activeTab === 'platform'
                ? 'text-white border-b-white'
                : 'text-[#828282]'
            } transition-colors`}
          >
            Platform
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-4 text-center border border-[#1A1A1A] ${
              activeTab === 'courses'
                ? 'text-white border-b-white'
                : 'text-[#828282]'
            } transition-colors`}
          >
            Courses
          </button>
        </div>

        {/* Demo Image Box */}
        <div className="border border-[#1A1A1A] p-6">
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
