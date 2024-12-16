import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image"; // Import Image from next/image

const Page5 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white md:flex-row items-center justify-center  p-6">
      {/* Left Section */}
      <div className="md:w-1/2 w-full p-4 ml-12">
        <p className="text-gray-600 mb-4">Notifications</p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Stay notified</h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis beatae ipsam voluptatibus at aperiam hic error eligendi.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="text-green-500 mr-2" />
            Instant Transfer
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="text-green-500 mr-2" />
            Payment worldwide
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="text-green-500 mr-2" />
            Saving accounts
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="text-green-500 mr-2" />
            Feature 4: 24/7 Support
          </li>
        </ul>
        <button className="mt-5 text-gray-500 px-4 py-2 rounded flex items-center">
          <span>All Features</span>
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full p-4 flex justify-center">
        <Image
          src="/img9.png" // Image source
          alt="Product" // Image alt text
          width={500} // Image width
          height={300} // Image height
          className="w-full" // Tailwind class for full width
        />
      </div>
    </div>
  );
};

export default Page5;
