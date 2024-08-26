import React from "react";

const Header = () => (
  <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center px-[5%]">
    <div className="text-2xl font-bold">SHOP.CO</div>
    <nav>
      <ul className="flex space-x-6">
        <li className="hover:text-gray-600 cursor-pointer">Shop</li>
        <li className="hover:text-gray-600 cursor-pointer">On Sale</li>
        <li className="hover:text-gray-600 cursor-pointer">New Arrivals</li>
        <li className="hover:text-gray-600 cursor-pointer">Brands</li>
      </ul>
    </nav>
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search for products..."
        className="border rounded-full px-4 py-2"
      />
      <div className="cursor-pointer">🛒</div>
      <div className="cursor-pointer">👤</div>
    </div>
  </header>
);

export default Header;
