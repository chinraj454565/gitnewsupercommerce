"use client";

type CenteredHeroProps = {
  label?: string;
  title: string;
  description: string;
  primaryText?: string;
  secondaryText?: string;
};

const CenteredHero = ({
  label,
  title,
  description,
  primaryText = "Get started",
  secondaryText = "See demo",
}: CenteredHeroProps) => {
  return (
    <section className="w-full bg-[#F3F3F3] py-12 md:py-21">
      {" "}
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow label */}
        {label && (
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-700 mb-6">
            {label}
          </p>
        )}
        {/* Title */}
        <h1 className="text-2xl md:text-6xl font-normal text-[#0B1F3A] leading-tight mb-6">
          {title}
        </h1>
        {/* Description */}
        <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          {description}
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary */}
          <button className="bg-[#0B1F3A] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#08172b] transition-colors">
            {primaryText}
          </button>

          {/* Secondary */}
          <button className="bg-gray-200 text-slate-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-300 transition-colors">
            {secondaryText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CenteredHero;
