import React from "react";
import { MoveRight } from "lucide-react";

interface BlogCardProps {
  category: string;
  date: string;
  title: string;
  href?: string;
}

const BlogCard = ({ category, date, title, href = "#" }: BlogCardProps) => {
  // Logic to swap Spree with Super in the title
  const displayTitle = title.replace(/Spree/gi, "Super");

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-gray-200">
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="bg-[#F3F3F3] text-[10px] font-bold uppercase px-3 py-1 rounded-full text-gray-700">
            {category}
          </span>
          <span className="text-[10px] uppercase text-gray-400 font-medium">
            {date}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-light text-[#1A2B49] leading-tight mb-8">
          {displayTitle}
        </h3>
      </div>

      <a
        href={href}
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A2B49] group"
      >
        Read more
        <MoveRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  );
};

export default BlogCard;
