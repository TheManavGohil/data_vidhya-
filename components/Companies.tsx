import Image from 'next/image';

export default function Companies() {
  return (
    <div className="w-full py-20">
      <div className="border border-[#1A1A1A]">
        <div className="text-center border-b border-[#1A1A1A] py-4">
          <h2 className="text-[#828282] text-lg">
            Trusted by 25,000+ Aspiring & Working Data Engineers From Top Companies
          </h2>
        </div>
        
        <div className="grid grid-cols-6">
          {/* Samsung */}
          <div className="flex items-center justify-center border-r border-[#1A1A1A] py-8">
            <Image
              src="/images/samsung.png"
              alt="Samsung"
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Meta */}
          <div className="flex items-center justify-center border-r border-[#1A1A1A] py-8">
            <Image
              src="/images/meta.png"
              alt="Meta"
              width={60}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Oracle */}
          <div className="flex items-center justify-center border-r border-[#1A1A1A] py-8">
            <Image
              src="/images/oracle.png"
              alt="Oracle"
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Walmart */}
          <div className="flex items-center justify-center border-r border-[#1A1A1A] py-8">
            <Image
              src="/images/walmart.png"
              alt="Walmart"
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Flipkart */}
          <div className="flex items-center justify-center border-r border-[#1A1A1A] py-8">
            <Image
              src="/images/flipkart.png"
              alt="Flipkart"
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Protonet */}
          <div className="flex items-center justify-center py-8">
            <Image
              src="/images/protonet.png"
              alt="Protonet"
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
