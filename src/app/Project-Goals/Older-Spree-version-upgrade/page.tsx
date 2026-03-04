"use client";
import { useState } from "react";
import Link from "next/link";
import ProjectBox from "@/components/reusablecomponent/projects-goals-box";
import CTACard from "@/components/reusablecomponent/project-goals-CTA-card";

function LeadCaptureForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "", country: "",
    useCases: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const useCaseOptions = ["B2B eCommerce", "Marketplace eCommerce", "Multi-tenant / Multi-store eCommerce", "Other"];

  const handleCheckbox = (option: string) => {
    setForm((prev) => ({
      ...prev,
      useCases: prev.useCases.includes(option) ? prev.useCases.filter((u) => u !== option) : [...prev.useCases, option],
    }));
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-10 text-center">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank you!</h3>
        <p className="text-sm text-gray-500">Check your inbox — your download link is on its way.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        Please fill out the form below in order to receive a download link for our guide on
        &ldquo;How to Evaluate Super Commerce Enterprise Edition for Your Project&rdquo;.
      </p>
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">First Name</label>
            <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-gray-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Last Name</label>
            <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-gray-500" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Email</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-gray-500" />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Company name</label>
          <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-gray-500" />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Country</label>
          <input type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-gray-500" />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-3">Which use case are you interested in?</label>
          <div className="space-y-2.5">
            {useCaseOptions.map((option) => (
              <label key={option} className="flex items-center gap-2.5 cursor-pointer">
                <input type="checkbox" checked={form.useCases.includes(option)} onChange={() => handleCheckbox(option)}
                  className="w-4 h-4 border border-gray-300 rounded accent-black" />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 border border-gray-300 rounded px-4 py-3 bg-white w-fit">
          <div className="w-5 h-5 border-2 border-gray-300 rounded" />
          <span className="text-xs text-gray-500">I&apos;m not a robot</span>
          <div className="ml-4 text-right">
            <div className="text-[9px] text-gray-400 leading-tight">protected by reCAPTCHA</div>
            <div className="text-[9px] text-blue-500 leading-tight">Privacy · Terms</div>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button onClick={() => setSubmitted(true)} className="bg-black text-white text-sm px-8 py-2.5 rounded hover:bg-gray-800 transition-colors">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}



export default function Page() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">

      {/* TOP NAV */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors font-medium">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Blog home
          </Link>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 bg-white border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l5 5.5L1 13h1.5l4-5 3.5 5H13L7.5 7 13 1h-1.5L6.5 5.5 3 1H1z" fill="#111" /></svg>
            </button>
            <button className="w-9 h-9 bg-white border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 1H7C5.9 1 5 1.9 5 3v1H3v2h2v7h2V6h2l.5-2H7V3c0-.3.2-.5.5-.5H9V1z" fill="#111" /></svg>
            </button>
            <button className="w-9 h-9 bg-white border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="5" width="2.5" height="8" rx="0.5" fill="#111" />
                <circle cx="2.25" cy="2.5" r="1.25" fill="#111" />
                <path d="M5.5 5h2.3v1.1C8.1 5.4 8.9 5 9.8 5c1.8 0 2.7 1 2.7 3v5h-2.5V8.3c0-.8-.3-1.3-1-1.3-.7 0-1 .5-1 1.3V13H5.5V5z" fill="#111" />
              </svg>
            </button>
            <button className="w-9 h-9 bg-white border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5.5 8.5a3 3 0 004.2 0l1.8-1.8a3 3 0 00-4.2-4.2L6.2 3.6" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M8.5 5.5a3 3 0 00-4.2 0L2.5 7.3a3 3 0 004.2 4.2l1.1-1.1" stroke="#111" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ARTICLE */}
      <article className="max-w-2xl mx-auto px-6 pt-10 pb-16">

        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] tracking-widest font-semibold text-gray-700 uppercase border border-gray-300 bg-white rounded-full px-3 py-1">
          Super Commerce
          </span>
          <span className="text-[10px] tracking-widest text-gray-400 uppercase">February 13, 2025</span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-semibold leading-snug mb-6 text-gray-900">
          How to Explore & Plan Super Commerce Upgrade From an Older Version [FREE DOWNLOAD]
        </h1>

        {/* INTRO */}
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          Already running on Super? Great — but older versions may limit your ability to take advantage of new features, integrations, and security improvements. Upgrading to the latest version of Super Commerce Enterprise Edition ensures you get the most modern, supported, and secure platform. <strong>Download your free copy</strong> of &ldquo;How to Evaluate Super for Your Project&rdquo;.
        </p>

        {/* SECTION 1 */}
        <h2 className="text-base font-semibold mb-3 text-gray-900">
          Are you facing these challenges on your older Super version?
        </h2>
        <ul className="text-sm text-gray-600 space-y-1.5 mb-8">
          {[
            <span key="1">Missing out on <strong>new features and improvements</strong>.</span>,
            <span key="2"><strong>Security risks</strong> from outdated dependencies.</span>,
            <span key="3">Increasing <strong>maintenance complexity and costs</strong>.</span>,
            <span key="4"><strong>Incompatibility</strong> with modern integrations and services.</span>,
            <span key="5">Lack of <strong>priority support</strong> when issues arise.</span>,
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span>{item}</li>
          ))}
        </ul>

        {/* SECTION 2 */}
        <h2 className="text-base font-semibold mb-3 text-gray-900">
          Why Upgrade to Super Enterprise Edition
        </h2>
        <ul className="text-sm text-gray-600 space-y-1.5 mb-8">
          {[
            <span key="1"><strong>Access to upgrades</strong>: Features, bug fixes, Rails upgrades.</span>,
            <span key="2"><strong>Performance improvements</strong>: Faster, more reliable.</span>,
            <span key="3"><strong>Stronger security</strong>: Ongoing patches and compliance.</span>,
            <span key="4"><strong>Premium support</strong>: Priority access to Super team.</span>,
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span>{item}</li>
          ))}
        </ul>

        {/* SECTION 3 */}
        <h2 className="text-base font-semibold mb-3 text-gray-900">
          Get your free copy of &ldquo;How to Evaluate Super Commerce for Your Project&rdquo;
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          Learn the key steps in the Super evaluation process — from <strong>requirements mapping and solution architecture</strong> to <strong>licensing and delivery planning</strong>.
        </p>

        {/* FORM */}
        <div className="my-10">
          <LeadCaptureForm />
        </div>

        {/* SECTION 4 */}
        <h2 className="text-base font-semibold mb-4 text-gray-900">What to expect from the guide?</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Making the right platform decision is one of the most critical steps in any eCommerce project. This guide will help you make an <strong>educated, low-risk decision</strong> by walking you through the exact process Super recommends for evaluating whether Enterprise Edition is the right fit for your business. Instead of guessing or relying on generic vendor promises, you&apos;ll have a <strong>structured framework</strong> for comparing requirements, evaluating architecture options, and planning your delivery timeline.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          By downloading this guide, you&apos;ll get practical advice on how to assess:
        </p>
        <ul className="text-sm text-gray-600 space-y-1.5 mb-6">
          {[
            <span key="1"><strong>eCommerce features</strong> (catalog, checkout, payments, promotions, multi-channel)</span>,
            <span key="2"><strong>Business-specific customizations</strong> unique to your workflows</span>,
            <span key="3"><strong>Third-party integrations</strong> (ERP, CRM, fulfillment, marketing automation, analytics)</span>,
            <span key="4"><strong>UX layouts & designs</strong> to deliver the right customer experience</span>,
            <span key="5"><strong>Non-functional requirements</strong> such as security, compliance, and performance</span>,
            <span key="6"><strong>Hosting & infrastructure</strong> considerations for scalability and resilience</span>,
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          With this knowledge, you&apos;ll be able to confidently <strong>reduce risks, anticipate costs, and set realistic timelines</strong>. Most importantly, you&apos;ll understand what you can expect from the Super team — and what they&apos;ll expect from you — so you can move faster toward a successful project launch.
        </p>

        {/* CTA CARD */}
        < CTACard />
        {/* Also in */}
        <div className="border-t border-gray-200 pt-6 mb-10">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">Also in</p>
          <div className="space-y-2">
            {[
              "Super Commerce Licensing: BSD-3-Clause Open Source with Commercial and Enterprise Options",
              "Multi-Store eCommerce: How B2B Businesses Are Expanding into B2C Without Doubling Their Infrastructure",
              "Build Custom eCommerce Faster: In-House Teams Meet Super Experts",
            ].map((title, i) => (
              <a key={i} href="#" className="block text-xs text-gray-500 hover:text-gray-800 transition-colors">{title}</a>
            ))}
          </div>
        </div>

        {/* Author */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">Written by</p>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600 font-semibold flex-shrink-0">MF</div>
            <div>
              <p className="text-sm font-medium text-gray-800">Mike Faber — Super Evangelist. Co-founder and CEO of Vendo.</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Mike is a Super Evangelist, promoting the platform&apos;s features and keeping the community updated on its roadmap. Mike is also a co-founder and CEO of Vendo, a major Super contributor and provider of its Enterprise Edition, getting you more features, more security, more integrations so you can go live faster and get all the latest improvements first.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* RELATED ARTICLES GRID */}
      < ProjectBox />

    </main>
  );
}