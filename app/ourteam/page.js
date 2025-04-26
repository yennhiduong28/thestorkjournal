import React from 'react';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <nav className="bg-red-800 h-5"></nav>
      <header className="bg-black text-white justify-between px-6 py-4 flex items-center">
        <div className="flex items-center">
          <img src="/storkjournal_png.1copy" alt="logo" className="h-16" />
        </div>
        <div className="space-x-10 font-semibold text-sm font-serif tracking-widest">
          <a href="#home" className="hover:text-red-500 transition-colors">HOME</a>
          <a href="#features" className="hover:text-red-500 transition-colors">FEATURES</a>
          <a href="#about" className="hover:text-red-500 transition-colors">ABOUT</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">CONTACT</a>
          <a href="#ourteam" className="text-red-500 transition-colors">OUR TEAM</a>
        </div>
      </header>
      {/* Team Section */}
      <div className="text-black mx-40 my-15">
              <p className="text-red-700 mt-8 font-bold text-5xl font-serif mb-8">Meet Our Team</p>
            <div className="w-24 h-24 rounded-full overflow-hidden mr-6 flex items-center">
              <img
                src="/storkjournal.png"
                alt="Stork Journal"
                className="w-full h-full object-cover"
              />
              </div>
            <div>
            <p class="font-bold text-lg">Editor-in-Chief</p>
            <p> Yen Nhi Duong </p>
            <p>yennhi2852007@gmail.com</p>
            </div>
      </div>
      </div>
      )
      }