import React from "react";
import CenteredHero from "@/components/reusablecomponent/CenteredHero";
import ProblemGrid from "@/components/reusablecomponent/ProblemGrid";
import FeatureSplit from "@/components/reusablecomponent/FeatureSplit";
import { CommonToAll } from "@/components/reusablecomponent";

const MemberOnlySection = () => {
  const memberProblems = [
    {
      title: "One size does not fit all",
      description:
        "Each customer segment requires a different shopping experience",
    },
    {
      title: "Need separate storefronts",
      description:
        "Need to differentiate product discovery and availability as well as checkout process",
    },
    {
      title: "Need separate product catalogs",
      description:
        "Each customer segment buys different products and quantities",
    },
  ];

  const memberOnlyFeatures = [
    {
      title: "Survey customers on sign up",
      description:
        "New customers complete a registration form, select their customer segment, and answer qualifying questions so the platform can tailor their experience from the beginning.",
      image:
        "https://spreecommerce.org/wp-content/uploads/2024/07/member-only-survey-1024x575.webp",
      reverse: false,
      buttonText: "Get started",
    },

    {
      title: "Sell only to signed in users",
      description:
        "Products and pricing are hidden from visitors. Customers must sign in to view product details and make purchases, enabling private catalogs and controlled access.",
      image:
        "https://spreecommerce.org/wp-content/uploads/2024/07/member-only-users-1024x575.webp",
      reverse: true,
      buttonText: "Get started",
    },

    {
      title: "Offer products that fit",
      description:
        "Each customer segment sees only the product catalog, categories, and pricing relevant to them, creating a personalized shopping experience for every buyer type.",
      image:
        "https://spreecommerce.org/wp-content/uploads/2024/07/member-only-offer-1024x575.webp",
      reverse: false,
      buttonText: "Get started",
    },
  ];

  const features = [
    {
      title: "Don't sell to just anyone",
      description:
        "Identify and qualify customers during signup and collect important business details to understand who you are selling to.",
    },
    {
      title: "Sell to someone",
      description:
        "Selling to verified customers lets you offer exactly the products and pricing they expect to buy.",
    },
    {
      title: "Guidance & upselling",
      description:
        "Engage selected customers with personalized recommendations and improve their overall purchasing experience.",
    },
  ];

  const stories = [
    {
      tag: "B2B",
      title:
        "3form B2B product sample ordering enabled with a Super Commerce cart and checkout with ERP integration",
      description:
        "3form website was a B2B product catalog with a contact form. They introduced a full cart and checkout experience for sample ordering and integrated Super Commerce with their ERP to sync accounts and allow existing customers to access personalized pricing and ordering.",
      img: "/MemberOnlySection/story1.webp",
    },
    {
      tag: "B2B",
      title:
        "Gasido uses Super for its online B2B marketplace for industrial gases",
      description:
        "Gas providers can list their offers on the website and customers can discover relevant suppliers through filters and purchase easily. Suppliers receive the orders through the marketplace and manage fulfillment directly.",
      img: "/MemberOnlySection/story2.webp",
    },
    {
      tag: "B2B",
      title:
        "Nuherbs launches a wholesale B2B eCommerce platform for dietary supplements with Super Commerce",
      description:
        "Nuherbs built a wholesale B2B platform with custom mobile-friendly experience designed for repeat customers while remaining accessible to new buyers.",
      img: "/MemberOnlySection/story3.webp",
    },
    {
      tag: "B2B",
      title:
        "Super powers an eCommerce B2B platform for the electronic components industry",
      description:
        "PCB industry companies use Super Commerce as the foundation for their ordering platform, enabling complex product configuration and scalable B2B workflows.",
      img: "/MemberOnlySection/story4.webp",
    },
  ];

  return (
    <>
      <CenteredHero
        label="Customer sign-up & segmentation"
        title="Member-only eCommerce"
        description="Require customer signup and offer the right products and UX to each customer segment"
      />
      <ProblemGrid
        label="Problem statement"
        heading="Multiple customer personas with different product catalogs and sales processes"
        items={memberProblems}
      />
      <section className="bg-[#F3F3F3] py-5 px-6 md:py-5 md:pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#1a1a1a] text-3xl md:text-6xl font-light leading-[1.15] md:leading-[1.1] max-w-5xl mx-auto tracking-tight">
            Differentiate product, pricing, and shopping experiences for various
            customer segments
          </h2>
        </div>
      </section>
      {memberOnlyFeatures.map((feature, index) => (
        <FeatureSplit
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          reverse={feature.reverse}
          buttonText={feature.buttonText}
        />
      ))}
      <section className="bg-[#F3F3F3] py-16 px-6 md:py-15">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline Text */}
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#002147] uppercase mb-6 md:mb-8">
            WHAT YOU GET
          </p>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-4xl font-medium text-[#002147] leading-tight tracking-tight mb-6">
            One business with many happy customer segments
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-xl font-light text-[#333333] opacity-90 max-w-3xl mx-auto">
            Tailor the shopping experience to each of your customer personas big
            and small
          </p>
        </div>
      </section>
      <CommonToAll features={features} stories={stories} />
    </>
  );
};

export default MemberOnlySection;
