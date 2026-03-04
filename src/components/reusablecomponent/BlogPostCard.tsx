import React from "react";
import { ArrowRight } from "lucide-react";

interface BlogPostProps {
  category: string;
  date: string;
  title: string;
}

const BlogPostCard = ({ category, date, title }: BlogPostProps) => {
  // Replace Spree with Super
  const displayTitle = title.replace(/Spree/gi, "Super");

  return (
    <div className="bg-[#F3F3F3] p-6 border border-gray-100 flex flex-col justify-between h-full hover:shadow-sm transition-shadow">
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 px-2 py-1 border border-gray-200 rounded">
            {category}
          </span>
          <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
            {date}
          </span>
        </div>
        <h3 className="text-xl font-light leading-tight text-[#1A2B49] mb-8">
          {displayTitle}
        </h3>
      </div>
      <a
        href="#"
        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group"
      >
        Read more{" "}
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  );
};

export default BlogPostCard;
