import React from "react";
import Slider from "react-slick"; // for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function metricssection() {
  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    // Metrics Section 1
    <div className="bg-[#080E1B] text-white py-16 px-6">
      <div className="bg-[#080E1B] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-gray-700 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
          {/* 1 */}
          <div className="py-6 pl-6 text-left">
            <h2 className="text-7xl font-bold mb-2">14+</h2>
            <p className="text-base font-bold text-white leading-snug">
              Years of Expertise <br /> in Cryptoprocessing
            </p>
          </div>

          {/* 2 */}
          <div className="py-6 pl-6 text-left">
            <h2 className="text-7xl font-bold mb-2">250K+</h2>
            <p className="text-base font-bold text-white leading-snug">
              Merchants Across <br /> the Globe
            </p>
          </div>

          {/* 3 */}
          <div className="py-6 pl-6 text-left">
            <h2 className="text-7xl font-bold mb-2">1M+</h2>
            <p className="text-base font-bold text-white leading-snug">
              Crypto Wallet <br /> Users
            </p>
          </div>

          {/* 4 */}
          <div className="py-6 pl-6 text-left">
            <h2 className="text-7xl font-bold mb-2">$50B+</h2>
            <p className="text-base font-bold text-white leading-snug">
              Transaction Volume <br /> Processed
            </p>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className=" text-center max-w-5xl mx-auto">
        <div className="  text-center text-white font-extralight mb-12 md:text-[32px] xs:text-[26px]">
          Trusted by Thousands of Companies
        </div>

        <Slider {...settings}>
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Jetcraft_logo.png"
              alt="Jetcraft"
              className="h-10"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Overstock_logo.png"
              alt="Overstock"
              className="h-10"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.praxismedia.co.uk/wp-content/uploads/2022/09/praxis-logo.png"
              alt="Praxis"
              className="h-10"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://nsusgroup.com/assets/logo.svg"
              alt="NSUS"
              className="h-10"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/73/BetConstruct_logo.png"
              alt="BetConstruct"
              className="h-10"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
