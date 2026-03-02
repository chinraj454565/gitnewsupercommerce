"use client";

import { AlertTriangle } from "lucide-react";

type ProblemItem = {
  title: string;
  description: string;
};

type ProblemGridProps = {
  label?: string;
  heading: string;
  items: ProblemItem[];
};

const ProblemGrid = ({ label, heading, items }: ProblemGridProps) => {
  return (
    <section className="w-full bg-black text-white  md:py-10">
      {" "}
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        {label && (
          <p className="text-xs md:text-sm tracking-widest uppercase text-slate-400 mb-6 font-semibold">
            {label}
          </p>
        )}

        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-4xl mx-auto mb-16">
          {heading}
        </h2>

        {/* Grid */}
        <div className="grid gap-14 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-6">
                <AlertTriangle
                  className="w-8 h-8 text-white/80"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemGrid;
