'use client'

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaCaretDown, FaCaretUp } from "react-icons/fa";

const Page9 = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row p-8 mt-15">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-8 md:ml-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Need help?</h2>
        <div className="mb-4">
          <ul>
            <li className="flex items-center mb-2">
              <FaPhone className="text-teal-700 mr-2" />
              <span className="text-lg">+1 234 567 890</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-teal-700 mr-2" />
              <span className="text-lg">help@banquee.com</span>
            </li>
          </ul>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mt-6">Address</h3>
        <p className="text-gray-600 mt-2">
          123 Example Street, City, Country
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQs</h2>
        <div className="space-y-4">
          {["What is our service?", "How can I contact support?", "Where are we located?", "What is our pricing?", "Do we offer refunds?"].map(
            (question, index) => (
              <div key={index} className="border-b pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{question}</span>
                  {openFAQ === index ? (
                    <FaCaretUp className="text-teal-700" />
                  ) : (
                    <FaCaretDown className="text-teal-700" />
                  )}
                </div>
                {openFAQ === index && (
                  <p className="text-gray-600 mt-2">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum commodi libero perspiciatis amet architecto assumenda, at laborum totam quas.
                  </p>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Page9;
