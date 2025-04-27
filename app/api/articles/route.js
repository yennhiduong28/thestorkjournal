import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function GET() {
    const articles = await prisma.article.findMany({
        include: {
            author: true,
        },
    });
    return new Response(JSON.stringify(articles));
    
}
