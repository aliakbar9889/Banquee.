import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';  // Check Icon
import Image from 'next/image'; // Import Image from next/image

const Page3 = () => {
  return (
    <div className="max-w-full container mx-auto py-10 bg-teal-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        {/* Left Side */}
        <div className="space-y-4 ml-20">
          <h1 className="text-3xl font-bold">Send & receive</h1>
          <h1 className="text-3xl font-bold">money instantly</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <BsFillCheckCircleFill className="text-green-500 mr-2" />
              Commodi in saepe
            </li>
            <li className="flex items-center">
              <BsFillCheckCircleFill className="text-green-500 mr-2" />
              Adipisicing elit
            </li>
            <li className="flex items-center">
              <BsFillCheckCircleFill className="text-green-500 mr-2" />
              Eligendi fugit quos
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center">
          <Image
            src="/img3.png"  // Image source in the public directory
            alt="Image"       // Alt text for the image
            width={500}        // Set image width
            height={300}       // Set image height
            className="max-w-full sm:max-w-64 mb-5" // Apply styles
          />
        </div>
      </div>
    </div>
  );
};

export default Page3;
