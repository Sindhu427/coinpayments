import React from "react";

export default function SignupForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          BOOK A DEMO CALL <br />
          WITH <span className="text-blue-600">OUR EXPERTS</span>
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          <span className="font-semibold">Note:</span> This form is for
          businesses only. If you are an individual, please reach out to our{" "}
          <a href="#" className="text-blue-600 underline">
            customer support
          </a>
          . We are always happy to assist you 24/7.
        </p>

        {/* Form Box */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Full Name*"
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="text"
            placeholder="Company Name*"
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="text"
            placeholder="Company Website*"
            className="border rounded-lg p-3 w-full"
          />
          <select className="border rounded-lg p-3 w-full">
            <option>Expected Monthly Volume*</option>
            <option>Under 100,000 USD</option>
            <option>100,000 - 1,000,000 USD</option>
            <option>Above 1,000,000 USD</option>
          </select>
          <select className="border rounded-lg p-3 w-full">
            <option>Country of Incorporation*</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <select className="border rounded-lg p-3 w-full">
            <option>Business Industry*</option>
            <option>Finance</option>
            <option>Technology</option>
            <option>Other</option>
          </select>
          <input
            type="email"
            placeholder="Email*"
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="border rounded-lg p-3 w-full"
          />
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Alternative Contact (Telegram ID, LinkedIn Profile Link)*"
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="col-span-2 flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm text-gray-600">
              I agree to receive electronic marketing communications from
              CoinPayments.
            </p>
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Book a Demo
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-gray-600">
          For more information see our{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
        </p>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 underline">
            ← Back to CoinPayments.net
          </a>
        </div>
      </div>
    </div>
  );
}
