import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <header className="bg-green-700 text-white flex items-center px-4 py-2">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="EcoDoc Logo" width={80} height={80} className="rounded bg-white" />
        <div>
          <div className="text-2xl font-bold">ECODOC 🌱</div>
          <div className="text-sm tracking-wide">Documenting A Greener Future</div>
        </div>
      </div>
      <nav className="flex-1 flex justify-center items-center gap-8 text-base font-medium">
        <a href="/" className="hover:text-yellow-300">HOME</a>
        <a href="/products" className="hover:text-yellow-300">PRODUCTS</a>
        <a href="/marketplace" className="hover:text-yellow-300">STORE MARKETPLACE</a>
        <a href="/greenrewards" className="hover:text-yellow-300">GREENREWARDS</a>
        <a href="/academy" className="hover:text-yellow-300">SCHOOL ACADEMY</a>
        <a href="/community" className="hover:text-yellow-300">GROUPS COMMUNITY</a>
        <a href="/blog" className="hover:text-yellow-300">BLOG</a>
        <a href="/partners" className="hover:text-yellow-300">PARTNERS</a>
        <a href="/contact" className="hover:text-yellow-300">CONTACT</a>
        <a href="/dashboard" className="hover:text-yellow-300">DASHBOARD</a>
        <a href="/donate" className="hover:text-yellow-300 font-bold">DONATE</a>
      </nav>
      {/* Social Icons */}
      <div className="flex gap-3 ml-6">
        <SocialIcons />
      </div>
    </header>
  );
}
