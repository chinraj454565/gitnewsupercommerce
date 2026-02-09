import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Testimonial } from "@/components/sections/Testimonial-Section";
import { HighlightSection } from "@/components/sections/Highlight-Section";
import { TestimonialTwo } from "@/components/sections/Testimonial-Two";
import { SuccessStoriesGrid } from "@/components/sections/Success-Stories";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightSection />
      <Testimonial />
      <TestimonialTwo />
      <SuccessStoriesGrid />
    </>
  );
}
