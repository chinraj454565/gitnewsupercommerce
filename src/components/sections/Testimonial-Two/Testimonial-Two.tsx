import React from "react";

const features = [
  {
    title: "B2B eCommerce",
    desc: "Sell high-value items or wholesale in a custom purchasing flow with customer segmentation, RFQs, order and payment adjustments and post-purchase support.",
    img: "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-B2B-eCommerce.webp",
  },
  {
    title: "Marketplace eCommerce",
    desc: "Onboard vendors to sync their products. Merchandise your marketplace with product categorization, unified filters, product labels. Split multi-vendor orders for dropshipping.",
    img: "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-Multi-vendor-Marketplace.webp",
  },
  {
    title: "Multi-tenant eCommerce",
    desc: "Host thousands of stores as a stand-alone white-label SaaS or composable micro-service integrated with your existing systems.",
    img: "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-Multi-tenant-White-label-eCommerce-Platform.webp",
  },
  {
    title: "Multi-store eCommerce",
    desc: "Enable multiple brands, customers or resellers to run separate stores with centralized or separate product catalogs.",
    img: "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-Multi-store-storefront.webp",
  },
  {
    title: "Multi-region eCommerce",
    desc: "Sell in multiple regions or countries, in any language, any currency, any payment method or shipping provider.",
    img: "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-multi-region-multi-country-eCommerce.webp",
  },
  {
    title: "Headless eCommerce API",
    desc: "Connect Spree to your ecosystem in an API-first mode to power custom shopping experiences with your WMS, ERP, or CRM.",
    img: "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-Composable-Headless-eCommerce.webp",
  },
];

const TestimonialTwo = () => {
  return (
    <>
      <section className="w-full bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-20">
            This is what you can build with Spree
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
            {features.map((item, index) => (
              <div key={index} className="text-left">
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-contain"
                />

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                  <span className="ml-1">→</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F3F4F6] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-2xl lg:text-4xl text-[#0B192E] mb-10 tracking-tight">
            Spree success stories
          </h2>
          <button className="bg-[#0B192E] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all">
            See all Stories
          </button>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;
