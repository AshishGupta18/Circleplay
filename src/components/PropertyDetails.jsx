import React from 'react';
import { ChevronLeft, Star } from 'lucide-react';

const PropertyDetails = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Top bar */}
      <div className="flex items-center p-2 bg-white">
        <ChevronLeft className="w-5 h-5 cursor-pointer" />
        <span className="font-semibold ml-2 text-sm">Property Details</span>
      </div>

      {/* Property card */}
      <div className="bg-white p-2">
        <img src="/placeholder.svg" alt="Luxury Apartment" className="w-full h-32 object-cover rounded-md mb-2" />
        <h2 className="text-lg font-bold mb-1">Luxury Apartment</h2>
        <div className="flex items-center text-xs text-gray-600 mb-1">
          <Star className="w-3 h-3 fill-yellow-400 mr-1" />
          <span>4.8</span>
        </div>
        <p className="text-xs text-gray-600 mb-1">Sector 54</p>
        <p className="font-semibold text-sm">₹25,000/month</p>
      </div>

      {/* Select Period */}
      <div className="bg-white p-2 mt-2">
        <h3 className="font-semibold mb-1 text-sm">Select Period</h3>
        <div className="flex justify-between">
          <button className="px-2 py-1 rounded-md bg-blue-500 text-white text-xs">3 months</button>
          <button className="px-2 py-1 rounded-md bg-gray-200 text-gray-700 text-xs">6 months</button>
          <button className="px-2 py-1 rounded-md bg-gray-200 text-gray-700 text-xs">9 months</button>
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-white p-2 mt-2">
        <h3 className="font-semibold mb-1 text-sm">Payment Details</h3>
        <div className="flex justify-between mb-1 text-xs">
          <span>Period</span>
          <span>3 months</span>
        </div>
        <div className="flex justify-between mb-1 text-xs">
          <span>Monthly Payment</span>
          <span>₹25,000</span>
        </div>
        <div className="flex justify-between mb-1 text-xs">
          <span>Security Deposit</span>
          <span>₹25,000</span>
        </div>
        <div className="flex justify-between font-semibold text-sm">
          <span>Total Payment</span>
          <span>₹75,000</span>
        </div>
      </div>

      {/* Pay with Circle button */}
      <div className="mt-auto p-5">
        <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold text-sm">
          Pay with Circle
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;