import Image from "next/image";

const ImageContent = ({ items }: any) => {
  return (
    <section className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
        {items.map((item: any, index: number) => (
          <div
            key={index}
            className={`flex flex-col bg-[#e8e9eb] rounded-[16px] p-6 sm:p-8 lg:p-10 border border-[#d1d5db] shadow-sm
              ${item.isWide ? "lg:flex-[1.6]" : "lg:flex-1"}`}
          >
            {/* Image Container with browser-like mockup */}
            <div className="relative w-full mb-8 lg:mb-10 overflow-hidden rounded-[10px] bg-white border border-[#e5e7eb] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              {/* Browser chrome bar */}
              <div className="h-8 bg-white border-b border-[#e5e7eb] flex items-center px-3 gap-1.5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative w-full aspect-[16/10] bg-white">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover object-top"
                  priority={index === 0}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-auto">
              <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] font-normal text-[#111827] mb-3 lg:mb-4 leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#4b5563] leading-[1.65] font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageContent;