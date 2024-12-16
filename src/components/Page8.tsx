import React from "react";
import { FaStar } from "react-icons/fa"; // React Icon ka star icon import

const Page8 = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Left Side */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-gray-700 text-lg mb-4 md:ml-36">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 md:ml-36">
            People all over the
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 md:ml-36">
            world use banko.
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex items-center md:mr-36">
          <FaStar className="text-teal-700 text-xl mr-2" />
          <p className="text-gray-700 text-lg">
            Rated 4.8/5 from over 1000 users
          </p>
        </div>
      </div>

      {/* Center Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:ml-36 md:mr-36">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg outline outline-teal-800 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-teal-700" />
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Animi maxime reprehenderi repudiandae!</h3>
          <p className="text-gray-600 mb-4">Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>
          <p className="text-gray-700 font-semibold">Cody Fisher</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg outline outline-teal-800 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-teal-700" />
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Animi maxime reprehenderi repudiandae!</h3>
          <p className="text-gray-600 mb-4">Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>
          <p className="text-gray-700 font-semibold">Cody Fisher</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg outline outline-teal-800 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-teal-700" />
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Animi maxime reprehenderi repudiandae!</h3>
          <p className="text-gray-600 mb-4">Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>
          <p className="text-gray-700 font-semibold">Cody Fisher</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg outline outline-teal-800 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-teal-700" />
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Animi maxime reprehenderi repudiandae!</h3>
          <p className="text-gray-600 mb-4">Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>
          <p className="text-gray-700 font-semibold">Cody Fisher</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg outline outline-teal-800 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-teal-700" />
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Animi maxime reprehenderi repudiandae!</h3>
          <p className="text-gray-600 mb-4">Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>
          <p className="text-gray-700 font-semibold">Cody Fisher</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-lg outline outline-teal-800 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-teal-700" />
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Animi maxime reprehenderi repudiandae!</h3>
          <p className="text-gray-600 mb-4">Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>
          <p className="text-gray-700 font-semibold">Cody Fisher</p>
        </div>
      </div>
    </div>
  );
};

export default Page8;
