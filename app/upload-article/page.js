'use client';

import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Home() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [authors, setAuthors] = useState([]);
  const [paragraphs, setParagraphs] = useState([
    { id: crypto.randomUUID(), text: '' }
  ]);
  const [message, setMessage] = useState('');

  // Fetch authors from /api/our-team
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await fetch('/api/ourteam');
        const data = await res.json();
        setAuthors(data);
      } catch (err) {
        console.error('Failed to fetch authors:', err);
      }
    };

    fetchAuthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category.trim() || !title.trim() || !author.trim()) {
      setMessage('All fields are required.');
      return;
    }

    const blocks = paragraphs
      .filter((p) => p.text.trim() !== '')
      .map((p) => ({
        id: p.id,
        type: 'paragraph',
        data: { text: p.text.trim() }
      }));

    const content = {
      time: Date.now(),
      blocks,
      version: '2.30.2'
    };

    try {
      const res = await fetch('/api/create-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: category.trim(),
          title: title.trim(),
          author: author.trim(), // send author name; backend should resolve to ID
          content
        })
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || 'Upload failed.');
        return;
      }

      setMessage('Article uploaded successfully!');
      setCategory('');
      setTitle('');
      setAuthor('');
      setParagraphs([{ id: crypto.randomUUID(), text: '' }]);
    } catch (err) {
      console.error(err);
      setMessage('Unexpected error occurred.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="bg-red-800 h-5"></nav>
      <header className="bg-black text-white justify-between px-6 py-4 flex items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/stj.png" alt="logo" width={100} height={70} className="h-11 cursor-pointer" />
          </Link>
        </div>
      </header>

      <div className="text-center py-10">
        <p className="text-5xl font-semibold text-gray-800">Upload Article</p>
      </div>

      <form onSubmit={handleSubmit} className="text-black max-w-3xl mx-auto px-6 space-y-6">
        <textarea
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
          placeholder="Category"
          required
        />

        <textarea
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
          placeholder="Title"
          required
        />

        {/* Paragraphs */}
        {paragraphs.map((para, idx) => (
          <div key={para.id} className="mb-4">
            <textarea
              value={para.text}
              onChange={(e) => {
                const newParas = [...paragraphs];
                newParas[idx].text = e.target.value;
                setParagraphs(newParas);
              }}
              className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
              placeholder={`Paragraph ${idx + 1}`}
              required
            />
          </div>
        ))}

        {/* Add/Remove Paragraph Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() =>
              setParagraphs([...paragraphs, { id: crypto.randomUUID(), text: '' }])
            }
            className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
          >
            + Add Paragraph
          </button>

          <button
            type="button"
            onClick={() => setParagraphs(paragraphs.slice(0, -1))}
            className="bg-gray-100 text-black py-2 px-4 rounded hover:bg-gray-200"
            disabled={paragraphs.length <= 1}
          >
            − Remove Paragraph
          </button>
        </div>

        {/* Author Dropdown */}
        <div>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
            required
          >
            <option value="">Select an author</option>
            {authors.map((a, idx) => (
              <option key={idx} value={a.name}>
                {a.name} – {a.position}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <div className="max-w-3xl mx-auto px-6 pt-6">
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-red-800 transition duration-300"
          >
            Create Article
          </button>
        </div>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-sm text-yellow-400">{message}</p>
        )}
      </form>

      <div className="py-10" />
    </div>
  );
}
