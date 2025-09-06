export default function SolutionsSection() {
  // ✅ Reusable card component (local, not separate file)
  const SolutionCard = ({ title, items, dark, marginTop, marginBottom }) => {
    return (
      <div
        className={`w-full h-auto ${
          dark ? "bg-[#080E1B]" : "bg-[#02050F] border border-[#F3F6FD]"
        } text-[#F3F6FD] md:pt-[60px] xs:pt-[20px] md:pb-[60px] xs:pb-[20px] md:px-[60px] xs:px-[20px] flex flex-col justify-center gap-4 z-10 ${
          marginTop || ""
        } ${marginBottom || ""}`}
      >
        <h2 className="md:text-[46px] xs:text-[32px] font-semibold leading-16 uppercase">
          {title}
        </h2>
        <ul className="pl-5 list-disc w-[80%] md:text-xl xs:text-sm font-light leading-[30px]">
          {items.map((item, i) => (
            <li key={i} className="mt-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // ✅ Data arrays
  const solutionsLeft = [
    {
      title: "Luxury Goods",
      items: [
        "Accept cryptocurrencies for high-value purchases online or in-store",
        "Serve a global, privacy-conscious clientele with secure, fast settlement and minimal data sharing",
        "Reduce card issues on high-ticket sales - no card chargebacks and fewer international card declines",
      ],
      dark: false,
      marginTop: "xl:mt-[120px] xs:mt-0",
    },
    {
      title: "ecommerce",
      items: [
        "Easily integrate crypto payments via pre-built plugins",
        "Accept borderless payments instantly without banking delays or high FX costs",
        "Reach new customers by accepting popular cryptocurrencies",
      ],
      dark: true,
    },
  ];

  const solutionsRight = [
    {
      title: "forex",
      items: [
        "Enable fast, borderless deposits and withdrawals for traders worldwide",
        "Accept crypto without banking friction, delays, or local restrictions",
        "Securely track payments with unique deposit addresses for each trader",
        "Let traders pay with debit/credit cards while you receive crypto",
      ],
      dark: true,
    },
    {
      title: "iGaming",
      items: [
        "Reach a global player base with fast crypto deposits and timely payouts",
        "Reduce payment friction by avoiding card issuer declines and limits",
        "Assign unique deposit addresses to players",
        "Let players pay with debit/credit cards while you receive crypto",
      ],
      dark: false,
      marginBottom: "xl:mb-[120px] xs:mb-0",
    },
  ];

  return (
    <section className="bg-[#030406]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-20 xl:py-[100px] xs:py-[100px] xl:px-[20px] md:px-[40px] xs:px-[20px]">
        <h1 className="text-white xl:text-[75px] md:text-[56px] xs:text-[40px] text-center font-extralight xl:leading-[85px] md:leading-[70px] xs:leading-[48px] uppercase">
          <span className="font-bold">Solutions</span>
          <br /> for key markets
        </h1>

        <div className="flex xl:flex-row xs:flex-col flex-wrap justify-between gap-6">
          {/* Left column */}
          <div className="xl:w-[49%] xs:w-[100%] flex flex-col gap-6">
            {solutionsLeft.map((sol, idx) => (
              <SolutionCard key={idx} {...sol} />
            ))}
          </div>

          {/* Right column */}
          <div className="xl:w-[49%] xs:w-[100%] flex xl:flex-col xs:flex-col-reverse gap-6 relative">
            {solutionsRight.map((sol, idx) => (
              <SolutionCard key={idx} {...sol} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#080E1B] w-full mx-auto flex flex-col gap-8 xl:py-[100px] xs:py-[100px] xl:px-[0px] md:px-[40px] xs:px-[20px] relative">
        <h1 className="text-white xl:text-[75px] md:text-[56px] xs:text-[40px] text-center font-extralight xl:leading-[85px] md:leading-[70px] xs:leading-[48px] uppercase">
          READY TO SPEAK <br />
          <span className="font-bold">TO THE EXPERTS?</span>
        </h1>

        <div className="flex flex-col items-center justify-center">
          <p className="xl:text-xl xs:text-lg text-white font-light leading-10 xl:text-left xs:text-center">
            Connect with our team to explore how crypto payments can expand your
            business.
          </p>
          <div className="flex justify-center mt-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-9 py-4 rounded-full font-semibold transition">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
