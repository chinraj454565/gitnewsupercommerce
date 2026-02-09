import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Content Column */}
        <div className="lg:w-2/3 z-10">
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
            Spree Commerce
          </p>
          <h1 className=" lg:text-5xl font-medium text-slate-900 leading-tight mb-6">
            Spree is an open-source <br />
            eCommerce framework <br />
            giving you full control and <br />
            customizability
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Community Edition is free. Enterprise Edition comes with more
            features, more security, more integrations. Go live faster and get
            all the latest improvements first.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="#"
              className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 transition-all"
            >
              Get started
            </Link>
            <Link
              href="#"
              className="bg-white border border-gray-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-sm"
            >
              See demo
            </Link>
          </div>

          {/* Trust Pilot / Users section */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-6">
            Used by over 5k businesses worldwide
          </p>

          {/* Running Company Logo Slider (Swiper) */}
          <div className="relative w-full overflow-hidden h-12">
            <div className="flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* These match the logos from your inspect code */}
              <img
                src="https://spreecommerce.org/wp-content/uploads/2024/07/mitchells.svg"
                alt="Mitchells"
                className="h-6"
              />
              <img
                src="https://spreecommerce.org/wp-content/uploads/2024/07/on-cloud.svg"
                alt="On Cloud"
                className="h-6"
              />
              <img
                src="https://spreecommerce.org/wp-content/uploads/2025/09/intellum.svg"
                alt="Intellum"
                className="h-6"
              />
              <img
                src="https://spreecommerce.org/wp-content/uploads/2025/09/ufc-ignite.svg"
                alt="UFC"
                className="h-6"
              />
              <img
                src="https://spreecommerce.org/wp-content/uploads/2024/07/godaddy.svg"
                alt="GoDaddy"
                className="h-6"
              />
            </div>
          </div>
        </div>

        {/* Right Floating "5" Column */}
        <div className="hidden lg:block absolute right-6 top-32 w-[200px]">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col items-start transition-transform hover:scale-105 cursor-pointer relative">
            <div className="absolute top-4 right-4 bg-[#dee7f0] p-2 rounded-lg">
              <img
                src="https://spreecommerce.org/wp-content/themes/spree/images/arrow-right-top.svg"
                alt="Link Arrow"
                className="w-6 h-6"
              />
            </div>
            <span className="text-[26px] text-[#4d79a7] font-light leading-none">
              Spree
            </span>
            <span className="text-[130px] font-semibold leading-none bg-gradient-to-b from-[#4d79a7] to-[#122b46] bg-clip-text text-transparent">
              5
            </span>
            <div className="text-[14px] font-bold leading-tight mt-2 text-[#0a1a2f]">
              The Biggest Release Ever
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
