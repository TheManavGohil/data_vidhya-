'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

interface FeatureCardProps {
  heading: string;
  subheading: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export default function FeatureCard({ heading, subheading, imageSrc, imageAlt }: FeatureCardProps) {
  return (
    <div className='pt-13 px-13 border border-[#1A1A1A]'>
      <h1 className={`${inter.className} text-white text-[26px] tracking-[-0.03em] font-semibold pb-3`}>
        {heading}
      </h1>
      <p className={`${inter.className} text-[#828282] text-[21px] tracking-[-0.03em] text-medium mx-auto mb-14 leading-[30px]`}>
        {subheading}
      </p>
      <div className='w-full h-full bg-[#141414]'>
        <Image 
          src={imageSrc}
          alt={imageAlt}
          width={1000}
          height={600}
          className='w-full'
        />
      </div>
    </div>
  );
}
