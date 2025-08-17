import { JetBrains_Mono, Inter } from 'next/font/google';
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

export default function FounderMemo() {
  return (
    <div className="bg-black text-white border border-[#1A1A1A]">
      <div className="">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left Column: Text Content */}
            <div className="md:w-1/2 flex flex-col space-y-8 border-r border-[#1A1A1A] p-10 ml-10 md:pl-4 md:pr-16">
              <div className="space-y-8">
                <div className={`${jetbrainsMono.className} text-[20px] tracking-[-0.1em] text-[#828282]`}>
                  FOUNDERS MEMO
                </div>
                <h2 className={`${inter.className} text-4xl font-medium leading-tight`}>
                  Making data easier<br />for everyone
                </h2>
                <div className={`${inter.className} text-[18px] text-white leading-relaxed space-y-6`}>
                  <p>
                    When we started building Datavidhya, our vision was simple:
                    Make data engineering accessible, practical, and career-defining.
                  </p>
                  <p>
                    In a world flooded with tools and theory-heavy content, we saw a gap, real-world, hands-on learning combined with strong community support. Data engineering isn't just about pipelines and tools; it's about solving real problems, building systems that scale, and enabling companies to make smarter decisions.
                  </p>
                  <p>
                    Let's build the future of data, together.
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-8">
                <p className={`${inter.className} text-[18px] font-semibold`}>Darshil Parmar</p>
                <p className={`${inter.className} text-[16px] text-[#676767]`}>Founder, Datavidhya</p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="md:w-1/2 flex justify-center items-center bg-[#0F0F0F] p-8 md:pl-16">
              <Image
                src="/images/founder.webp"
                alt="Darshil Parmar, Founder of Datavidhya"
                width={600}
                height={400}
                className="grayscale object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
