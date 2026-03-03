import React from "react";
import Image from "next/image";
import CenteredHero from "@/components/reusablecomponent/CenteredHero";
import ProblemGrid from "@/components/reusablecomponent/ProblemGrid";
import FeatureSplit from "@/components/reusablecomponent/FeatureSplit";
import { CommonToAll } from "@/components/reusablecomponent";

const HeadlessEcommerce = () => {
  const problemData = {
    label: "PROBLEM STATEMENT",
    heading: "Finding fully featured API-first eCommerce solution isn’t easy",
    items: [
      {
        title: "Feature gaps",
        description: "Most headless eCommerce solutions are general purpose",
      },
      {
        title: "Poor documentation",
        description: "Usually API endpoints are poorly documented",
      },
      {
        title: "No support",
        description: "There is little support during implementation",
      },
    ],
  };

  const ecommerceApi = {
    title: "Ecommerce API",
    description:
      "Take advantage of all commerce features in API-only mode. Build storefronts, mobile apps, or backend systems using a flexible and powerful API.",
    image: "/headless-ecommerce/feature1.webp",
    buttonText: "Ecommerce API docs",
  };

  const documentation = {
    title: "Exhaustive documentation",
    description:
      "The API includes detailed examples and ready-to-use snippets across multiple languages such as cURL, JavaScript, Python, PHP, Go and Java.",
    image: "/headless-ecommerce/feature2.webp",
    buttonText: "Developer documentation",
    reverse: true,
  };

  const proactiveSupport = {
    title: "Pro-active support",
    description:
      "Collaborate with our team through shared communication channels, get implementation guidance, and resolve issues quickly during development.",
    image: "/headless-ecommerce/feature3.webp",
    buttonText: "Get started",
  };

  const apiFeatures = [
    {
      title: "API-first",
      description:
        "Battle-tested API improved over time by thousands of global users and real production implementations.",
    },
    {
      title: "MACH-ready",
      description:
        "Microservices-based, API-first, cloud-native and headless architecture ready for modern commerce.",
    },
    {
      title: "Support available",
      description:
        "Implementation guidance and long-term support available from project kickoff to scaling and maintenance.",
    },
  ];

  const apiStories = [
    {
      tag: "Composable",
      title:
        "GoDaddy chose Super Commerce for their multi-tenant ecommerce solution for small businesses",
      description:
        "GoDaddy uses Super Commerce to power storefronts for many businesses. The platform allows sellers to manage catalogs, build storefronts and operate professional online stores easily.",
      img: "/headless-ecommerce/story1.webp",
    },
    {
      tag: "B2B",
      title:
        "Greetabl business streamlined by a custom Super Commerce implementation and fulfillment integration",
      description:
        "Greetabl built a complete gifting platform with personalized packaging and automated fulfillment workflows integrated into their commerce system.",
      img: "/headless-ecommerce/story2.webp",
    },
    {
      tag: "Composable",
      title:
        "A video livestream shopping mobile app with a headless Super Commerce marketplace backend",
      description:
        "A headless commerce backend powers a livestream shopping mobile application, enabling real-time purchasing during live sessions without interruptions.",
      img: "/headless-ecommerce/story3.webp",
    },
    {
      tag: "Digital products",
      title:
        "Super Commerce powers a headless marketplace for digital downloads such as animation elements and GIFs",
      description:
        "A digital marketplace delivers downloadable assets including animations, graphics and media files with flexible purchasing options and licensing.",
      img: "/headless-ecommerce/story4.webp",
    },
  ];
  return (
    <>
      <CenteredHero
        label="Headless eCommerce API"
        title="Headless eCommerce API"
        description="Use Super Commerce headless eCommerce API to build a custom shopping storefront or a mobile app shopping experience"
      />
      <ProblemGrid
        label={problemData.label}
        heading={problemData.heading}
        items={problemData.items}
      />
      <section className="w-full bg-[#F3F3F3] py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-normal text-[#333333] leading-[1.15] tracking-tight">
            Super commerce has been built API-first and comes with full service
            support
          </h2>
        </div>
      </section>
      <FeatureSplit {...ecommerceApi} />
      <FeatureSplit {...documentation} />
      <FeatureSplit {...proactiveSupport} />
      <section className="bg-[#F3F3F3] py-16 px-6 md:py-15">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline Text */}
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#002147] uppercase mb-6 md:mb-8">
            What you get
          </p>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-4xl font-medium text-[#002147] leading-tight tracking-tight mb-6">
            Build a custom eCommerce app that fits your IT ecosystem
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-xl font-light text-[#333333] opacity-90 max-w-3xl mx-auto">
            Customize, test, launch, and scale an eCommerce app that plays
            nicely with your existing systems
          </p>
        </div>
      </section>
      <CommonToAll features={apiFeatures} stories={apiStories} />
    </>
  );
};

export default HeadlessEcommerce;
