"use client";

import Link from "next/link";
import { JetBrains_Mono, Inter } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "500" });

export default function GetStartedSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center px-6">
        {/* Small Heading */}
        <p
          className={`${jetbrainsMono.className} text-[20px] leading-[20px] tracking-[-0.03em] text-[#828282] w-fit mx-auto mb-5`}
        >
          GET STARTED
        </p>

        {/* Main Heading */}
        <h2
          className={`${inter.className} text-[40px] font-medium leading-[48px] tracking-[-0.03em] text-white mb-5`}
        >
          Get interview ready today
        </h2>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/courses"
            className="bg-[#0050FF] text-white text-[20px] px-6 py-3 hover:bg-blue-600 transition-colors"
          >
            Explore courses
          </Link>
          <Link
            href="/platform"
            className="bg-[#1C1C1C] text-white text-[20px] px-6 py-3 hover:bg-zinc-700 transition-colors"
          >
            Try platform
          </Link>
        </div>
      </div>
    </div>
  );
}
