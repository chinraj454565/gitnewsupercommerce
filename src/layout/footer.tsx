import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const data = {
    heading: "Let's use Spree to build exactly what your business needs",
    primaryBtnText: "Get started",
    secondaryBtnText: "See demo",
    bgImage:
      "https://spreecommerce.org/wp-content/themes/spree/images/footer-shape.webp",
  };
  return (
    <>
      <section className="relative w-full pt-24 pb-0 px-6 overflow-hidden bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#111827] leading-tight mb-10">
            {data.heading}
          </h2>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="#"
              className="px-8 py-4 bg-[#0B192E] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all w-full sm:w-auto"
            >
              {data.primaryBtnText}
            </Link>
            <Link
              href="#"
              className="px-8 py-4 bg-white text-[#111827] font-medium rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 transition-all w-full sm:w-auto"
            >
              {data.secondaryBtnText}
            </Link>
          </div>
        </div>

        {/* Decorative Bottom Shape */}
        <div className="relative w-full h-[200px] md:h-[350px] mt-12">
          <Image
            src={data.bgImage}
            alt="Decorative footer shape"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </section>
      <section className="bg-black text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12 tracking-tight">
            Get the latest to your inbox
          </h2>

          {/* Subscription Form */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[350px] px-6 py-4 rounded-lg bg-white text-black text-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>

          {/* Legal Disclaimer */}
          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            BY SUBSCRIBING YOU ACCEPT OUR <br className="sm:hidden" />
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              TERMS AND CONDITIONS
            </a>{" "}
            AND{" "}
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
        {/* Top Bar with Logo and Get Started */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-12 mb-16">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <img
              src="https://spreecommerce.org/wp-content/themes/spree/images/logo-sign-white.svg"
              alt="Spree Logo"
              className="w-8 h-8"
            />
            <p className="text-xl font-light tracking-tight">
              Spree is an open-source eCommerce framework giving you full
              control and customizability
            </p>
          </div>
          <Link
            href="/get-started"
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-sm">
          {/* Evaluate Spree */}
          <div>
            <h4 className="text-gray-500 mb-6 font-medium">Evaluate Spree</h4>
            <ul className="space-y-4 font-semibold">
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Upgrade an Old Spree Version
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Re-platforming from a SaaS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Re-platforming a Legacy eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  New, Greenfield eCommerce Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-gray-500 mb-6 font-medium">Platform</h4>
            <ul className="space-y-4 font-semibold">
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-gray-500 mb-6 font-medium">Capabilities</h4>
            <ul className="space-y-4 font-semibold">
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Marketplace eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Omnichannel eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Multi-warehouse eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Multi-store eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Multi-region eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Multi-tenant eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Member-only eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Digital product sales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Composable eCommerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-gray-500 mb-2 font-medium">Use cases</h4>
            <span className="text-[10px] text-gray-600 block mb-4 uppercase tracking-widest">
              By Business Model
            </span>
            <ul className="space-y-4 font-semibold">
              <li>
                <Link href="#" className="hover:text-gray-400">
                  B2B eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  B2B & DTC eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  DTC eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Wholesale eCommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Business Equipment or Supplies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  CBD eCommerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="text-gray-500 mb-6 font-medium">Developers</h4>
            <ul className="space-y-4 font-semibold">
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Github
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Slack
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Social and Contact */}
        <div className="flex flex-col items-end gap-6 col-span-2 md:col-span-1">
          <p className="font-semibold text-lg">hello@spreeecommerce.org</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center cursor-pointer hover:bg-gray-800">
              𝕏
            </div>
            <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center cursor-pointer hover:bg-gray-800">
              𝔾
            </div>
            <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center cursor-pointer hover:bg-gray-800">
              𝕐
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex justify-between items-center text-xs text-gray-500">
          <p className="hover:text-white cursor-pointer font-bold">
            Privacy Policy
          </p>
          <p>© 2026 Spree commerce. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
