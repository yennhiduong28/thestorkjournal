'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Ourteam() {
  const router = useRouter();
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch(new Request(
      '/api/ourteam',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }
    )).then(res => res.json())
      .then(data => setAuthor(data)); // pick the first author or loop later if multiple
  }, []);
  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="bg-red-800 h-5"></nav>
      <header className="bg-black text-white justify-between px-6 py-4 flex items-center">
        <div className="flex items-center">
          <Image src="/stj.png" alt="logo" width={100} height={70} className="h-11" />
        </div>
        <div className="space-x-10 text-sm tracking-widest">
          <Link href="/" className="hover:text-red-600/100 transition-colors">HOME</Link>
          <Link href="/articles" className="hover:text-red-600/100transition-colors">ARTICLES</Link>
          <Link href="/about-us" className="hover:text-red-600/100transition-colors">ABOUT US</Link>
          <Link href="/contact" className="hover:text-red-600/100 transition-colors">CONTACT</Link>
          <Link href="/ourteam" className="text-red-600/100 transition-colors">OUR TEAM</Link>
        </div>
      </header>
      {/* Team Section */}
      <div className="text-black mx-40 my-15">
        <p className="text-red-600 text-center mt-8 font-bold text-5xl tracking-wide mb-8">Meet Our Team</p>

        {author.map(author => (
          <div className="flex items-center space-x-6 py-10">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              {author.thumbnail && (
                <Image
                  src={author.thumbnail}
                  width={96}
                  height={96}
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div>
              <p className="font-semibold text-lg">{author.position}</p>
              <p>{author.name}</p>
              <p>{author.introduction}</p>
            </div>
          </div>)
        )}
      </div>
    </div>
  );
}