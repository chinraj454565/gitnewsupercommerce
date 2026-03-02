import React from "react";
import CenteredHero from "@/components/reusablecomponent/CenteredHero";
import ProblemGrid from "@/components/reusablecomponent/ProblemGrid";

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
    </>
  );
};

export default MemberOnlySection;
