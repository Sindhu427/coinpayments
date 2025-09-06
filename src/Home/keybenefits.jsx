import React from "react";
import key1 from "../assets/key1.webp";
import key2 from "../assets/key2.webp";
import key3 from "../assets/key3.webp";

const benefits = [
  {
    title: (
      <>
        SAVE UP <br />
        TO
        <span className="text-[#387EFF]"> 90%</span> ON <br />
        WITHDRAWAL FEES
      </>
    ),
    description:
      "Save time and money by batching withdrawals from multiple callback addresses, paying just one transaction fee.",
    image: key1,
  },
  {
    title: (
      <>
        ACCURATE <br />
        <span className="text-[#387EFF]">FIXED-RATE</span>
        <br /> INVOICING
      </>
    ),
    description:
      "Guarantee your payments with fixed-rate invoicing. Receive the exact amount you bill, every time.",
    image: key2,
  },
  {
    title: (
      <>
        <span className="text-[#387EFF]">INSTANT </span> <br /> TRANSACTION
        <br /> VERIFICATION
      </>
    ),
    description:
      "See incoming deposits within seconds, not minutes. No more waiting for blockchain confirmations.",
    image: key3,
  },
];

export default function KeyBenefits() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-40">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-white xl:text-[75px] md:text-[56px] xs:text-[40px] font-extralight leading-tight uppercase">
          Key <span className="font-bold">Benefits</span>
          <br /> That Set Us Apart
        </h1>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {benefits.map((benefit, index) => (
          <React.Fragment key={index}>
            {/* Text Card */}
            <div className="border border-white  flex flex-col justify-center bg-black  mx-auto h-fit mt-10">
              <div className="p-9">
                <h3 className="text-3xl font-bold leading-snug uppercase">
                  {benefit.title}
                </h3>
                <p className="mt-6 text-gray-300 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="flex justify-center items-center ">
              <img
                src={benefit.image}
                alt="benefit screenshot"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
