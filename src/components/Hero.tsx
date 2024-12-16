import React from 'react';
import { TiTick } from "react-icons/ti";
import Image from 'next/image';  // Import Image from next/image

const Page = () => {
  return (
    <div className="py-20 mb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="flex flex-col justify-center px-6 mb-8 pb-20">
          <h2 className="text-6xl font-bold text-black mb-4">Banking</h2>
          <h2 className="text-6xl font-bold mb-2">Starts Here.</h2>
          <p className="text-gray-700 mt-5 font-semibold mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <span className="text-gray-700 mt-5 font-semibold mb-3">
            Eaque expedita odio neque voluptate? Itaque amet
          </span>

          {/* Names with check marks - 2 top, 2 bottom */}
          <div className="grid grid-cols-2 gap-4 mt-5">
            {/* First row */}
            <div className="flex items-center text-black">
              <span className="text-teal-500 mr-2">
                <TiTick className="bg-gray-100 rounded-lg" />
              </span>
              Instant Transfer
            </div>
            <div className="flex items-center text-black">
              <span className="text-teal-500 mr-2">
                <TiTick className="bg-gray-100 rounded-lg" />
              </span>
              Payment worldwide
            </div>

            {/* Second row */}
            <div className="flex items-center text-black">
              <span className="text-teal-500 mr-2">
                <TiTick className="bg-gray-100 rounded-lg" />
              </span>
              Saving accounts
            </div>
            <div className="flex items-center text-black">
              <span className="text-teal-500 mr-2">
                <TiTick className="bg-gray-100 rounded-lg" />
              </span>
              100% mobile banking
            </div>
          </div>

          {/* Button and name with right arrow */}
          <div className="flex items-center space-x-4 mt-8">
            <button className="bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 hover:border-gray-400 hover:outline-gray-700 transition duration-300">
              Open Account
            </button>
            <div className="flex items-center text-teal-500 cursor-pointer ">
              <span className="mr-2">John Doe</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center">
          <Image
            src="/img1.png"  // Ensure this image exists in the public directory
            alt="Banking illustration"
            width={350}       // Set the width to 350px or adjust as per your requirement
            height={350}      // Set the height to 350px or adjust as per your requirement
            className="rounded-lg mb-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
