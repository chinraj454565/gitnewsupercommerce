import React from "react";
import { ArrowRight } from "lucide-react";

interface Story {
  title: string;
  description: string;
  tag: string;
  img: string;
}

export const SuccessStories = ({ stories }: { stories: Story[] }) => (
  <section className="bg-[#F3F3F3] py-20 px-6 md:px-12 font-sans">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light text-[#001D3D] text-center mb-16">
        Super Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            <div className="relative mb-6 overflow-hidden rounded-sm aspect-[3/2]">
              <img
                src={story.img}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                <span className="text-[10px] font-bold tracking-wider text-gray-700 uppercase">
                  {story.tag}
                </span>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-normal text-[#333] mb-4 group-hover:text-[#001D3D] transition-colors">
              {story.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
              {story.description}
            </p>
            <div className="mt-auto flex items-center text-sm font-semibold text-[#001D3D] hover:underline decoration-1 underline-offset-4">
              Read story <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
