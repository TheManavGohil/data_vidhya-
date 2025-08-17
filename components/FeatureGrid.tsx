'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import { NotepadText , BookOpen, Star, Code2 } from 'lucide-react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

interface FeatureItem {
  icon: 'book-open-check' | 'book-open' | 'star' | 'code-2';
  heading: string;
  subheading: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

const iconConfig: Record<
  FeatureItem['icon'],
  { component: React.ElementType; wrapper?: string; iconClass?: string }
> = {
  // 1) Replace with briefcase. Yellow fill, black outline, no background box
  'book-open-check': {
    component: NotepadText,
    wrapper: '',
    iconClass: 'w-8 h-8 text-black fill-[#FFB020]',
  },

  // 2) Book with blue fill and black stroke, no background box
  'book-open': {
    component: BookOpen,
    wrapper: '',
    iconClass: 'w-8 h-8 text-black fill-[#0EA5E9]', // blue fill + black stroke
  },

  // unchanged
  star: {
    component: Star,
    wrapper: '',
    iconClass: 'w-8 h-8 text-[#00E676] fill-[#00E676]',
  },

  // unchanged: code icon inside a circle
  'code-2': {
    component: Code2,
    wrapper: 'w-10 h-10 bg-[#00E5FF] rounded-full flex items-center justify-center',
    iconClass: 'w-5 h-5 text-black',
  },
};

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="w-full py-45">
      <div className="grid grid-cols-4 gap-0 border border-[#1A1A1A]">
        {features.map((feature, index) => {
          const { component: Icon, wrapper, iconClass } = iconConfig[feature.icon];

          return (
            <div
              key={index}
              className={`p-13 ${index < features.length - 1 ? 'border-r border-[#1A1A1A]' : ''}`}
            >
              <div className="flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  {wrapper ? (
                    <div className={wrapper}>
                      <Icon className={iconClass} />
                    </div>
                  ) : (
                    <Icon className={iconClass} />
                  )}
                </div>

                {/* Heading */}
                <h3 className={`${inter.className} text-white text-[24px] font-medium mb-4 leading-[28px] tracking-[-0.03em]`}>
                  {feature.heading}
                </h3>

                {/* Subheading */}
                <p className={`${inter.className} text-[#828282] text-[18px] leading-[30px] tracking-[-0.03em]`}>
                  {feature.subheading}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
