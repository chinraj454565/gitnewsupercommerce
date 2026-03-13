"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  // State to control the Floating Action Button (FAB) menu
  const [isChatOpen, setIsChatOpen] = useState(false);

  const data = {
    heading: "Let's use super to build exactly what your business needs",
    primaryBtnText: "Get started",
    secondaryBtnText: "See demo",
    bgImage:
      "https://spreecommerce.org/wp-content/themes/spree/images/footer-shape.webp",
  };

  return (
    <>
      {/* --- Top CTA Section --- */}
      <section className="relative w-full pt-24 pb-0 px-6 overflow-hidden bg-[#F3F3F3]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#111827] leading-tight mb-10">
            {data.heading}
          </h2>

          {/* Button Group */}
          <div className="flex flex-row justify-center gap-4 mb-20 w-full px-4 max-w-md mx-auto">
            {/* Primary */}
            <Link
              href="#"
              className="flex-1 text-center bg-[#0B192E] text-white text-[16px] font-semibold hover:bg-[#132c4d] hover:rounded-[28px] transition-all duration-300 leading-[24px] px-[24px] py-[14px] rounded-[12px] hover:opacity-90"
            >
              {data.primaryBtnText}
            </Link>

            {/* Secondary */}
            <Link
              href="#"
              className="flex-1 text-center bg-white text-[#0B192E] text-[16px] font-semibold hover:bg-[#132c4d] hover:text-white hover:rounded-[28px] transition-all duration-300 leading-[24px] px-[24px] py-[14px] rounded-[12px] border border-[#E5E7EB] shadow-sm"
            >
              {data.secondaryBtnText}
            </Link>
          </div>
        </div>

        {/* Decorative Bottom Shape */}
        <div className="relative w-full h-[200px] md:h-[350px] mt-12">
          <Image
            src={data.bgImage}
            alt="Decorative footer shape"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </section>

      {/* --- Newsletter Section --- */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12 tracking-tight">
            Get the latest to your inbox
          </h2>

          {/* Subscription Form */}
          <form className="flex items-center justify-center gap-3 sm:gap-4 mb-8 px-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 max-w-[280px] sm:max-w-[350px] px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-black text-base sm:text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-6 sm:px-10 py-3.5 sm:py-4 bg-white text-black font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {/* Legal Disclaimer */}
          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            BY SUBSCRIBING YOU ACCEPT OUR <br className="sm:hidden" />
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              TERMS AND CONDITIONS
            </a>{" "}
            AND{" "}
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </section>

      {/* --- Main Footer Section --- */}
      <footer className="bg-black text-white pt-16 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Top Bar with Logo and Get Started */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/white-logo.png"
                alt="SuperLabs Logo"
                width={160}
                height={45}
                priority
                className="object-contain"
              />
            </Link>
            <Link
              href="/get-started"
              className="bg-white text-black px-6 py-2.5 rounded-lg font-bold hover:bg-gray-200 transition-colors text-[15px]"
            >
              Get started
            </Link>
          </div>

          {/* Navigation Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 xl:gap-8">
            {/* Platform */}
            <div>
              <h4 className="text-white font-bold text-[17px] mb-6">
                Platform
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/platform/features"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/integrations"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/demo"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/success-stories"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Capabilities */}
            <div>
              <h4 className="text-white font-bold text-[17px] mb-6">
                Capabilities
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/capabilities/marketplace-ecommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Marketplace eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/omnichannel-ecommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Omnichannel eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/multi-warehouse-ecommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Multi-warehouse eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/multi-store-ecommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Multi-store eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/multi-region-ecommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Multi-region eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/multi-tenant-ecommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Multi-tenant eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/member-only-ecommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Member-only eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/digital-product-sales"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Digital product sales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/headless-ecommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Headless eCommerce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="text-white font-bold text-[17px] mb-2">
                Use cases
              </h4>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-5">
                By Business Model
              </span>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/useCases/B2B-eCommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    B2B eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/useCases/B2B&DTC-eCommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    B2B & DTC eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/useCases/DTC-eCommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    DTC eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/useCases/Wholesale-eCommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Wholesale eCommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/useCases/Business-Equipment-or-Supplies"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Business Equipment or Supplies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/useCases/CBD-eCommerce"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    CBD eCommerce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h4 className="text-white font-bold text-[17px] mb-6">
                Developers
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/platform/integrations"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/spree"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[15px] text-[#D1D1D1] hover:text-white transition-colors"
                  >
                    Slack
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Bottom Bar */}
          <div className="pt-6 border-t border-[#333333] mt-16">
            <p className="text-[14px] text-[#A3A3A3]">
              © 2020 - 2026 SuperLabs. Acta Non Verba.
            </p>
          </div>
        </div>
      </footer>

      {/* --- State-Driven Floating Action Button (FAB) --- */}
      <div
        className="fixed bottom-8 right-6 md:right-8 z-50 flex flex-col items-end"
        onMouseEnter={() => setIsChatOpen(true)}
        onMouseLeave={() => setIsChatOpen(false)}
      >
        {/* Hidden Icons (WhatsApp & Email) */}
        <div
          className={`flex flex-col gap-3 mb-3 transition-all duration-300 origin-bottom ${
            isChatOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          {/* WhatsApp Icon (using <a> tag for external routing) */}
          <a
            href="https://wa.me/1234567890" // Add your real WhatsApp number here
            target="_blank"
            rel="noopener noreferrer"
            className="w-[52px] h-[52px] rounded-[18px] bg-[#25D366] flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>

          {/* Email Icon (using <a> tag for mailto) */}
          <a
            href="mailto:hello@superecommerce.org"
            className="w-[52px] h-[52px] rounded-[18px] bg-gradient-to-b from-[#5DC4B8] to-[#425972] flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>

        {/* Main Toggle Button and Tooltip */}
        <div className="flex items-center justify-end gap-4 relative">
          {/* "Lets Talk" Tooltip */}
          <div
            className={`transition-opacity duration-300 bg-[#EAEAEA] text-black font-serif text-[15px] px-4 py-1.5 rounded-full pointer-events-none shadow-md ${
              isChatOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Lets Talk
          </div>

          {/* Main Red Chat Icon - Toggles menu on mobile tap */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-[56px] h-[56px] bg-black rounded-[20px] border border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)] flex items-center justify-center transition-transform hover:scale-105"
            aria-label="Chat"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
