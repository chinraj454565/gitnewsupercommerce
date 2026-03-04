import React from "react";
import Image from "next/image";
import CenteredHero from "@/components/reusablecomponent/CenteredHero";
import ProblemGrid from "@/components/reusablecomponent/ProblemGrid";
import FeatureSplit from "@/components/reusablecomponent/FeatureSplit";
import { CommonToAll } from "@/components/reusablecomponent";
import {
  UserPlus,
  Palette,
  CreditCard,
  PieChart,
  Settings,
  Truck,
  FileText,
  BarChart3,
  Percent,
  Users,
  Share2,
} from "lucide-react";

const MultiTenantEcommerce = () => {
  const features = [
    {
      title: "Tenant Management",
      description:
        "Create, configure, and manage tenant stores, with global settings and tenant-specific overrides. Or allow tenants to take full control of their stores.",
      imageSrc: "/multi-tenant-ecommerce/management1.webp",
      imageAlt:
        "Dashboard showing tenant onboarding progress for Fashion Place",
    },
    {
      title: "Master Catalog Options",
      description:
        "Offer a centralized product catalog for tenants or allow independent tenant catalogs. Customize product management to your specific use case.",
      imageSrc: "/multi-tenant-ecommerce/management2.webp",
      imageAlt: "Product creation interface with pricing and shipping options",
    },
  ];
  const features1 = [
    {
      icon: <UserPlus size={24} />,
      title: "Tenant Onboarding",
      description:
        "Build self-service signup flows or invitation-only provisioning.",
    },
    {
      icon: <Palette size={24} />,
      title: "Branding & White-Label Tools",
      description:
        "Customize admin UI, emails, and storefronts for a fully white-labeled SaaS experience.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Billing & Subscription Models",
      description:
        "Implement per-tenant billing via subscription plans, commission-based fees, or hybrids.",
    },
    {
      icon: <PieChart size={24} />,
      title: "Global Analytics & Reporting",
      description:
        "Monitor tenant activity, revenue, and KPIs across all stores.",
    },
    {
      icon: <Settings size={24} />,
      title: "Tenant Store Management Options",
      description:
        "Manage tenant stores individually by logging into each admin dashboard or through a centralized multi-admin interface for global actions.",
    },
    {
      icon: <Truck size={24} />,
      title: "Shipping & Fulfillment Models",
      description:
        "Centralize fulfillment operations (e.g., from multiple store locations each) or allow tenants to manage their own shipping and logistics.",
    },
  ];
  const formatText = (text: string) => text.replace(/spree/gi, "super");
  const topCards = [
    {
      title: "Tenant Dashboard",
      description:
        "Tenants can manage products, orders, customers, promotions, and reports from a tenant dashboard. Customize the tenant experience to your use case.",
      image: "/multi-tenant-ecommerce/tenant1.webp",
    },
    {
      title: "Storefront Theming",
      description:
        "Tenants can customize branding, logos, colors, and layouts of their storefront. They can also add new landing pages and rearrange module layout of each page.",
      image: "/multi-tenant-ecommerce/tenant2.webp",
    },
  ];

  const gridFeatures = [
    {
      icon: <Truck size={24} />,
      title: "Shipping Configuration",
      description:
        "Define tenant-specific shipping zones, rates, carriers, and fulfillment policies.",
    },
    {
      icon: <FileText size={24} />,
      title: "Policies & Legal Pages",
      description:
        "Tenants can manage their own privacy policies, terms and conditions, and return policies.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics & Reporting",
      description:
        "Access tenant-scoped dashboards for sales, orders, and fulfillment insights.",
    },
    {
      icon: <Percent size={24} />,
      title: "Promotions & Discounts",
      description:
        "Create tenant-specific campaigns, coupon codes, and loyalty offers.",
    },
    {
      icon: <Users size={24} />,
      title: "Customer Management",
      description:
        "Tenants can handle customer accounts, returns & refunds, and marketing communications independently. Or centralize it under the platform admin.",
    },
    {
      icon: <Share2 size={24} />,
      title: "Third-Party Integrations",
      description:
        "Connect marketing tools, CRMs, Payment processing or POS systems using tenant-specific API credentials.",
    },
  ];

  const bottomCards = [
    {
      title: "Catalog & Inventory Management",
      description:
        "Maintain independent catalogs or pull from a shared master catalog. Sell from multiple stock locations e.g. warehouses, PoS.",
      image: "/multi-tenant-ecommerce/tenant3.webp",
    },
    {
      title: "Payment & Tax Configuration",
      description:
        "Tenants can connect their own payment gateways and set tax rules for their regions to support their local audiences.",
      image: "/multi-tenant-ecommerce/tenant4.webp",
    },
  ];

  const featuresData = [
    {
      title: "Short time to market",
      description:
        "Super Commerce is a ready-to-use multi-tenant starter that speeds up delivery of your custom functionality and integrations.",
    },
    {
      title: "Constant improvements",
      description:
        "The multi-tenant foundation keeps evolving, so you continuously benefit from improvements, optimizations and new features.",
    },
    {
      title: "Support available",
      description:
        "You can always rely on our support for delivery, improvements and hosting of your multi-tenant ecommerce project as it grows.",
    },
  ];

  const storiesData = [
    {
      tag: "Composable",
      title:
        "GoDaddy chose Super Commerce for their multi-tenant ecommerce solution for small businesses",
      description:
        "GoDaddy uses Super Commerce open-source software for its multi-tenant storefronts. The platform enables small businesses to build professional websites, attract customers and manage their online presence efficiently.",
      img: "/multi-tenant-ecommerce/story1.webp",
    },
    {
      tag: "DTC",
      title:
        "One of the hottest NFL teams is using Super Commerce for their fan merchandise online store",
      description:
        "The New England Patriots ProShop is the official fan merchandise store. The platform includes wishlist functionality, shoppable gift guides and product customization features for personalized jerseys.",
      img: "/multi-tenant-ecommerce/story2.webp",
    },
  ];

  return (
    <>
      <CenteredHero
        label="Multi-tenant eCommerce Platform"
        title="Multi-tenant White-Label eCommerce Platform"
        description="Host and manage hundreds of your customer or reseller stores each having their own tenant dashboard and storefront. Customize the platform to your specific use case."
      />
      <section className="bg-[#F3F3F3] py-16 px-6 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B1B32] tracking-tight leading-tight mb-8">
            Empower hundreds of your customers or resellers with their own store
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-lg text-[#4A5568] leading-relaxed max-w-4xl mx-auto mb-10">
            Host thousands of stores as a stand-alone SaaS or a composable
            micro-service integrated with your existing solutions, such as
            authentication, ERP, CRM. Manage them all from a single dashboard.
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            <button className="bg-[#05142B] text-white font-medium py-4 px-8 rounded-md transition-all hover:bg-[#0a2245] active:scale-95 shadow-sm">
              See all Capabilities
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F3F3]  pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Image Container with Bottom Fog/Fade Effect */}
          <div className="relative w-full max-w-5xl aspect-[16/10] mb-12">
            {/* The Image */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/multi-tenant-ecommerce/cover-image.webp"
                alt="Multi-tenant Admin Dashboard"
                fill
                className="object-contain object-top"
                priority
              />
            </div>

            {/* Fog/Gradient Overlay to blend into #F3F3F3 */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #F3F3F3 90%)",
              }}
            />
          </div>

          {/* Text Content */}
          <div className="text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1B32] mb-6">
              Multi-tenant Admin Capabilities
            </h2>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              {/* "Super" replaces "Spree" here */}
              Super admin has ultimate oversight and control over tenant stores
              as well as ability to provision tenant stores, enforce global
              policies, and configure the level of autonomy each tenant enjoys.
            </p>

            {/* Action Button */}
            <button className="bg-[#05142B] text-white font-medium py-3 px-8 rounded-md transition-all hover:opacity-90 active:scale-95">
              See Admin Capabilities
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F3F3] pt-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-6">
              {/* Image Container with subtle shadow/border to mimic screenshot */}
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content Area */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1C21]">
                  {feature.title}
                </h2>
                <p className="text-[#4A4C52] text-lg leading-relaxed mb-0">
                  {/* Logic to ensure Spree is replaced by Super if present in strings */}
                  {feature.description.replace(/spree/gi, "Super")}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Horizontal line with margin matching the image flow */}
        <hr className="mt-12 border-t border-gray-300 w-full" />
      </section>
      <section className="bg-[#F3F3F3] py-0 my-0">
        {/* Container with mx-5 and left/right border lines */}
        <div className="mx-5 border-l border-r border-t border-b border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features1.map((feature, index) => (
              <div
                key={index}
                className={`p-8 flex flex-col space-y-4 border-gray-300
                /* Horizontal lines for all rows except the last one on mobile */
                border-b last:border-b-0 md:last:border-b-0
                
                /* Vertical lines: Right border on all except the last column of a row */
                md:border-r 
                ${(index + 1) % 2 === 0 ? "md:border-r-0" : ""}
                
                /* Desktop (4-col) logic for borders and spans */
                lg:border-r
                ${(index + 1) % 4 === 0 ? "lg:border-r-0" : ""}
                ${index >= 4 ? "lg:col-span-2" : "lg:col-span-1"}
                
                /* Ensure the second to last item on the bottom row (item 5) has a right border */
                ${index === 4 ? "lg:border-r" : ""}
              `}
              >
                <div className="text-gray-800">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {formatText(feature.title)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {formatText(feature.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#F3F3F3] font-sans text-[#1A1C21]">
        {/* Header Section */}
        <div className="py-20 px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            {formatText("Tenant Capabilities")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            {formatText(
              "Each tenant can manage their own storefront, products, orders, customers, and configurations using their own store dashboard.",
            )}
          </p>
          <button className="bg-[#0A192F] text-white px-8 py-3 rounded-md font-medium transition hover:bg-black">
            {formatText("See Tenant Capabilities")}
          </button>
        </div>
      </div>
      <div className="bg-[#F3F3F3] py-0 my-0 font-sans">
        {/* Top Cards Section */}
        <section className="pt-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {topCards.map((card, idx) => (
              <div key={idx} className="flex flex-col space-y-6">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#1A1C21]">
                    {formatText(card.title)}
                  </h2>
                  <p className="text-[#4A4C52] text-lg leading-relaxed">
                    {formatText(card.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <hr className="mt-12 border-t border-gray-300 w-full" />
        </section>

        {/* Middle Grid Section with Lines */}
        <section className="mx-5 border-l border-r border-b border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {gridFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-8 flex flex-col space-y-4 border-gray-300 border-b lg:border-b-0
                md:border-r ${(index + 1) % 2 === 0 ? "md:border-r-0" : ""}
                lg:border-r ${(index + 1) % 4 === 0 ? "lg:border-r-0" : ""}
                ${index >= 4 ? "lg:col-span-2 lg:border-t" : ""}
                ${index === 4 ? "lg:border-r" : ""}
              `}
              >
                <div className="text-gray-800">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {formatText(feature.title)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {formatText(feature.description)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Cards Section */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {bottomCards.map((card, idx) => (
              <div key={idx} className="flex flex-col space-y-6">
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#1A1C21]">
                    {formatText(card.title)}
                  </h2>
                  <p className="text-[#4A4C52] text-lg leading-relaxed">
                    {formatText(card.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="bg-[#F3F3F3] text-[#1A1C21] font-sans antialiased">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center max-w-5xl mx-auto">
          <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
            What you get
          </span>
          <h1 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">
            A scalable and customizable Multi-tenant eCommerce platform
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {formatText(
              "Use spree as a spring-board to quickly deliver a multi-tenant platform that fits your use case and existing infrastructure.",
            )}
          </p>
        </section>
      </div>
      <CommonToAll features={featuresData} stories={storiesData} />
    </>
  );
};

export default MultiTenantEcommerce;
