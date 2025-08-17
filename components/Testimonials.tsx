'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import { Play, Linkedin } from 'lucide-react';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

export default function Testimonials() {
  return (
    <div className="w-full py-13">
      <div className="grid grid-cols-3 gap-4 border border-[#1A1A1A] p-13">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          {/* Video Thumbnail */}
          <div className="border border-[#1A1A1A] p-4">
            <div className="relative bg-[#141414] rounded-lg overflow-hidden mb-3">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
            <div className="text-white font-medium">Bellal</div>
            <div className="text-[#828282] text-sm">Stealth Startup</div>
          </div>

          {/* Text Testimonial 1 */}
          <div className="border border-[#1A1A1A] p-4">
            <p className={`${inter.className} text-[#828282] text-[16px] leading-[24px] mb-4`}>
              Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
            </p>
            <div className="flex items-center">
              <Image 
                src="/images/client1.png"
                alt="Client 1"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="text-white font-medium">Muhammad Aziq Hamidun</div>
              </div>
              <Linkedin className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Text Testimonial 2 */}
          <div className="border border-[#1A1A1A] p-4">
            <p className={`${inter.className} text-[#828282] text-[16px] leading-[24px] mb-4`}>
              Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
            </p>
            <div className="flex items-center">
              <Image 
                src="/images/client2.png"
                alt="Client 2"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="text-white font-medium">Muhammad Aziq Hamidun</div>
              </div>
              <Linkedin className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          {/* Text Testimonial */}
          <div className="border border-[#1A1A1A] p-4">
            <p className={`${inter.className} text-[#828282] text-[16px] leading-[24px] mb-4`}>
              Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
            </p>
            <div className="flex items-center">
              <Image 
                src="/images/client3.png"
                alt="Client 3"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="text-white font-medium">Muhammad Aziq Hamidun</div>
              </div>
              <Linkedin className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Large Video Thumbnail (spans 2 rows) */}
          <div className="border border-[#1A1A1A] p-4 row-span-2">
            <div className="relative bg-[#141414] rounded-lg overflow-hidden mb-3">
              <div className="aspect-[4/5] bg-gray-800 flex items-center justify-center">
                <Play className="w-12 h-12 text-white fill-white" />
              </div>
            </div>
            <div className="text-white font-medium">Bellal</div>
            <div className="text-[#828282] text-sm">Stealth Startup</div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          {/* Text Testimonial 1 */}
          <div className="border border-[#1A1A1A] p-4">
            <p className={`${inter.className} text-[#828282] text-[16px] leading-[24px] mb-4`}>
              Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
            </p>
            <div className="flex items-center">
              <Image 
                src="/images/client1.png"
                alt="Client 1"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="text-white font-medium">Muhammad Aziq Hamidun</div>
              </div>
              <Linkedin className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Text Testimonial 2 */}
          <div className="border border-[#1A1A1A] p-4">
            <p className={`${inter.className} text-[#828282] text-[16px] leading-[24px] mb-4`}>
              Awesome course. You divide the content beautifully and in this chaos world of the courses u really make a beautiful and real-time used course. But i seem u should add REGEXP keyword in your videos.
            </p>
            <div className="flex items-center">
              <Image 
                src="/images/client2.png"
                alt="Client 2"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="text-white font-medium">Muhammad Aziq Hamidun</div>
              </div>
              <Linkedin className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Video Thumbnail */}
          <div className="border border-[#1A1A1A] p-4">
            <div className="relative bg-[#141414] rounded-lg overflow-hidden mb-3">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
            <div className="text-white font-medium">Bellal</div>
            <div className="text-[#828282] text-sm">Stealth Startup</div>
          </div>
        </div>

      </div>
    </div>
  );
}
