"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Story {
  title: string;
  description: string;
  tag: string;
  img: string;
  tagNumber?: string;
}

const CATEGORIES = [
  "All",
  "Retail & Fashion",
  "Food & Drink",
  "Electronics",
  "Automotive",
  "Sports",
  "Marketplace",
  "B2B eCommerce",
  "Subscription",
];

export const SuccessStories = ({ stories }: { stories: Story[] }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? stories
      : stories.filter((s) => s.tag === activeCategory);

  return (
    <section className="bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-6">
        <h1 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-3">
          Success Stories
        </h1>
        <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
          Some incredibly successful businesses use Super Commerce in a number
          of industries. Read on to see the talented people who made it happen!
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filtered.map((story, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-sm aspect-[16/9] bg-gray-100">
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {story.tagNumber && (
                  <div className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {story.tagNumber}
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-[15px] font-semibold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#555] transition-colors">
                {story.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                {story.description}
              </p>
              <div className="mt-auto flex items-center text-xs font-semibold text-[#1a1a1a] hover:underline underline-offset-2 gap-1">
                Read story <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};