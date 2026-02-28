"use client";
import React from "react";
import { motion } from "framer-motion";

export const LogoSlider = ({ logos }: { logos: string[] }) => {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
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
              transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
            >
              {duplicatedLogos.map((logo, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <img
                    src={logo}
                    alt="Partner"
                    className="h-4 md:h-5 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
