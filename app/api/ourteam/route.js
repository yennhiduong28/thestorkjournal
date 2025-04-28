import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function GET() {
    const author = await prisma.author.findMany({
        select: {
            name: true,
            position: true,
            introduction: true,
            thumbnail: true,
        },
    });
    return new Response(JSON.stringify(author), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    