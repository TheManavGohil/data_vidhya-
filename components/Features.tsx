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

export default function Features() {
  const [activeTab, setActiveTab] = useState('feature1');

  return (
    <div className="w-full py-45">
      <div className="text-center">
        <p className={`${jetbrainsMono.className} text-[20px] leading-[20px] tracking-[-0.03em] text-[#828282] w-[65px] mx-auto mb-5`}>
          FEATURES
        </p>
        
        <h2 className={`${inter.className} text-[40px] font-medium leading-[48px] tracking-[-0.03em] text-white mb-5`}>
            Learn. Practice. Get Hired
        </h2>

        <p className={`${inter.className} text-[#828282] text-[22px] text-medium mx-auto mb-14 leading-[30px]`}>
            Launch your data career faster with<br />
            practical, hands-on tools.
        </p>
        </div>
        <div className='pt-13 px-13 border border-[#1A1A1A]'>
        <h1 className={`${inter.className} text-white text-[26px] tracking-[-0.03em] font-semibold pb-3`}>Coding Playground</h1>
        <p className={`${inter.className} text-[#828282] text-[21px] tracking-[-0.03em] text-medium mx-auto mb-14 leading-[30px]`}>
        Practice real data engineering tasks in <br /> a live, interactive environment.
        </p>
        <div className='w-full h-full bg-[#141414] p-6'>
            <Image 
                src='/images/coding.svg'
                alt='coding'
                width={1000}
                height={600}
                className='w-full'
            />
        </div>
      </div>
      <div className='pt-13 px-13 grid grid-cols-2 border-t border-l border-r border-b border-[#1A1A1A]'>
            <div className='border-r border-[#1A1A1A]'>
                <h1 className={`${inter.className} text-white text-[26px] tracking-[-0.03em] font-semibold pb-3`}>Coding questions</h1>
                <p className={`${inter.className} text-[#828282] text-[21px] tracking-[-0.03em] text-medium mx-auto mb-8 leading-[30px]`}>
                Test your data engineering skills with real-world coding <br />problems tailored for interviews and industry scenarios.
                </p>
                <div className={`${inter.className} text-[#0050FF] text-[25px] pb-10`}>Learn More </div>
                <Image 
                    src='/images/codingQ.svg'
                    alt='codingQ'
                    width={900}
                    height={500}
                    className='w-full'
                />
            </div>
            <div className=''>
                <h1 className={`${inter.className} text-white text-[26px] tracking-[-0.03em] font-semibold pb-3 pl-13`}>AI Resume Evaluator</h1>
                <p className={`${inter.className} text-[#828282] text-[21px] tracking-[-0.03em] text-medium mx-auto mb-8 leading-[30px] pl-13`}>
                Get instant, AI-powered feedback on your resume,<br />customized for data engineering roles
                </p>
                <div className={`${inter.className} text-[#0050FF] text-[25px] mb-10 pl-13`}>Learn More </div>
                <Image
                    src='/images/discussion.svg'
                    alt='discuission'
                    width={1000}
                    height={600}
                    className='w-full ml-13'
                />
            </div>
       </div>
    </div>
  );
}
