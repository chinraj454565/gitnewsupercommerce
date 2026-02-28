"use client";
import React from "react";
import { AlertTriangle, TriangleAlert, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CommonToAll } from "../../../components/reusablecomponent/index";

const OmnichannelSection = () => {
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
  const stories = [
    {
      title:
        "Ratio Clothing uses Spree Commerce for its online platform with customized shirts and a machine learning fitting algorithm",
      description:
        "Ratio Clothing uses Spree Commerce for its online platform with customized shirts and a machine learning fitting algorithm.",
      tag: "DTC",
      img: "https://spreecommerce.org/wp-content/uploads/2024/07/Ratio-Clothing-uses-Spree-Commerce-for-its-online-platform-with-customized-shirts-and-a-machine-learning-fitting-algorithm-1024x512.png.webp",
    },
    {
      title:
        "300-year-old luxury retailer Fortnum & Mason gets 20% more customers with Spree Commerce",
      description:
        "Fortnum & Mason chose Spree for its fully responsive eCommerce site to ensure that online customers enjoy the same high quality experience that the brand has been providing in store for over 300 years.",
      tag: "DTC",
      img: "https://spreecommerce.org/wp-content/uploads/2024/07/300-year-old-luxury-retailer-Fortnum-Mason-gets-20-more-customers-with-Spree-Commerce-site-1024x682.png.webp",
    },
    {
      title:
        "Mitchells chose Spree for their luxury fashion eCommerce store with human touch",
      description:
        "Mitchells sets the example here with their Spree based eCommerce platform that provides their customers with exquisite user experience. This way they feel welcome, valued and appreciated at every click just like they do when visiting Mitchells brick and mortar stores.",
      tag: "DTC",
      img: "https://spreecommerce.org/wp-content/uploads/2024/07/Mitchells-chose-Spree-for-their-luxury-fashion-eCommerce-store-with-human-touch-1024x683-1.webp",
    },
    {
      title:
        "Huckberry redefines eCommerce for the outdoor adventurers with Spree, storytelling and data-driven marketing",
      description:
        "Huckberry, which is described as equal parts store, magazine and inspiration, was founded by friends Andy Forch and Richard Greiner in 2011. They wanted to create a shopping and lifestyle experience for young men who live in the city but have a passion for the outdoors.",
      tag: "DTC",
      img: "https://spreecommerce.org/wp-content/uploads/2024/07/Huckberry-redefines-eCommerce-for-the-outdoor-adventurers-with-Spree-storytelling-and-data-driven-marketing-1024x438-1.webp",
    },
  ];
  const features = [
    {
      title: "PoS and online payments",
      description:
        "Switch to Square payment terminals for your PoS locations and use it for Spree-driven online sales B2C or B2B.",
    },
    {
      title: "Delightful shopping",
      description:
        "Delight your customers with shopping incentives and promotions, delivery options, and post-purchase care.",
    },
    {
      title: "Growth insights",
      description:
        "Draw insights on customer shopping habits and offer incentives stimulating repeat buying and increasing average order value across channels.",
    },
  ];
  return (
    <>
      <div className="font-sans">
        {/* --- Omnichannel Hero Section --- */}
        <section className="bg-[#F3F3F3] py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
              A Unified Customer Experience
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-[#001D3D] mb-4">
              Omnichannel eCommerce
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Unify your customer experience across all shopping channels
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="bg-[#001D3D] text-white px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all">
                Get started
              </button>
              <button className="bg-white border border-gray-200 text-[#001D3D] px-8 py-3 rounded-md font-bold hover:bg-gray-50 transition-all">
                See demo
              </button>
            </div>

            {/* Square Partnership Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row text-left max-w-5xl mx-auto">
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-6">
                  In Partnership With:
                </p>
                <div className="flex items-center gap-2 mb-6">
                  {/* Square Logo Placeholder */}
                  <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white rounded-xs"></div>
                  </div>
                  <span className="text-2xl font-bold text-black tracking-tight">
                    Square
                  </span>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  An omnichannel payments provider
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Manage and streamline operations across multiple locations,
                  sales channels, and employees to improve efficiency and your
                  bottom line.
                </p>
              </div>
              <div className="md:w-1/2 bg-black flex items-center justify-center p-6">
                {/* Dummy Image for POS hardware */}
                <img
                  src="https://spreecommerce.org/wp-content/uploads/2024/07/omnichannel-ecommerce-header.webp"
                  alt="Omnichannel hardware"
                  className="w-full h-full object-contain max-h-[300px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Problem Statement Section --- */}
        <section className="bg-black text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[10px] font-bold tracking-[0.3em] text-white-400 uppercase mb-8">
              Problem Statement
            </p>
            <h2 className="text-2xl md:text-4xl font-light mb-16 leading-tight">
              You're selling in Point-of-Sale, online, wholesale with
              <br className="hidden md:block" /> 3 different payment processors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Legacy Solutions */}
              <div className="flex flex-col items-center">
                <AlertTriangle
                  className="w-6 h-6 text-gray-400 mb-6"
                  strokeWidth={1.5}
                />
                <h4 className="text-xl font-normal mb-4">Legacy solutions</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Each channel using a different legacy payments and sales
                  platform needs an overhaul
                </p>
              </div>

              {/* Out-of-sync */}
              <div className="flex flex-col items-center">
                <AlertTriangle
                  className="w-6 h-6 text-gray-400 mb-6"
                  strokeWidth={1.5}
                />
                <h4 className="text-xl font-normal mb-4">Out-of-sync</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  There is no central customer, order and insights dashboard
                  slowing your business down
                </p>
              </div>

              {/* Disjointed UX */}
              <div className="flex flex-col items-center">
                <AlertTriangle
                  className="w-6 h-6 text-gray-400 mb-6"
                  strokeWidth={1.5}
                />
                <h4 className="text-xl font-normal mb-4">Disjointed UX</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No unified cross-channel shopping, delivery, post-purchase
                  experience
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#F3F3F3] py-16 px-6 md:px-12 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-5xl font-light text-[#001D3D] text-center mb-12 md:mb-20 leading-tight">
            Sell in any channel delighting your
            <br className="hidden md:block" /> customers in all channels
          </h2>
        </div>
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {/* Feature 1: One payment processor */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 max-w-md">
              <h3 className="text-2xl md:text-3xl font-medium text-[#001D3D] mb-4">
                One payment processor
              </h3>
              <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                Use Square for PoS and all online payments for a unified
                experience and centralized orders and payments management.
              </p>
              <button className="bg-[#001D3D] text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all">
                Get started
              </button>
            </div>
            <div className="order-1 lg:order-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <img
                src="https://spreecommerce.org/wp-content/uploads/2024/07/omnichannel-ecommerce-payment-1024x575.webp"
                alt="One payment processor UI"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>

          {/* Feature 2: Cross-channel shopping (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <img
                src="https://spreecommerce.org/wp-content/uploads/2024/07/omnichannel-ecommerce-cross-1024x575.webp"
                alt="Cross-channel shopping UI"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
            <div className="max-w-md lg:ml-auto">
              <h3 className="text-2xl md:text-3xl font-medium text-[#001D3D] mb-4">
                Cross-channel shopping
              </h3>
              <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                Customers buy in-store but get orders delivered. Order online
                but choose in-store pick-up. Re-ordering and post-purchase
                service across all channels.
              </p>
              <button className="bg-[#001D3D] text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all">
                Get started
              </button>
            </div>
          </div>

          {/* Feature 3: Centralized management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 max-w-md">
              <h3 className="text-2xl md:text-3xl font-medium text-[#001D3D] mb-4">
                Centralized management
              </h3>
              <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                Manage products, orders, payments across all channels. Get
                omnichannel insights to drive loyalty with discounts or gift
                cards wherever you sell.
              </p>
              <button className="bg-[#001D3D] text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all">
                Get started
              </button>
            </div>
            <div className="order-1 lg:order-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <img
                src="https://spreecommerce.org/wp-content/uploads/2024/07/omnichannel-ecommerce-centralized-1024x575.webp"
                alt="Centralized management dashboard"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>

          {/* Footer Banner */}
          <div className="text-center pt-16 border-t border-gray-200">
            <p className="uppercase text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-6">
              What you get
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-[#001D3D] mb-6">
              Centrally managed omnichannel sales & loyalty
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Use Super commerce for online sales with Square payments online
              and in every Point-of-Sale to drive sales and build loyalty
            </p>
          </div>
        </div>
      </section>
      <CommonToAll features={features} stories={stories} />
    </>
  );
};

export default OmnichannelSection;
