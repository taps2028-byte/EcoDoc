"use client";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Dashboard Banner */}
      <section className="w-full relative flex items-center justify-center bg-green-50" style={{height: '180px', overflow: 'hidden'}}>
        <img src="/web.jpeg" alt="Dashboard Banner" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '320px', height: 'auto', opacity: 0.32, zIndex: 1}} />
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4 drop-shadow-lg">EcoDoc Dashboard</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto mb-8 drop-shadow-lg">Your personal eco impact, rewards, and activity.</p>
        </div>
      </section>
      <main className="w-full max-w-5xl mx-auto py-8">
        {/* Modern Dashboard Widgets */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-green-700 mb-2">Eco Points</h2>
            <div className="text-4xl font-extrabold text-green-700 mb-2">320</div>
            <p className="text-gray-500">Your current points for recycling and activities.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Badges</h2>
            <div className="flex justify-center gap-2 mb-2">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">Bronze Recycler</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-semibold">Silver Recycler</span>
              <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">Gold Recycler</span>
            </div>
            <p className="text-gray-500">Earn badges for eco actions.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-green-700 mb-2">Activity</h2>
            <div className="text-2xl font-bold text-green-700 mb-2">12</div>
            <p className="text-gray-500">Recycling activities completed this month.</p>
          </div>
        </div>
        {/* Recent Activity Timeline */}
        <div className="bg-green-50 rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-xl font-bold text-green-700 mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">Recycled</span>
              <span className="text-gray-700">5kg plastic bottles</span>
              <span className="text-xs text-gray-400">2 days ago</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-yellow-400 text-green-900 px-2 py-1 rounded-full text-xs">Quiz</span>
              <span className="text-gray-700">Completed &quot;EcoDoc Basics&quot; quiz</span>
              <span className="text-xs text-gray-400">5 days ago</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">Referral</span>
              <span className="text-gray-700">Invited 3 friends to EcoDoc</span>
              <span className="text-xs text-gray-400">1 week ago</span>
            </li>
          </ul>
        </div>
        {/* Leaderboard Widget */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-xl font-bold text-green-700 mb-4">Leaderboard</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="font-bold text-green-700">Taps</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">1200 pts</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-bold text-green-700">Chipo</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">950 pts</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-bold text-green-700">Simba</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">800 pts</span>
            </li>
          </ul>
        </div>
        {/* Quick Actions */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg shadow-lg font-semibold transition flex items-center gap-2">+ Add Recycling Activity</button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-6 py-4 rounded-lg shadow-lg font-semibold transition flex items-center gap-2">🎁 Redeem Rewards</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg shadow-lg font-semibold transition flex items-center gap-2">📊 View Analytics</button>
        </div>
      </main>
    </div>
  );
}
