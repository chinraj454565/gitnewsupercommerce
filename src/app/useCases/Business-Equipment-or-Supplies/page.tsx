import Image from "next/image";
import BrandLogoStrip from "@/components/reusablecomponent/brandlogostrip";



export default function Page() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="py-24 text-center max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-widest text-gray-500 mb-6 uppercase">
          Sell high ticket products online
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Sell business equipment or supplies online
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Add a shopping cart to your B2B product catalog and start selling
          online to various customer types
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
            Super helps you sell high-ticket business equipment or supplies
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Member-only eCommerce
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Survey customers on sign up</li>
                <li>• Sell only to signed in users</li>
                <li>• Product subcatalogs</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Multi-warehouse eCommerce
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Sell everything anywhere</li>
                <li>• Smooth partial deliveries</li>
                <li>• Inventory transfers</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Multi-vendor Marketplace
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>• Onboard vendors</li>
                <li>• Curate product details</li>
                <li>• Customize storefront</li>
              </ul>

              <Image
                src="/dtc-b2c/1.webp"
                alt="Multi vendor"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>

            {/* 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Multi-store eCommerce
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>• One admin dashboard</li>
                <li>• Multiple stores or brands</li>
                <li>• Easy merchandising</li>
              </ul>

              <Image
                src="/dtc-b2c/2.webp"
                alt="Multi store"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* WHY SUPER */}
      <section className="py-24 bg-gray-50 text-center max-w-5xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
          Why Super
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Streamline your online sales of business equipment or supplies
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          While respecting your current sales process and differentiating
          the shopping experience
        </p>
      </section>

      {/* SYNC PRODUCTS */}
      <section className="pb-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Sync and manage your products
            </h3>
            <p className="text-gray-600 mb-6">
              Sync your product catalog with Super and manage them using an
              admin dashboard, a spreadsheet upload or API.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
              Get started
            </button>
          </div>

          <Image
            src="/dtc-b2c/3.webp"
            alt="Sync products"
            width={700}
            height={500}
            className="rounded-xl shadow-sm"
          />

        </div>
      </section>

      {/* CUSTOMIZE CHECKOUT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <Image
            src="/dtc-b2c/4.webp"
            alt="Customize checkout"
            width={700}
            height={500}
            className="rounded-xl shadow-sm"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Customize your cart & checkout flows
            </h3>
            <p className="text-gray-600 mb-6">
              Customize checkout to reflect your business logic. Manage
              shipping and taxes calculations. Add store as an extension.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
              Get started
            </button>
          </div>

        </div>
      </section>

      {/* MANAGE CUSTOMERS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Manage customers, orders and shipping
            </h3>
            <p className="text-gray-600 mb-6">
              Make customer order adjustments and place orders on behalf of
              customers. Manage shipping across regions and warehouses.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
              Get started
            </button>
          </div>

          <Image
            src="/dtc-b2c/5.webp"
            alt="Manage customers"
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