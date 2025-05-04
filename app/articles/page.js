'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Articles() {
    const router = useRouter();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('/api/articles')
            .then(res => res.json())
            .then(data => {
                const sortedArticles = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setArticles(sortedArticles);
            });
    }, []);

    const featured = articles[0];
    const secondary = articles.slice(1, 3);
    const others = articles.slice(3);

    return (
        <div className="w-full min-h-screen flexs">
        <nav className="bg-red-800 h-5"></nav>
        <header className="bg-black text-white justify-between px-6 py-4 flex items-center">
          <div className="flex items-center">
            <Image src="/stj.png" alt="logo" width={100} height={70} className="h-11" />
          </div>
          <div className="space-x-10 text-sm tracking-widest">
            <Link href="/" className="hover:text-red-600/100 transition-colors">HOME</Link>
            <Link href="/articles" className="text-red-600/100 transition-colors">ARTICLES</Link>
            <Link href="/about-us" className="hover:text-red-600/100transition-colors">ABOUT US</Link>
            <Link href="/contact" className="hover:text-red-600/100 transition-colors">CONTACT</Link>
            <Link href="/ourteam" className="hover:text-red-600/100 transition-colors">OUR TEAM</Link>
          </div>
        </header>
            {/* Featured Article */}
            {featured && (
                <section className="bg-white mt-10 max-w-6xl mx-auto overflow-hidden flex hover:shadow-lg flex-col md:flex-row">
                    <Image src="/3.png" width={700} height={500} className="object-cover w-full md:w-1/2" alt="featured" />
                    <div className="p-6 md:w-1/2 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold mb-4 leading-snug hover:text-red-600 transition-colors">
                            <Link href={`/articles/${featured.id}`}>{featured.title}</Link>
                        </h1>
                        <p className="text-gray-600 text-sm">By {featured.author.name}</p>
                    </div>
                </section>
            )}

            {/* Secondary Articles */}
            <section className="max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                {secondary.map(article => (
                    <div key={article.id} className="bg-white rounded-lg hover:shadow-lg transition duration-200">
                        <Image src="/storkjournal.png" width={600} height={300} alt="secondary" className="rounded-t-lg w-full object-cover h-56" />
                        <div className="p-4">
                            <p className="text-gray-500 text-sm mb-1">{article.author.name}</p>
                            <h3 className="text-xl font-semibold hover:text-red-600 transition-colors">
                                <Link href={`/articles/${article.id}`}>{article.title}</Link>
                            </h3>
                        </div>
                    </div>
                ))}
            </section>

            {/* Other Articles */}
            <section className="max-w-6xl mx-auto mt-20 mb-20 px-4">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">More Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {others.map(article => (
                        <div key={article.id} className="bg-white p-4 rounded-lg hover:shadow-md transition">
                            <h4 className="text-lg font-semibold mb-1 hover:text-red-600">
                                <Link href={`/articles/${article.id}`}>{article.title}</Link>
                            </h4>
                            <p className="text-gray-500 text-sm">{article.author.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

