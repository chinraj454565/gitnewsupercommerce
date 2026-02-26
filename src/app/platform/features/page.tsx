"use client";

import Link from "next/link";
import "./features-animations.css";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F6]">
      {/* Hero Section */}
      <div className="bg-[#F7F7F6] pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
              FEATURES
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-gray-900 mb-4 leading-tight">
          Super open-source eCommerce features
          </h1>
          
          <p className="text-base md:text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Own your tech stack. Build exactly what you want. Get full control and customizability.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="#"
              className="px-6 py-3 bg-[#1a1a1a] text-white rounded-md font-medium hover:bg-black hover:rounded-[28px] transition-colors text-sm"
            >
              Get started
            </Link>
            <Link
              href="#"
              className="px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-50 hover:rounded-[28px] transition-colors text-sm border border-gray-200"
            >
              See demo
            </Link>
          </div>

          {/* Brands Section */}
          <div className="mt-12">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">
              USED BY OVER 5K BUSINESSES WORLDWIDE
            </p>
            
            {/* Logos Marquee */}
            <div className="relative w-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #ECECEC, transparent)' }} 
              />
              <div 
                className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, #ECECEC, transparent)' }} 
              />

              <div className="flex items-center animate-scroll" style={{ width: 'max-content' }}>
                {[...Array(3)].map((_, setIndex) => (
                  <div
                    key={setIndex}
                    className="flex items-center shrink-0"
                    style={{ gap: '60px', paddingRight: '60px' }}
                  >
                    {[
                      {
                        src: "https://spreecommerce.org/wp-content/uploads/2024/07/huckberry.svg",
                        alt: "Huckberry",
                        height: 18,
                      },
                      {
                        src: "https://spreecommerce.org/wp-content/uploads/2024/07/godaddy.svg",
                        alt: "GoDaddy",
                        height: 20,
                      },
                      {
                        src: "https://spreecommerce.org/wp-content/uploads/2024/07/goop.svg",
                        alt: "Goop",
                        height: 18,
                      },
                      {
                        src: "https://spreecommerce.org/wp-content/uploads/2024/07/bonobos.svg",
                        alt: "Bonobos",
                        height: 16,
                      },
                    ].map((logo, i) => (
                      <img
                        key={i}
                        src={logo.src}
                        alt={logo.alt}
                        style={{ height: `${logo.height}px`, width: 'auto' }}
                        className="opacity-40 grayscale object-contain shrink-0"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Sections */}
      <div className="pb-20">
        {/* Storefront */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                  Storefront
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Easily customize your homepage, product listings and product detail pages. Use the default storefront or connect your own next.js frontend application.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200">
                <img
                  src="https://spreecommerce.org/wp-content/uploads/2024/07/features-storefront-1024x575.webp"
                  alt="Storefront"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Multi-store */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200">
                <img
                  src="https://spreecommerce.org/wp-content/uploads/2024/07/features-multistore-1024x575.webp"
                  alt="Multi-store"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                  Multi-store
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Enable your multiple brands, customer's or reseller's to run separate stores with centralized or separate product catalogs. Manage all stores from your admin panel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-country & Product catalog */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Multi-country */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2024/07/features-multicountry-1024x632.webp"
                    alt="Multi-country"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-3">
                  Multi-country
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Sell in multiple regions or countries, in any language, any currency, any payment method or shipping provider. Manage all shopping experiences in one admin panel.
                </p>
              </div>

              {/* Product catalog */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2024/07/features-product-catalog-1024x431.webp"
                    alt="Product catalog"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-3">
                  Product catalog
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Manage unlimited products and variants individually or in bulk. Categorize, label, add custom attributes. Export, edit in a spreadsheet, import back again.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory management */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                  Inventory management
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Manage stock levels across sales channels and locations. Track stock movements, receive stock, make transfers. Make products available or discontinued on a given date.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200">
                <img
                  src="https://spreecommerce.org/wp-content/uploads/2024/07/features-inventory-1024x575.webp"
                  alt="Inventory management"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Search & Discovery */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200">
                <img
                  src="https://spreecommerce.org/wp-content/uploads/2024/07/features-search-discovery-1024x575.webp"
                  alt="Search & Discovery"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                  Search & Discovery
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Enable your customer's to use the built-in Spree search and product filtering on the category pages. Or leverage Algolia to show users what they need with AI search that understands them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Promotions & Shipping */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Promotions */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2024/07/features-promotions-1024x632.webp"
                    alt="Promotions & Loyalty"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-3">
                  Promotions & Loyalty
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Generate gift cards or discounts with a robust promo rule engine for giving customers or some products available under particular circumstances eg. first purchase.
                </p>
              </div>

              {/* Shipping */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2024/07/features-shipping-1024x431.webp"
                    alt="Shipping management"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-3">
                  Shipping management
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Manage shipping across regions and warehouses. Use any shipping provider or aggregator. Track shipments in real time with email notifications for customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                  Checkout
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Customize checkout to reflect your business logic. Style it to be on-brand. Manage shipping and taxes calculations. Enable fast checkout with Apple Pay or Google Pay.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200">
                <img
                  src="https://spreecommerce.org/wp-content/uploads/2024/07/features-checkout-1024x575.webp"
                  alt="Checkout"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order management */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200">
                <img
                  src="https://spreecommerce.org/wp-content/uploads/2024/07/features-order-management-1024x575.webp"
                  alt="Order management"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                  Order management
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Manage orders via admin dashboard or rely on automated order processing. Use order splitting by vendor in a dropshipping model. Support partial or full returns and exchanges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Products & Compliance */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Digital Products */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2024/07/features-digital-products-1024x632.webp"
                    alt="Digital Products"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-3">
                  Digital Products
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Digital Products are created in the same way as Physical Products, except they require a file to be attached to its variant (or variants, e.g., different language versions).
                </p>
              </div>

              {/* Compliance */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2024/07/features-compliance-1024x431.webp"
                    alt="Compliance"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-3">
                  Compliance
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                Super follows industry-standard security practices in handling credit card data. It also relies on payment gateways for PCI compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="bg-[#F7F7F6] py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                  Accessibility
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Make your website compliant with WCAG by setting the right order of focus throughout the site, correct HTML syntax, sufficient contrast, and proper handling of pop-ups.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 border border-gray-200">
                <img
                  src="https://spreecommerce.org/wp-content/uploads/2024/07/features-accessibility-1024x575.webp"
                  alt="Accessibility"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-base text-gray-300 mb-8">
            Join thousands of businesses using Spree Commerce
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm"
          >
            Get started for free
          </Link>
        </div>
      </div> */}
    </div>
  );
}