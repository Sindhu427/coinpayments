import React from "react";

const features = [
  {
    title: "FIAT CONVERSION MADE EASY",
    desc: "Accept credit card payments and receive crypto directly in your wallet, or convert your crypto earnings into fiat currencies and deposit them into your bank.",
  },
  {
    title: "AUTOMATIC FUND RECOVERY",
    desc: "Recovering funds sent to the wrong address on the same chain is as easy as flipping a switch. No waiting, no stress, no support needed.",
  },
  {
    title: "INSURED FUNDS FOR MERCHANTS",
    desc: "Store your funds with confidence. Our custody services are insured to protect your assets.",
  },
  {
    title: "SEAMLESS INTEGRATION",
    desc: "Easy integration with existing e-commerce platforms, accounting software, and point-of-sale systems.",
  },
  {
    title: "MULTI-SIG CUSTODY FOR ENTERPRISES",
    desc: "Enhanced security with multi-signature custody solutions tailored for enterprise users.",
  },
  {
    title: "TELEGRAM PAYMENT BOT",
    desc: "Monetize your Telegram groups by accepting crypto and credit card payments. Grow your community and unlock new revenue opportunities with ease.",
  },
];

export default function CardSection() {
  return (
    <div className="bg-black text-white py-16 px-6">
      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition"
          >
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-300 text-sm mb-6">
          Instant, reliable payments for businesses of any size.{" "}
          <span className="font-semibold">Lower fees, faster settlements.</span>
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition">
            Get Started Now
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-black px-6 py-2 rounded-full font-semibold transition">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
