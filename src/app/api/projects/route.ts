import prisma from '@/lib/prisma';

export async function GET(req: Request) {
    const projects = await prisma.project.findMany();
    return Response.json(projects, { status: 200 });
}