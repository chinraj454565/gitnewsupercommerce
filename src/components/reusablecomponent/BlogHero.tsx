import React from "react";

interface BlogHeroProps {
  title: string;
  subtitle: string;
}

const BlogHero = ({ title, subtitle }: BlogHeroProps) => {
  return (
    <section className="bg-[#F3F3F3] pt-16 pb-8 px-4 text-center">
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">
        Blog
      </p>
      <h1 className="text-3xl md:text-4xl font-light text-[#1A2B49] mb-4">
        {title.replace(/Spree/gi, "Super")}
      </h1>
      <p className="text-sm text-gray-600 max-w-2xl mx-auto">
        {subtitle.replace(/Spree/gi, "Super")}
      </p>
    </section>
  );
};

export default BlogHero;
