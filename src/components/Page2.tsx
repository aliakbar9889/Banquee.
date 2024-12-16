import React from "react";
import { BiSave } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiMobile4 } from "react-icons/ci";
import { PiChartLineBold } from "react-icons/pi";
import { RiBankCardLine } from "react-icons/ri";
import { CiWifiOn } from "react-icons/ci";
import Image from 'next/image'; // Import Image from next/image

const Page2 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto p-6 md:items-center md:justify-center">
      {/* Left Section */}
      <div className="flex-1 flex flex-col md:items-center md:text-center">
        <h1 className="text-4xl font-bold pr-0 md:pr-0">One app.</h1>
        <p className="text-4xl font-bold mb-6">One banking.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4">
            <AiFillThunderbolt className="p-1 text-3xl text-gray-400 bg-teal-100 rounded-3xl mb-2" />
            <h3 className="text-lg font-semibold mb-2">Instant transaction</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4">
            <BiSave className="text-3xl p-1 text-gray-400 bg-teal-100 rounded-3xl mb-2" />
            <h3 className="text-lg font-semibold">Saving accounts</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4">
            <CiMobile4 className="p-1 text-3xl text-gray-400 bg-teal-100 rounded-3xl mb-2" />
            <h3 className="text-lg font-semibold">Mobile banking</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4">
            <PiChartLineBold className="p-1 text-3xl text-gray-400 bg-teal-100 rounded-3xl mb-2" />
            <h3 className="text-lg font-semibold">Advanced statistics</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4">
            <RiBankCardLine className="text-3xl p-1 text-gray-400 bg-teal-100 rounded-3xl mb-2" />
            <h3 className="text-lg font-semibold">Virtual cards</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          {/* Card 6 */}
          <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4">
            <CiWifiOn className="text-3xl p-1 text-gray-400 bg-teal-100 rounded-3xl mb-2" />
            <h3 className="text-lg font-semibold">Contactless payments</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-0">
        <Image
          src="/img2.png"  // Image source path in the public directory
          alt="Placeholder Image"
          width={500}  // Image width for optimization
          height={300}  // Image height for optimization
          className="w-full max-w-sm rounded-lg"
        />
      </div>
    </div>
  );
};

export default Page2;
