// pages/index.tsx
import React from "react";
import Image from "next/image"; // Import Image from next/image

const Page7 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10">
      {/* Top Section */}
      <div className="text-center mb-10">
        <p className="text-gray-600 text-lg">Account</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Perfect card
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          for your needs.
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta modi alias eius cum rerum perferendis.
        </p>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center justify-center">
        {/* Image */}
        <Image
          src="/img1.png"
          alt="Open Account"
          width={288} // Specify width
          height={240} // Specify height
          className="w-full max-h-full sm:w-72 md:w-80 md:h-60 rounded-lg mb-6"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-10">
          {/* Open Account Button */}
          <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition mb-4 sm:mb-0">
            Open Account
          </button>

          {/* Compare Cards Button */}
          <button className="flex items-center gap-2 text-teal-500 hover:text-teal-600 transition">
            <span>Compare Cards</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page7;
