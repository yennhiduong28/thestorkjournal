
import React from 'react';

export default function Home() {
  return (
    <div>
      <nav className="bg-red-800 h-7"></nav>

      <header className="bg-black text-white justify-between relative px-6 py-4 flex items-center">
        <div className="flex items-center">
          <img src="storkjournal.png" alt="logo" className="top-2 left-4 h-10" />
        </div>
          <nav className="space-x-10 font-semibold text-sm font-serif tracking-widest">
          <a href="#home" className="hover:text-red-500 transition-colors">HOME</a>
          <a href="#features" className="hover:text-red-500 transition-colors">FEATURES</a>
          <a href="#about" className="text-red-500 transition-colors">ABOUT</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">CONTACT</a>
        </nav>
      </header>
      <section className="text-center my-12">
        <h2 className="text-5xl font-serif font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg">
          The Stork Journal is an independent publication dedicated to exploring and celebrating Vietnamese culture, heritage, and societal issues.
        </p>  
      </section>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md border-l-4 border-red-600">
       {/* Mission and Quote */}
       <section className="md:flex md:space-x-12 my-12">
        <div className="md:w-1/2 overflow-hidden">
          <h3 className="text-2xl font-bold text-red-700 font-serif mb-4">Our Vision
          </h3>
          <p>
          At <strong>The Stork Journal</strong>, we believe in the power of student voices from diverse backgrounds. We welcome students from any school in Vietnam (and globally) to express their unique ideas, share their experiences, and contribute to the broader dialogue within our community. We aim to foster a culture of curiosity, critical thinking, and open-mindedness.
          </p>
        </div>
        <div className="md:w-1/2 border-l-2 border-red-700 pl-6 mt-8 md:mt-0 italic text-lg centre-items">
          “Through our stories, we weave a tapestry of the past and present, inviting our readers to reflect, learn, and grow.”
        </div>
      </section>

      {/* Meet the Team */}
      <section className="my-12">
        <h3 className="text-2xl font-bold text-red-700 font-serif mb-4">Meet The Team</h3>
        <p className="max-w-3xl">
        Our diverse team of writers, editors, web developers and photographers comes from various schools, each bringing unique perspectives and talents. We are passionate about journalism and storytelling, and we share a common goal: to make The Stork Journal a reliable and engaging source of information for students across our community.
        </p>
      </section>
      {/* What we cover */}
      <section className="my-12">
        <h3 className="text-2xl font-bold text-red-700 font-serif mb-4">What We Cover</h3>
        <p className="max-w-3xl">
        <strong>News</strong>: Stay updated with the latest happenings, events, and announcements from the local community and the world.</p>
        <p><strong>Features</strong>: Explore in-depth stories, profiles of students and staff, and special reports on topics that matter to our readers.</p>
        <p><strong>Opinion</strong>: Read thought-provoking editorials, student perspectives, and guest columns on a wide range of issues.</p>
        <p><strong>Arts & Culture</strong>:Dive into the world of arts, music, theater, and cultural events happening in our schools and community.</p>
        </section>
     {/* Get Involved */>
        <section className="my-12">
        <h3 className="text-2xl font-bold text-red-700 font-serif mb-4">Get Involved</h3>
        <p className="max-w-3xl">
        We are always looking for new voices and fresh perspectives. Whether you’re an aspiring journalist, a budding photographer, or someone with a story to tell, we invite you to join our team. Get involved and help us make The Stork Journal a true reflection of our diverse and dynamic student community.
        </p>
        </section>
        

      {/* Scroll Icon */}
      <div className="flex justify-end pt-12">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-xl">↓</span>
        </div>
      </div>
    </div>
    </div>
  )}
