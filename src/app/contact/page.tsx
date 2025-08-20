"use client";
import dynamic from "next/dynamic";
export default function Contact() {
  const WhatsAppChatButton = dynamic(() => import("../../components/WhatsAppChatButton"), { ssr: false });
  return (
  <div className="min-h-screen font-sans bg-white" style={{ backgroundImage: 'url(/for%20web.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', paddingTop: '4rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <main className="w-full">
      <h1 className="text-4xl font-extrabold text-green-700 text-center mb-10">📞 Contact EcoDoc</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
        Have questions, want to partner, or need support? Reach out to us below. We’re here to help you document a greener future! 🌱
      </p>
      <div className="flex flex-col items-center mb-6">
        <span className="text-lg font-semibold text-green-700">WhatsApp: <a href="https://wa.me/263776651567" className="text-blue-600 underline">+263776651567</a> 💬</span>
      </div>
      <div className="text-center text-gray-600 italic mb-8">“Small acts, when multiplied by millions of people, can transform the world.” – Howard Zinn 🌍</div>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto">
        <form className="flex flex-col gap-6">
          <input type="text" placeholder="Your Name 😊" className="border border-green-300 rounded-lg px-4 py-2" />
          <input type="email" placeholder="Your Email 📧" className="border border-green-300 rounded-lg px-4 py-2" />
          <textarea placeholder="Your Message ✍️" className="border border-green-300 rounded-lg px-4 py-2" rows={4} />
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">Send Message 🚀</button>
        </form>
      </div>
        </main>
      <WhatsAppChatButton />
    </div>
  );
}
