import prisma from "@/lib/prisma";

const name = "johan";

export const revalidate = 600;

export async function GET() {
  const imageObj = await prisma.images.findUnique({
    where: {
      name
    }
  });
  const imageURL = imageObj.url;
  return Response.json(imageURL, { status: 200 });
}