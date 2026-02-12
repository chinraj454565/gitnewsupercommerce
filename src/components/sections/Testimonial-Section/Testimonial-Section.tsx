import React from "react";
import ImageContent from "./component/ImageContent";
import ImageContentSecond from "./component/ImageContentSecond";

const Testimonial = () => {
  const contentData = [
    {
      title: "Storefront customization",
      description:
        "Easily customize your homepage, product listings and product detail pages. Use the default storefront or connect your own next.js frontend application.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/home-storefront-1024x632.png.webp",
      imageAlt: "Storefront preview",
      isWide: false,
    },
    {
      title: "Multi-region & Multi-store",
      description:
        "Manage unlimited products and variants individually or in bulk. Categorize, label, add custom attributes. Generate gift cards or discounts with a robust promo rule engine",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-multi-region-1024x431-1.webp",
      imageAlt: "Multi-store dashboard",
      isWide: true,
    },
  ];

  const contentData2 = [
    {
      title: "Cart & Checkout",
      description:
        "Customize checkout to reflect your business logic. Style it to be on-brand. Manage shipping and taxes calculations. Enable fast checkout with Apple Pay or Google Pay.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-cart-checkout-1024x431-1.webp",
      imageAlt: "Checkout interface preview",
      isWide: true,
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
      isWide: true,
    },
  ];

  const secondContentData = [
    {
      title: "Inventory management",
      description:
        "Manage stock levels across sales channels and locations. Track stock movements, receive stock, make transfers. Make products available or discontinued on a given date.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-inventory-management-1024x431-1.webp",
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
        "Connect spree to any custom user interface eg. a Next.js storefront or a mobile app. Integrate spree with any system using APIs or webhooks, eg. WMS, ERP, CRM.",
      imageSrc:
        "https://spreecommerce.org/wp-content/uploads/2025/12/Spree-Commerce-open-source-eCommerce-Ecommerce-headless-API-1024x431-1.webp",
      imageAlt: "API and integrations code and cart preview",
      reverse: false,
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f5f5f5]">
      {/* Header Section */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16 lg:mb-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6b7280] mb-5 sm:mb-6">
          SOLUTION
        </p>
        <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-light text-[#111827] leading-[1.2] mb-8 sm:mb-10 lg:mb-12 tracking-tight px-4">
        super is modular and customizable so you can build exactly{" "}
          <br className="hidden lg:block" />
          what you need
        </h2>
        <button className="bg-[#0f172a] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-[10px] font-semibold hover:bg-[#132c4d] hover:rounded-[28px] transition-all duration-300 text-[15px] sm:text-[16px] hover:bg-[#1e293b] transition-all shadow-sm">
          See all Features
        </button>
      </div>

      {/* Feature Cards Grid */}
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