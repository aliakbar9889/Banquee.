import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image"; // Import Image from next/image

const Page6 = () => {
  return (
    <div className="min-h-screen w-full p-10">
      {/* Top Section */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
        
        {/* First Row */}
        <Image src="/logo1.png" alt="Image 1" width={80} height={24} className="rounded-lg" />
        <Image src="/logo2.png" alt="Image 2" width={80} height={24} className="rounded-lg" />
        <Image src="/logo3.png" alt="Image 3" width={80} height={24} className="rounded-lg" />
        <Image src="/logo4.png" alt="Image 4" width={80} height={24} className="rounded-lg" />
        
        {/* Second Row */}
        <Image src="/logo5.png" alt="Image 5" width={80} height={24} className="rounded-lg" />
        <Image src="/logo10.png" alt="Image 6" width={80} height={24} className="rounded-lg" />
        <Image src="/logo6.png" alt="Image 7" width={80} height={24} className="rounded-lg" />
        <Image src="/logo7.png" alt="Image 8" width={80} height={24} className="rounded-lg" />
        <Image src="/logo8.png" alt="Image 9" width={80} height={24} className="rounded-lg" />
        <Image src="/logo9.png" alt="Image 10" width={80} height={24} className="rounded-lg" />
      </div>

      {/* Center Section */}
      <div className="grid md:grid-cols-2 gap-4 ml-20">
        {/* Left Part */}
        <div>
          <p className="text-gray-700 mt-20 mb-4">Tools</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless </h2>
          <h2 className="text-4xl font-bold text-gray-900 mt-0 ">Integration</h2>
          <p className="text-gray-600 mt-6">
            Porro accusamus voluptas omnis, veritatis quam incidunt eaque
          </p>
          <p className="text-gray-600">culpa iure rerum id architecto. Beatae modi reprehenderit</p>
        </div>

        {/* Right Part */}
        <div className="sm:ml-0">
          <ul className="space-y-2 mt-10 sm:mt-32">
            <li className="flex items-center text-gray-700">
              <FaCheck className="text-green-500 mr-2 bg-gray-100 rounded-lg" />
              Commodi in saepe
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheck className="text-green-500 mr-2 bg-gray-100 rounded-lg" />
              Adipisicing elit.
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheck className="text-green-500 mr-2 bg-gray-100 rounded-lg" />
              Eligendi fugit
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page6;
