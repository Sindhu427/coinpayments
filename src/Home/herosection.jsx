export default function HeroSection() {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center px-4 mt-20">
        <h1 className="text-5xl md:text-7xl font-bold">
          BANK <span className="text-blue-500">YOURSELF</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Instant and reliable payments for businesses and individuals, built on
          Multi-Party Computation (MPC) custody.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Get Started Now
          </button>
          <button className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-black font-semibold">
            Book a Demo
          </button>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 w-full flex justify-center opacity-90">
        <img
          src="/car.png" // put car.png inside public/
          alt="Car"
          className="max-h-[450px] object-contain"
        />
      </div>
    </section>
  );
}
