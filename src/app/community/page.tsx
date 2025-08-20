"use client";
export default function Community() {
  return (
  <div className="min-h-screen font-sans bg-white">
      {/* Faded Background Image Section */}
      <section className="w-full relative flex items-center justify-center bg-green-50" style={{height: '180px', overflow: 'hidden'}}>
  <img src="/for%20web.jpeg" alt="Community Banner" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '320px', height: 'auto', opacity: 0.32, zIndex: 1}} />
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4 drop-shadow-lg">EcoDoc Community</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto mb-8 drop-shadow-lg">Join the EcoDoc community forum to share tips, ask questions, and connect with other eco-champions.</p>
        </div>
      </section>
      <main className="w-full">
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-10">🌍 EcoDoc Community</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Connect, share, and learn with fellow eco-enthusiasts. Join the movement for a greener Zimbabwe!</p>
        {/* Trending Topics */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-semibold">#PlasticFreeJuly</span>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">#EcoTips</span>
          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">#GreenRewards</span>
        </div>
        {/* Forum Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Forum</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">EcoDoc Pro</span>
                <span className="font-semibold text-green-700">Tariro</span>
                <span className="text-xs text-gray-400">• 2h ago</span>
              </div>
              <p className="text-gray-700">How can I recycle plastic bottles at home?</p>
              <div className="flex gap-2 mt-2">
                <button className="text-green-600 hover:underline">Reply</button>
                <span className="text-xs text-gray-400">5 replies</span>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-yellow-400 text-green-900 px-2 py-1 rounded-full text-xs">EcoDoc Star</span>
                <span className="font-semibold text-green-700">Chipo</span>
                <span className="text-xs text-gray-400">• 1d ago</span>
              </div>
              <p className="text-gray-700">Best eco-friendly cleaning products?</p>
              <div className="flex gap-2 mt-2">
                <button className="text-green-600 hover:underline">Reply</button>
                <span className="text-xs text-gray-400">3 replies</span>
              </div>
            </div>
          </div>
        </div>
        {/* Member Leaderboard & Badges */}
        <div className="bg-green-100 rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-green-700 mb-4">Top Members</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl">🥇</span>
              <span className="font-bold text-green-700">Tariro</span>
              <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs mt-1">EcoDoc Pro</span>
              <span className="text-xs text-gray-500">1,200 pts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🥈</span>
              <span className="font-bold text-green-700">Chipo</span>
              <span className="bg-yellow-400 text-green-900 px-2 py-1 rounded-full text-xs mt-1">EcoDoc Star</span>
              <span className="text-xs text-gray-500">950 pts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🥉</span>
              <span className="font-bold text-green-700">Simba</span>
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs mt-1">EcoDoc Rookie</span>
              <span className="text-xs text-gray-500">700 pts</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
