import Image from "next/image";

const ImageContent = ({ items }: any) => {
  return (
    <section className={`flex flex-col md:flex-row gap-6 p-6 bg-white`}>
      {items.map((item: any, index: any) => (
        <div
          key={index}
          className={`flex flex-col bg-[#F3F4F6] rounded-xl p-8 border border-gray-100 shadow-sm
            ${item.isWide ? "flex-[1.5]" : "flex-1"}`}
        >
          {/* Image Container */}
          <div className="relative w-full aspect-video mb-10 overflow-hidden rounded-lg">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>

          {/* Text Content */}
          <div className="mt-auto">
            <h3 className="text-2xl font-semibold text-[#1F2937] mb-4 tracking-tight">
              {item.title}
            </h3>
            <p className="text-lg text-[#4B5563] leading-relaxed font-light">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageContent;
