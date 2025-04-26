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
          <a href="#contact" className="text-red-500 transition-colors">CONTACT</a>
          <a href="#ourteam" className="hover:text-red-500 transition-colors">OUR TEAM</a>
        </div>
      </header>
        {/* Contact Section */}
        <section className=" mx-40 my-15">
          <h1 className="text-red-700 font-bold text-5xl font-serif mb-8">Contact With Us</h1>
          <p className="text-sm md:w-1/2 overflow-hidden">
            We’d love to hear from you!
            Whether you have a story to share, feedback for our team, or a question about how to get involved, we’re all ears. The Stork Journal thrives on connection, collaboration, and conversation—and that starts with you.
            📬 Reach Out
            <br />Email: 📩 tsj.thestorkjournal@gmail.com
            <br /><br />
            📝 Want to Join the Team?
            <br />
            Are you a student with a passion for writing, photography, design, or web development? We’re always welcoming new members from schools across Vietnam (and beyond). Fill out our interest form or email us directly to learn how you can get involved.
            <br /><br />
            🌐 Stay Connected
            <br />
            Follow us on social media to stay updated on our latest stories, student features, and events.
            <br /><br />
            Thank you for supporting The Stork Journal—where student voices matter.
          </p>
        </section>
    </div>
  )}
