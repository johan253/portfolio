import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({
      error: "Unauthorized"
    }, { status: 401 });
  }

  console.log("CRON: Running monthly visit cleanup");

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const result = await prisma.visits.deleteMany({
    where: {
      date: {
        lt: thirtyDaysAgo
      }
    }
  });
  
  return Response.json({
    message: `Sucessfully deleted ${result.count} records`
  }, { status: 200 });
}