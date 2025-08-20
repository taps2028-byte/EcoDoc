"use client";
import { useState } from "react";
export default function Marketplace() {
  const [showFilter, setShowFilter] = useState(false);
  return (
  <div className="min-h-screen font-sans bg-white">
      {/* Faded Background Image Section */}
      <section className="w-full relative flex items-center justify-center bg-green-50" style={{height: '180px', overflow: 'hidden'}}>
        <img src="/web%20(2).jpeg" alt="Marketplace Banner" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '320px', height: 'auto', opacity: 0.18, zIndex: 1}} />
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4 drop-shadow-lg">EcoDoc Marketplace</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto mb-8 drop-shadow-lg">Shop eco-friendly products and services. Support a greener Zimbabwe!</p>
        </div>
      </section>
      <main className="w-full">
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-10">🛒 EcoDoc Marketplace</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Discover eco-friendly products and services. Shop, save, and support a greener Zimbabwe.</p>
        {/* Filters & Tags with Popup */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700" onClick={() => setShowFilter(true)}>Filter Marketplace</button>
          {showFilter && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-lg p-8 w-96 relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-green-700" onClick={() => setShowFilter(false)}>&times;</button>
                <h3 className="text-xl font-bold text-green-700 mb-4">Filter Marketplace</h3>
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
                  <label className="block text-green-700 font-semibold mb-2">Sort by</label>
                  <select className="border border-green-300 rounded-lg px-2 py-1 w-full">
                    <option>Popularity</option>
                    <option>Eco Impact</option>
                    <option>Price</option>
                  </select>
                </div>
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-bold shadow hover:bg-green-700">Apply Filters</button>
              </div>
            </div>
          )}
        </div>
        {/* Marketplace Items with Badges, Quick View, Eco Rating */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Real product images from public folder */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 relative cursor-pointer">
            <div className="absolute top-3 right-3 bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">🏆 Best Seller</div>
            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">♻️ Eco-Friendly</div>
            <div className="relative w-full h-64">
              <img src="/bin.jpeg" alt="Plastic Bin" className="w-full h-full object-contain rounded-t-xl" />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-green-700">Plastic Bin</h2>
              <p className="text-gray-500 text-sm mt-2">Eco-friendly plastic item for home, office, or garden use.</p>
              <p className="mt-4 text-2xl font-bold text-gray-800">$8.00</p>
              <div className="flex justify-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐</span>
                <span className="text-xs text-gray-500">Eco Rating</span>
              </div>
              <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-md transition duration-200">Add to Cart 🛒</button>
            </div>
          </div>
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 relative cursor-pointer">
            <div className="absolute top-3 right-3 bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">🏆 Best Seller</div>
            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">♻️ Eco-Friendly</div>
            <div className="relative w-full h-64">
              <img src="/bins.jpeg" alt="Plastic Basket" className="w-full h-full object-contain rounded-t-xl" />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-green-700">Plastic Basket</h2>
              <p className="text-gray-500 text-sm mt-2">Eco-friendly plastic basket for home, office, or garden use.</p>
              <p className="mt-4 text-2xl font-bold text-gray-800">$10.00</p>
              <div className="flex justify-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐</span>
                <span className="text-xs text-gray-500">Eco Rating</span>
              </div>
              <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-md transition duration-200">Add to Cart 🛒</button>
            </div>
          </div>
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 relative cursor-pointer">
            <div className="absolute top-3 right-3 bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">🏆 Best Seller</div>
            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">💧 Eco-Friendly</div>
            <div className="relative w-full h-64">
              <img src="/bottles.jpeg" alt="Plastic Bottles" className="w-full h-full object-contain rounded-t-xl" />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-green-700">Plastic Bottles</h2>
              <p className="text-gray-500 text-sm mt-2">Reusable bottles for water and beverages.</p>
              <p className="mt-4 text-2xl font-bold text-gray-800">$3.99</p>
              <div className="flex justify-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐</span>
                <span className="text-xs text-gray-500">Eco Rating</span>
              </div>
              <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-md transition duration-200">Add to Cart 🛒</button>
            </div>
          </div>
        </div>
        {/* Lazy Load & Infinite Scroll Placeholder */}
        <div className="mt-12 text-center text-gray-500">More products loading as you scroll... (infinite scroll coming soon)</div>
      </main>
    </div>
  );
}
