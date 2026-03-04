import { SuccessStories } from "@/components/reusablecomponent/SuccessStories";

const stories = [
  {
    tag: "Retail & Fashion",
    tagNumber: "B2C",
    title: "GoDaddy chose Spree for their multi-tenant Ecommerce solution for small businesses",
    description: "The team at GoDaddy chose Spree Commerce as their foundation for multi-tenant eCommerce solution for small businesses with over 17M users spread across different countries.",
    img: "/success-stories-images/godaddy-stores.webp",
  },
  {
    tag: "Sports",
    tagNumber: "B2C",
    title: "One of the hottest NFL teams is using Spree for their fan merchandise online store",
    description: "The New England Patriots recently added a permanent new addition to their online store to buy all your team and league merchandise.",
    img: "/success-stories-images/The-New-England-Patriots-official-fan-merchandise-online-store-1024x576-1.webp",
  },
  {
    tag: "Retail & Fashion",
    tagNumber: "B2C",
    title: "Ratio Clothing uses Spree Commerce for its online platform with customized shirts and a machine-learning fitting algorithm",
    description: "Ratio Clothing is a Spree Commerce for its online platform with customized shirts and a machine-learning fitting algorithm.",
    img: "/success-stories-images/Ratio-Clothing-uses-Spree-Commerce-for-its-online-platform-with-customized-shirts-and-a-machine-learning-fitting-algorithm-1024x512.png.webp",
  },
  {
    tag: "Food & Drink",
    tagNumber: "B2C",
    title: "Superfoods store achieves amazing page load speed results after upgrading to Spree 4.1 and implementing the new Spree UX",
    description: "Superfoods store achieves amazing page load speed results after upgrading to Spree 4.1 and implementing the new Spree UX.",
    img: "/success-stories-images/obraz_2024-07-31_122737240-1024x658.png",
  },
  {
    tag: "Sports",
    tagNumber: "B2C",
    title: "Mason Cycles chose Spree for the online presence of its Continent-Crushing bikes that endurance riders love",
    description: "Mason Cycles is a bicycle manufacturer and retailer with beautiful photos and clean customizable UI. It's easy to navigate and user friendly.",
    img: "/success-stories-images/obraz_2024-07-31_122854863-1024x684.png",
  },
  {
    tag: "B2B eCommerce",
    tagNumber: "B2B",
    title: "3form: B2B product sample ordering enabled with a Spree Commerce cart and checkout with an ERP integration",
    description: "3form is a B2B product catalog allowing infinite product forms. The program was constructed within 10 weeks by their in-house tech team.",
    img: "/success-stories-images/obraz_2024-07-31_123125453-1024x683.png",
  },
  {
    tag: "Retail & Fashion",
    tagNumber: "B2C",
    title: "Californian startup Volition Beauty is using Spree Commerce for its crowdsourcing platform for beauty products",
    description: "Volition Beauty connects community-driven skin care, hair care, and beauty products. The platform allows real solutions to transform into producible skincare products.",
    img: "/success-stories-images/obraz_2024-07-31_131952015-1024x448.png",
  },
  {
    tag: "Marketplace",
    tagNumber: "B2C",
    title: "Styletoyle chose Spree for its exclusive online marketplace based on discovery from a highly selective curation of boutiques and designers from around the world",
    description: "Styletoyle has a boutique marketplace attracting unique boutiques and designers from around the world, combining international discovery with curated local finds.",
    img: "/success-stories-images/obraz_2024-07-31_132037734-1024x683.png",
  },
  {
    tag: "Food & Drink",
    tagNumber: "B2C",
    title: "Online groceries marketplace from Vermont uses Spree for its farm-to-table solution",
    description: "Vermont's top groceries marketplace connects families with local farms. The company grew from 10 to over 1900 partner families.",
    img: "/success-stories-images/obraz_2024-07-31_132201842-1024x684.png",
  },
  {
    tag: "Automotive",
    tagNumber: "B2C",
    title: "Spree powers a Danish auto parts eCommerce with over 200K products",
    description: "The platform provides amazing auto parts for Danish customers with a fast and compatible website making it easy to find exactly what they need.",
    img: "/success-stories-images/obraz_2024-07-31_132348670-1024x650.png",
  },
  {
    tag: "Marketplace",
    tagNumber: "B2C",
    title: "Scout & Nimble uses Spree for its online marketplace for shoppable designer rooms and home decor",
    description: "Scout & Nimble is an exclusive eCommerce platform connecting designer brands with customers through their shoppable rooms marketplace.",
    img: "/success-stories-images/Scout-Nimble-uses-Spree-for-its-online-marketplace-for-shoppable-designer-rooms-and-home-decor-1024x768-1.webp",
  },
  {
    tag: "Retail & Fashion",
    tagNumber: "B2C",
    title: "How MilanStyle.com got 45% conversion boost for 725K luxury & fashion products with integration to Spree Commerce",
    description: "Milan Style achieved a 45% conversion boost by integrating Spree Commerce for their marketplace of 725K luxury and fashion products.",
    img: "/success-stories-images/obraz_2024-07-31_132612565-1024x529.png",
  },
  {
    tag: "Retail & Fashion",
    tagNumber: "B2C",
    title: "Craftsman, the American iconic tool brand, uses Spree Commerce for its online store with over 1,200 professional-grade tools",
    description: "Craftsman uses Spree Commerce to power their online store featuring over 1,200 professional-grade tools with an automatic photo gallery.",
    img: "/success-stories-images/Craftsman-uses-Spree-Commerce-for-its-online-store-1024x461-1.webp",
  },
  {
    tag: "Marketplace",
    tagNumber: "B2C",
    title: "Scratch chose Spree for its online marketplace for community-based eCommerce platform",
    description: "Scratch is a community-based eCommerce platform built with Spree, providing tools and resources to help communities buy and sell together.",
    img: "/success-stories-images/obraz_2024-07-31_132728725-1024x427.png",
  },
  {
    tag: "Retail & Fashion",
    tagNumber: "B2C",
    title: "Name of Love uses Spree for its website that allows brides and bridesmaids to create and participate in online showrooms",
    description: "Name of Love built a website with Spree Commerce allowing brides and bridesmaids to create and participate in virtual online showrooms.",
    img: "/success-stories-images/obraz_2024-07-31_123125453-1024x683.png",
  },
];

export default function SuccessStoriesPage() {
  return <SuccessStories stories={stories} />;
}