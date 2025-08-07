// app/api/create-author/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {

    const body = await req.json();
    const { name, position, introduction } = body;

    if (!name || !position || !introduction) {
        return new Response(
            JSON.stringify({ error: 'Name, Position, and Introduction are required.' }),
            { status: 400 }
        );
    }
    try {
        // Create the author in the database
        const author = await prisma.author.create({
            data: {
                name,
                position,
                introduction,
                thumbnail: "https://i.pinimg.com/736x/a8/6f/50/a86f504cfb499b93432c8e4dca0c1480.jpg",
            },
        });

        return new Response(JSON.stringify({ success: true, author }), { status: 201 });
    } catch (error) {
        console.error('Error creating author:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to create author.' }),
            { status: 500 }
        );
    }
}