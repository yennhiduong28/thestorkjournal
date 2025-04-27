'use client'
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Article() {
    const params = useParams();
    const articleId = params.id;
    const [element, setElement] = useState({});
    useEffect(() => {fetch(new Request(
        '/api/article',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ articleId })
        }
    )
    ).then(res => res.json())
        .then(article => setElement(article))});
    return (
        <div>
            {element.id && (
                <div key={element.id}>
                    <div>{element.author.name}</div>
                    <div>{element.title}</div>
                    <Image src='/storkjournal.png' width={100} height={100} alt="thumbnail" />
                    {element.content.blocks.map(block => (
                        <p key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />
                    ))}
                </div>
            )
            }
        </div>
    )
}
