"use client";
export default function Partners() {
  return (
  <div className="min-h-screen font-sans bg-white">
      {/* Faded Background Image Section */}
      <section className="w-full relative flex items-center justify-center bg-green-50" style={{height: '180px', overflow: 'hidden'}}>
  <img src="/for%20web%20(2).jpeg" alt="Partners Banner" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '320px', height: 'auto', opacity: 0.32, zIndex: 1}} />
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4 drop-shadow-lg">Partners</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto mb-8 drop-shadow-lg">Meet the organizations and individuals who help us build a greener future.</p>
        </div>
      </section>
      <main className="w-full">
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-10">🤝 EcoDoc Partners</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Meet our partners making a difference for Zimbabwe’s environment.</p>
        {/* Animated Partner Logos */}
        <div className="flex flex-wrap gap-8 justify-center items-center mb-10 animate-pulse">
          <div className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl">🌳</span>
            <span className="font-bold text-green-700 mt-2">GreenTech</span>
          </div>
          <div className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl">♻️</span>
            <span className="font-bold text-green-700 mt-2">EcoCycle</span>
          </div>
          <div className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl">🌞</span>
            <span className="font-bold text-green-700 mt-2">SolarNow</span>
          </div>
        </div>
        {/* Impact Stats */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-10">
          <div className="bg-green-100 rounded-xl shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-green-700">1,200+</div>
            <div className="text-gray-600">Tons Recycled</div>
          </div>
          <div className="bg-green-100 rounded-xl shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-green-700">50+</div>
            <div className="text-gray-600">Communities Impacted</div>
          </div>
          <div className="bg-green-100 rounded-xl shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-green-700">20+</div>
            <div className="text-gray-600">Partner Organizations</div>
          </div>
        </div>
        {/* Join CTA */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-xl font-bold text-green-700 mb-2">Become a Partner</h2>
          <p className="text-gray-500 mb-4">Join EcoDoc and help us build a greener future for Zimbabwe.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-bold shadow-md transition duration-200">Contact Us</button>
        </div>
      </main>
    </div>
  );
}
