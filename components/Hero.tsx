import Link from 'next/link';
import { JetBrains_Mono, Inter } from 'next/font/google';

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

export default function Hero() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <div className="w-full pt-[110px]">
        <div className="text-center">
          <div className={`inline-block text-[#0050FF] px-4 py-1.5 rounded-lg text-medium font-medium mb-10 border-[0.6px] border-[#001F64] ${jetbrainsMono.className}`} style={{ backgroundColor: '#0050FF2F' }}>
            NEW: CHECKOUT OUR NEW COURSES ›
          </div>
          
            <h1 className={`w-[900px] h-[96px] mx-auto text-[55px] font-medium leading-[65px] tracking-[-0.03em] mb-15 ${inter.className}`}>
             <div>Become a Data Engineer.</div>
             Learn by doing. Get hired. For real.
            </h1>
            <p className={`w-[560px] mx-auto text-[24px] font-normal leading-[35px] tracking-[-0.03em] text-center text-[#828282] ${inter.className}`}>
              We help you start your data engineering career from 0 to 1 with courses and tools in one platform
            </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link 
              href="/courses" 
              className="bg-[#0050FF] text-white text-[20px] px-4 py-3 hover:bg-blue-600 transition-colors"
            >
              Explore courses
            </Link>
            <Link 
              href="/platform" 
              className="bg-[#1C1C1C] text-white text-[20px] px-4 py-3 hover:bg-zinc-700 transition-colors"
            >
              Try platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
