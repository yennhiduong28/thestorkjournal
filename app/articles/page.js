'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Articles() {
    const router = useRouter();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(new Request(
            '/api/articles',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }

            }
        )
        ).then(res=> res.json())
        .then(articles=> setArticles(articles));
    })
    return (
        <div>
            <h1>
                Articles
            </h1>
            {articles.map(element => (
                <div key={element.id}>
                    <div>{element.author.name}</div>
                    <div>{element.title}</div>
                    <button onClick ={() => router.push(`/articles/${element.id}`)} > Go to Article </button>
                    <Image src= '/storkjournal.png' width ={100} height={100} alt ="thumbnail" />
                </div>
            ))
            }
        </div>
    )
} 