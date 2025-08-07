import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { category, title, content, author } = await req.json();

    if (!category || !title || !content || !author) {
      return new Response(JSON.stringify({ error: 'Missing fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Find the author by unique name
    const foundAuthor = await prisma.author.findUnique({
      where: { name: author }
    });

    if (!foundAuthor) {
      return new Response(JSON.stringify({ error: 'Author not found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create the article
    const newArticle = await prisma.article.create({
      data: {
        title,
        category,
        content,
        author: {
          connect: { id: foundAuthor.id }
        }
      }
    });

    return new Response(JSON.stringify({ message: 'Article created', article: newArticle }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error creating article:', error);
    return new Response(JSON.stringify({ error: 'Server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
