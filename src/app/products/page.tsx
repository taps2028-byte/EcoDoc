"use client";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Plastic Bin",
    price: "$8.00",
    desc: "Eco-friendly plastic item for home, office, or garden use.",
    img: "/bin.jpeg",
    badge: "♻️ Eco-Friendly",
  },
  {
    id: 2,
    name: "Plastic Basket",
    price: "$10.00",
    desc: "Eco-friendly plastic basket for home, office, or garden use.",
    img: "/bins.jpeg",
    badge: "♻️ Eco-Friendly",
  },
  {
    id: 3,
    name: "Plastic Bottles",
    price: "$3.99",
    desc: "Reusable bottles for water and beverages.",
    img: "/bottles.jpeg",
    badge: "💧 Eco-Friendly",
  },
  {
    id: 4,
    name: "Buckets",
    price: "$6.00",
    desc: "Durable buckets for multipurpose use.",
    img: "/buckets.jpeg",
    badge: "♻️ Eco-Friendly",
  },
  {
    id: 5,
    name: "Plastic Chairs",
    price: "$15.00",
    desc: "Comfortable and sturdy plastic chairs.",
    img: "/chairs.jpeg",
    badge: "♻️ Eco-Friendly",
  },
  {
    id: 6,
    name: "Plastic Dishes",
    price: "$5.00",
    desc: "Reusable plastic dishes for everyday use.",
    img: "/plastic dishes.jpeg",
    badge: "♻️ Eco-Friendly",
  },
];

export default function Products() {
  const [showFilter, setShowFilter] = useState(false);
  const [quickView, setQuickView] = useState<number|null>(null);
  return (
  <div className="min-h-screen font-sans bg-white">
      {/* Faded Background Image Section */}
      <section className="w-full relative flex items-center justify-center bg-green-50" style={{height: '180px', overflow: 'hidden'}}>
  <img src="/web%20(2).jpeg" alt="Products Banner" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '320px', height: 'auto', opacity: 0.32, zIndex: 1}} />
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4 drop-shadow-lg">EcoCycle Products</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto mb-8 drop-shadow-lg">Modern solutions for sustainable living</p>
        </div>
      </section>
      <main className="w-full">
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-10">♻️ Our Eco-Friendly Products</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our range of sustainable products designed to make recycling simple, affordable, and impactful for every household and business.
        </p>
        {/* Filter Options with Popup */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700" onClick={() => setShowFilter(true)}>Filter Products</button>
          {showFilter && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-lg p-8 w-96 relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-green-700" onClick={() => setShowFilter(false)}>&times;</button>
                <h3 className="text-xl font-bold text-green-700 mb-4">Filter Products</h3>
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2">Category</label>
                  <select className="border border-green-300 rounded-lg px-4 py-2 w-full">
                    <option>All Categories</option>
                    <option>Bins</option>
                    <option>Baskets</option>
                    <option>Bottles</option>
                    <option>Accessories</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2">Material</label>
                  <select className="border border-green-300 rounded-lg px-4 py-2 w-full">
                    <option>All Materials</option>
                    <option>100% Recycled Plastic</option>
                    <option>Biodegradable</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2">Price Range</label>
                  <input type="range" min="10" max="100" className="w-full" />
                  <span className="text-gray-600">$10 - $100</span>
                </div>
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-bold shadow hover:bg-green-700">Apply Filters</button>
              </div>
            </div>
          )}
        </div>
        {/* Product Cards with Flip Effect and Quick View Popup */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 relative cursor-pointer">
              <div className="relative w-full h-64 [perspective:1000px]">
                <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:rotate-y-180 [transform-style:preserve-3d]">
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center [backface-visibility:hidden]">
                    <Image src={product.img} alt={product.name} fill className="rounded-t-xl object-contain" />
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{product.badge}</span>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-green-50 rounded-t-xl [backface-visibility:hidden] rotate-y-180">
                    <span className="text-lg font-bold text-green-700 mb-2">Eco Rating: ⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-700 mb-2">Material: {product.badge}</span>
                    <span className="text-sm text-gray-700 mb-2">Impact: Saved 2kg CO₂</span>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-green-700">{product.name}</h2>
                <p className="text-gray-500 text-sm mt-2">{product.desc}</p>
                <p className="mt-4 text-2xl font-bold text-gray-800">{product.price}</p>
                <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-md transition duration-200" onClick={() => setQuickView(product.id)}>Quick View</button>
                {quickView === product.id && (
                  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-8 w-96 relative">
                      <button className="absolute top-2 right-2 text-gray-500 hover:text-green-700" onClick={() => setQuickView(null)}>&times;</button>
                      <h3 className="text-xl font-bold text-green-700 mb-4">{product.name} Details</h3>
                      <p className="text-gray-700 mb-2">{product.desc}</p>
                      <p className="text-gray-700 mb-2">Eco Rating: ⭐⭐⭐⭐</p>
                      <p className="text-gray-700 mb-2">Material: {product.badge}</p>
                      <p className="text-gray-700 mb-2">Impact: Saved 2kg CO₂</p>
                      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-bold shadow hover:bg-green-700">Add to Cart</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Impact Stats Placeholder */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">🌍 Eco Impact</h3>
          <p className="text-gray-700">By choosing EcoDoc products, you’ve helped save over <span className="font-bold">50kg</span> of plastic and <span className="font-bold">120kg</span> of CO₂ emissions this month!</p>
        </div>
      </main>
    </div>
  );
}
