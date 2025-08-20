"use client";
import React from "react";

export default function DonatePage() {
  return (
  <div className="min-h-screen font-sans bg-white flex flex-col items-center" style={{ backgroundImage: 'url(/for%20web.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <main className="w-full">
  {/* ...existing code... (header/navigation is handled by layout) */}

      {/* Donate Content */}
      <div className="w-full max-w-2xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-2">Support EcoDoc</h1>
        <p className="text-center text-gray-700 mb-6">
          Help us document and build a greener future. Your donation supports our educational programs, community initiatives, and platform development.
        </p>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Choose Your Donation Method</h2>
          <div className="flex flex-col gap-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Donate with Card</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Donate with PayPal</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Donate with Crypto</button>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm">
          EcoDoc is a registered non-profit. All donations are secure and go directly to our mission.
        </div>
      </div>
        </main>
    </div>
  );
}
