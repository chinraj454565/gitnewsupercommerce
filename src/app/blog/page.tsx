"use client";

import React, { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Info } from "lucide-react";

// --- Data ---
const NAV_ITEMS = [
  { label: "All", active: true },
  { label: "B2B Ecommerce" },
  { label: "Ecommerce AI" },
  { label: "Integrations" },
  { label: "Multi-tenant White-label eCommerce Platform" },
  { label: "Multi-vendor Marketplace" },
  { label: "Next.js eCommerce" },
  { label: "Open-source Ecommerce" },
  { label: "Ruby on Rails eCommerce" },
  { label: "Super Commerce" },
  { label: "Uncategorized" },
];

const BLOG_POSTS = [
  {
    category: "OPEN-SOURCE ECOMMERCE",
    date: "FEBRUARY 24, 2026",
    title:
      "Super Commerce Licensing: BSD-3-Clause Open Source with Commercial and Enterprise Options",
  },
  {
    category: "B2B ECOMMERCE",
    date: "FEBRUARY 12, 2026",
    title:
      "Multi-Store eCommerce: How B2B Businesses Are Expanding into B2C Without Doubling Their Infrastructure",
  },
  {
    category: "OPEN-SOURCE ECOMMERCE",
    date: "FEBRUARY 17, 2026",
    title: "Build Custom eCommerce Faster: In-House Teams Meet Super Experts",
  },
  {
    category: "MULTI-VENDOR MARKETPLACE",
    date: "FEBRUARY 17, 2026",
    title:
      "Building a Multi-Vendor Marketplace with Super Commerce Open Source",
  },
  {
    category: "NEXT.JS ECOMMERCE",
    date: "FEBRUARY 16, 2026",
    title:
      "Super Commerce API v3 & the Next.js Storefront Starter for Amazing Shopping Experiences",
  },
  {
    category: "OPEN-SOURCE ECOMMERCE",
    date: "FEBRUARY 16, 2026",
    title:
      "Ship Faster with Super: Meet Our MCP Server for AI-Assisted Development",
  },
];

export default function BlogPage() {
  // 1. Create a reference for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 2. Function to handle scrolling
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="bg-[#F3F3F3] min-h-screen font-sans selection:bg-blue-100">
      <div className="max-w-[1440px] mx-auto border-x border-gray-200">
        {/* Navigation Section */}
        <section className="px-6 md:px-12 py-12 border-b border-gray-200">
          <h1 className="text-5xl md:text-6xl font-light text-[#1A2B49] mb-10">
            Blog
          </h1>

          <div className="flex items-center gap-4">
            {/* Scrollable Wrapper with Ref */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-x-auto no-scrollbar scroll-smooth"
            >
              <div className="flex items-center py-1">
                {NAV_ITEMS.map((item, idx) => (
                  <div key={idx} className="shrink-0 mr-2">
                    <a
                      href="#"
                      className={`block px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider border rounded-md transition-all ${
                        item.active
                          ? "bg-[#0F172A] text-white border-[#0F172A]"
                          : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Navigation Arrows */}
            <div className="flex gap-2 shrink-0 ml-4">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 border border-gray-200 bg-white rounded-md hover:bg-gray-50 text-gray-400 transition-colors active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 border border-gray-200 bg-white rounded-md hover:bg-gray-50 text-[#1A2B49] transition-colors active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="px-6 md:px-12 py-12 border-b border-gray-200">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
            Featured
          </p>
          <h2 className="text-4xl font-light text-[#1A2B49] mb-10">
            This week's featured post
          </h2>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row shadow-sm min-h-[480px]">
            <div className="lg:w-1/2 bg-gradient-to-br from-white to-gray-50 p-12 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 text-center">
              <p className="text-sm text-gray-400 mb-2">Introducing</p>
              <p className="text-6xl md:text-7xl font-light text-[#1A2B49] mb-8">
                Super 5.3
              </p>
              <div className="flex items-center justify-center gap-2 grayscale opacity-50">
                <div className="w-6 h-6 bg-[#1A2B49] rounded-sm" />
                <span className="font-bold text-xl tracking-tighter text-[#1A2B49]">
                  super
                </span>
              </div>
            </div>

            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 px-3 py-1.5 border border-gray-200 rounded-full">
                  OPEN-SOURCE ECOMMERCE
                </span>
                <span className="text-[10px] text-gray-400 font-medium uppercase">
                  JANUARY 27, 2026
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-[#1A2B49] leading-tight mb-10">
                Announcing Super Commerce 5.3 with Price Lists, Customer Groups
                and Events & Subscribers Engine
              </h3>
              <a
                href="#"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#1A2B49] group"
              >
                Read more{" "}
                <ArrowRight
                  size={18}
                  strokeWidth={3}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Blog Post Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-gray-200">
          {BLOG_POSTS.map((post, index) => (
            <div
              key={index}
              className="bg-[#F3F3F3] p-8 md:p-12 border-b border-gray-200 md:border-r last:border-r-0 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-3 py-1.5 border border-gray-200 rounded-full shadow-sm">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase pt-1">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light leading-tight text-[#1A2B49] mb-12 hover:underline hover:decoration-black transition-colors">
                  {post.title}
                </h3>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#1A2B49]"
              >
                Read more{" "}
                <ArrowRight
                  size={16}
                  strokeWidth={3}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
