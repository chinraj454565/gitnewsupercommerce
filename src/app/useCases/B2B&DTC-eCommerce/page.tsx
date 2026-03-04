import Image from "next/image";
import BrandLogoStrip from "@/components/reusablecomponent/brandlogostrip";


export default function Page() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="py-24 text-center max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-widest text-gray-500 mb-6 uppercase">
          Use Case
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          B2B & DTC eCommerce combined
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          All products, customers & orders under one roof for full visibility,
          insights and control.
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
            This is how Super helps you manage B2B & DTC combined
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Multi-vendor Marketplace
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>• Onboard vendors</li>
                <li>• Custom product details</li>
                <li>• Customized storefront</li>
              </ul>

              <Image
                src="/b2b-dtc/1.webp"
                alt="Multi-vendor Marketplace"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>

            {/* 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Member-only eCommerce
              </h3>
              <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                <li>• B2B sign up</li>
                <li>• Regional pricing</li>
                <li>• Product restrictions</li>
              </ul>

              <Image
                src="/b2b-dtc/2.webp"
                alt="Member-only eCommerce"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SELL EVERYWHERE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Sell everything anywhere
            </h3>
            <p className="text-gray-600 mb-6">
              All inventory from any PIM or warehouse available in any sales
              channel.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
              Get started
            </button>
          </div>

          <Image
            src="/b2b-dtc/3.webp"
            alt="Sell everything anywhere"
            width={700}
            height={500}
            className="rounded-xl shadow-sm"
          />

        </div>
      </section>

      {/* CROSS CHANNEL */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <Image
            src="/b2b-dtc/4.webp"
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
              Customers buy in store and receive delivery, order online but
              pick up in store.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
              Get started
            </button>
          </div>

        </div>
      </section>

      {/* PRODUCT SUBCATALOGS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Product subcatalogs
            </h3>
            <p className="text-gray-600 mb-6">
              Each customer sees tailored product assortments.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm">
              Get started
            </button>
          </div>

          <Image
            src="/b2b-dtc/5.webp"
            alt="Product subcatalogs"
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