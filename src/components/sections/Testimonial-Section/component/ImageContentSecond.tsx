import Image from "next/image";

const ImageContentSecond = ({ items }: any) => {
  return (
    <section className="flex flex-col gap-8 p-6">
      {items.map((item: any, index: any) => (
        <div
          key={index}
          className={`bg-[#F3F4F6] rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col md:${item.reverse ? "flex-row-reverse" : "flex-row"} items-stretch min-h-[450px]`}
        >
          {/* Text Section - Vertically centered */}
          <div className="w-full md:w-[40%] p-10 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-[#1F2937] mb-6 tracking-tight">
              {item.title}
            </h3>
            <p className="text-lg text-[#4B5563] leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Image Section - The "Dashboard" container */}
          <div className="w-full md:w-[60%] relative flex items-end justify-end overflow-hidden pt-10 pl-10 md:pt-12 md:pl-0">
            {/* We use a wrapper with a defined height and translate 
               to make it look like it's sliding off the bottom/right 
            */}
            <div className="relative w-[110%] h-[350px] md:h-[400px] rounded-tl-2xl border-t border-l border-gray-200 bg-white shadow-2xl overflow-hidden transform translate-x-4 translate-y-4">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-contain object-left-top p-2" // Changed to contain + padding for better fit
                priority
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageContentSecond;
