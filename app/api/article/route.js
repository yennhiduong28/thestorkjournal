import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function POST(req) { 
    const body = await req.json();
    const article = await prisma.article.findUnique({
        where: { id: body.articleId},
        include: {author: true}
    });
    return new Response(JSON.stringify(article)); 
}