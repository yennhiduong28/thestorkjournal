import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <nav className="bg-red-800 h-5"></nav>
      <header className="bg-black text-white justify-between px-6 py-4 flex items-center">
        <div className="flex items-center">
          <Image src="/stj.png" alt="logo" width={100} height={70} className="h-11" />
        </div>
        <div className="space-x-10 font-semibold text-sm font-serif tracking-widest">
          <Link href="#home" className="text-red-500 transition-colors">HOME</Link>
          <Link href="#articles" className="hover:text-red-500 transition-colors">ARTICLES</Link>
          <Link href="#about" className="hover:text-red-500 transition-colors">ABOUT US</Link>
          <Link href="#contact" className="hover:text-red-500 transition-colors">CONTACT</Link>
          <Link href="#ourteam" className="hover:text-red-500 transition-colors">OUR TEAM</Link>
        </div>
      </header>

    </div>
  );
}
