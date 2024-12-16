import React from "react";
import Image from "next/image"; // Import Image from next/image

const Page4 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-20 px-4">
      {/* Top Section */}
      <div className="w-full p-10 text-left bg-white relative">
        <p className="text-gray-700 text-base mb-7">Saving Accounts</p>
        <h1 className="text-3xl sm:text-4xl font-bold my-4 text-gray-900">Organize your</h1>
        <h1 className="text-3xl sm:text-4xl font-bold my-4 text-gray-900">money the right way</h1>
        <p className="text-gray-700 text-base mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p> Ullam animi culpa nemo accusamus debitis.</p>
        {/* Button hidden on mobile view */}
        <button className="hidden sm:block absolute right-6 bottom-24 text-gray-500 px-4 py-2 rounded items-center">
          <span>All Features</span>
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Center Section */}
      <div className="w-full bg-white mb-10 p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        <div className="w-40 h-40 flex flex-col items-center justify-center rounded-lg">
          <Image
            src="/img4.png"
            alt="New Laptop"
            width={160} // Provide width
            height={160} // Provide height
            className="w-32 h-32 sm:w-40 sm:h-40 hover:cursor-pointer"
          />
          <p className="mt-2 font-semibold">New Laptop</p>
          <p className="text-gray-500">400$</p>
        </div>
        <div className="w-40 h-40 flex flex-col items-center justify-center rounded-lg">
          <Image
            src="/img5.png"
            alt="New Bike"
            width={160} // Provide width
            height={160} // Provide height
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain hover:cursor-pointer"
          />
          <p className="mt-2 font-semibold">New Bike</p>
          <p className="text-gray-500">200$</p>
        </div>
        <div className="w-40 h-40 flex flex-col items-center justify-center rounded-lg">
          <Image
            src="/img6.png"
            alt="Holiday"
            width={160} // Provide width
            height={160} // Provide height
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain hover:cursor-pointer"
          />
          <p className="mt-2 font-semibold">Holiday</p>
          <p className="text-gray-500">1400$</p>
        </div>
        <div className="w-40 h-40 flex flex-col items-center justify-center rounded-lg">
          <Image
            src="/img7.png"
            alt="Camera"
            width={160} // Provide width
            height={160} // Provide height
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain hover:cursor-pointer"
          />
          <p className="mt-2 font-semibold">Camera</p>
          <p className="text-gray-500">100$</p>
        </div>
        <div className="w-40 h-40 flex flex-col items-center justify-center rounded-lg">
          <Image
            src="/img8.png"
            alt="Add Item"
            width={160} // Provide width
            height={160} // Provide height
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain hover:cursor-pointer md:mt-2"
          />
          <p className="mt-2 font-semibold">Add Item</p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
