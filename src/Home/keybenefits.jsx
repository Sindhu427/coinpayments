import React from "react";

const benefits = [
  {
    title: (
      <>
        SAVE UP TO <span className="text-blue-500">90%</span> <br /> ON
        WITHDRAWAL FEES
      </>
    ),
    description:
      "Save time and money by batching withdrawals from multiple callback addresses, paying just one transaction fee.",
    image: "/images/withdrawal-fees.png",
  },
  {
    title: (
      <>
        <span className="text-blue-500">INSTANT</span> <br /> TRANSACTION
        VERIFICATION
      </>
    ),
    description:
      "See incoming deposits within seconds, not minutes. No more waiting for blockchain confirmations.",
    image: "/images/transaction-verification.png",
  },
  {
    title: (
      <>
        ACCURATE <br /> <span className="text-blue-500">FIXED-RATE</span>{" "}
        INVOICING
      </>
    ),
    description:
      "Guarantee your payments with fixed-rate invoicing. Receive the exact amount you bill, every time.",
    image: "/images/fixed-rate.png",
  },
];

export default function KeyBenefits() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-light">
          KEY <span className="font-bold">BENEFITS</span>
        </h2>
        <p className="text-xl md:text-2xl mt-2">THAT SET US APART</p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {benefits.map((benefit, index) => (
          <React.Fragment key={index}>
            {/* Text Card */}
            <div
              className={`border-2 border-white rounded-md p-8 bg-black ${
                index % 2 === 1 ? "order-2 lg:order-1" : ""
              }`}
            >
              <h3 className="text-2xl font-bold leading-snug">
                {benefit.title}
              </h3>
              <p className="mt-4 text-gray-400 text-sm">
                {benefit.description}
              </p>
            </div>

            {/* Image Card */}
            <div
              className={`flex justify-center ${
                index % 2 === 1 ? "order-1 lg:order-2" : ""
              }`}
            >
              <img
                src={benefit.image}
                alt="benefit screenshot"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
