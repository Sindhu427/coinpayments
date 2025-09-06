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

        <p className="xl:text-xl md:text-lg xs:text-sm text-white  md:leading-6 xs:leading-5 xl:text-left xs:text-center px-14 mt-96 mb-8">
          Instant and reliable payments for businesses and individuals, built on
          Multi-Party Computation (MPC) custody.
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
    </section>
  );
}
