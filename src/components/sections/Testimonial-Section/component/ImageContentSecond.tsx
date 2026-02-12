import Image from "next/image";

const ImageContentSecond = ({ items }: any) => {
  return (
    <section className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col gap-5 lg:gap-6">
        {items.map((item: any, index: number) => (
          <div
            key={index}
            className={`bg-[#e8e9eb] rounded-[16px] overflow-hidden border border-[#d1d5db] shadow-sm flex flex-col-reverse ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          >
            {/* Text Section */}
            <div className="w-full lg:w-[40%] p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] font-normal text-[#111827] mb-4 lg:mb-5 leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#4b5563] leading-[1.65] font-normal">
                {item.description}
              </p>
            </div>

            {/* Image Section - Dashboard container */}
            <div className="w-full lg:w-[60%] relative flex items-end justify-end overflow-hidden p-6 sm:p-8 lg:p-0 lg:pt-10 lg:pr-10 lg:pb-0">
              {/* Dashboard mockup with shadow and border */}
              <div className="relative w-full lg:w-[calc(100%+40px)] h-[300px] sm:h-[400px] lg:h-[450px] rounded-tl-[12px] lg:rounded-tl-[16px] border-t border-l border-[#d1d5db] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] overflow-hidden lg:translate-x-10 lg:translate-y-10">
                <div className="relative w-full h-full p-3 sm:p-4 lg:p-5">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-contain object-left-top"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageContentSecond;