
import React from "react";
import Footer from "../../components/Footer";
import SocialIcons from "../../components/SocialIcons";
import WhatsAppChatButton from "../../components/WhatsAppChatButton";

export default function AcademyPage() {
  return (
  <main className="min-h-screen font-sans bg-white flex flex-col items-center" style={{ backgroundImage: 'url(/for%20web.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

  {/* Academy Content */}
      <div className="w-full max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-2">EcoDoc Academy 🎓</h1>
        <p className="text-center text-gray-700 mb-6">
          Learn about sustainability, waste management, and recycling with our online courses and tutorials. 🌿 "The greatest threat to our planet is the belief that someone else will save it." – Robert Swan
        </p>
  <h2 className="text-xl font-semibold text-green-700 mb-2">Live Webinars 📺</h2>
        <div className="flex gap-4 mb-6">
          <div className="bg-blue-100 rounded-lg p-4 flex-1">
            <div className="font-semibold text-blue-800">♻️ Recycling 101 Webinar</div>
            <div className="text-sm text-gray-600">2025-09-01</div>
            <a href="#" className="text-blue-700 underline text-sm">Join Live</a>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 flex-1">
            <div className="font-semibold text-blue-800">⚡ Waste-to-Energy Live</div>
            <div className="text-sm text-gray-600">2025-09-15</div>
            <a href="#" className="text-blue-700 underline text-sm">Join Live</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Card 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-bold text-green-800 text-lg mb-1">Intro to Recycling ♻️</div>
            <div className="text-gray-700 mb-2">Learn the basics of recycling and sustainability.</div>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Free</span>
            <div className="mt-2 mb-1 text-sm text-gray-600">Progress: 100%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold mb-2">Bronze Badge</span>
            <div className="flex gap-2 mt-3">
              <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">View Course</button>
              <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">Take Quiz</button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Get Certificate</button>
            </div>
          </div>
          {/* Course Card 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-bold text-green-800 text-lg mb-1">Advanced Waste Management 🚮</div>
            <div className="text-gray-700 mb-2">Deep dive into waste sorting and eco practices.</div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">Paid</span>
            <div className="mt-2 mb-1 text-sm text-gray-600">Progress: 40%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "40%" }}></div>
            </div>
            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-semibold mb-2">Silver Badge</span>
            <div className="flex gap-2 mt-3">
              <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">View Course 📖</button>
              <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">Take Quiz 📝</button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Get Certificate 🏅</button>
            </div>
          </div>
        </div>
      </div>
  <WhatsAppChatButton />
  <SocialIcons />
  <Footer />
    </main>
  );
}
