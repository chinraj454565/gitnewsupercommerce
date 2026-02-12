import Image from "next/image";
import Link from "next/link";

const SuccessStoriesGrid = () => {
  const stories = [
    {
      tag: "COMPOSABLE",
      title:
        "GoDaddy chose spree for their multi-tenant Ecommerce solution for small businesses",
      description:
        "GoDaddy uses spree Commerce open source software for its multi-tenant eCommerce solution for small businesses with 10s of thousands of unique live storefronts.",
      image:
        "https://spreecommerce.org/wp-content/uploads/2024/07/godaddy-stores-1024x538.webp",
    },
    {
      tag: "DTC",
      title:
        "One of the hottest NFL teams is using spree for their fan merchandise online store",
      description:
        "The New England Patriots' ProShop is the official fan merchandise online store of the team. Cool features include a wishlist, shoppable gift guides, and jersey builders.",
      image:
        "https://spreecommerce.org/wp-content/uploads/2024/08/The-New-England-Patriots-official-fan-merchandise-online-store-1024x576-1.webp",
    },
    {
      tag: "B2B",
      title:
        "3form B2B product sample ordering enabled with a spree Commerce cart and checkout with an ERP integration",
      description:
        "3form website was a B2B product catalog with a contact form. Then 3form decided to use spree to embedded a cart and checkout experience to streamline product sample ordering. spree Commerce was integrated with an ERP to sync the product catalog and allow all 3form customers to use their existing user accounts.",
      image:
        "https://spreecommerce.org/wp-content/uploads/2024/07/3form-B2B-SpreeCommerce-1024x650-41KB.webp",
    },
    {
      tag: "B2B",
      title:
        "Craftsman, the American iconic tool brand, uses spree Commerce for its online store with over 1,200 professional-grade tools",
      description:
        "Craftsman's website is built with spree Commerce, a flexible and scalable open-source e-commerce software. On craftsman.com you will find some really cool features like a sticky photo gallery on the product page as well as product reviews and a “Find locally” option.",
      image:
        "https://spreecommerce.org/wp-content/uploads/2024/07/Craftsman-uses-Spree-Commerce-for-its-online-store-1024x461-1.webp",
    },
    // Add two more items here to fill the 2x2 grid
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
      {/* Centered Header from your screenshot */}

      {/* 2 Row, 2 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            {/* Image Wrapper */}
            <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-2xl bg-[#F3F4F6]">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-6 left-6 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                {story.tag}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-3xl font-semibold text-[#111827] mb-4 leading-tight tracking-tight">
              {story.title}
            </h3>
            <p className="text-lg text-[#4B5563] font-light leading-relaxed mb-6 line-clamp-3">
              {story.description}
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-lg  font-semibold hover:bg-[#132c4d] hover:rounded-[28px] transition-all duration-300 text-[#0B192E] hover:underline"
            >
              Read story <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoriesGrid;
