import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <div className="w-full pt-[20px]">
        <div className="text-center">
          <div className="inline-block text-[#0050FF] px-4 py-1.5 rounded-xl text-sm font-medium mb-8 border border-[#001F64]" style={{ backgroundColor: '#0050FF1A' }}>
            NEW:CHECKOUT OUR NEW COURSES ›
          </div>
          
            <h1 className="max-w-[660px] mx-auto text-[40px] font-medium leading-[54px] tracking-[-0.03em] mb-4 font-inter">
             <div>Become a Data Engineer.</div>
             Learn by doing. Get hired. For real.
            </h1>
            <p className="max-w-[422px] mx-auto text-[18px] font-normal leading-[26px] tracking-[-0.03em] text-center font-inter text-gray-300">
              We help you start your data engineering career from 0 to 1 with courses and tools in one platform
            </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link 
              href="/courses" 
              className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-colors"
            >
              Explore courses
            </Link>
            <Link 
              href="/platform" 
              className="bg-zinc-800 text-white px-8 py-3 hover:bg-zinc-700 transition-colors"
            >
              Try platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
