"use client";
import React from "react";

import {
  ArrowRight,
  Monitor,
  Share2,
  UserPlus,
  Layout,
  ShoppingCart,
  BarChart3,
  Headphones,
  Cpu,
  CreditCard,
  Wallet,
  Percent,
  Settings,
  ClipboardList,
  RefreshCcw,
  Smartphone,
  Search,
  Bell,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

export default function MarketplaceEcommercePage() {
  const adminFeatures = [
    {
      title: "Marketplace Management",
      desc: "Invite vendors, approve or reject vendor signups, suspend accounts, and monitor vendor performance metrics.",
      icon: <Monitor size={20} />,
    },
    {
      title: "WooCommerce Vendor Integration",
      desc: "Automate onboarding and operations for WooCommerce vendors using a direct API integration.",
      icon: <Share2 size={20} />,
    },
    {
      title: "Manual or CSV Vendor Onboarding",
      desc: "Manually onboard vendors without an online store or using unsupported platforms via direct account setup in the vendor dashboard.",
      icon: <UserPlus size={20} />,
    },
    {
      title: "Storefront & Content Management",
      desc: "Customize homepage and category layouts with Drag & Drop blocks. Create landing pages without dev effort. Enhance SEO.",
      icon: <Layout size={20} />,
    },
  ];

  const adminFeatures2 = [
    {
      title: "Marketplace Management",
      desc: "Invite vendors, approve or reject vendor signups, suspend accounts, and monitor vendor performance metrics.",
      icon: <Monitor size={20} />,
    },
    {
      title: "WooCommerce Vendor Integration",
      desc: "Automate onboarding and operations for WooCommerce vendors using a direct API integration.",
      icon: <Share2 size={20} />,
    },
    {
      title: "Manual or CSV Vendor Onboarding",
      desc: "Manually onboard vendors without an online store or using unsupported platforms via direct account setup in the vendor dashboard.",
      icon: <UserPlus size={20} />,
    },
    {
      title: "Storefront & Content Management",
      desc: "Customize homepage and category layouts with Drag & Drop blocks. Create landing pages without dev effort. Enhance SEO.",
      icon: <Layout size={20} />,
    },
  ];

  const operationalFeatures = [
    {
      title: "Order Management",
      desc: "Order filtering, actions like cancellations or refunds, and tracking fulfillment per vendor.",
      icon: <ShoppingCart size={20} />,
    },
    {
      title: "Analytics & Reporting",
      desc: "Built-in KPIs, Google Analytics integration, and CSV exports for products and orders.",
      icon: <BarChart3 size={20} />,
    },
    {
      title: "Customer Service",
      desc: "Optional chat and AI bots, ticketing, and store credits for efficient customer support.",
      icon: <Headphones size={20} />,
    },
    {
      title: "APIs for headless projects",
      desc: "Full coverage for storefront, platform, and checkout to enable custom functionality and integrations.",
      icon: <Cpu size={20} />,
    },
  ];
  const features = [
    {
      title: "A marketplace starter",
      description:
        "Super Commerce Open Source offers a ready-to-use marketplace starter that speeds up the delivery and go-market",
    },
    {
      title: "Full customizability",
      description:
        "Tweak the Open Source marketplace starter with your own improvements, optimizations, features to support your specific business case giving you the edge.",
    },
    {
      title: "Enterprise automations",
      description:
        "Unlock enterprise automations: from Stripe Connect payment splitting, taxes and vendor payouts, seamless Shopify and WooCommerce integrations to automated category matching.",
    },
  ];

  const stories = [
    {
      title:
        "Scout & Nimble uses Super for its online marketplace for shoppable designer rooms and home decor",
      description:
        "Scout & Nimble is a social commerce platform that works with interior designers to curate shoppable rooms utilizing the available software & products. Since it's an online marketplace, everything is customizable for the consumer.",
      tag: "DTC",
      img: "https://spreecommerce.org/wp-content/uploads/2025/12/Scout-Nimble-uses-Spree-for-its-online-marketplace-for-shoppable-designer-rooms-and-home-decor-1024x768-1.webp",
    },
    {
      title: "Garmentory luxury fashion marketplace grows 400% on Super",
      description:
        "Garmentory is the leading fashion marketplace dedicated to independent boutiques and emerging fashion designers that provides consumers with a new and curated shopping experience.",
      tag: "DTC",
      img: "https://spreecommerce.org/wp-content/uploads/2025/12/Garmentory-luxury-fashion-marketplace-grows-on-Spree-Commerce-1024x640-1.webp",
    },
    {
      title:
        "Maisonette has revolutionized the children's wear industry by creating a one-stop shopping solution for busy parents",
      description:
        "Maisonette aims to be an authority in the children's market as a shopping destination and an editorial destination with interviews and photo shoots. It is also a stylish solution to one-stop-shopping that stocks hundreds of brands. Maisonette uses Super Commerce for its children's wear multi-vendor marketplace.",
      tag: "DTC",
      img: "https://spreecommerce.org/wp-content/uploads/2025/12/Maisonette-children-marketplace-Spree-Commerce-1024x526-1.webp",
    },
    {
      title:
        "Marley Spoon uses Super Commerce for its cook-at-home meal kit subscription service",
      description:
        "Marley Spoon is a cook-at-home food delivery startup founded by ex-Delivery Hero chief executive Fabian Siegel and Till Neatby. The company is based in Berlin and has operations in Europe, the US and Australia.",
      tag: "DTC",
      img: "https://spreecommerce.org/wp-content/uploads/2025/12/Marley-Spoon-uses-Spree-Commerce-for-its-cook-at-home-meal-kit-subscription-service-1024x683-1.webp",
    },
  ];

  const logos = [
    "https://spreecommerce.org/wp-content/uploads/2024/07/mitchells.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/meundies.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/huckberry.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/kfc.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/goop.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/godaddy.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/bonobos.svg",
    "https://spreecommerce.org/wp-content/uploads/2024/07/bookshop.svg",
  ];

  // Double the array for a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <div className="bg-[#F3F3F3] min-h-screen">
        <main className="max-w-[1280px] mx-auto bg-white font-sans antialiased shadow-sm border-x border-[#E2E8F0]">
          {/* --- HERO SECTION --- */}
          <section className="px-4 py-20 md:py-32 bg-[#F8F9FA]">
            <div className="max-w-[1100px] mx-auto text-center">
              <p className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#000] uppercase mb-8">
                Open Source Multi-vendor Marketplace Ecommerce Platform
              </p>

              <h1 className="text-[40px] md:text-[72px] font-normal text-[#0A1A2F] leading-[1.1] mb-10 tracking-[-0.02em]">
                Open Source Multi-vendor <br className="hidden md:block" />
                <span className="font-normal">Marketplace Platform</span>
              </h1>

              <p className="text-[17px] md:text-[20px] text-[#4A5568] leading-[1.6] max-w-[950px] mx-auto mb-12 font-light">
                A multi-vendor marketplace is a platform that allows multiple
                third-party vendors to sell products through a single storefront
                that you operate earning a sales commission. Conversely, a
                marketplace customer may purchase goods from multiple vendors in
                a single order with a single payment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <button className="w-full sm:w-auto bg-[#0A1A2F] text-white px-12 py-4 rounded-md text-[16px] font-semibold hover:bg-[#162A45] transition-colors">
                  Get started
                </button>
                <button className="w-full sm:w-auto bg-white border border-[#E2E8F0] text-[#0A1A2F] px-12 py-4 rounded-md text-[16px] font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                  Book demo
                </button>
              </div>
            </div>
          </section>

          {/* --- INFOGRAPHIC SECTION --- */}
          <section className="px-4 py-20 bg-white">
            <div className="max-w-[1100px] mx-auto text-center">
              <h2 className="text-[32px] md:text-[48px] font-normal leading-tight mb-6 text-[#0A1A2F]">
                Get a Fully-featured <br />
                <span className="font-normal">
                  Multi-Vendor Marketplace Platform
                </span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#4A5568] max-w-[800px] mx-auto mb-10 font-light">
                Super Commerce Open Source simplifies and automates marketplace
                complexities, ensuring smooth operations, satisfied vendors, and
                confident shoppers.
              </p>

              <button className="bg-[#0A1A2F] text-white px-8 py-3 rounded-md text-[15px] font-bold mb-16 hover:bg-[#162A45] transition-colors">
                See all Capabilities
              </button>

              <div className="relative w-full max-w-[900px] mx-auto">
                <img
                  src="https://spreecommerce.org/wp-content/uploads/2025/10/marketplace-ecommerce-intro.webp"
                  alt="Marketplace Platform Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </section>

          {/* --- ADMIN CAPABILITIES SECTION --- */}
          <section className="px-4 py-24 bg-[#F8F9FA] text-center border-t border-[#E2E8F0]">
            <div className="max-w-[1100px] mx-auto">
              <h2 className="text-[32px] md:text-[48px] font-light text-[#0A1A2F] mb-6">
                Admin Capabilities
              </h2>
              <p className="text-[17px] md:text-[20px] text-[#4A5568] max-w-[850px] mx-auto mb-10 font-light leading-relaxed">
                Super provides comprehensive multi-vendor marketplace management
                tools with a robust Admin dashboard.
              </p>
              <button className="bg-[#0A1A2F] text-white px-10 py-4 rounded-md text-[16px] font-semibold hover:bg-[#162A45] transition-all">
                See Admin Capabilities
              </button>
            </div>
          </section>

          <section className="bg-[#F1F3F5] py-20 px-4 border-t border-b border-[#E2E8F0]">
            <div className="max-w-[1100px] mx-auto">
              {/* --- Top Row: Visual Cards --- */}
              <div className="grid md:grid-cols-2 gap-8 ">
                {/* Card 1: Shopify Onboarding */}
                <div className="flex flex-col">
                  <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm mb-6 hover:shadow-md transition-shadow">
                    <img
                      src="https://spreecommerce.org/wp-content/uploads/2025/10/marketplace-ecommerce-onboarding.webp"
                      alt="Shopify Vendor Onboarding"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <h3 className="text-[24px] font-bold text-[#0A1A2F] mb-3">
                    Shopify Vendor Onboarding
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed font-light text-[17px]">
                    Automate onboarding and operations for Shopify vendors using
                    a white-labelled Shopify sales channel app. This is what
                    Shopify vendors expect.
                  </p>
                </div>

                {/* Card 2: Marketplace Merchandising */}
                <div className="flex flex-col">
                  <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm mb-6 hover:shadow-md transition-shadow">
                    <img
                      src="https://spreecommerce.org/wp-content/uploads/2025/10/marketplace-ecommerce-merchandising.webp"
                      alt="Marketplace Merchandising"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <h3 className="text-[24px] font-bold text-[#0A1A2F] mb-3">
                    Marketplace Merchandising
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed font-light text-[17px]">
                    Moderate product listings. Update vendor-provided listings.
                    Organize products with categories and labels. Define and
                    filter by product attributes.
                  </p>
                </div>
              </div>

              {/* --- Bottom Row: Icon Feature Grid --- */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-[#CBD5E0]">
                {adminFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-start space-y-4"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-white border border-[#E2E8F0] rounded-lg shadow-sm text-[#0A1A2F]">
                      {feature.icon}
                    </div>
                    <h4 className="text-[19px] font-bold leading-tight text-[#0A1A2F]">
                      {feature.title}
                    </h4>
                    <p className="text-[15px] text-[#718096] leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="bg-[#F3F3F3] min-h-screen py-6 md:py-12 px-4 md:px-8">
        {/* Main Content Container */}
        <main className="max-w-[1280px] mx-auto bg-white shadow-sm border border-[#E2E8F0] font-sans antialiased overflow-hidden rounded-sm">
          {/* --- HERO SECTION --- */}

          {/* --- ADMIN & OPERATIONAL GRID (Matches image_18077e and image_1aae79) --- */}
          <section className="bg-[#F1F3F5] py-20 px-6 border-b border-[#E2E8F0]">
            <div className="max-w-[1150px] mx-auto">
              {/* Top Cards: Payments & Payouts */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <img
                      src="https://spreecommerce.org/wp-content/uploads/2025/10/marketplace-ecommerce-payments.webp"
                      alt="Checkout"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#0A1A2F]">
                    Checkout & Payments
                  </h3>
                  <p className="text-[#4A5568] font-light text-[15px]">
                    Support multi-vendor order splitting, quick checkout methods
                    (Apple Pay, Google Pay), and automated payouts.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <img
                      src="https://spreecommerce.org/wp-content/uploads/2025/10/marketplace-ecommerce-payouts.webp"
                      alt="Payouts"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#0A1A2F]">
                    Vendor Payouts
                  </h3>
                  <p className="text-[#4A5568] font-light text-[15px]">
                    Automated or manual payouts with Stripe Connect, including
                    KYC onboarding and vendor-accessible analytics.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <img
                      src="https://spreecommerce.org/wp-content/uploads/2025/10/marketplace-ecommerce-promotions.webp"
                      alt="Payouts"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#0A1A2F]">
                    Promotions & Marketing Automations
                  </h3>
                  <p className="text-[#4A5568] font-light text-[15px]">
                    Create promo rules and coupon codes. Issue and redeem
                    digital gift cards. Automate abandoned cart emails and
                    upsell flows based on user activity.
                  </p>
                </div>
              </div>

              {/* Bottom Grid: Icon Features */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-12 pt-16 border-t border-[#CBD5E0]">
                {operationalFeatures.map((f, i) => (
                  <div key={i} className="space-y-4">
                    <div className="text-[#0A1A2F] mb-4">{f.icon}</div>
                    <h4 className="text-[18px] font-bold text-[#0A1A2F]">
                      {f.title}
                    </h4>
                    <p className="text-[14px] text-[#718096] leading-relaxed font-light">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- FINAL CTA BANNERS (Matches image_893b0c) --- */}
        </main>
      </div>
      <section className="bg-[#F3F3F3] py-16 px-4 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-[#001D3D] mb-4">
              Vendor Capabilities
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Super Commerce Enterprise Edition offers vendors a streamlined and
              intuitive dashboard designed specifically for multi-vendor
              marketplace operations.
            </p>

            <button className="bg-[#001D3D] text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
              See Vendor Capabilities
            </button>
          </div>

          {/* Main Grid Card */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Top Row */}
            <div className="grid md:grid-cols-2 border-b border-gray-200">
              {/* Vendor Dashboard */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="bg-gray-50 rounded-lg p-4 mb-6 aspect-video flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm">
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2025/10/Marketplace-Vendor-Dashboard.webp"
                    alt="Vendor Dashboard"
                    className="rounded shadow-lg object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#001D3D] mb-4">
                  Vendor Dashboard
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Onboard and manage products, orders, analytics, settings, and
                  support from a dedicated dashboard. Vendors can manage their
                  entire marketplace operations in one place.
                </p>
              </div>

              {/* Shopify Onboarding */}
              <div className="p-8">
                <div className="bg-gray-50 rounded-lg p-4 mb-6 aspect-video flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm">
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2025/10/Marketplace-Shopify-Onboarding.webp"
                    alt="Shopify Onboarding"
                    className="rounded object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#001D3D] mb-4">
                  Automated Shopify Onboarding & Operations
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  A white-label Shopify sales channel app syncs products,
                  orders, shipments, cancellations, and refunds automatically
                  between Shopify and the Super marketplace.
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Profile & Settings */}
              <div className="p-8 border-b sm:border-r border-gray-200">
                <Settings className="w-8 h-8 text-gray-700 mb-4" />
                <h4 className="text-lg font-semibold text-[#001D3D] mb-3">
                  Vendor Profile & Settings
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Configure shipping, localization, and holiday mode to control
                  your marketplace operations.
                </p>
              </div>

              {/* Manual/CSV Onboarding */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
                <ClipboardList className="w-8 h-8 text-gray-700 mb-4" />
                <h4 className="text-lg font-semibold text-[#001D3D] mb-3">
                  Manual or CSV-based Vendor Onboarding & Operations
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vendors can upload products, manage orders and shipments, and
                  handle cancellations or refunds directly from their dashboard.
                </p>
              </div>

              {/* WooCommerce Automation */}
              <div className="p-8 border-b sm:border-b-0 sm:border-r border-gray-200">
                <RefreshCcw className="w-8 h-8 text-gray-700 mb-4" />
                <h4 className="text-lg font-semibold text-[#001D3D] mb-3">
                  Automated WooCommerce Onboarding & Operations
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Syncs products, orders, shipments, cancellations, and refunds
                  automatically between WooCommerce and the Super marketplace.
                </p>
              </div>

              {/* Payouts & Reporting */}
              <div className="p-8">
                <div className="relative">
                  <CreditCard className="w-8 h-8 text-gray-700 mb-4" />
                  <div className="absolute top-0 left-6 bg-white rounded-full">
                    <div className="w-3 h-3 border-2 border-gray-700 rounded-sm"></div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-[#001D3D] mb-3">
                  Vendor Payouts & Reporting
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Automated or manual payouts, Stripe KYC onboarding, financial
                  dashboards, and optional accounting integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F3F3] py-16 px-4 md:px-8 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-[#001D3D] mb-4">
              Customer Experience
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed text-sm md:text-base">
              Super commerce ensures an exceptional end-customer experience in
              multi-vendor marketplaces, providing seamless shopping journeys
              across diverse vendors and products.
            </p>
            <button className="bg-[#001D3D] text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-slate-800 transition-colors">
              See Customer PoV
            </button>
          </div>

          {/* Main Content Container */}
          <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
            {/* Top Row: Two Featured Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
              {/* Multi-Vendor Shopping Experience */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
                <div className="bg-gray-50 rounded-md mb-6 relative aspect-[16/10] overflow-hidden border border-gray-100 shadow-inner">
                  {/* Replace "/shopping-experience.png" with your actual path.
                   The 'objectFit="contain"' ensures the full graphic is visible.
                */}
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2025/10/marketplace-shopping-experience.webp"
                    alt="Multi-vendor cart and checkout UI flow"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#001D3D] mb-3">
                  Multi-Vendor Shopping Experience
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Multi-vendor cart and checkout, vendor-specific shipping, and
                  a consistent storefront for products from multiple vendors.
                </p>
              </div>

              {/* Country-specific User Experience */}
              <div className="p-8 flex flex-col">
                <div className="bg-gray-50 rounded-md mb-6 relative aspect-[16/10] overflow-hidden border border-gray-100 shadow-inner">
                  <img
                    src="https://spreecommerce.org/wp-content/uploads/2025/10/marketplace-country-specific.webp"
                    alt="Global map with currency and flag selectors"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#001D3D] mb-3">
                  Country-specific User Experience
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Language and currency selector for country-specific shopping
                  convenience at catalog and checkout level.
                </p>
              </div>
            </div>

            {/* Bottom Row: Four Feature Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Mobile-first */}
              <div className="p-8 border-b sm:border-r border-gray-200">
                <Smartphone className="w-6 h-6 text-gray-800 mb-4" />
                <h4 className="text-md font-semibold text-[#001D3D] mb-3">
                  Mobile-first User Experience
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Responsive storefront design optimized for mobile, tablet, and
                  desktop experiences.
                </p>
              </div>

              {/* Product Discovery */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
                <Search className="w-6 h-6 text-gray-800 mb-4" />
                <h4 className="text-md font-semibold text-[#001D3D] mb-3">
                  Marketplace Product Discovery
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Shoppers can browse by brand or vendor and explore curated
                  collections and categories.
                </p>
              </div>

              {/* Express Checkout */}
              <div className="p-8 border-b sm:border-b-0 sm:border-r border-gray-200">
                <CreditCard className="w-6 h-6 text-gray-800 mb-4" />
                <h4 className="text-md font-semibold text-[#001D3D] mb-3">
                  Express Checkout & Payment Options
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Including Apple Pay, Google Pay, installment plans, and
                  payment links for quick, flexible checkout.
                </p>
              </div>

              {/* Notifications */}
              <div className="p-8">
                <Bell className="w-6 h-6 text-gray-800 mb-4" />
                <h4 className="text-md font-semibold text-[#001D3D] mb-3">
                  Notifications & Shipment Tracking
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Confirmation, shipping, and delivery emails per vendor.
                  Unified view of all orders in customer dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F3F3] py-20 px-6 md:px-12 font-sans">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header Section */}
          <div className="mb-16">
            <p className="text-gray-600 text-sm md:text-base mb-6 font-medium">
              What you get
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-[#001D3D] mb-8 tracking-tight">
              Build exactly the marketplace you envision
            </h2>
            <p className="text-gray-500 max-w-4xl mx-auto leading-relaxed text-lg md:text-xl font-light">
              Use Super Commerce Open Source Marketplace Platform as a
              spring-board to quickly deliver a marketplace that fits your use
              case and existing infrastructure
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Blue Check Icon */}
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
      <section className="bg-[#F3F3F3] py-20 px-6 md:px-12 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-light text-[#001D3D] text-center mb-16">
            Super Success Stories
          </h2>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {stories.map((story, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-sm aspect-[3/2]">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* DTC Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-[10px] font-bold tracking-wider text-gray-700 uppercase">
                      {story.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-normal text-[#333] mb-4 leading-tight group-hover:text-[#001D3D] transition-colors">
                  {story.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  {story.description}
                </p>

                {/* Read Story Link */}
                <div className="mt-auto flex items-center text-sm font-semibold text-[#001D3D] hover:underline decoration-1 underline-offset-4">
                  Read story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#F3F3F3] font-sans">
        {/* --- LOGO SLIDER SECTION --- */}
        <section className="bg-[#F3F3F3] py-8 md:py-10 w-full overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4">
            <p className="text-center text-gray-500 mb-8 text-sm md:text-base font-light">
              Used by over 5K businesses worldwide
            </p>

            <div className="relative w-full">
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-[#F3F3F3] via-[#F3F3F3]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-[#F3F3F3] via-[#F3F3F3]/80 to-transparent z-10 pointer-events-none" />

              <div className="flex overflow-hidden">
                <motion.div
                  className="flex whitespace-nowrap gap-8 md:gap-12 items-center py-3"
                  animate={{ x: [0, -1500] }}
                  transition={{
                    repeat: Infinity,
                    duration: 55,
                    ease: "linear",
                  }}
                >
                  {duplicatedLogos.map((logo, idx) => (
                    <div key={idx} className="flex-shrink-0">
                      <img
                        src={logo}
                        alt="Partner Logo"
                        className="h-4 md:h-5 max-w-[90px] md:max-w-[110px] w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
