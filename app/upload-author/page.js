'use client';

import Image from 'next/image';
import { useState } from 'react';


export default function Home() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.preventDefault();

        // Basic validation
        if (!name.trim() || !position.trim() || !introduction.trim()) {
            setMessage('Name and Position and Introduction are required.');
            return;
        }

        try {
            const res = await fetch('/api/create-author', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name.trim(),
                    position: position.trim(),
                    introduction: introduction.trim(),
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                setMessage(errorData.error || 'Failed to create author.');
                return;
            }
            setMessage('Author created successfully!');
            // Optionally, clear the form or navigate elsewhere:
            setName('');
            setPosition('');
            setIntroduction('');    

        } catch (err) {
            console.error(err);
            setMessage('An unexpected error occurred.');
        }
    }
    return (
        <div className="w-full min-h-screen bg-white">
            <nav className="bg-red-800 h-5"></nav>
            <header className="bg-black text-white justify-between px-6 py-4 flex items-center">
                <div className="flex items-center">
                    <Image src="/stj.png" alt="logo" width={100} height={70} className="h-11" />
                </div>
            </header>

            {/* Title */}
            <div className="text-center py-10">
                <p className="text-5xl font-semibold text-gray-800">Upload Author</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="text-black max-w-3xl mx-auto px-6 space-y-6">
                <textarea
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
                    placeholder="Name"
                    required
                />

                <textarea
                    id="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
                    placeholder="Position"
                    required
                />
                <textarea
                    id="introduction"
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                    className="w-full border border-gray-600 rounded px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black-500"
                    placeholder="Introduction"
                    required
                />
                {/* Submit Button */}
                <div className="max-w-3xl mx-auto px-6 pt-6">
                    <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-red-800 transition duration-300">
                        Create Author
                    </button>
                </div>
                {/* Message */}
                {message && (
                    <p className="mt-4 text-center text-sm text-yellow-400">{message}</p>
                )}
            </form>



            {/* Footer spacing */}
            <div className="py-10"></div>
        </div>
    );
}