import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ background: "#f9f9f9", padding: "20px", textAlign: "center" }}>
      <h4>Follow Us</h4>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", fontSize: "24px" }}>
        <a href="https://facebook.com/ecodoc" target="_blank" rel="noopener noreferrer">
          <FaFacebook color="#4267B2" />
        </a>
        <a href="https://twitter.com/ecodoc" target="_blank" rel="noopener noreferrer">
          <FaTwitter color="#1DA1F2" />
        </a>
        <a href="https://instagram.com/ecodoc" target="_blank" rel="noopener noreferrer">
          <FaInstagram color="#C13584" />
        </a>
        <a href="https://linkedin.com/company/ecodoc" target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="#0A66C2" />
        </a>
        <a href="https://wa.me/263776651567" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp color="#25D366" />
        </a>
      </div>
    </footer>
  );
}
