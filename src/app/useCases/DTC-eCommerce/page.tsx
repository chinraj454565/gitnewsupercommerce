import Image from "next/image";
import BrandLogoStrip from "@/components/reusablecomponent/brandlogostrip";


export default function Page() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="py-24 text-center max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-widest text-gray-500 mb-6 uppercase">
          Selling consumer products online
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          DTC eCommerce
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Sell to online consumers and through multiple Points of Sale with
          one admin dashboard and full visibility
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium">
            Get started
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-md text-sm font-medium">
            See demo
          </button>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <p className="text-xs uppercase tracking-widest text-gray-500 text-center mb-6">
            Capabilities
          </p>

          <h2 className="text-3xl font-semibold text-center mb-14">
            This is how Super helps your DTC eCommerce do better
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Multi-warehouse eCommerce
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>• Sell everything anywhere</li>
                <li>• Smooth partial deliveries</li>
                <li>• Inventory transfers</li>
              </ul>

              <Image
                src="/dtc-b2c/1.webp"
                alt="Multi-warehouse"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>

            {/* 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Multi-country eCommerce
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>• Sell in any country</li>
                <li>• Accept local currencies</li>
                <li>• Localized shipping methods</li>
              </ul>

              <Image
                src="/dtc-b2c/2.webp"
                alt="Multi-country"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ONE PAYMENT PROCESSOR */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              One payment processor
            </h3>
            <p className="text-gray-600 mb-6">
              Use Square for PoS and online payments for a unified
              experience and centralized orders and payments management
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
              Get started
            </button>
          </div>

          <Image
            src="/dtc-b2c/3.webp"
            alt="One payment processor"
            width={700}
            height={500}
            className="rounded-xl shadow-sm"
          />

        </div>
      </section>

      {/* CROSS CHANNEL SHOPPING */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <Image
            src="/dtc-b2c/4.webp"
            alt="Cross-channel shopping"
            width={700}
            height={500}
            className="rounded-xl shadow-sm"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Cross-channel shopping
            </h3>
            <p className="text-gray-600 mb-6">
              Customers buy in-store but get orders delivered. Order online
              but choose in-store pick-up. Re-ordering and post-purchase
              service across all channels.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
              Get started
            </button>
          </div>

        </div>
      </section>

      {/* CENTRALIZED MANAGEMENT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Centralized management
            </h3>
            <p className="text-gray-600 mb-6">
              Manage products, orders, payments across all channels.
              Get omnichannel insights to drive loyalty with discounts or gift cards
              wherever you sell.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
              Get started
            </button>
          </div>

          <Image
            src="/dtc-b2c/5.webp"
            alt="Centralized management"
            width={700}
            height={500}
            className="rounded-xl shadow-sm"
          />

        </div>
      </section>
      {/* BENEFITS */}
      <BrandLogoStrip />
    </main>
  );
}