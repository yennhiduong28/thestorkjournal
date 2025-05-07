'use client'
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Article() {
    const params = useParams();
    const articleId = params.id;
    const [element, setElement] = useState({});

    useEffect(() => {
        fetch('/api/article', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ articleId })
        })
            .then(res => res.json())
            .then(article => setElement(article));
    }, [articleId]);

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 bg-white">
            {element.id && (
                <article key={element.id}>
                    <div className="text-center mb-6">
                        <span className="inline-block bg-red-700 text-white text-sm font-semibold px-6 py-2 rounded-full tracking-wider uppercase">
                            {element.category}
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold text-center leading-tight mb-8">
                        {element.title}
                    </h1>

                    <div className="mb-10">
                        <Image
                            src="/3.png"
                            width={900}
                            height={500}
                            alt="Article image"
                            className="rounded-lg w-full object-cover"
                        />
                    </div>

                    <div className="prose prose-lg prose-gray max-w-none">
                        {element.content?.blocks?.map((block) => (
                            <p key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />
                        ))}
                    </div>

                    <div className="mt-12 text-sm text-gray-600 border-t pt-4 text-right">
                        By <span className="font-medium">{element.author?.name}</span>
                    </div>
                </article>
            )}
        </div>
    )
}