import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { ChevronLeft, User, Search, Home, UserCircle, Settings, Star } from 'lucide-react';

export default function IphoneShowcase({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (position / maxScroll) * 100;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const propertyCards = [
    { name: "Luxury Apartment", rating: 4.8, location: "Sector 54", price: "₹25,000/month", image: "assets/react.svg" },
    { name: "Cozy Studio", rating: 4.5, location: "DLF Phase 1", price: "₹18,000/month", image: "/placeholder.svg" },
    { name: "Spacious Villa", rating: 4.9, location: "Golf Course Road", price: "₹80,000/month", image: "/placeholder.svg" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-900">
      {/* Left half with radial gradient and text */}
      <div className=" w-1/2 flex flex-col justify-center items-start p-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          How does it Work?
        </h1>
        <p className="text-yellow-200 text-lg">
          we will make it a slow and large and and and and and
        </p>
      </div>

      {/* Right half with black background */}
      <div className="w-1/2 bg-black relative">
        {/* Scrollbar on the right */}
        <div className="absolute right-8 top-1/2 h-1/2 w-1 bg-gray-800 rounded-full transform -translate-y-1/2">
          <div 
            className="w-3 h-3 bg-white rounded-full absolute right-0 transform -translate-x-0"
            style={{ top: `${scrollPosition}%` }}
          ></div>
        </div>
      </div>

  {/* iPhone at the center of the division */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-80 h-[600px] bg-black rounded-[3rem] border-4 border-gray-800 p-2 relative">
          <div className="w-full h-8 bg-black absolute top-0 left-0 rounded-t-[3rem] flex justify-center">
            <div className="w-1/3 h-6 bg-black absolute top-0 rounded-b-xl"></div>
          </div>
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* App content */}
            <div className="flex flex-col h-full">
              {/* Top bar */}
              <div className="flex justify-between items-center p-4 border-b">
                <ChevronLeft className="w-6 h-6" />
                <span className="font-semibold">Search Results</span>
                <User className="w-6 h-6" />
              </div>

              {/* Search bar */}
              <div className="p-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Gurgaon"
                    className="w-full p-2 pr-10 border rounded-md"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Property cards */}
              <div className="flex-1 overflow-y-auto">
                {propertyCards.map((property, index) => (
                  <div key={index} className="flex p-4 border-b">
                    <img src={property.image} alt={property.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold">{property.name}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 fill-yellow-400 mr-1" />
                          <span>{property.rating}</span>
                        </div>
                        <p className="text-sm text-gray-600">{property.location}</p>
                      </div>
                      <p className="font-semibold">{property.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom navigation */}
              <div className="flex justify-around items-center p-4 border-t">
                <Home className="w-6 h-6" />
                <Search className="w-6 h-6" />
                <UserCircle className="w-6 h-6" />
                <Settings className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}