"use client";

import { useState } from "react";

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "ANALYTICS",
    "ERP",
    "MARKETING TOOLS",
    "PAYMENT",
    "SEARCH",
    "SHIPPING",
    "STOREFRONT",
    "SUBSCRIPTIONS",
    "TAXES",
    "WEBHOOKS"
  ];

  return (
    <div className="min-h-screen ">
      <div className="pt-12 md:pt-20 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal text-gray-900 mb-4 md:mb-6 leading-tight">
            Super Commerce Integrations
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mb-6 md:mb-8 leading-relaxed">
            Browse and explore below Super Commerce integrations in multiple categories. Contact us to discuss custom integrations or integrating your solution with SuperSuper.
          </p>

          <div className="relative mt-8">
            <div className="flex items-center gap-2">
              <button
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors flex-shrink-0 cursor-pointer"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex-1 overflow-x-auto">
              <div className="flex gap-2 pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-[10px] rounded-md sm:text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      activeCategory === category
                        ? "bg-[#122033] text-white"
                        : "bg-white text-gray-700  hover:bg-[#122033] rounded-md hover:text-white hover:rounded-[20px]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              </div>

              <button
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors flex-shrink-0 cursor-pointer"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-3 md:mb-4 text-center leading-tight">
            Integrations available through Segment
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto text-center mb-8 md:mb-12 leading-relaxed px-4">
          Super together with Segment.com allow you to collect and unify user-centric data and easily leverage over 200 marketing automation, referral, email, A/B testing, live chat, advanced analytics, CRM, helpdesk and data warehouse tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:rounded-[28px]">
              <div className="flex items-start justify-between">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 pr-4">
                  Browse integrations list
                </h3>
                <div className="w-10 h-10 bg-[#E8E9EB] rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:rounded-[28px]">
              <div className="flex items-start justify-between">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 pr-4">
                  Browse integrations list
                </h3>
                <div className="w-10 h-10 bg-[#E8E9EB] rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors  flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}