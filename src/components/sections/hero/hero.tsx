"use client";

import React from "react";
import Link from "next/link";
import { Swiper ,SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode  } from "swiper/modules";

import "swiper/css";


const Hero = () => {
  return (
    <section className="relative w-full bg-white pt-32 pb-28 overflow-hidden">

      {/* WIDER container like original */}
      <div className="max-w-[1480px] mx-auto px-8 flex relative">

        {/* Left Content */}
        <div className="w-[68%] z-10">

          {/* Label */}
          <p className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-6">
            Spree Commerce
          </p>

          {/* Heading (NO <br/>) */}
          <h1 className="text-[54px] font-normal text-[#0a1a2f] leading-[1.15] mb-8 max-w-[820px]">
            Spree is an open-source eCommerce framework giving you full control
            and customizability
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-[720px] mb-12 leading-relaxed">
            Community Edition is free. Enterprise Edition comes with more
            features, more security, more integrations. Go live faster and get
            all the latest improvements first.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-14">

            <Link
              href="#"
              className="bg-[#0a1a2f] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#132c4d] transition"
            >
              Get started
            </Link>

            <Link
              href="#"
              className="bg-white border border-gray-200 text-[#0a1a2f] px-7 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              See demo
            </Link>

          </div>

          {/* Used By */}
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">
            Used by over 5k businesses worldwide
          </p>

          {/* Logos Marquee */}
<div className="relative w-full overflow-hidden h-10 mt-2">

<div className="flex animate-marquee items-center gap-[56px] opacity-40 whitespace-nowrap">

  {/* First Set */}
  {[
    "mitchells",
    "on-cloud",
    "godaddy",
    "square_logo-small",
    "bonobos",
    "bookshop",
    "goop",
    "huckberry",
    "kfc",
  ].map((item, i) => (
    <img
      key={i}
      src={
        item === "square_logo-small"
          ? "https://spreecommerce.org/wp-content/uploads/2025/12/Square_logo-small.svg"
          : `https://spreecommerce.org/wp-content/uploads/2024/07/${item}.svg`
      }
      alt={item}
      className="h-5"
    />
  ))}

  {/* Duplicate Set (IMPORTANT for infinite) */}
  {/* {[
    "mitchells",
    "on-cloud",
    "intellum",
    "ufc-ignite",
    "godaddy",
    "square_logo-small",
    "bonobos",
    "bookshop",
    "goop",
    "huckberry",
    "kfc",
  ].map((item, i) => (
    <img
      key={`dup-${i}`}
      src={
        item === "square_logo-small"
          ? "https://spreecommerce.org/wp-content/uploads/2025/12/Square_logo-small.svg"
          : `https://spreecommerce.org/wp-content/uploads/2024/07/${item}.svg`
      }
      alt={item}
      className="h-5"
    />
  ))} */}

</div>
</div>



        </div>

        {/* RIGHT Spree 5 Card (Exact Position) */}
        <div className="absolute right-[120px] top-[120px]">

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm w-[230px] relative">

            <div className="absolute top-4 right-4 bg-[#e6edf5] p-2 rounded-md">
              <img
                src="https://spreecommerce.org/wp-content/themes/spree/images/arrow-right-top.svg"
                alt="Arrow"
                className="w-4 h-4"
              />
            </div>

            <span className="text-[24px] text-[#4d79a7] font-light">
              Spree
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
    </section>
  );
};

export default Hero;
