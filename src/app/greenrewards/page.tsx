"use client";
export default function GreenRewards() {
  return (
  <div className="min-h-screen font-sans bg-white" style={{ backgroundImage: 'url(/for%20web.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', paddingTop: '4rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <main className="w-full">
          <div className="flex justify-center mb-6">
              <img src="/logo.png" alt="EcoDoc Logo" className="h-16 w-16 rounded bg-white mr-4" />
          </div>
          <h1 className="text-4xl font-extrabold text-green-700 text-center mb-10">🏆 GreenRewards Dashboard</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Track your points, earn eco badges, and climb the leaderboard. Redeem rewards and see your impact!</p>
        {/* Points Tracker */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
          <div className="bg-green-100 rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">320 pts</div>
            <div className="text-gray-600">Your EcoPoints</div>
            <div className="mt-2">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold mr-2">🥉 Bronze Recycler</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-semibold mr-2">🥈 Silver Recycler</span>
              <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">🥇 Gold Recycler</span>
            </div>
          </div>
          {/* Instant Rewards Preview */}
          <div className="bg-white rounded-lg shadow p-6 text-center group relative">
            <div className="text-xl font-bold text-green-700 mb-2">Voucher: Grocery $10</div>
            <div className="text-gray-600">Requires 500 pts</div>
            <div className="mt-2 text-sm text-gray-500">You need <span className="font-bold text-red-500">180 more points</span>!</div>
            <div className="hidden group-hover:block absolute left-1/2 top-0 -translate-x-1/2 bg-green-50 border border-green-300 rounded-lg shadow-lg p-4 mt-2 z-10 w-64">
              <h3 className="font-bold text-green-700 mb-2">How to earn more?</h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Recycle 5kg plastic (+50 pts)</li>
                <li>Refer a friend (+100 pts)</li>
                <li>Complete a quiz (+30 pts)</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Leaderboard */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Leaderboard</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <ul className="text-left">
              <li className="mb-2">🥇 Taps - 1200 pts</li>
              <li className="mb-2">🥈 Chipo - 950 pts</li>
              <li className="mb-2">🥉 Simba - 800 pts</li>
              <li>🌱 Nyasha - 600 pts</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
