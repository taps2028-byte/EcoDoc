import Image from "next/image";
import Link from "next/link";
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
  <Link href="/" className="hover:text-yellow-300">HOME</Link>
  <Link href="/products" className="hover:text-yellow-300">PRODUCTS</Link>
  <Link href="/marketplace" className="hover:text-yellow-300">STORE MARKETPLACE</Link>
  <Link href="/greenrewards" className="hover:text-yellow-300">GREENREWARDS</Link>
  <Link href="/academy" className="hover:text-yellow-300">SCHOOL ACADEMY</Link>
  <Link href="/community" className="hover:text-yellow-300">GROUPS COMMUNITY</Link>
  <Link href="/blog" className="hover:text-yellow-300">BLOG</Link>
  <Link href="/partners" className="hover:text-yellow-300">PARTNERS</Link>
  <Link href="/contact" className="hover:text-yellow-300">CONTACT</Link>
  <Link href="/dashboard" className="hover:text-yellow-300">DASHBOARD</Link>
  <Link href="/donate" className="hover:text-yellow-300 font-bold">DONATE</Link>
      </nav>
      {/* Social Icons */}
      <div className="flex gap-3 ml-6">
        <SocialIcons />
      </div>
    </header>
  );
}
