"use client";
export default function Blog() {
  return (
  <div className="min-h-screen font-sans bg-white">
      {/* Faded Background Image Section */}
      <section className="w-full relative flex items-center justify-center bg-green-50" style={{height: '180px', overflow: 'hidden'}}>
    <img src="/web.jpeg" alt="Blog Banner" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '320px', height: 'auto', opacity: 0.32, zIndex: 1}} />
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4 drop-shadow-lg">Blog</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto mb-8 drop-shadow-lg">Insights, tips, and stories from ECODOC and our community.</p>
        </div>
      </section>
      <main className="w-full max-w-5xl mx-auto py-8">
        {/* Blog Search & Categories */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-8">
          <input type="text" placeholder="Search blog posts..." className="border border-green-300 rounded-lg px-4 py-2 w-full md:w-1/2" />
          <div className="flex gap-2 flex-wrap">
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">All</button>
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">Tips</button>
            <button className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">Impact</button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">News</button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-semibold">Profile</button>
          </div>
        </div>
        {/* Featured Post */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 flex flex-col md:flex-row gap-8 items-center">
          <img src="/bins.jpeg" alt="Featured" className="w-40 h-40 object-cover rounded-xl" />
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">5 Easy Ways to Start Recycling at Home</h2>
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full font-semibold mr-2">Featured</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">#recycling</span>
            <p className="text-gray-600 mt-4">Simple steps to kickstart your eco-journey and reduce waste.</p>
          </div>
        </div>
        {/* Recent Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-green-700 mb-2">Eco Tips</h2>
            <p className="text-gray-500">Practical advice for recycling and sustainable living.</p>
            <div className="flex gap-2 justify-center mt-2">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">#tips</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">#howto</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-yellow-600 mb-2">Impact Stories</h2>
            <p className="text-gray-500">Real stories from communities making a difference.</p>
            <div className="flex gap-2 justify-center mt-2">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">#impact</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">#community</span>
            </div>
          </div>
        </div>
        {/* Trending Tags */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-semibold">#PlasticFreeJuly</span>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">#EcoTips</span>
          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">#GreenRewards</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">#Sustainability</span>
        </div>
        {/* Newsletter Signup */}
        <div className="bg-green-50 rounded-xl shadow-lg p-8 text-center mb-8">
          <h2 className="text-xl font-bold text-green-700 mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-4">Get the latest eco news, tips, and rewards delivered to your inbox.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input type="email" placeholder="Your email address" className="border border-green-300 rounded-lg px-4 py-2" />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">Subscribe</button>
          </form>
        </div>
      </main>
    </div>
  );
}
