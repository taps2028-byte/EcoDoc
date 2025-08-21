

"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import { useState } from "react";
import { FaRecycle, FaWater, FaUsers, FaTrash, FaIndustry, FaGlobeAfrica, FaArrowRight, FaShoppingCart, FaGift, FaHeart } from "react-icons/fa";

export default function Home() {

  // Animated counter logic
  const [counters, setCounters] = useState({ plastic: 0, water: 0, communities: 0 });
  const target = { plastic: 12458, water: 250000, communities: 85 };
  React.useEffect(() => {
    let frame: number;
    const step = () => {
      let done = true;
      const next = { ...counters };
      (Object.keys(target) as Array<keyof typeof target>).forEach((key) => {
        if (next[key] < target[key]) {
          next[key] += Math.ceil((target[key] - next[key]) / 20);
          done = false;
        }
      });
      setCounters(next);
      if (!done) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const WhatsAppChatButton = dynamic(() => import("../components/WhatsAppChatButton"), { ssr: false });
  return (
  <div className="min-h-screen font-sans bg-white">
      {/* Faded Background Image Section */}
      <section className="w-full relative flex items-center justify-center bg-green-50" style={{height: '260px', overflow: 'hidden'}}>
  <img src="/web%20pic.jpeg" alt="EcoDoc Banner" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: 'auto', opacity: 0.32, zIndex: 1}} />
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold text-green-700 mb-4 drop-shadow-lg">Documenting A Greener Future 🌱</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto mb-8 drop-shadow-lg">
            &quot;The greatest threat to our planet is the belief that someone else will save it.&quot; – Robert Swan
          </p>
        </div>
      </section>
      {/* CTA Blocks with icons */}
      <section className="flex flex-col md:flex-row gap-6 justify-center items-center py-8 bg-green-50">
        <a href="/products" className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg shadow-lg font-semibold transition flex items-center gap-2"><FaShoppingCart className="text-xl" /> Shop EcoCycle Bins</a>
        <a href="/greenrewards" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-6 py-4 rounded-lg shadow-lg font-semibold transition flex items-center gap-2"><FaGift className="text-xl" /> Join GreenRewards</a>
        <a href="/donate" className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg font-semibold transition flex items-center gap-2"><FaHeart className="text-xl animate-pulse" /> Donate to Impact</a>
      </section>
      {/* Scrolling Marquee (React version) with icons */}
      <div className="bg-green-200 py-2 overflow-hidden text-green-800 font-semibold text-lg">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          <span className="flex items-center gap-1"><FaRecycle className="text-green-700" /> 12,000kg plastic recycled</span>
          <span className="flex items-center gap-1"><FaGlobeAfrica className="text-green-700" /> 35 communities reached</span>
          <span className="flex items-center gap-1"><FaUsers className="text-green-700" /> 18 jobs created</span>
          <span className="flex items-center gap-1"><FaRecycle className="text-green-700" /> Econet recycled 5 tons in 2025</span>
          <span className="flex items-center gap-1"><FaGift className="text-yellow-600" /> New partner: GreenTech</span>
          <span className="flex items-center gap-1"><FaIndustry className="text-blue-700" /> Blog: &quot;How to recycle at home&quot;</span>
          <span className="flex items-center gap-1"><FaTrash className="text-green-700" /> Join our clean-up drive this Saturday!</span>
        </div>
      </div>
      {/* Eco Impact Counters with icons */}
      <section className="flex flex-col md:flex-row gap-6 justify-center items-center py-8">
        <div className="bg-white rounded-lg shadow p-6 min-w-[180px] text-center">
          <div className="text-3xl font-bold text-green-700 mb-2 flex items-center gap-2">{counters.plastic.toLocaleString()} <FaRecycle className="text-green-700" /></div>
          <div className="text-gray-600 text-base">Plastics Recycled (kg)</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 min-w-[180px] text-center">
          <div className="text-3xl font-bold text-blue-700 mb-2 flex items-center gap-2">{counters.water.toLocaleString()} <FaWater className="text-blue-700" /></div>
          <div className="text-gray-600 text-base">Water Saved (liters)</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 min-w-[180px] text-center">
          <div className="text-3xl font-bold text-green-700 mb-2 flex items-center gap-2">{counters.communities} <FaUsers className="text-green-700" /></div>
          <div className="text-gray-600 text-base">Communities Engaged</div>
        </div>
      </section>
      {/* Scrolling Timeline: Waste to Product Story with icons */}
      <section className="py-8 px-4 bg-white text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">EcoDoc Journey: Waste to Product</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="flex flex-col items-center">
            <FaTrash className="text-4xl text-green-700" />
            <span className="text-green-700 font-semibold">Plastic Waste Collected</span>
          </div>
          <FaArrowRight className="text-2xl text-green-700" />
          <div className="flex flex-col items-center">
            <FaIndustry className="text-4xl text-green-700" />
            <span className="text-green-700 font-semibold">Recycled & Processed</span>
          </div>
          <FaArrowRight className="text-2xl text-green-700" />
          <div className="flex flex-col items-center">
            <FaTrash className="text-4xl text-green-700" />
            <span className="text-green-700 font-semibold">EcoDoc Products Created</span>
          </div>
          <FaArrowRight className="text-2xl text-green-700" />
          <div className="flex flex-col items-center">
            <FaGlobeAfrica className="text-4xl text-green-700" />
            <span className="text-green-700 font-semibold">Impact in Communities</span>
          </div>
        </div>
      </section>
      {/* Interactive Map Placeholder */}
      <section className="py-8 px-4 bg-white text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Zimbabwe Recycling Map 🗺️</h2>
        <div className="w-full flex justify-center">
          <div className="bg-green-100 border-2 border-green-400 rounded-lg w-[350px] h-[220px] flex items-center justify-center text-green-700 text-lg font-semibold">
            [Interactive Map Coming Soon]
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-12 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">About ECODOC</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          Our company is dedicated to making recycling accessible, rewarding, and impactful. ECODOC empowers communities, businesses, and individuals to participate in sustainable practices and build a greener Zimbabwe for future generations.
        </p>
      </section>
      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 mt-12 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between px-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image src="/logo.png" alt="EcoDoc Logo" width={40} height={40} />
            <span className="font-bold">ECODOC</span>
          </div>
          <div className="flex gap-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-yellow-300" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-yellow-300" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com" aria-label="X" className="hover:text-yellow-300" target="_blank" rel="noopener noreferrer">X</a>
          </div>
          <span className="text-sm mt-4 md:mt-0">© {new Date().getFullYear()} ECODOC. Documenting A Greener Future.</span>
        </div>
      </footer>
  <WhatsAppChatButton />
  <SocialIcons />
    </div>
  );
}
