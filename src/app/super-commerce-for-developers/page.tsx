import React from "react";
import {
  FileText,
  Puzzle,
  Cpu,
  Settings,
  LayoutGrid,
  PlayCircle,
  Target,
  Github,
  Hexagon,
  ArrowRight,
} from "lucide-react";

import BlogCard from "@/components/reusablecomponent/BlogCard";
import BlogHero from "@/components/reusablecomponent/BlogHero";

const DeveloperResources = () => {
  const resourceLinks = [
    {
      icon: <FileText size={20} />,
      title: "Developer docs",
      desc: "Everything you need to know",
    },
    {
      icon: <Puzzle size={20} />,
      title: "Super Integrations",
      desc: "Use these or build your own",
    },
    {
      icon: <Cpu size={20} />,
      title: "Ecommerce API",
      desc: "For headless applications or mobile apps",
    },
    {
      icon: <Settings size={20} />,
      title: "Customization",
      desc: "Deliver exactly what you need",
    },
    {
      icon: <LayoutGrid size={20} />,
      title: "Super Features",
      desc: "A quick visual overview",
    },
    {
      icon: <PlayCircle size={20} />,
      title: "Super Live Demo",
      desc: "See it in action",
    },
    {
      icon: <Target size={20} />,
      title: "Super Success Stories",
      desc: "They speak for themselves",
    },
  ];

  const blogPosts = [
    {
      category: "B2B ECOMMERCE",
      date: "FEBRUARY 12, 2026",
      title: "Spree Commerce: The Best Open-Source Shopify Alternative",
    },
    {
      category: "OPEN-SOURCE ECOMMERCE",
      date: "FEBRUARY 02, 2026",
      title: "Spree Commerce 5.3: Customer Groups — Segmentation",
    },
    {
      category: "OPEN-SOURCE ECOMMERCE",
      date: "FEBRUARY 02, 2026",
      title: "Spree Commerce 5.3: New Pricing Engine and Price Lists",
    },
    {
      category: "OPEN-SOURCE ECOMMERCE",
      date: "JANUARY 27, 2026",
      title: "Announcing Spree Commerce 5.3 with Price Lists",
    },
    {
      category: "OPEN-SOURCE ECOMMERCE",
      date: "DECEMBER 19, 2025",
      title: "Why VC-Funded Startups Need Source-Available eCommerce",
    },
    {
      category: "OPEN-SOURCE ECOMMERCE",
      date: "DECEMBER 16, 2025",
      title: "Developer Tools — Productivity Boost for Engineering",
    },
  ];

  return (
    <>
      <div className="bg-[#F3F3F3] min-h-screen font-sans text-[#1A1C21] py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center mb-10">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">
              DEVELOPERS, DEVELOPERS, DEVELOPERS!
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Super Commerce for Developers
            </h1>
            <p className="text-gray-600 mb-8">
              Quick links to all the resources a Super Commerce developer might
              need
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#0A192F] text-white px-6 py-2.5 rounded-md font-medium text-sm flex items-center">
                Join Slack
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2.5 rounded-md font-medium text-sm hover:bg-gray-50 transition-colors">
                See demo
              </button>
            </div>
          </div>

          {/* Hiring Callout */}
          <div className="w-full bg-white rounded-xl p-6 mb-4 shadow-sm border border-gray-100 flex justify-between items-center group cursor-pointer hover:border-gray-300 transition-all">
            <div>
              <h3 className="font-semibold text-lg">
                Not a developer or devops yourself?
              </h3>
              <p className="text-gray-500">
                Talk to us about hiring a team for your project.
              </p>
            </div>
            <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
              <ArrowRight size={18} className="text-gray-400" />
            </div>
          </div>

          {/* Resource List */}
          <div className="w-full space-y-3 mb-24">
            {resourceLinks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 flex items-center justify-between shadow-sm border border-gray-100 group cursor-pointer hover:border-gray-300 transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-gray-100 rounded-lg text-gray-600 group-hover:bg-gray-200 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
                <div className="p-1 rounded-full text-gray-300 group-hover:text-gray-600 transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Community Section */}
          <div className="w-full text-center">
            <h2 className="text-3xl font-semibold mb-4">Stay in the loop</h2>
            <p className="text-gray-600 mb-12">
              Join the community and learn how other people get the most out of
              Super.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Github Card */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col items-start text-left">
                <div className="flex justify-between w-full items-center mb-6">
                  <Github size={32} />
                  <span className="text-sm font-semibold text-gray-400">
                    15k+ stars
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  Build any eCommerce solution that your business requires.
                </p>
                <button className="flex items-center gap-2 text-sm font-bold group">
                  Explore{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* RubyGems Card */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col items-start text-left">
                <div className="flex justify-between w-full items-center mb-6">
                  <Hexagon size={32} />
                  <span className="text-sm font-semibold text-gray-400">
                    2.5M downloads
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  Trusted by thousands of developers version after version.
                </p>
                <button className="flex items-center gap-2 text-sm font-bold group">
                  Explore{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="bg-[#F3F3F3] min-h-screen pb-20">
        <BlogHero
          title="Super Commerce open-source"
          subtitle="Check out these related posts for more insights and tips on the topic"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                category={post.category}
                date={post.date}
                title={post.title}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default DeveloperResources;
