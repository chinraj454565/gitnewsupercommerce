"use client";
import React from "react";
import { AlertTriangle, TriangleAlert, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
};

type Story = {
  title: string;
  description: string;
  tag: string;
  img: string;
};

type CommonToAllProps = {
  features?: Feature[];
  stories?: Story[];
};

const CommonToAll = ({ features = [], stories = [] }: CommonToAllProps) => {
  const logos = [
    "https://spreecommerce.org/wp-content/uploads/2024/07/mitchells.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/meundies.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/huckberry.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/kfc.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/goop.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/godaddy.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/bonobos.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/bookshop.svg",
  ];
  const duplicatedLogos = [...logos, ...logos];
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {features.map((feature: any, index: any) => (
          <div key={index} className="flex flex-col items-center">
            {/* Blue Check Icon */}
            <div className="mb-6 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
              <Check className="w-5 h-5 text-blue-500 stroke-[3px]" />
            </div>

            <h3 className="text-2xl md:text-3xl font-normal text-[#333] mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg px-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <section className="bg-[#F3F3F3] py-20 px-6 md:px-12 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-light text-[#001D3D] text-center mb-16">
            Super Success Stories
          </h2>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {stories.map((story: any, index: any) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-sm aspect-[3/2]">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* DTC Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-[10px] font-bold tracking-wider text-gray-700 uppercase">
                      {story.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-normal text-[#333] mb-4 leading-tight group-hover:text-[#001D3D] transition-colors">
                  {story.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  {story.description}
                </p>

                {/* Read Story Link */}
                <div className="mt-auto flex items-center text-sm font-semibold text-[#001D3D] hover:underline decoration-1 underline-offset-4">
                  Read story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#F3F3F3] font-sans">
        {/* --- LOGO SLIDER SECTION --- */}
        <section className="bg-[#F3F3F3] py-8 md:py-10 w-full overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4">
            <p className="text-center text-gray-500 mb-8 text-sm md:text-base font-light">
              Used by over 5K businesses worldwide
            </p>

            <div className="relative w-full">
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-[#F3F3F3] via-[#F3F3F3]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-[#F3F3F3] via-[#F3F3F3]/80 to-transparent z-10 pointer-events-none" />

              <div className="flex overflow-hidden">
                <motion.div
                  className="flex whitespace-nowrap gap-8 md:gap-12 items-center py-3"
                  animate={{ x: [0, -1500] }}
                  transition={{
                    repeat: Infinity,
                    duration: 55,
                    ease: "linear",
                  }}
                >
                  {duplicatedLogos.map((logo, idx) => (
                    <div key={idx} className="flex-shrink-0">
                      <img
                        src={logo}
                        alt="Partner Logo"
                        className="h-4 md:h-5 max-w-[90px] md:max-w-[110px] w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommonToAll;
