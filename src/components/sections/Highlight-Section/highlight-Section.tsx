import React from "react";
import Link from "next/link";

const HighlightSection = () => {
  return (
    <section className="w-full bg-[#F7F7F6] pt-30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Small Label */}
        <p className="text-sm font-semibold tracking-widest text-gray-500 mb-4 uppercase">
          Bigger, Better, More
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        super 5: The Biggest Release Ever
        </h2>

        {/* Content */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          From no-code tools to enterprise-grade integrations — super 5 has
          everything your team needs to build, launch, and scale eCommerce
          faster.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mb-20 flex-wrap">
          <Link
            href="/spree-5"
            className="px-7 py-3 rounded-lg bg-slate-900 text-white font-semibold font-semibold hover:bg-[#132c4d] hover:rounded-[28px] transition-all duration-300 hover:bg-blue-800 transition"
          >
            Check out super 5
          </Link>

          <Link
            href="/demo"
            className="px-7 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold hover:bg-[#132c4d] hover:rounded-[28px] transition-all duration-300 font-semibold hover:bg-gray-200 transition"
          >
            See demo
          </Link>
        </div>

        {/* Feature Cards – super Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-left">
          {/* Card 1 */}
          <div>
            <img
              src="https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-new-admin-dashboard.webp"
              alt="Admin Dashboard"
              className="w-full object-contain"
            />

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              New Admin Dashboard Experience
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              A redesigned dashboard for faster, smarter day-to-day management.
              Your team will love it!
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src="https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-no-code-storefront-1.webp"
              alt="No Code Storefront"
              className="w-full object-contain"
            />

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              A No-code Customizable Storefront
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Mobile-first, built for content & conversion. Drag & drop sections
              — no developers needed.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <img
              src="https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-stripe-connect-klaviyo.webp"
              alt="Integrations"
              className="w-full object-contain"
            />

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Integrations with Stripe & Klaviyo
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              No-code integrations to manage payments, marketing automation, and
              analytics at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
