import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChatButton() {
  return (
    <a
      href="https://wa.me/263776651567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform duration-200"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
      title="Chat with EcoDoc on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
