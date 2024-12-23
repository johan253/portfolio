import prisma from "@/lib/prisma";

export async function GET() {
  const experiences = await prisma.experience.findMany();
  return Response.json(experiences, { status: 200 });
}