import React from 'react';
import { ChevronLeft, Star } from 'lucide-react';

const PropertyDetails = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Top bar */}
      <div className="flex items-center p-4 bg-white">
        <ChevronLeft className="w-6 h-6 cursor-pointer" />
        <span className="font-semibold ml-4">Property Details</span>
      </div>

      {/* Property card */}
      <div className="bg-white p-4 mb-4">
        <img src="/placeholder.svg" alt="Luxury Apartment" className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-bold mb-2">Luxury Apartment</h2>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 mr-1" />
          <span>4.8</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">Sector 54</p>
        <p className="font-semibold">₹25,000/month</p>
      </div>

      {/* Select Period */}
      <div className="bg-white p-4 mb-4">
        <h3 className="font-semibold mb-2">Select Period</h3>
        <div className="flex justify-between">
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white">3 months</button>
          <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700">6 months</button>
          <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700">9 months</button>
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-white p-4 mb-4">
        <h3 className="font-semibold mb-2">Payment Details</h3>
        <div className="flex justify-between mb-2">
          <span>Period</span>
          <span>3 months</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Monthly Payment</span>
          <span>₹25,000</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Security Deposit</span>
          <span>₹25,000</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total Payment</span>
          <span>₹75,000</span>
        </div>
      </div>

      {/* Pay with Circle button */}
      <div className="mt-auto p-4">
        <button className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold">
          Pay with Circle
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;