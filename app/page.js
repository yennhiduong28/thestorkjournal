import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col bg-black min-h-screen">
    <nav className="bg-red-800 h-5"></nav>
    <header className="bg-black text-white px-6 py-4 flex justify-end items-center">
    <div className="flex justify-end"> 
      <div className="space-x-10 text-sm tracking-widest">
        <Link href= "/" className="text-red-600/100 transition-colors">HOME</Link>
        <Link href="/articles" className="hover:text-red-600/100 transition-colors">ARTICLES</Link>
        <Link href="/about-us" className="hover:text-red-600/100 transition-colors">ABOUT US</Link>
        <Link href="/contact" className="hover:text-red-600/100 transition-colors">CONTACT</Link>
        <Link href="/ourteam" className="hover:text-red-600/100 transition-colors">OUR TEAM</Link>
        <Link href="/login" className="hover:text-red-600/100 transition-colors">LOGIN</Link>
      </div>
    </div>
    </header>
      <div className="flex-1 flex flex-col items-center justify-center h-screen mb-20">
        <Image src="/stj2.png" alt="logo" width={500} height={500} />
        <p className="text-base tracking-wide italic text-center text-white">
        Shaping a more informed, compassionate world, one story at a time.
        </p>
      </div>
    </div>
  
  );
}
