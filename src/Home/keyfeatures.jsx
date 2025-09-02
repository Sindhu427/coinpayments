import React from "react";

export default function KeyFeatures() {
  const features = [
    {
      title: "MULTI-USER ACCOUNT DELEGATION",
      desc: "Secure management, streamlined. New permissions system enables shared access while keeping your account safe. Empower larger teams with confidence and control.",
      type: "blue",
    },
    {
      title: "MPC-BACKED NODE INFRASTRUCTURE",
      desc: "Next-gen security, built in. With multi-party computation (MPC), private keys are never stored in one place or exposed in full - even during signing. Each transaction is authorized by multiple independent nodes working together, making it nearly impossible to hack or compromise. This ensures secure, decentralized signing without a single point of failure.",
      type: "black",
    },
    {
      title: "IN-HOUSE BLOCKCHAIN INTELLIGENCE, EVOLVED",
      desc: "Track funds, assess risk, and detect fraud with precision. Our proprietary system analyzes transactions in real time - flagging tainted or darknet-linked assets before settlement. With 98% mempool-level confirmation, checkout becomes instant, secure and seamless.",
      type: "blue",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          KEY <span className="font-bold">FEATURES</span>
        </h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-10 rounded-md flex flex-col min-h-[350px] ${
                feature.type === "blue"
                  ? "bg-[#0B0E17]"
                  : "bg-black border border-white"
              }`}
            >
              <h3 className="text-xl font-bold mb-10 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-lg mb-6">
          Connect with our sales team to explore tailored crypto payment
          solutions for your business.
        </p>
        <button className="bg-gradient-to-r from-[#DDE6FF] to-[#B0C4FF] text-black px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90">
          Book a Demo
        </button>
      </div>
    </section>
  );
}
