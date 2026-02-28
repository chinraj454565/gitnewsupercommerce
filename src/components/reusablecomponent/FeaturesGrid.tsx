import React from "react";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

export const FeaturesGrid = ({ features }: { features: Feature[] }) => (
  <section className="bg-[#F3F3F3] py-20 px-6 md:px-12 font-sans">
    <div className="max-w-7xl mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-6 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
              <Check className="w-5 h-5 text-blue-500 stroke-[3px]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-normal text-[#333] mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg px-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
