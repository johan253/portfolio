import prisma from '@/lib/prisma';

export const revalidate = 600;

export async function GET(req: Request) {
    const projects = await prisma.project.findMany();
    return Response.json(projects, { status: 200 });
}