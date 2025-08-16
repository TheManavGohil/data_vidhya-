 'use client';

import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

interface ContentBlockProps {
  heading: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ContentBlock({ heading, description, icon }: ContentBlockProps) {
  return (
    <div className="p-6 bg-[#141414] border border-[#1A1A1A]">
      <div className="flex flex-col space-y-4">
        {/* Icon */}
        <div className="w-8 h-8 bg-orange-500 flex items-center justify-center">
          <div className="flex flex-col space-y-1">
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
          </div>
        </div>
        
        {/* Heading */}
        <h3 className={`${inter.className} text-white text-xl font-semibold leading-tight`}>
          {heading}
        </h3>
        
        {/* Description */}
        <p className={`${inter.className} text-[#828282] text-base leading-relaxed`}>
          {description}
        </p>
      </div>
    </div>
  );
}
