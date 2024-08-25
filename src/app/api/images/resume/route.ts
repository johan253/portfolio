import prisma from '@/lib/prisma';

const name = 'resume';

export async function GET(req: Request) {
    const imageObj = await prisma.images.findUnique({
        where: {
            name
        }
    });
    const imageURL = imageObj.url;
    return Response.json(imageURL, { status: 200 });
}