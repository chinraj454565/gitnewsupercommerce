"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogoStrip from "@/components/reusablecomponent/brandlogostrip";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const adminCapabilities = [
  { title: "Customer Segmentation & Pricing", description: "Create and manage customer-specific products and pricing, including volume discounts and buyer-specific promotions.", img: "/b2b/2.webp" },
  { title: "Buyer Organization & Permissions", description: "Group and organize your organization with fully flexible organization hierarchy and simple role management.", img: "/b2b/3.webp" },
  { title: "Account Access & Controls", description: "Grant signup, approval, or reject signup requests, limit catalog and order capabilities to customer segments.", img: "" },
  { title: "Invoicing, Tax & Compliance", description: "Group invoicing for enterprise purchasing, third party tax capabilities are supported to handle B2B sales.", img: "" },
  { title: "Products & Ordering Workflows", description: "Enable bulk order entry, use ordering templates and repeat purchase for high volume buyers.", img: "" },
  { title: "Fulfillment & Inventory Models", description: "Assign inventory in multiple addresses and apply custom fulfillment logic for multi-location processes.", img: "" },
];

const buyerCapabilities = [
  { title: "Easy B2B Ordering", description: "Access product ordering, place bulk cart or order, or place large or recurring orders through quick order forms.", img: "/b2b/4.webp" },
  { title: "B2B Checkout & Payments", description: "Checkout with B2B payment methods, multiple delivery methods and easy purchase details for their order.", img: "/b2b/5.webp" },
  { title: "Account Management", description: "Register with a business account to edit and manage team from invoices, notes, and profiles.", img: "" },
  { title: "Post-purchase support", description: "Access order details and billing history, invoices, order tracking, and other documents to meet regulatory requirements.", img: "" },
  { title: "Communication & Support", description: "Receive notifications, contact support, and share invoices and login references for your team.", img: "" },
];

const robustFeatures = [
  { title: "Gated Storefront Access", description: "Gives you the tools to tailor every part of the buyer journey while maintaining full ownership and control over your platform." },
  { title: "Custom Pricing Logic", description: "A flexible B2B pricing engine enables per-buyer pricing, discount tiers, and customer-specific payment terms." },
  { title: "Organizations & Buyer Roles", description: "Multi-user organizations with user-level permission models and administrator hierarchy to support your team's needs." },
];

const successStories = [
  {
    tag: "B2B",
    title: "3form B2B product sample ordering enabled with a Super Commerce cart and checkout with an ERP integration",
    description: "3form website was a B2B product catalog with a contact form. Then 3form decided to use Super to embedded a cart and checkout experience to streamline product sample ordering. Super Commerce was integrated with an ERP to sync the product catalog and allow all 3form customers to use their existing user accounts. The project was delivered within 12 weeks by team augmentation of the 3form in-house dev team.",
    img: "/b2b/6.webp",
  },
  {
    tag: "B2B",
    title: "Gasido uses Super for its online B2B marketplace for industrial gases",
    description: "Gas providers can list their offers at the website and Gasido takes over the marketing and makes the offers of the offerers on the Internet findable. Customers can find offers that are relevant to them through different filters and can process the purchase simply and quickly. The suppliers receive the orders via the Gasido B2B marketplace and take over the delivery or the transfer process.",
    img: "/b2b/7.webp",
  },
  {
    tag: "B2B",
    title: "Nuherbs launches a wholesale B2B E-Commerce platform for dietary supplements with Super Commerce",
    description: "Nuherbs is a vertically integrated, third-generation family B2B business producing, importing and distributing Chinese herbs and herbal supplements. It recently launched a wholesale B2B E-commerce platform with a custom mobile-first user experience fine tuned for repeat customers but also friendly to first-timers.",
    img: "/b2b/8.webp",
  },
  {
    tag: "B2B",
    title: "Packhelp uses Super for its B2B web-to-print Ecommerce platform",
    description: "Packhelp chose Super for its web-to-print Ecommerce platform because they knew that in order to build a successful startup they shouldn't try to reinvent the wheel but use the existing technology and go to market as fast as possible. It turned out very well even though their business is far from a simple online store as it features a 3d package customizing tool.",
    img: "/b2b/9.webp",
  },
];

// ─── AUTO-SCROLL HOOK ─────────────────────────────────────────────────────────

function useAutoScroll(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let id: number;
    let paused = false;
    const tick = () => {
      if (!paused && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    return () => {
      cancelAnimationFrame(id);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, [speed]);
  return ref;
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function B2BDTCPage() {
  const brandsRef = useAutoScroll(0.7);

  return (
    <main className="font-sans bg-gray-50 text-[#1a1a1a]">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 pt-16 pb-20 px-6 text-center">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-5">
          B2B eCommerce Platform
        </p>
        <h1 className="text-[2rem] md:text-[2.75rem] font-light text-[#111] max-w-2xl mx-auto leading-[1.2] mb-5 tracking-tight">
          B2B eCommerce Platform that you can fully customize,<br className="hidden md:block" /> control and own
        </h1>
        <p className="text-gray-500 text-[0.85rem] max-w-xl mx-auto leading-[1.8] mb-10">
          With support for customer segmentation, per-customer or segment pricing logic, organizational user
          roles, and gated storefront access, Super enables you to deliver tailored experiences across many
          storefronts, all within a single omni-panel.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link href="/get-started" className="bg-[#111] text-white text-[0.8rem] font-semibold px-7 py-2.5 rounded-full hover:bg-[#333] transition-colors">
            Get started
          </Link>
          <Link href="/demo" className="border border-[#ccc] text-[#111] text-[0.8rem] font-semibold px-7 py-2.5 rounded-full hover:border-[#111] transition-colors bg-white">
            See a demo
          </Link>
        </div>
      </section>

      {/* ── B2B OVERVIEW ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="border border-gray-200 rounded-2xl overflow-hidden grid md:grid-cols-2">
            <div className="p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#111] mb-4">B2B eCommerce</h2>
                <p className="text-gray-500 text-[0.8rem] leading-[1.8] mb-8">
                  Selling products to other wholesale customers requires supporting complex business or customer
                  segmentation-based pricing, per customer or customer-specific approved templates and user roles.
                </p>
              </div>
              <Link href="/capabilities" className="self-start inline-flex items-center text-[0.78rem] font-semibold text-white bg-[#111] px-5 py-2 rounded-full hover:bg-[#333] transition-colors">
                See all Capabilities
              </Link>
            </div>
            {/* Image 1 */}
            <div className="relative min-h-[260px] overflow-hidden">
              <Image
                src="/b2b/1.webp"
                alt="B2B eCommerce overview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMIN CAPABILITIES ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-light text-[#111] mb-3 tracking-tight">Admin Capabilities</h2>
            <p className="text-gray-500 text-[0.82rem] max-w-lg mx-auto leading-[1.8] mb-7">
              As the operator of a B2B storefront, you have full control over how business buyers access your platform. Interact with your catalog and orchestrate their purchases.
            </p>
            <Link href="/capabilities/admin" className="inline-flex items-center text-[0.78rem] font-semibold text-white bg-[#111] px-5 py-2 rounded-full hover:bg-[#333] transition-colors">
              See Admin Capabilities
            </Link>
          </div>

          {/* Admin dashboard image (2.webp) */}
          <div className="relative rounded-2xl overflow-hidden h-52 mb-10">
            <Image
              src="/b2b/2.webp"
              alt="Admin dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {adminCapabilities.map((cap, i) => (
              <div key={i}>
                <h3 className="text-[0.8rem] font-semibold text-[#111] mb-1.5">{cap.title}</h3>
                <p className="text-gray-500 text-[0.75rem] leading-[1.75]">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUYER CAPABILITIES ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-light text-[#111] mb-3 tracking-tight">Buyer Capabilities</h2>
            <p className="text-gray-500 text-[0.82rem] max-w-xl mx-auto leading-[1.8] mb-7">
              With our customer product, process, and pricing capabilities, power their tools and scale from the checkout experience to enable flexible B2B buying that keeps customers coming back.
            </p>
            <Link href="/capabilities/buyer" className="inline-flex items-center text-[0.78rem] font-semibold text-white bg-[#111] px-5 py-2 rounded-full hover:bg-[#333] transition-colors">
              See Buyer Capabilities
            </Link>
          </div>

          {/* Buyer dashboard image (4.webp) */}
          <div className="relative rounded-2xl overflow-hidden h-52 mb-10">
            <Image
              src="/b2b/4.webp"
              alt="Buyer dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {buyerCapabilities.map((cap, i) => (
              <div key={i}>
                <h3 className="text-[0.8rem] font-semibold text-[#111] mb-1.5">{cap.title}</h3>
                <p className="text-gray-500 text-[0.75rem] leading-[1.75]">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROBUST B2B ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">What you get</p>
            <h2 className="text-2xl md:text-3xl font-light text-[#111] mb-4 tracking-tight">
              Robust B2B commerce to keep customers coming back
            </h2>
            <p className="text-gray-500 text-[0.82rem] max-w-xl mx-auto leading-[1.8]">
              Whether you're scaling wholesale or managing a B2B2C platform, Super gives you the tools to tailor every part of the buyer journey while maintaining full ownership and control over your platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {robustFeatures.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="text-[0.8rem] font-semibold text-[#111] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-[0.75rem] leading-[1.75]">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES — 2×2 GRID ────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[1.75rem] md:text-[2rem] font-light text-[#111] mb-7 leading-snug tracking-tight">
              Super Commerce Success<br />Stories
            </h2>
            <Link
              href="/platform/success-stories"
              className="inline-flex items-center text-[0.8rem] font-semibold text-white bg-[#0c1e33] px-7 py-2.5 rounded-full hover:bg-[#1a3050] transition-colors"
            >
              See all Stories
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {successStories.map((story, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer group hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-[220px] bg-[#EFEFED]">
                  <Image
                    src={story.img}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* B2B badge — bottom-left white pill */}
                  <div className="absolute bottom-4 left-4 bg-white border border-gray-200 rounded-full px-3 py-[3px] shadow-sm">
                    <span className="text-[0.68rem] font-semibold text-[#333]">{story.tag}</span>
                  </div>
                </div>
                {/* Text */}
                <div className="px-7 py-6">
                  <h3 className="text-[1rem] font-semibold text-[#111] leading-snug mb-3">{story.title}</h3>
                  <p className="text-gray-500 text-[0.8rem] leading-[1.8] mb-5">{story.description}</p>
                  <span className="text-[0.78rem] font-semibold text-[#111] underline underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors cursor-pointer">
                    Read story
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USED BY 5K — AUTO-SCROLL BRAND LOGOS ────────────────────────────── */}
        <BrandLogoStrip />

    </main>
  );
}