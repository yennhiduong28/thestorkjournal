'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Ourteam() {
  const router = useRouter();
  const [author, setAuthor] = useState({});

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
    .then(data => setAuthor(data[0])); // pick the first author or loop later if multiple
  }, []);
  return (
    <div className="w-full min-h-screen">
      <nav className="bg-red-800 h-5"></nav>
      <header className="bg-black text-white justify-between px-6 py-4 flex items-center">
        <div className="flex items-center">
          <Image src="/stj.png" alt="logo" width={100} height={70}className="h-11" />
        </div>
        <div className="space-x-10 font-semibold text-sm font-serif tracking-widest">
          <Link href="#home" className="hover:text-red-500 transition-colors">HOME</Link>
          <Link href="#articles" className="hover:text-red-500 transition-colors">ARTICLES</Link>
          <Link href ="#about" className="hover:text-red-500 transition-colors">ABOUT US</Link>
          <Link href="#contact" className="hover:text-red-500 transition-colors">CONTACT</Link>
          <Link href="#ourteam" className="text-red-500 transition-colors">OUR TEAM</Link>
        </div>
      </header>
      {/* Team Section */}
      <div className="text-black mx-40 my-15">
        <p className="text-red-700 mt-8 font-bold text-5xl font-serif mb-8">Meet Our Team</p>

        {author && (
          <div className="flex items-center space-x-6">
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
              <p className="font-bold text-lg">{author.position}</p>
              <p>{author.name}</p>
              <p>{author.introduction}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}