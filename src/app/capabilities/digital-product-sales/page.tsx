import React from "react";
import Image from "next/image";
import CenteredHero from "@/components/reusablecomponent/CenteredHero";
import ProblemGrid from "@/components/reusablecomponent/ProblemGrid";
import FeatureSplit from "@/components/reusablecomponent/FeatureSplit";
import { CommonToAll } from "@/components/reusablecomponent";

const DigitalProductSales = () => {
  const problemData = {
    label: "PROBLEM STATEMENT",
    heading: "Can't find a customizable solution to sell downloadable files",
    items: [
      {
        title: "File discovery",
        description:
          "A particular way of presenting files eg. photos, videos requires UX adjustments",
      },
      {
        title: "Product variants",
        description:
          "Each file could be purchased in a number of packages or pricing plans",
      },
      {
        title: "File delivery",
        description:
          "Files need to be made available to users in a specific way or with add-ons",
      },
    ],
  };

  const fileFeatures = [
    {
      title: "File upload",
      description:
        "Upload, host, and process your files in ways that's cost efficient and stimulates upselling",
      image: "/digital-product-sales/feature1.webp",
    },
    {
      title: "File discovery UX",
      description:
        "Tailor your shopping experience to the file type eg. audio, video, photos or any other",
      image: "/digital-product-sales/feature2.webp",
      reverse: true,
    },
    {
      title: "File pricing tiers",
      description:
        "Differentiate file pricing based on file quality, sizing, type of usage or any other aspect",
      image: "/digital-product-sales/feature3.webp",
    },
  ];

  const features = [
    {
      title: "Scalable file hosting",
      description:
        "Upload, host and process your files in the background for cost efficiency and scalability",
    },
    {
      title: "Easy file discovery",
      description:
        "Streamline digital file sales for your specific use case and target audience",
    },
    {
      title: "Customizable checkout",
      description:
        "Tweak the cart and checkout to make sense for your products and audience",
    },
  ];

  const stories = [
    {
      title:
        "Sirdar – British yarn manufacturer that dates back to 1880 chooses Super for its ecommerce platform",
      description:
        "Sirdar offers over 100 yarn qualities and hundreds of new patterns (digital products) every year created by the in-house design team of more than twenty knitting and crochet experts.",
      tag: "DIGITAL PRODUCTS",
      img: "/digital-product-sales/story1.webp",
    },
    {
      title:
        "Dissolve – a Canadian high-end stock footage provider uses Super Commerce for its digital products marketplace",
      description:
        "Headquartered in Calgary, Canada, Dissolve is a digital products marketplace that lists both rights-managed and royalty-free content. Their licensed stock footage and photographs are available worldwide for use in all varieties of advertisements, whether it be on TV or simple Google banners.",
      tag: "DIGITAL PRODUCTS",
      img: "/digital-product-sales/story2.webp",
    },
    {
      title:
        "Super powers a headless marketplace for digital downloads such as animation elements and GIFs",
      description:
        "VideoPlasty is the only marketplace in the world for digital products such as Stock Animation, Stock GIFs & Motion Graphics. Users can choose from various product categories, such as character scenes or background loops, to make fantastic-looking videos without the hassle of creating graphics from scratch.",
      tag: "DIGITAL PRODUCTS",
      img: "/digital-product-sales/story3.webp",
    },
  ];

  return (
    <>
      <CenteredHero
        label="Sell digital files, books, tickets"
        title="Digital product sales"
        description="Sell digital files downloaded by customers"
      />
      <ProblemGrid
        label={problemData.label}
        heading={problemData.heading}
        items={problemData.items}
      />
      <section className="w-full bg-[#F3F3F3] py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#333333] leading-[1.15] tracking-tight">
            Build a digital file store or a multi-seller marketplace to delight
            your customers
          </h2>
        </div>
      </section>
      {fileFeatures.map((item, i) => (
        <FeatureSplit
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          reverse={item.reverse}
        />
      ))}
      <section className="bg-[#F3F3F3] py-16 px-6 md:py-15">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline Text */}
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#002147] uppercase mb-6 md:mb-8">
            What you get
          </p>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-4xl font-medium text-[#002147] leading-tight tracking-tight mb-6">
            Build an innovative digital product business on Spree
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-xl font-light text-[#333333] opacity-90 max-w-3xl mx-auto">
            Set your digital files business apart with a unique shopping UX and
            scalable file hosting
          </p>
        </div>
      </section>
      <CommonToAll features={features} stories={stories} />
    </>
  );
};

export default DigitalProductSales;
