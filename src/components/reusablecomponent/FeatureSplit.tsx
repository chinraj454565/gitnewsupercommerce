"use client";

import Image from "next/image";

type FeatureSplitProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  buttonText?: string;
};

const FeatureSplit = ({
  title,
  description,
  image,
  reverse = false,
  buttonText = "Get started",
}: FeatureSplitProps) => {
  return (
    <section className="w-full bg-[#F3F3F3] py-16 md:py-24">
      {" "}
      <div className="max-w-6xl mx-auto px-5">
        ```
        {/* Grid */}
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* TEXT CONTENT */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
              {title}
            </h2>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-xl mx-auto md:mx-0">
              {description}
            </p>

            <button className="inline-block bg-[#0A1A2F] text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors">
              {buttonText}
            </button>
          </div>

          {/* IMAGE CARD */}
          <div className="w-full">
            <div className="relative w-full aspect-[16/10] bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* dummy image */}
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;
