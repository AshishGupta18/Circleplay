import React from 'react';
import { ChevronLeft, User, Search, Home, UserCircle, Settings, Star } from 'lucide-react';

export default function InsideIphone() {
  const propertyCards = [
    { name: "Luxury Apartment", rating: 4.8, location: "Sector 54", price: "₹25,000/month", image: "/placeholder.svg" },
    { name: "Cozy Studio", rating: 4.5, location: "DLF Phase 1", price: "₹18,000/month", image: "/placeholder.svg" },
    { name: "Spacious Villa", rating: 4.9, location: "Golf Course Road", price: "₹80,000/month", image: "/placeholder.svg" },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
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
  );
}