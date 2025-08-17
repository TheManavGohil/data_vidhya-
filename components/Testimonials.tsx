  'use client';

import React from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Play, Linkedin } from 'lucide-react';
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

export default function Testimonials() {
  return (
    
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-8 ml-8">
        <div className={`${jetbrainsMono.className} text-[20px] leading-[20px] tracking-[-0.03em] text-[#828282] w-[65px] mb-5`}>
          TESTIMONIALS
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h2 className={`${inter.className}text-white text-4xl font-medium mb-4`}>
              Trusted by data<br />
              learners worldwide
            </h2>
          </div>
          <div className="max-w-md">
            <p className={`${inter.className} text-[#828282] text-lg leading-relaxed mr-8`}>
              Real stories from people who've used our platform, courses, and tools to 10x their skills
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 border border-[#1A1A1A] min-h-[900px]">
        
        {/* Row 1, Col 1 - Video Thumbnail */}
        <div className="border border-[#1A1A1A] relative min-h-[300px]">
          <div className="relative w-full h-full overflow-hidden min-h-[300px]">
            <Image 
              src="/images/client1.png"
              alt="Client 1 Video"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
              <div className="flex items-center justify-center flex-1">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Bellal</div>
                <div className="text-[#828282] text-sm">Stealth Startup</div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 1, Col 2 - Text Testimonial */}
        <div className="border border-[#1A1A1A] p-4 flex flex-col justify-between">
          <p className={`${inter.className} text-white font-medium text-[20px] leading-[24px] p-2`}>
            Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
          </p>
          <div className="flex items-center">
            <Image 
              src="/images/profile.png"
              alt="Client 1"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="text-white text-[22px] leading-[24px]">Muhammad Aziq Hamidun</div>
            </div>
            <Linkedin className="w-5 h-5 text-white hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Row 1, Col 3 - Text Testimonial */}
        <div className="border border-[#1A1A1A] p-4 flex flex-col justify-between">
          <p className={`${inter.className} text-white font-medium text-[20px] leading-[24px] p-2`}>
            Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
          </p>
          <div className="flex items-center">
            <Image 
              src="/images/profile.png"
              alt="Client 1"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="text-white text-[22px] leading-[24px]">Muhammad Aziq Hamidun</div>
            </div>
            <Linkedin className="w-5 h-5 text-white hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Row 2, Col 1 - Text Testimonial */}
        <div className="border border-[#1A1A1A] p-4 flex flex-col justify-between">
          <p className={`${inter.className} text-white font-medium text-[20px] leading-[24px] p-2`}>
            Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
          </p>
          <div className="flex items-center">
            <Image 
              src="/images/profile.png"
              alt="Client 1"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="text-white text-[22px] leading-[24px]">Muhammad Aziq Hamidun</div>
            </div>
            <Linkedin className="w-5 h-5 text-white hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Row 2-3, Col 2 - Large Video Thumbnail (spans 2 rows) */}
        <div className="border border-[#1A1A1A] relative row-span-2 min-h-[600px]">
          <div className="relative w-full h-full overflow-hidden min-h-[600px]">
            <Image 
              src="/images/client2.png"
              alt="Client 2 Video"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-6">
              <div className="flex items-center justify-center flex-1">
                <Play className="w-16 h-16 text-white fill-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium text-lg">Bellal</div>
                <div className="text-[#828282]">Stealth Startup</div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2, Col 3 - Text Testimonial */}
        <div className="border border-[#1A1A1A] p-4 flex flex-col justify-between">
          <p className={`${inter.className} text-white font-medium text-[20px] leading-[24px] p-2`}>
            Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
          </p>
          <div className="flex items-center">
            <Image 
              src="/images/profile.png"
              alt="Client 1"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="text-white text-[22px] leading-[24px]">Muhammad Aziq Hamidun</div>
            </div>
            <Linkedin className="w-5 h-5 text-white hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Row 3, Col 1 - Text Testimonial */}
        <div className="border border-[#1A1A1A] p-4 flex flex-col justify-between">
          <p className={`${inter.className} text-white font-medium text-[20px] leading-[24px] p-2`}>
            Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
          </p>
          <div className="flex items-center">
            <Image 
              src="/images/profile.png"
              alt="Client 1"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="text-white text-[22px] leading-[24px]">Muhammad Aziq Hamidun</div>
            </div>
            <Linkedin className="w-5 h-5 text-white hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Row 3, Col 3 - Video Thumbnail */}
        <div className="border border-[#1A1A1A] relative min-h-[300px]">
          <div className="relative w-full h-full overflow-hidden min-h-[300px]">
            <Image 
              src="/images/client3.png"
              alt="Client 3 Video"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
              <div className="flex items-center justify-center flex-1">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Bellal</div>
                <div className="text-[#828282] text-sm">Stealth Startup</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
