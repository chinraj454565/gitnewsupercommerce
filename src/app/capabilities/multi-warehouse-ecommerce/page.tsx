import React from "react";
import Image from "next/image";
import CenteredHero from "@/components/reusablecomponent/CenteredHero";
import ProblemGrid from "@/components/reusablecomponent/ProblemGrid";
import FeatureSplit from "@/components/reusablecomponent/FeatureSplit";
import { CommonToAll } from "@/components/reusablecomponent";

const MultiWarehouseEcommerce = () => {
  const problemData = {
    label: "PROBLEM STATEMENT",
    heading: "Too many warehouse locations, too much delivery complexity",

    items: [
      {
        title: "Inventory out-of-sync",
        description:
          "Being out-of-sync with inventory levels leads to overselling or not selling enough",
      },
      {
        title: "No omnichannel sales",
        description:
          "Inventory in Points-of-Sale or some warehouse locations is not available to be sold in all channels leading to losses.",
      },
      {
        title: "Partial deliveries",
        description:
          "Bad customer experience with partial deliveries and inventory unavailability leading to refunds and customer care overload.",
      },
    ],
  };

  const feature1 = {
    title: "Sell everything anywhere",
    description:
      "All inventory from any PoS or warehouse will be available to be sold in any channel. Inventory is synced in real time.",
    image: "/multi-warehouse-ecommerce/feature1.webp",
  };

  const feature2 = {
    title: "Smooth partial deliveries",
    description:
      "Customers order once and get partial deliveries from any warehouse and may track each one separately.",
    image: "/multi-warehouse-ecommerce/feature2.webp",
    reverse: true,
  };

  const feature3 = {
    title: "Inventory transfers",
    description:
      "Inventory might be transferred between warehouse or PoS locations to optimize delivery times and customer experience.",
    image: "/multi-warehouse-ecommerce/feature3.webp",
  };

  const features = [
    {
      title: "Sell more",
      description:
        "Higher product availability leads to higher sales through higher average order value",
    },
    {
      title: "From any location",
      description:
        "Products in various locations are not gathering dust as they can be sold in any channel",
    },
    {
      title: "To more customers",
      description:
        "Every product can be sold to any customer online or in any of physical Points-of-Sale",
    },
  ];

  const stories = [
    {
      title:
        "3form B2B product sample ordering enabled with a Super Commerce cart and checkout with an ERP integration",
      description:
        "3form website was a B2B product catalog with a contact form. The 3form decided to use Super to embed a cart and checkout experience to streamline product sample ordering. Super Commerce was integrated with an ERP to sync the product catalog and allow all 3form customers to use their existing user accounts. The project was delivered within 12 weeks by team augmentation of the 3form in-house dev team.",
      tag: "B2B",
      img: "/multi-warehouse-ecommerce/story1.webp",
    },
    {
      title:
        "ACR Artex – a company that sells survival products worldwide since 1950s uses Super Commerce",
      description:
        "ACR Electronics, Inc. designs and manufactures safety products. The company offers rescue beacons and survival gear for boaters, pilots, hunters, hikers, and combat troops. ACR Electronics serves boat builders and aircraft manufacturing industries worldwide. The company uses Super Commerce for its e-commerce platform that supports international sales.",
      tag: "B2B",
      img: "/multi-warehouse-ecommerce/story2.png",
    },
    {
      title:
        "300-year-old luxury retailer Fortnum & Mason gets 20% more customers with Super Commerce site",
      description:
        "Fortnum & Mason chose Super for its fully responsive eCommerce site to ensure that online customers enjoy the same high-quality experience that the brand has been providing in store for over 300 years.",
      tag: "DTC",
      img: "/multi-warehouse-ecommerce/story3.webp",
    },
    {
      title:
        "Mitchells chose Super for their luxury fashion eCommerce store with human touch",
      description:
        "Mitchells sets the example here with their Super based eCommerce platform that provides customers with exquisite user experience. This way they feel welcome, valued and appreciated at every click, just like they do when visiting Mitchells brick and mortar stores.",
      tag: "DTC",
      img: "/multi-warehouse-ecommerce/story4.webp",
    },
  ];

  return (
    <>
      <CenteredHero
        label="Real-time inventory sync"
        title="Multi-warehouse eCommerce"
        description="Sell online products from multiple warehouses and PoS"
      />
      <section className="bg-[#F3F3F3]  px-4 ">
        {/* Main Container Card */}
        <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-sm">
          {/* Left Content Side */}
          <div className="flex-1 p-5  flex flex-col justify-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#002147] uppercase mb-10">
              IN PARTNERSHIP WITH:
            </p>

            {/* Logo Placeholder */}
            <div className="mb-10 w-32">
              <Image
                src="/multi-warehouse-ecommerce/topLogo.png"
                alt="Avalara Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </div>

            <h2 className="text-xl md:text-base lg:text-xl font-normal text-[#1a1a1a] leading-[1.1] mb-8">
              Cut tax compliance costs, not corners
            </h2>

            <p className="text-lg md:text-xl font-light text-[#4a4a4a] leading-relaxed max-w-md">
              Avalara software automates tax compliance and can help improve
              accuracy while reducing costs.
            </p>
          </div>

          {/* Right Illustration Side */}
          <div className="flex-1">
            <div className=" pr-5 rounded-2xl h-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
              {/* Main Illustration Image Tag */}
              <div className="relative w-full h-full  md:p-1">
                <Image
                  src="/multi-warehouse-ecommerce/topSide.webp"
                  alt="Tax Compliance Illustration"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProblemGrid
        label={problemData.label}
        heading={problemData.heading}
        items={problemData.items}
      />
      <section className="w-full bg-[#F3F3F3] py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#333333] leading-[1.15] tracking-tight">
            Sell from multiple warehouses in any sales channel
          </h2>
        </div>
      </section>
      <FeatureSplit {...feature1} />
      <FeatureSplit {...feature2} />
      <FeatureSplit {...feature3} />
      <section className="bg-[#F3F3F3] py-16 px-6 md:py-15">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline Text */}
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#002147] uppercase mb-6 md:mb-8">
            What you get
          </p>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-4xl font-medium text-[#002147] leading-tight tracking-tight mb-6">
            Higher products availability and lower inventory risks
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-xl font-light text-[#333333] opacity-90 max-w-3xl mx-auto">
            Make all your inventory available to any customer in any channel
            while avoiding overselling
          </p>
        </div>
      </section>

      <CommonToAll features={features} stories={stories} />
    </>
  );
};

export default MultiWarehouseEcommerce;
