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
    <div>
      <div className="bg-black text-white py-20 px-16  md:px-40 ">
        {/* Features Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-white  p-10">
              <h3 className="font-bold text-2xl mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white text-2xl mb-8">
            Instant, reliable payments for businesses of any size.{" "}
            <span className="font-semibold">
              Lower fees, faster settlements.
            </span>
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition text-lg">
              Get Started Now
            </button>
            <button className="  bg-gradient-to-br from-white to-blue-200 hover:text-black bg-gray-200 hover:bg-gray-300 text-black px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-br hover:from-white hover:to-white transition text-lg">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
      {/*sentence */}
      <div className="bg-[#0B0F1A] text-center py-20 px-6 w-full">
        <h2 className="text-white font-extrabold leading-tight">
          <span className="text-blue-500 text-5xl md:text-6xl">40+</span>{" "}
          <span className="text-5xl md:text-6xl">CRYPTOCURRENCIES</span>
        </h2>
        <p className="text-white/80 text-xl md:text-2xl tracking-widest mt-4 uppercase">
          Accepted for Payments
        </p>
      </div>
    </div>
  );
}
