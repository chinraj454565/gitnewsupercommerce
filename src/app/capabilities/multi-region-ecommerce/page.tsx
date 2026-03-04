import React from "react";
import { Check, ArrowRight, AlertTriangle } from "lucide-react";
import { Image } from "lucide-react";
import { CommonToAll } from "../../../components/reusablecomponent/index";

const MultiRegionSection = () => {
  const problems = [
    {
      title: "Currencies & languages",
      description:
        "Presenting prices in the right currency is tricky and exposes the business to exchange risks",
    },
    {
      title: "Expensive delivery",
      description:
        "International deliveries might be expensive and take much longer than expected.",
    },
    {
      title: "Customs & duties",
      description:
        "Customers expect visibility into all fees and costs and just hate being ambushed",
    },
  ];

  const features2 = [
    {
      title: "Country picker",
      description:
        "Detect the customer's location but allow them to change it any time.",
      buttonText: "Get started",
      imageSrc: "/multi-region-ecommerce/image1.webp", // Replace with your asset
      reverse: false,
    },
    {
      title: "Country-specific shopping",
      description:
        "Allow customers to shop in their own currency, language, pay as they like, get a fast delivery.",
      buttonText: "Get started",
      imageSrc: "/multi-region-ecommerce/image2.webp", // Replace with your asset
      reverse: true, // This flips the layout on desktop
    },
    {
      title: "Outsource complexity",
      description:
        "Use 3rd parties specialized in cross-border sales to address all the pain-points.",
      buttonText: "Get started",
      imageSrc: "/multi-region-ecommerce/image3.webp", // Replace with your asset
      reverse: false,
    },
  ];

  const features = [
    {
      title: "Country-specific",
      description:
        "Sell to each country as if it was the only country in the world.",
    },
    {
      title: "User-friendly",
      description:
        "Give every customer a choice and visibility into fees and taxes.",
    },
    {
      title: "No surprises",
      description: "Avoid ambushing customers with customs or duties fees.",
    },
  ];

  const stories = [
    {
      title:
        "ACR Artex – a company that sells survival products worldwide since 1950s uses Super Commerce",
      description:
        "ACR Electronics, Inc. designs and manufactures safety products. The company offers rescue beacons and survival gear for boaters, pilots, hunters, hikers, and combat troops. ACR Electronics serves boat builders and aircraft manufacturers industries worldwide. The company uses Super Commerce for its e-commerce platform that supports international sales.",
      tag: "B2B",
      img: "/multi-region-ecommerce/newimage4.webp",
    },
    {
      title:
        "A video livestream shopping mobile app with a headless marketplace Super backend",
      description:
        "Vidyodan uses Super Commerce headless backend connected through API to its mobile app available for both iOS and Android users. Payment systems are integrated into the live stream so that the users are able to complete the shopping experience without disconnecting.",
      tag: "Composable",
      img: "/multi-region-ecommerce/image5.webp",
    },
    {
      title:
        "Alabama Chanin – an artisan and sustainable fashion brand uses open source e-commerce solution",
      description:
        "Alabama Chanin is a lifestyle brand of well-designed and thoughtfully made goods for the person and the home. It celebrates and preserves unique traditions and crafting techniques, with a strong commitment to community through Made in the USA, local production. The company is rooted in the tenets of the Slow Design movement: good, clean, fair — which encourages designers, artists, and consumers to create and utilize thoughtful products in a socially and environmentally responsible way.",
      tag: "DTC",
      img: "/multi-region-ecommerce/image6.webp",
    },
    {
      title: "Away uses Super Commerce for its $1.4B smart luggage brand",
      description:
        "Away is an e-commerce luggage startup founded by two former Warby Parker executives that aims to be the ultimate carry-on for travelers. The premium travel brand introduced its streamlined, tech-infused carry-on luggage, selling directly to consumers to keep prices down. The vast majority of its sales takes place on Away’s sleek and user-friendly website built with Super Commerce, a flexible and scalable market-proven e-commerce solution.",
      tag: "DTC",
      img: "/multi-region-ecommerce/image7.webp",
    },
  ];
  // Helper to handle the text replacement requirement
  const transformText = (text: string) => text.replace(/spree/gi, "super");
  return (
    <>
      <div className="bg-[#F3F3F3] font-sans text-[#001D3D]">
        {/* --- HERO SECTION --- */}
        <section className="py-16 px-6 md:py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-gray-500 mb-6">
              Optimal Country Experiences
            </p>
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
              Multi-region eCommerce
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Sell in each country with a local currency, payment and shipping
              methods
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#001D3D] text-white px-10 py-3.5 rounded-md font-bold text-sm hover:bg-slate-800 transition-all">
                Get started
              </button>
              <button className="bg-white border border-gray-100 text-[#001D3D] px-10 py-3.5 rounded-md font-bold text-sm shadow-sm hover:bg-gray-50 transition-all">
                See demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#000] py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header Section */}
          <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
            PROBLEM STATEMENT
          </p>
          <h2 className="text-2xl md:text-5xl font-light text-white mb-16 leading-tight max-w-4xl mx-auto">
            Selling in multiple countries introduces a lot of complexity
          </h2>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="flex flex-col items-center">
                <AlertTriangle
                  className="w-6 h-6 mb-6 text-white"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl md:text-3xl font-extralight text-[#fff] mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xs">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F3F3F3] py-20 px-6 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl text-center font-normal text-[#1A1A1A] mb-24 leading-tight max-w-4xl mx-auto">
            {transformText(
              "Optimize each country-specific experience to maximize sales while avoiding pitfalls",
            )}
          </h2>

          {/* Features List */}
          <div className="space-y-32">
            {features2.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${feature.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12`}
              >
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <h3 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-4">
                    {transformText(feature.title)}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                    {transformText(feature.description)}
                  </p>
                  <button className="bg-[#0A1629] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-opacity-90 transition-all">
                    {transformText(feature.buttonText)}
                  </button>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-1/2">
                  <div className=" rounded-xl  shadow-sm  overflow-hidden">
                    {/* REAL image wrapper (important) */}
                    <div className="relative w-full h-full">
                      <img
                        src={feature.imageSrc}
                        alt={feature.title}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F3F3F3] pt-20 px-6 font-sans text-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-24">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">
              WHAT YOU GET
            </p>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-6 max-w-4xl mx-auto">
              Sell more internationally while avoiding customer care issues
            </h2>
            <p className="text-lg md:text-xl text-gray-500">
              International eCommerce is complicated but there are solutions to
              make it work
            </p>
          </div>
        </div>
      </section>
      <div>
        <CommonToAll features={features} stories={stories} />
      </div>
    </>
  );
};

export default MultiRegionSection;
