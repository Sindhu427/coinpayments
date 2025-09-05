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
    // <div className="bg-black text-white">
    //   {/* Blue Background Top Section */}
    //   <div className="bg-[#0B0E17] py-12 text-center">
    //     <h2 className="text-3xl font-bold">
    //       <span className="text-blue-400">40+</span> CRYPTOCURRENCIES
    //     </h2>
    //     <p className="text-lg text-gray-200">ACCEPTED FOR PAYMENTS</p>
    //   </div>

    //   {/* Solutions Header */}
    //   <div className="text-center py-12">
    //     <h3 className="text-2xl font-bold">SOLUTIONS</h3>
    //     <p className="text-lg text-gray-300">FOR KEY MARKETS</p>
    //   </div>

    //   {/* Cards Grid */}
    //   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-16">
    //     <div>

    //     </div>
    //     {solutions.map((item, idx) => (
    //       <div
    //         key={idx}
    //         className={`${item.style} rounded-lg p-6 flex flex-col justify-between`}
    //       >
    //         <h4 className="font-bold text-lg mb-4">{item.title}</h4>
    //         <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
    //           {item.points.map((point, i) => (
    //             <li key={i}>{point}</li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>

    //   {/* CTA Section */}
    //   <div className="bg-[#0B0F17] text-center py-16 px-6">
    //     <h2 className="text-3xl md:text-4xl font-light mb-4">
    //       READY TO SPEAK <br />
    //       <span className="font-bold">TO THE EXPERTS?</span>
    //     </h2>
    //     <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
    //       Connect with our team to explore how crypto payments can expand your
    //       business.
    //     </p>
    //     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition">
    //       Book a Demo
    //     </button>
    //   </div>
    // </div>

    <section className="bg-[#030406]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-20 xl:py-[100px] xs:py-[100px] xl:px-[20px] md:px-[40px] xs:px-[20px]">
        <h1 className="text-white xl:text-[75px] md:text-[56px] xs:text-[40px] text-center font-extralight xl:leading-[85px] md:leading-[70px] xs:leading-[48px] uppercase">
          <span className="font-bold">Solutions</span>
          <br /> for key markets
        </h1>
        <div className="flex xl:flex-row xs:flex-col flex-wrap justify-between gap-6">
          <div className="xl:w-[49%] xs:w-[100%] flex flex-col gap-6">
            <div className="w-[100%] h-auto bg-[#02050F] text-[#F3F6FD] border border-[#F3F6FD] md:pt-[60px] xs:pt-[20px] md:pb-[60px] xs:pb-[20px] md:px-[60px] xs:px-[20px] flex flex-col justify-center gap-4 xl:mt-[120px] xs:mt-0 z-10">
              <h2 className="md:text-[46px] xs:text-[32px] font-semibold leading-16 uppercase">
                Luxury Goods
              </h2>
              <ul className="pl-5 list-disc w-[80%] md:text-xl xs:text-sm font-light leading-[30px]">
                <li className="mt-2">
                  Accept cryptocurrencies for high-value purchases online or
                  in-store
                </li>
                <li className="mt-2">
                  Serve a global, privacy-conscious clientele with secure, fast
                  settlement and minimal data sharing
                </li>
                <li className="mt-2">
                  Reduce card issues on high-ticket sales - no card chargebacks
                  and fewer international card declines
                </li>
              </ul>
            </div>
            <div className="w-[100%] h-auto bg-[#080E1B] text-[#F3F6FD] md:pt-[60px] xs:pt-[20px] md:pb-[60px] xs:pb-[20px] md:px-[60px] xs:px-[20px] flex flex-col justify-center gap-4  z-10">
              <h2 className="md:text-[46px] xs:text-[32px] font-semibold leading-16 uppercase">
                <span className="lowercase">e</span>commerce
              </h2>
              <ul className="pl-5 list-disc w-[80%] md:text-xl xs:text-sm font-light leading-[30px]">
                <li className="mt-2">
                  Easily integrate crypto payments via pre-built plugins
                </li>
                <li className="mt-2">
                  Accept borderless payments instantly without banking delays or
                  high FX costs
                </li>
                <li className="mt-2">
                  Reach new customers by accepting popular cryptocurrencies
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:w-[49%] xs:w-[100%] flex xl:flex-col xs:flex-col-reverse gap-6 relative">
            <div className="w-[100%] h-auto bg-[#080E1B] text-[#F3F6FD] md:pt-[60px] xs:pt-[20px] md:pb-[60px] xs:pb-[20px] md:px-[60px] xs:px-[20px] flex flex-col justify-center gap-4 xl:z-10 xs:z-0">
              <h2 className="md:text-[46px] xs:text-[32px] font-semibold leading-16 uppercase">
                forex
              </h2>
              <ul className="pl-5 list-disc w-[80%] md:text-xl xs:text-sm font-light leading-[30px]">
                <li className="mt-2">
                  Enable fast, borderless deposits and withdrawals for traders
                  worldwide
                </li>
                <li className="mt-2">
                  Accept crypto without banking friction, delays, or local
                  restrictions
                </li>
                <li className="mt-2">
                  Securely track payments with unique deposit addresses for each
                  trader
                </li>
                <li className="mt-2">
                  Let traders pay with debit/credit cards while you receive
                  crypto
                </li>
              </ul>
            </div>
            <div className="w-[100%] h-auto bg-[#02050F] text-[#F3F6FD] border border-[#F3F6FD] md:pt-[60px] xs:pt-[20px] md:pb-[60px] xs:pb-[20px] md:px-[60px] xs:px-[20px] flex flex-col gap-4 justify-center xl:mb-[120px] xs:mb-0 z-10">
              <h2 className="md:text-[46px] xs:text-[32px] font-semibold leading-16 uppercase">
                <span className="lowercase">i</span>Gaming
              </h2>
              <ul className="pl-5 list-disc w-[80%] md:text-xl xs:text-sm font-light leading-[30px]">
                <li className="mt-2">
                  Reach a global player base with fast crypto deposits and
                  timely payouts
                </li>
                <li className="mt-2">
                  Reduce payment friction by avoiding card issuer declines and
                  limits
                </li>
                <li className="mt-2">
                  Assign unique deposit addresses to players
                </li>
                <li className="mt-2">
                  Let players pay with debit/credit cards while you receive
                  crypto
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
