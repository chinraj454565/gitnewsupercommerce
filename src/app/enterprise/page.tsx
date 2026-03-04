import React from "react";
import { Check, Info } from "lucide-react";

// --- Types ---
interface FeatureRow {
  label: string;
  community: boolean | string;
  enterprise: boolean | string;
}

interface PricingSection {
  category: string;
  features: FeatureRow[];
}

// --- Data (Replacing 'Spree' with 'Super') ---
const PRICING_SECTIONS: PricingSection[] = [
  {
    category: "General",
    features: [
      {
        label: "Licensing",
        community: "Open source BSD-3",
        enterprise: "Enterprise License",
      },
      {
        label: "Can modify the source code",
        community: true,
        enterprise: true,
      },
      { label: "Can self-host it", community: true, enterprise: true },
    ],
  },
  {
    category: "ChatGPT shopping integration",
    features: [
      {
        label: "Instant Checkout for ChatGPT users",
        community: false,
        enterprise: true,
      },
      { label: "Convert chats into sales", community: false, enterprise: true },
      {
        label: "Get discovered organically",
        community: false,
        enterprise: true,
      },
      {
        label: "Own the customer relationship",
        community: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Storefront management",
    features: [
      { label: "Super Storefront API", community: true, enterprise: true },
      { label: "Multi-store", community: true, enterprise: true },
      { label: "Multi-currency", community: true, enterprise: true },
      { label: "Multi-language", community: true, enterprise: true },
      { label: "Visual storefront builder", community: true, enterprise: true },
    ],
  },
  {
    category: "Buying journey optimization",
    features: [
      { label: "Wishlists", community: true, enterprise: true },
      {
        label: "Waitlists (with email remainders)",
        community: false,
        enterprise: true,
      },
      { label: "Estimated delivery on PDP", community: true, enterprise: true },
    ],
  },
];

const CheckIcon = () => (
  <div className="flex items-center justify-center bg-blue-100 rounded-full w-5 h-5">
    <Check className="text-blue-600 w-3.5 h-3.5" strokeWidth={3} />
  </div>
);

export default function PricingPage() {
  return (
    <div className="bg-[#F3F3F3] min-h-screen font-sans text-[#1A2B49]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* --- STICKY HEADER SECTION --- */}
        {/* 'sticky top-0' makes it stay at the top as the table scrolls below it */}
        <div className="sticky top-0 z-40 bg-[#F3F3F3] pt-4 pb-2 border-b border-gray-200 md:border-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 items-end">
            {/* Left Hero Title */}
            <div className="hidden md:block p-4">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-2 uppercase">
                Super
              </p>
              <h1 className="text-3xl font-light leading-tight">
                Make your pick:
              </h1>
            </div>

            {/* Community Sticky Card */}
            <div className="bg-white rounded-t-xl border-x border-t border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-50">
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">
                  BSD-3 Open-Source License
                </p>
                <h2 className="text-lg font-medium">Community Edition</h2>
              </div>
              <div className="p-4 flex justify-between items-center md:flex-col md:items-start gap-2">
                <span className="text-sm font-bold">Free</span>
                <button className="bg-[#0F172A] text-white text-[11px] font-bold py-2.5 px-6 md:w-full rounded transition hover:bg-slate-800">
                  Get started
                </button>
              </div>
            </div>

            {/* Enterprise Sticky Card */}
            <div className="bg-[#0F172A] text-white rounded-t-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-700">
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                  Enterprise License Agreement
                </p>
                <h2 className="text-lg font-medium">Enterprise Edition</h2>
              </div>
              <div className="p-4 bg-[#1E293B] flex justify-between items-center md:flex-col md:items-start gap-2">
                <span className="text-sm font-bold">Custom Pricing</span>
                <button className="bg-white text-[#0F172A] text-[11px] font-bold py-2.5 px-6 md:w-full rounded transition hover:bg-gray-100">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- SCROLLABLE FEATURE TABLE --- */}
        <div className="mt-2">
          {PRICING_SECTIONS.map((section, idx) => (
            <div key={idx} className="mb-10">
              {/* Category Header */}
              <div className="bg-[#E2E8F0] px-4 py-2 border-x border-t border-gray-200">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-600">
                  {section.category}
                </h3>
              </div>

              {/* Rows */}
              <div className="bg-white border-x border-b border-gray-200 divide-y divide-gray-100 shadow-sm">
                {section.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="grid grid-cols-1 md:grid-cols-3 group"
                  >
                    {/* Feature Name */}
                    <div className="p-4 flex items-center gap-2 text-sm text-gray-700 font-light">
                      <Info className="w-4 h-4 text-gray-300" />
                      {feature.label}
                    </div>

                    {/* Community Value */}
                    <div className="px-4 py-3 border-t md:border-t-0 md:border-l border-gray-100 flex items-center justify-center md:justify-start">
                      <span className="md:hidden text-[9px] font-bold text-gray-300 mr-2 uppercase">
                        Community:
                      </span>
                      {typeof feature.community === "boolean" ? (
                        feature.community && <CheckIcon />
                      ) : (
                        <span className="text-xs text-gray-500">
                          {feature.community}
                        </span>
                      )}
                    </div>

                    {/* Enterprise Value */}
                    <div className="px-4 py-3 border-t md:border-t-0 md:border-l border-gray-100 bg-slate-50/30 flex items-center justify-center md:justify-start">
                      <span className="md:hidden text-[9px] font-bold text-gray-300 mr-2 uppercase">
                        Enterprise:
                      </span>
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise && <CheckIcon />
                      ) : (
                        <span className="text-xs text-gray-500 font-medium">
                          {feature.enterprise}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
