import React from "react";
import { default as ImageContent } from "./component/ImageContent";
import { default as ImageContentSecond } from "./component/ImageContentSecond";

const Testimonial = () => {
  const contentData = [
    {
      title: "Storefront customization",
      description:
        "Easily customize your homepage, product listings and product detail pages. Use the default storefront or connect your own next.js frontend application.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/home-storefront-1024x632.png.webp",
      imageAlt: "Storefront preview",
      isWide: false, // Normal width
    },
    {
      title: "Multi-region & Multi-store",
      description:
        "Manage unlimited products and variants individually or in bulk. Categorize, label, add custom attributes. Generate gift cards or discounts with a robust promo rule engine",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-multi-region-1024x431-1.webp",
      imageAlt: "Multi-store dashboard",
      isWide: true, // Takes up more space
    },
  ];
  const contentData2 = [
    {
      title: "Cart & Checkout",
      description:
        "Customize checkout to reflect your business logic. Style it to be on-brand. Manage shipping and taxes calculations. Enable fast checkout with Apple Pay or Google Pay.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-cart-checkout-1024x431-1.webp", // Update with actual URL if different
      imageAlt: "Checkout interface preview",
      isWide: true, // Based on image 1a41a6.jpg layout
    },
    {
      title: "Payments & Refunds",
      description:
        "Capture payments with cards, Apple Pay, Google Pay, BNPL, local bank transfers and redirects, on terms. Use one or multiple payment processors. Automate refunds.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-payments-1024x632-1.webp",
      imageAlt: "Payment dashboard preview",
      isWide: false,
    },
  ];

  const contentData3 = [
    {
      title: "Order Fulfillment",
      description:
        "Manage shipping across regions and warehouses. Use any shipping provider or aggregator. Track shipments in real time with email notifications for customers.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-order-fulfillment-1024x630-1.webp",
      imageAlt: "Shipping tracking preview",
      isWide: false,
    },
    {
      title: "Emails & Marketing Automations",
      description:
        "Customize on-brand email notifications for customers around any order-related events. Automate post-purchase upselling, eg. abandoned cart emails or other scenarios.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-emails-1024x431-1.webp",
      imageAlt: "Marketing automation preview",
      isWide: true, // Based on image 1a4226.jpg layout
    },
  ];
  const secondContentData = [
    {
      title: "Inventory management",
      description:
        "Manage stock levels across sales channels and locations. Track stock movements, receive stock, make transfers. Make products available or discontinued on a given date.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-inventory-management-1024x431-1.webp", // Use your actual URL
      imageAlt: "Inventory management dashboard preview",
      reverse: false,
    },
  ];

  const secondContentData2 = [
    {
      title: "Order & Return management",
      description:
        "Manage orders via admin dashboard or rely on automated order processing. Use order splitting by vendor in a dropshipping model. Support partial or full returns and exchanges.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-order-return-1024x431-1.webp",
      imageAlt: "Order and return management dashboard",
      reverse: false,
    },
  ];

  const secondContentData3 = [
    {
      title: "API & Integrations",
      description:
        "Connect Spree to any custom user interface eg. a Next.js storefront or a mobile app. Integrate Spree with any system using APIs or webhooks, eg. WMS, ERP, CRM.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-Ecommerce-headless-API-1024x431-1.webp",
      imageAlt: "API and integrations code and cart preview",
      reverse: false, // Set to true if you want text on the right
    },
  ];
  return (
    <section className="w-full py-24 bg-[#f9fafb] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">
            Solution
          </p>
          <h2 className="text-[20px] lg:text-[28px] font-semibold text-[#0f172a] leading-tight mb-10 tracking-tight">
            Spree is modular and customizable so you can build exactly{" "}
            <br className="hidden lg:block" />
            what you need
          </h2>
          <button className="bg-[#0a1a2f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-black transition-all">
            See all Features
          </button>
        </div>

        {/* Feature Cards Grid */}
      </div>
      <ImageContent items={contentData} />
      <ImageContentSecond items={secondContentData} />
      <ImageContent items={contentData2} />
      <ImageContentSecond items={secondContentData2} />
      <ImageContent items={contentData3} />
      <ImageContentSecond items={secondContentData3} />
    </section>
  );
};

export default Testimonial;
