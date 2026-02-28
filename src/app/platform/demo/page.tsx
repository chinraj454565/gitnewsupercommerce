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
  Calendar,
} from "lucide-react";

const SuperHero = () => {
  const cardData = [
    {
      id: 1,
      title: "Need a Super developer to get started?",
      description: "Talk to us about hiring a team for your project.",
      // buttonText is omitted here to show the "Icon only" version
    },
    {
      id: 2,
      title: "Are you looking for Enterprise Edition demo?",
      description:
        "Would you like to see B2B, Multi-vendor Marketplace or Multi-tenant capabilities?",
      buttonText: "Book a call",
    },
  ];
  const listItems = [
    {
      title: "Use Cases",
      desc: "B2B eCommerce, Multi-vendor marketplace, Multi-tenant, And more.",
      icon: <Zap size={24} />,
    },
    {
      title: "Super Features",
      desc: "A quick visual overview.",
      icon: <Grid size={24} />,
    },
    {
      title: "User Docs",
      desc: "Docs for business owners and site administrators.",
      icon: <FileText size={24} />,
    },
    {
      title: "Customization",
      desc: "Deliver exactly what you need.",
      icon: <Settings size={24} />,
    },
    {
      title: "Super Integrations",
      desc: "For headless applications or mobile apps.",
      icon: <Share2 size={24} />,
    },
    {
      title: "Super Success Stories",
      desc: "They speak for themselves.",
      icon: <Target size={24} />,
    },
  ];

  const features = [
    {
      title: "Use Cases",
      desc: "B2B eCommerce, Multi-vendor marketplace, Multi-tenant, And more.",
      icon: <Zap />,
    },
    {
      title: "Super Features",
      desc: "A quick visual overview.",
      icon: <Grid />,
    },
    {
      title: "User Docs",
      desc: "Docs for business owners and site administrators.",
      icon: <FileText />,
    },
    {
      title: "Customization",
      desc: "Deliver exactly what you need.",
      icon: <Settings />,
    },
    {
      title: "Super Integrations",
      desc: "For headless applications or mobile apps.",
      icon: <Share2 />,
    },
    {
      title: "Super Success Stories",
      desc: "They speak for themselves.",
      icon: <Target />,
    },
  ];

  const blogPosts = [
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
      <section className="bg-gray-50 flex items-center justify-center min-h-[60vh] px-8 py-16">
        <div className="max-w-4xl w-full text-center">
          {/* Overline Text */}
          <p className="text-[1px] md:text-xs  font-bold tracking-widest text-slate-900 uppercase mb-6">
            Test a Live Super Commerce Open Source Ecommerce Demo Website
          </p>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-6xl lg:text-5xl font-light text-slate-800 mb-8 tracking-tight">
            Super Commerce{" "}
            <span className="font-normal text-slate-900 uppercase">Demo</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            See a demo of customer-facing features of Super Commerce Open Source
            eCommerce. Start <br />
            developing right away. Or ask for the Enterprise Edition details.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#0a1a2f] text-white px-10 py-4 rounded-md font-semibold hover:bg-slate-800 transition-colors duration-200">
              See Demo
            </button>
            <button className="w-full sm:w-auto bg-white border border-gray-200 text-slate-900 px-10 py-4 rounded-md font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-sm">
              Developer Quickstart
            </button>
          </div>
        </div>
      </section>
      <div>
        {cardData.map((card) => {
          return (
            <div className="group cursor-pointer relative overflow-hidden w-full max-w-4xl mx-auto mb-6 p-6 md:p-10 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Content Section */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-lg text-slate-600 font-light">
                    {card.description}
                  </p>
                </div>

                {/* Action Section */}
                <div className="flex items-center self-end md:self-center">
                  {card.buttonText ? (
                    <div className="flex items-center gap-2 font-semibold text-slate-900 group-hover:underline decoration-2 underline-offset-4">
                      {card.buttonText}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  ) : (
                    <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:bg-slate-50 transition-colors">
                      <ArrowRight className="w-5 h-5 text-slate-600" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <main className="min-h-screen bg-[#F8F9FA] py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* SECTION 1: Top CTA Banners (Image 1) */}

          {/* SECTION 2: Feature List (Image 3) */}
          <section className="grid grid-cols-1 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className="hidden sm:flex p-5 bg-gray-50 rounded-lg text-slate-600 border border-gray-100">
                    {React.cloneElement(f.icon as React.ReactElement, {
                      size: 28,
                    })}
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
            ))}
          </section>

          {/* SECTION 3: Community & Demo (Image 4 - Top) */}
          <section className="text-center space-y-10">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-light text-slate-800">
                Used by over 5000 businesses around the world
              </h2>
              <p className="text-slate-500">
                Join the Slack community of 7K users and get the most out of
                Super.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Slack className="text-slate-900" size={32} />
                    <h3 className="font-bold text-xl">Super slack channels</h3>
                  </div>
                  <span className="text-sm font-semibold text-slate-400">
                    7K+ members
                  </span>
                </div>
                <p className="text-slate-500 mb-6">
                  Join the Super slack channels to get community support.
                </p>
                <button className="flex items-center gap-2 font-bold hover:underline">
                  Join <ArrowRight size={16} />
                </button>
              </div>

              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Video className="text-slate-900" size={32} />
                    <h3 className="font-bold text-xl">Book a demo</h3>
                  </div>
                  <span className="text-sm font-semibold text-slate-400">
                    30 minutes
                  </span>
                </div>
                <p className="text-slate-500 mb-6">
                  Let's jump on a call to discuss your Super project needs.
                </p>
                <button className="flex items-center gap-2 font-bold hover:underline">
                  Book a call <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 4: Blog Section (Image 4 - Bottom) */}
          <section className="space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                Blog
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-slate-800">
                More about Super Commerce
              </h2>
              <p className="text-slate-500">
                Check out these related posts for more Super Commerce Open
                Source insights and tips
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <div
                  key={i}
                  className="p-8 bg-[#EFEFEF] rounded-2xl flex flex-col justify-between min-h-[320px] hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm">
                        Open-source eCommerce
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold mt-8">
                    Read more <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SuperHero;
