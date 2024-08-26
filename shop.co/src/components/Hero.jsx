import React from "react";

const HeroSection = () => (
  <section className="bg-gray-100 py-20 px-10">
    <h1 className="text-5xl font-bold mb-6">
      FIND CLOTHES THAT MATCHES YOUR STYLE
    </h1>
    <p className="text-xl mb-8 max-w-2xl">
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of style.
    </p>
    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
      Shop Now
    </button>
    <div className="flex justify-between mt-12 max-w-3xl">
      <div className="text-center">
        <div className="font-bold text-2xl">200+</div>
        <div>International Brands</div>
      </div>
      <div className="text-center">
        <div className="font-bold text-2xl">2,000+</div>
        <div>High-Quality Products</div>
      </div>
      <div className="text-center">
        <div className="font-bold text-2xl">30,000+</div>
        <div>Happy Customers</div>
      </div>
    </div>
  </section>
);

export default HeroSection;
