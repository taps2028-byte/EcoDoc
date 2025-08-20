import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
      <a href="https://www.facebook.com/share/19cGTrVUMY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={28} color="#1877F2" />
      </a>
      <a href="https://www.instagram.com/ecodoc_earthsmartcycle?igsh=aHd5aHd2eGlkdjdk&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={28} color="#C13584" />
      </a>
      <a href="https://x.com/ecodoc_?s=21" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={28} color="black" />
      </a>
    </div>
  );
}
