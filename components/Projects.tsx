import { ChevronDown } from 'lucide-react';
import { JetBrains_Mono, Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export default function Projects() {
  return (
    <div className="bg-black text-white py-45">
      {/* Header Section */}
      <div className="mb-12 w-full">
        <div className={`${jetbrainsMono.className} text-[20px] leading-[20px] tracking-[-0.03em] text-[#828282] w-[65px] mb-5 pl-10`}>
            PROJECTS
        </div>

        {/* full width row so "View all projects" aligns to 10px from right */}
        <div className="flex justify-between items-center pl-10 pr-10 w-full">
          <div>
            <h2
              className={`${inter.className} text-white text-[40px] font-medium mb-4`}
            >
              Work on real time projects
            </h2>
            <p
              className={`${inter.className} text-[#828282] text-[21px] leading-relaxed`}
            >
              Practical tools to launch your career in <br /> data, faster and
              with confidence
            </p>
          </div>

          <div>
            <Link
              href="/projects"
              className={`${inter.className} text-[#0050FF] text-[20px] flex items-center hover:cursor-pointer`}
            >
              View all projects
              <ChevronDown className="w-6 h-6 text-[#0050FF] fill-[#0050FF] rotate-270 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Grid - Full Width */}
      <div className="grid grid-cols-2 border-t border-b border-[#1A1A1A] overflow-hidden">
        {/* Project 1 */}
        <div className="border-r border-[#1A1A1A] bg-[#0F0F0F] flex items-center justify-center p-8 hover:bg-[#2A2A2A] transition-colors cursor-pointer">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/images/project-1.webp"
              alt="AWS Data Pipeline Project"
              width={600}
              height={400}
              className="w-full h-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-[#0F0F0F] flex items-center justify-center p-8 hover:bg-[#2A2A2A] transition-colors cursor-pointer">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/images/project-2.webp"
              alt="ML Pipeline Project"
              width={600}
              height={400}
              className="w-full h-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Project 3 */}
        <div className="border-r border-t border-[#1A1A1A] bg-[#0F0F0F] flex items-center justify-center p-8 hover:bg-[#2A2A2A] transition-colors cursor-pointer">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/images/project-1.webp"
              alt="Real-time Analytics Project"
              width={600}
              height={400}
              className="w-full h-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Project 4 */}
        <div className="border-t border-[#1A1A1A] bg-[#0F0F0F] flex items-center justify-center p-8 hover:bg-[#2A2A2A] transition-colors cursor-pointer">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/images/project-2.webp"
              alt="Data Warehouse Project"
              width={600}
              height={400}
              className="w-full h-auto max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
