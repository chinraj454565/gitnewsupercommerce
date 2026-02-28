"use client";

import React from "react";
import {
  ArrowRight,
  Zap,
  Grid,
  FileText,
  Settings,
  Share2,
  Target,
  Slack,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ---------------- TYPES ---------------- */

type Feature = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type BlogPost = {
  title: string;
  date: string;
};

type Card = {
  id: number;
  title: string;
  description: string;
  buttonText?: string;
};

/* ---------------- COMPONENT ---------------- */

const SuperHero = () => {
  /* ---------- CTA Cards ---------- */

  const cardData: Card[] = [
    {
      id: 1,
      title: "Need a Super developer to get started?",
      description: "Talk to us about hiring a team for your project.",
    },
    {
      id: 2,
      title: "Are you looking for Enterprise Edition demo?",
      description:
        "Would you like to see B2B, Multi-vendor Marketplace or Multi-tenant capabilities?",
      buttonText: "Book a call",
    },
  ];

  /* ---------- Features ---------- */

  const features: Feature[] = [
    {
      title: "Use Cases",
      desc: "B2B eCommerce, Multi-vendor marketplace, Multi-tenant, And more.",
      icon: Zap,
    },
    {
      title: "Super Features",
      desc: "A quick visual overview.",
      icon: Grid,
    },
    {
      title: "User Docs",
      desc: "Docs for business owners and site administrators.",
      icon: FileText,
    },
    {
      title: "Customization",
      desc: "Deliver exactly what you need.",
      icon: Settings,
    },
    {
      title: "Super Integrations",
      desc: "For headless applications or mobile apps.",
      icon: Share2,
    },
    {
      title: "Super Success Stories",
      desc: "They speak for themselves.",
      icon: Target,
    },
  ];

  /* ---------- Blog Posts ---------- */

  const blogPosts: BlogPost[] = [
    {
      title: "100+ amazing ecommerce websites using Super Commerce",
      date: "JUNE 08, 2021",
    },
    {
      title: "12 Super Commerce online stores with amazingly cool features",
      date: "APRIL 03, 2020",
    },
    {
      title: "10 stylish fashion online stores built with Super Commerce",
      date: "APRIL 01, 2019",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-gray-50 flex items-center justify-center min-h-[60vh] px-8 py-16">
        <div className="max-w-4xl w-full text-center">
          <p className="text-xs font-bold tracking-widest text-slate-900 uppercase mb-6">
            Test a Live Super Commerce Open Source Ecommerce Demo Website
          </p>

          <h1 className="text-2xl md:text-6xl lg:text-5xl font-light text-slate-800 mb-8 tracking-tight">
            Super Commerce{" "}
            <span className="font-normal text-slate-900 uppercase">Demo</span>
          </h1>

          <p className="text-lg md:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            See a demo of customer-facing features of Super Commerce Open Source
            eCommerce. Start developing right away. Or ask for the Enterprise
            Edition details.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#0a1a2f] text-white px-10 py-4 rounded-md font-semibold hover:bg-slate-800 transition-colors">
              See Demo
            </button>
            <button className="w-full sm:w-auto bg-white border border-gray-200 text-slate-900 px-10 py-4 rounded-md font-semibold hover:bg-gray-50 transition-colors shadow-sm">
              Developer Quickstart
            </button>
          </div>
        </div>
      </section>

      {/* CTA CARDS */}
      <div>
        {cardData.map((card) => (
          <div
            key={card.id}
            className="group cursor-pointer relative overflow-hidden w-full max-w-4xl mx-auto mb-6 p-6 md:p-10 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-lg text-slate-600 font-light">
                  {card.description}
                </p>
              </div>

              <div className="flex items-center self-end md:self-center">
                {card.buttonText ? (
                  <div className="flex items-center gap-2 font-semibold text-slate-900 group-hover:underline">
                    {card.buttonText}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                ) : (
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:bg-slate-50">
                    <ArrowRight className="w-5 h-5 text-slate-600" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <main className="min-h-screen bg-[#F8F9FA] py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          <section className="grid grid-cols-1 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;

              return (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-6">
                    <div className="hidden sm:flex p-5 bg-gray-50 rounded-lg text-slate-600 border border-gray-100">
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        {f.title}
                      </h3>
                      <p className="text-slate-500">{f.desc}</p>
                    </div>
                  </div>

                  <div className="p-2 border border-gray-100 rounded bg-white">
                    <ArrowRight
                      size={16}
                      className="text-slate-300 group-hover:text-slate-900"
                    />
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default SuperHero;
