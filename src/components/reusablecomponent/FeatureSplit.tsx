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
    <section className="w-full bg-[#F3F3F3] py-20 md:py-5">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div
          className={`grid md:grid-cols-12 gap-12 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* TEXT COLUMN */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
              {title}
            </h2>

            <p className="text-slate-600 leading-relaxed text-base md:text-base  max-w-lg mx-auto md:mx-0">
              {description}
            </p>

            <button className="inline-block bg-[#0A1A2F] text-white px-7 py-3.5 rounded-md font-medium hover:bg-slate-800 transition-colors">
              {buttonText}
            </button>
          </div>

          {/* IMAGE COLUMN */}
          <div className="md:col-span-7">
            {/* Card wrapper (same as real website look) */}
            <div className="w-full rounded-2xl overflow-hidden ">
              {/* IMPORTANT: NO fixed height, NO fill */}
              <Image
                src={image}
                alt={title}
                width={1600}
                height={1000}
                sizes="(max-width:768px) 100vw, 60vw"
                className="w-full h-auto object-contain"
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
