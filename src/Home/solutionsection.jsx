import React from "react";

const solutions = [
  {
    title: "LUXURY GOODS",
    points: [
      "Accept cryptocurrencies for high-value purchases online or in-store",
      "Serve a global, privacy-conscious clientele with secure, fast settlement and minimal data sharing",
      "Reduce card issues on high-ticket sales – no card chargebacks and fewer international card declines",
    ],
    style: "bg-black border border-white", // card 1
  },
  {
    title: "FOREX",
    points: [
      "Enable fast, borderless deposits and withdrawals for traders worldwide",
      "Accept crypto without banking friction, delays, or local restrictions",
      "Securely track payments with unique deposit addresses for each trader",
      "Let traders pay with debit/credit cards while you receive crypto",
    ],
    style: "bg-[#0B0F17]", // card 2
  },
  {
    title: "eCOMMERCE",
    points: [
      "Easily integrate crypto payments via pre-built plugins",
      "Accept borderless payments instantly without banking delays or high FX costs",
      "Reach new customers by accepting popular cryptocurrencies",
    ],
    style: "bg-[#0B0F17]", // card 3
  },
  {
    title: "iGAMING",
    points: [
      "Reach a global player base with fast crypto deposits and timely payouts",
      "Reduce payment friction by avoiding card issuer declines and limits",
      "Assign unique deposit addresses to players",
      "Let players pay with debit/credit cards while you receive crypto",
    ],
    style: "bg-black border border-white", // card 4
  },
];

export default function SolutionsSection() {
  return (
    <div className="bg-black text-white">
      {/* Blue Background Top Section */}
      <div className="bg-[#0B0E17] py-12 text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-blue-400">40+</span> CRYPTOCURRENCIES
        </h2>
        <p className="text-lg text-gray-200">ACCEPTED FOR PAYMENTS</p>
      </div>

      {/* Solutions Header */}
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold">SOLUTIONS</h3>
        <p className="text-lg text-gray-300">FOR KEY MARKETS</p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-16">
        {solutions.map((item, idx) => (
          <div
            key={idx}
            className={`${item.style} rounded-lg p-6 flex flex-col justify-between`}
          >
            <h4 className="font-bold text-lg mb-4">{item.title}</h4>
            <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#0B0F17] text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          READY TO SPEAK <br />
          <span className="font-bold">TO THE EXPERTS?</span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with our team to explore how crypto payments can expand your
          business.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition">
          Book a Demo
        </button>
      </div>
    </div>
  );
}
