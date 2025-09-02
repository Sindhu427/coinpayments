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
    <div className="bg-[#0B0E17] text-white py-16 px-6">
      {/* Metrics Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center border-gray-700 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
        <div className="py-6">
          <h2 className="text-5xl font-bold">14+</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-300">
            Years of Expertise <br /> in Cryptoprocessing
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-5xl font-bold">250K+</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-300">
            Merchants Across <br /> the Globe
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-5xl font-bold">1M+</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-300">
            Crypto Wallet <br /> Users
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-5xl font-bold">$50B+</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-300">
            Transaction Volume <br /> Processed
          </p>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="mt-16 text-center max-w-5xl mx-auto">
        <p className="text-gray-400 text-lg tracking-wide mb-8">
          Trusted by Thousands of Companies
        </p>
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
