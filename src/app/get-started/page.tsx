"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const ContactPage = () => {
  // Simple state for demonstration, though not connected to backend yet
  const [isSuccess, setIsSuccess] = useState(true);

  const steps = [
    {
      num: "01.",
      title: "An exploratory call",
      desc: "Let's jump on a call to talk about your project requirements, timeline and budget expectations. We'll also answer any questions you might have and could do a full demo of the Super platform.",
    },
    {
      num: "02.",
      title: "A development proposal",
      desc: "Based on our conversation and scoping, we'll prepare a delivery proposal including list of features or integrations and a proposed timeline and budget along with team staffing and roles.",
    },
    {
      num: "03.",
      title: "Development kickoff",
      desc: "Once the proposal is reviewed, discussed, adjusted and approved, our team will augment yours to jointly deliver the software you require. We'll work as one team with a shared slack channel and team meetings.",
    },
    {
      num: "04.",
      title: "Hand-over & maintenance",
      desc: "Once delivery is completed and the project is stabilized, we could hand it over to your team or keep working with you to maintain, further develop, and optimize your Super-based platform.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F3F3] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Content & Steps */}
        <section className="space-y-12">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Get Started
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-[#1A2B49] leading-tight">
              Tell us about your needs
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              Let us know in the form below what kind of project you need to
              deliver and we'll be happy to help. Please specify if it's a new
              or existing business, what is the use case (B2C, B2B, marketplace,
              multi-tenant, other), what customizations and integrations are
              needed, what is your expected timeline and what you'd need from
              our team. This way we'll be able to address your needs. Thanks!
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              How it works
            </p>
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6 group">
                  <span className="text-sm font-bold text-gray-400 pt-1">
                    {step.num}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#1A2B49]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: The Form */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-xl font-light text-[#1A2B49] mb-8">
            Fill the form below
          </h2>

          {/* Optional Success Banner as seen in screenshot */}
          {isSuccess && (
            <div className="mb-8 flex items-center justify-between bg-gray-50 border border-gray-100 p-4 rounded-xl">
              <div className="flex items-center gap-3 text-green-600">
                <CheckCircle2 size={24} />
                <span className="text-sm font-medium text-gray-700">
                  Success!
                </span>
              </div>
              <div className="flex flex-col items-end opacity-60 scale-75 origin-right">
                <div className="w-12 h-6 bg-orange-500 rounded-sm" />
                <span className="text-[8px] uppercase tracking-tighter">
                  Cloudflare
                </span>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your business email address"
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600">
                Job title
              </label>
              <input
                type="text"
                placeholder="Your job title at your company"
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-400 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-600">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={6}
                placeholder="Tell us more about your project."
                className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-400 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#0F172A] text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
            >
              Send message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
