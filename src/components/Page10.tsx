import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image'; // Import the Image component from next/image

const Page10 = () => {
  return (
    <div className="min-h-screen p-4">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-12">
        {/* Left Side */}
        <h1 className="text-4xl font-bold text-gray-900 ml-16">Blog</h1>

        {/* Right Side */}
        <div className="flex items-center text-xl text-teal-700 mr-16">
          <span className="mr-2 hover:cursor-pointer">All Articles</span>
          <FaArrowRight />
        </div>
      </div>

      {/* Center Section - 3 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="text-center">
          <Image
            src="/img11.png"  // Image source path in the public directory
            alt="Image 1"
            width={300}  // Reduced width for normal size
            height={200}  // Reduced height for normal size
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2 mx-10">How To Start Using Banko For Your Startup</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Image 2 */}
        <div className="text-center">
          <Image
            src="/img12.png"  // Image source path in the public directory
            alt="Image 2"
            width={300}  // Reduced width for normal size
            height={200}  // Reduced height for normal size
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2 mx-10">Tips for Growing Your Startup with Banko</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Image 3 */}
        <div className="text-center">
          <Image
            src="/img13.png"  // Image source path in the public directory
            alt="Image 3"
            width={300}  // Reduced width for normal size
            height={200}  // Reduced height for normal size
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2 mx-10">Best Practices for Financial Planning in Startups</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Page10;
