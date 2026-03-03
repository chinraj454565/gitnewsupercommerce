import React from "react";
import Image from "next/image";
import CenteredHero from "@/components/reusablecomponent/CenteredHero";
import ProblemGrid from "@/components/reusablecomponent/ProblemGrid";
import FeatureSplit from "@/components/reusablecomponent/FeatureSplit";
import { CommonToAll } from "@/components/reusablecomponent";

const MultiStoreEcommerce = () => {
  const features = [
    {
      title: "Unique Storefront Experiences",
      description:
        "Tailor themes, messaging, products, and promotions to each brand or region.",
      image: "/dummy-storefront.png",
      isLarge: true,
    },
    {
      title: "Configurable Catalogs",
      description:
        "Share a master catalog or give stores control over their own products and inventory.",
      image: "/dummy-catalog.png",
      isLarge: true,
    },
    {
      title: "Cart Isolation",
      description: "Carts and checkouts are kept separate per store.",
      icon: "🛒",
    },
    {
      title: "Saved Customer Payment Methods",
      description:
        "Users can reuse payment methods across stores, providing a frictionless checkout experience for returning customers.",
      icon: "💳",
    },
    {
      title: "Independent Order Management",
      description:
        "Orders, returns, refunds, and shipments are store-specific by default.",
      icon: "📦",
    },
    {
      title: "Content & SEO Tools",
      description:
        "Each store has its own CMS pages, blogs, and metadata configuration.",
      icon: "🔍",
    },
  ];
  return (
    <>
      <CenteredHero
        label="Multi-Store eCommerce"
        title="Multi-Store eCommerce"
        description="Manage multiple storefronts from a single Spree admin with shared or isolated catalogs, customers, and payment methods."
      />
      <section className="bg-[#F3F3F3] py-16 px-4 md:px-10">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Side: Large, Wide Visual Block */}
          <div className="w-full lg:w-3/5 xl:w-2/3">
            <div className="bg-[#EAEAEA] border border-gray-100 rounded-lg shadow-sm relative overflow-hidden aspect-[16/10]">
              <Image
                src="/multi-store-ecommerce/secondSection.webp" // Replace with your actual wide diagram asset
                alt="Super Dashboard Admin Panel Diagram"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-2/5 xl:w-1/3 text-left">
            <h2 className="text-3xl md:text-3xl font-normal text-[#002147] leading-tight mb-8">
              Many Stores With One Admin Panel
            </h2>

            <p className="text-xl font-light text-[#4a4a4a] leading-relaxed mb-10 max-w-xl">
              Whether you’re managing multiple brands, regional sites, or
              B2C/B2B storefronts under one roof,
              <span className="font-medium text-[#002147]"> Super</span> makes
              it easy to scale your operations without duplicating
              infrastructure or effort.
            </p>

            <button className="bg-[#001429] text-white px-10 py-4 rounded-md font-medium text-base hover:bg-black transition-colors">
              See all Capabilities
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F3F3] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light text-[#002147] mb-6 tracking-tight">
            Centralized Admin Capabilities
          </h2>
          <p className="text-lg md:text-xl font-light text-[#4a4a4a] leading-relaxed mb-10 max-w-3xl mx-auto">
            Manage all your stores with ease. The Super admin gives you powerful
            controls for provisioning, configuring, and operating multi-store
            setups – all from one dashboard.
          </p>
          <button className="bg-[#001429] text-white px-8 py-4 rounded-md font-medium text-sm md:text-base hover:bg-black transition-all shadow-lg">
            See Admin Capabilities
          </button>
        </div>
      </section>
      {/* 3. Feature Grid Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-lg overflow-hidden bg-[#F3F3F3] backdrop-blur-sm">
          {/* Custom Domains */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="mb-6 text-2xl">🌐</div>
            <h3 className="text-xl font-semibold mb-4 text-[#333333]">
              Custom Domains & Theming
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Assign unique domains and brand them individually with separate
              themes and content.
            </p>
          </div>
          {/* Store-Specific Payments */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="mb-6 text-2xl">💳</div>
            <h3 className="text-xl font-semibold mb-4 text-[#333333]">
              Store-Specific Payment Options
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Share global payment methods or allow store-specific Stripe,
              PayPal, or other integrations.
            </p>
          </div>
          {/* Shipping & Fulfillment */}
          <div className="p-10">
            <div className="mb-6 text-2xl">📦</div>
            <h3 className="text-xl font-semibold mb-4 text-[#333333]">
              Shipping & Fulfillment Configs
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Define store-level shipping zones, carriers, and fulfillment
              logic.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F3F3]  px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Screenshot Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1 */}
            <div className="flex flex-col">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6 aspect-video relative">
                <Image
                  src="/multi-store-ecommerce/store-provisioning.webp"
                  alt="Store Provisioning UI"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-3">
                Store Provisioning
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Create and configure new stores in seconds, choosing what to
                share or isolate (e.g., products, customers, payment methods).
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6 aspect-video relative">
                <Image
                  src="/multi-store-ecommerce/storeprovisioning.webp"
                  alt="New Store Setup UI"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-3">
                Store Provisioning
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Create and configure new stores in seconds, choosing what to
                share or isolate (e.g., products, customers, payment methods).
              </p>
            </div>
          </div>

          {/* Middle Section: Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-gray-200 py-12 gap-y-12 md:gap-y-0">
            <div className="md:px-8 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <div className="mb-4 text-xl">✨</div>
              <h4 className="font-semibold text-[#333333] mb-3">
                Localized Settings
              </h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Apply language, currency, and tax logic per store.
              </p>
            </div>

            <div className="md:px-8 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <div className="mb-4 text-xl">⚙️</div>
              <h4 className="font-semibold text-[#333333] mb-3">
                Store-Specific Integrations
              </h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Configure analytics tools, pixels, or marketing services
                separately for each store to support unique brand or regional
                needs.
              </p>
            </div>

            <div className="md:px-8">
              <div className="mb-4 text-xl">📊</div>
              <h4 className="font-semibold text-[#333333] mb-3">
                Analytics & Reporting
              </h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Track performance per store with individual dashboards or
                unified multi-store reporting.
              </p>
            </div>
          </div>

          {/* Bottom Section: Footer CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-[#002147] mb-6">
              Storefront Capabilities
            </h2>
            <p className="text-lg md:text-xl font-light text-[#4a4a4a] leading-relaxed mb-10 max-w-3xl mx-auto">
              Each store functions like a standalone ecommerce site – customized
              and configured to serve unique markets, customer segments, or
              product lines.
            </p>
            <button className="bg-[#05192d] text-white px-10 py-4 rounded-md font-medium text-base hover:bg-black transition-all">
              See Admin Capabilities
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F3F3] py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Screenshot Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1: Unique Storefront Experiences */}
            <div className="flex flex-col">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6 aspect-video relative">
                <Image
                  src="/multi-store-ecommerce/unique1.webp"
                  alt="Unique Storefront Experiences"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-3">
                Unique Storefront Experiences
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Tailor themes, messaging, products, and promotions to each brand
                or region.
              </p>
            </div>

            {/* Card 2: Configurable Catalogs */}
            <div className="flex flex-col">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6 aspect-video relative">
                <Image
                  src="/multi-store-ecommerce/unique2.webp"
                  alt="Configurable Catalogs"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-3">
                Configurable Catalogs
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Share a master catalog or give stores control over their own
                products and inventory.
              </p>
            </div>
          </div>

          {/* Middle Section: Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-gray-200 py-12 gap-y-12 md:gap-y-0">
            {/* Feature 1: Cart Isolation */}
            <div className="md:px-8 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <div className="mb-4 text-xl">🛒</div>
              <h4 className="font-semibold text-[#333333] mb-3">
                Cart Isolation
              </h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Carts and checkouts are kept separate per store.
              </p>
            </div>

            {/* Feature 2: Saved Customer Payment Methods */}
            <div className="md:px-8 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <div className="mb-4 text-xl">💳</div>
              <h4 className="font-semibold text-[#333333] mb-3">
                Saved Customer Payment Methods
              </h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Users can reuse payment methods across stores, providing a
                frictionless checkout experience for returning customers.
              </p>
            </div>

            {/* Feature 3: Independent Order Management */}
            <div className="md:px-8 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <div className="mb-4 text-xl">📄</div>
              <h4 className="font-semibold text-[#333333] mb-3">
                Independent Order Management
              </h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Orders, returns, refunds, and shipments are store-specific by
                default.
              </p>
            </div>

            {/* Feature 4: Content & SEO Tools */}
            <div className="md:px-8">
              <div className="mb-4 text-xl">📊</div>
              <h4 className="font-semibold text-[#333333] mb-3">
                Content & SEO Tools
              </h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Each store has its own CMS pages, blogs, and metadata
                configuration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiStoreEcommerce;

//multi-store-ecommerce/secondSection.webp
