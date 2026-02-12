"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#F7F7F6] pt-20  overflow-hidden">
      {/* Container */}
      <div className="max-w-[1480px] mx-auto px-8">
        
        <div className="flex flex-col lg:flex-row relative">
          
          {/* Left Content */}
          <div className="w-full lg:w-[68%] z-10">
            
            {/* Label */}
            <p className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-6">
              super Commerce
            </p>

            {/* Heading */}
            <h1 className="text-[32px] md:text-[42px] lg:text-[54px] font-normal text-[#0a1a2f] leading-[1.15] mb-8 max-w-[820px]">
            super is an open-source eCommerce framework giving you full control and customizability
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 max-w-[720px] mb-12 leading-relaxed">
              Community Edition is free. Enterprise Edition comes with more features, more security, more integrations. Go live faster and get all the latest improvements first.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-3 sm:gap-4 mb-14 max-w-md">
              <Link
                href="#"
                className="flex-1 bg-[#0a1a2f] text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-[#132c4d] hover:rounded-[28px] transition-all duration-300 text-center text-[15px] sm:text-[16px]"
              >
                Get started
              </Link>

              <Link
                href="#"
                className="flex-1 bg-white border border-gray-200 text-[#0a1a2f] px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 hover:rounded-[28px] transition-all duration-300 text-center text-[15px] sm:text-[16px]"
              >
                See demo
              </Link>
            </div>

            {/* super 5 Card - Mobile (below buttons) */}
            <div className="block lg:hidden mb-12">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-[400px] relative">
                <div className="absolute top-4 right-4 bg-[#e6edf5] p-2 rounded-md">
                  <img
                    src="https://spreecommerce.org/wp-content/themes/spree/images/arrow-right-top.svg"
                    alt="Arrow"
                    className="w-4 h-4"
                  />
                </div>

                <span className="text-[24px] text-[#4d79a7] font-light">
                super
                </span>

                <div className="text-[120px] font-semibold leading-none bg-gradient-to-b from-[#4d79a7] to-[#122b46] bg-clip-text text-transparent">
                  5
                </div>

                <p className="text-sm font-bold text-[#0a1a2f] mt-2 leading-tight">
                  The Biggest <br /> Release Ever
                </p>
              </div>
            </div>

            {/* Used By */}
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">
              Used by over 5k businesses worldwide
            </p>

            {/* Logos Marquee */}
              <div className="relative w-full overflow-hidden mt-4">
                {/* Fade edges left & right */}
                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, #F7F7F6, transparent)' }} />
                <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to left, #F7F7F6, transparent)' }} />

                <div className="flex items-center logo-marquee" style={{ width: 'max-content' }}>
                  {[...Array(2)].map((_, setIndex) => (
                    <div
                      key={setIndex}
                      className="flex items-center shrink-0"
                      style={{ gap: '80px', paddingRight: '80px' }}
                    >
                      {[
                        {
                          src: "https://spreecommerce.org/wp-content/uploads/2024/07/mitchells.svg",
                          alt: "Mitchells",
                          height: 22,
                        },
                        {
                          src: "https://spreecommerce.org/wp-content/uploads/2024/07/on-cloud.svg",
                          alt: "On Cloud",
                          height: 20,
                        },
                        {
                          src: "https://spreecommerce.org/wp-content/uploads/2024/07/godaddy.svg",
                          alt: "GoDaddy",
                          height: 24,
                        },
                        {
                          src: "https://spreecommerce.org/wp-content/uploads/2025/12/Square_logo-small.svg",
                          alt: "Square",
                          height: 20,
                        },
                        {
                          src: "https://spreecommerce.org/wp-content/uploads/2024/07/bonobos.svg",
                          alt: "Bonobos",
                          height: 20,
                        },
                        {
                          src: "https://spreecommerce.org/wp-content/uploads/2024/07/bookshop.svg",
                          alt: "Bookshop",
                          height: 22,
                        },
                        {
                          src: "https://spreecommerce.org/wp-content/uploads/2024/07/goop.svg",
                          alt: "Goop",
                          height: 22,
                        },
                        {
                          src: "https://spreecommerce.org/wp-content/uploads/2024/07/huckberry.svg",
                          alt: "Huckberry",
                          height: 20,
                        },
                        {
                          src: "https://spreecommerce.org/wp-content/uploads/2024/07/kfc.svg",
                          alt: "KFC",
                          height: 28,
                        },
                      ].map((logo, i) => (
                        <img
                          key={i}
                          src={logo.src}
                          alt={logo.alt}
                          style={{ height: `${logo.height}px`, width: 'auto' }}
                          className="opacity-40 grayscale object-contain shrink-0"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
          </div>

          {/* super 5 Card - Desktop (absolute positioned on right) */}
          <div className="hidden lg:block absolute right-[120px] top-[120px] xl:right-[80px]">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm w-[230px] relative">
              <div className="absolute top-4 right-4 bg-[#e6edf5] p-2 rounded-md">
                <img
                  src="https://spreecommerce.org/wp-content/themes/spree/images/arrow-right-top.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </div>

              <span className="text-[24px] text-[#4d79a7] font-light">
              super
              </span>

              <div className="text-[120px] font-semibold leading-none bg-gradient-to-b from-[#4d79a7] to-[#122b46] bg-clip-text text-transparent">
                5
              </div>

              <p className="text-sm font-bold text-[#0a1a2f] mt-2 leading-tight">
                The Biggest <br /> Release Ever
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;