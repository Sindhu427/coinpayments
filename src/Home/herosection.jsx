import car from "../assets/car-photo.webp";

export default function HeroSection() {
  return (
    <section className="relative bg-[#080E1B] text-white min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute  top-0 left-[50%] -translate-x-1/2 lg:w-full lg:bottom-[10%] md:w-[1000px] md:bottom-[20%] xs:w-[500px] xs:bottom-[30%]">
        <img src={car} alt="Car" className="h-full w-full object-cover" />
      </div>

      <div className="text-center px-4 mt-20 z-10">
        <h1 className="xl:text-[100px] md:text-[64px] xs:text-[46px] text-[#F3F6FD] text-center uppercase font-extralight xl:leading-[100px] md:leading-[64px] xs:leading-[44px] flex-grow">
          bank <span className="font-semibold">yourself</span>
        </h1>
        <p className="xl:text-xl md:text-lg xs:text-sm text-white font-light md:leading-6 xs:leading-5 xl:text-left xs:text-center px-14 mt-96">
          Instant and reliable payments for businesses and individuals, built on
          Multi-Party Computation (MPC) custody.
        </p>
        {/* <h1 className="text-5xl md:text-7xl font-bold ">
          BANK <span className="text-blue-500">YOURSELF</span>
        </h1> */}

        {/* <p className="mt-96 text-gray-300 max-w-2xl mx-auto">
          Instant and reliable payments for businesses and individuals, built on
          Multi-Party Computation (MPC) custody.
        </p> */}

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Get Started Now
          </button>
          <button className="px-6 py-3 rounded-full bg-gradient-to-br from-white to-blue-200 text-blue-900 hover:text-black font-semibold hover:bg-gradient-to-br hover:from-white hover:to-white transition">
            Book a Demo
          </button>
        </div>
      </div>

      {/* <div className="relative z-2 max-w-[1280px] h-full mx-auto flex flex-col items-center justify-center py-[50px] md:py-[50px] xs:py-[20px] md:px-0 xs:px-[20px]">
        <h1 className="xl:text-[100px] md:text-[64px] xs:text-[46px] text-[#F3F6FD] text-center uppercase font-extralight xl:leading-[100px] md:leading-[64px] xs:leading-[44px] flex-grow">
          bank <span className="font-semibold">yourself</span>
        </h1>
        <div>
          <p className="xl:text-xl md:text-lg xs:text-sm text-white font-light md:leading-6 xs:leading-5 xl:text-left xs:text-center px-14">
            Instant and reliable payments for businesses and individuals, built
            on Multi-Party Computation (MPC) custody.
          </p>
          <div className="flex md:flex-row xs:flex-col justify-center items-center gap-4 mt-5">
            <a
              className="relative text-white leading-[23px] py-[16px] px-8 rounded-4xl xl:text-xl md:text-lg font-semibold overflow-hidden group transition-colors duration-300"
              href="/signup"
              //style="background: linear-gradient(127deg, rgb(56, 126, 255) 4.45%, rgb(18, 85, 209) 78.7%);"
            >
              <span className="relative z-10">Get Started Now</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                // style="background: rgb(56, 126, 255);"
              ></span>
            </a>
            <a
              href="https://sales.coinpayments.net/"
              className="relative text-black leading-[23px] py-[16px] px-8 rounded-4xl xl:text-xl md:text-lg font-semibold overflow-hidden group transition-colors duration-300"
              //style="background: linear-gradient(127deg, rgb(243, 246, 253) 4.45%, rgb(204, 219, 246) 78.7%);"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Book a Demo
              </span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                //style="background: rgb(255, 255, 255);"
              ></span>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}
