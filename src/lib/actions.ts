"use server";
import prisma from "./prisma";
import { cookies, headers } from "next/headers";

export async function logVisit() {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const visitorId = cookieStore.get("visitorId")?.value;
  if (!visitorId) {
    console.warn("No visitorId found in cookies");
    return;
  }

  const ipAddr = headerStore.get("x-real-ip") || headerStore.get("x-forwarded-for") || headerStore.get("remote-addr");
  let country: string;
  let city: string;
  try {
    const location = await fetch(`https://ipapi.co/${ipAddr}/json/`)
      .then((res) => res.json());
    country = location?.country_name || null;
    city = location?.city || null;
  } catch (e) {
    console.warn("Failed to fetch location data", e);
  }

  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const recentVisit = await prisma.visits.findFirst({
    where: {
      visitor_id: visitorId,
      date: {
        gte: oneHourAgo
      }
    }
  });

  if (!recentVisit) {
    await prisma.visits.create({
      data: {
        visitor_id: visitorId,
        country: country ?? "Unknown",
        city: city ?? "Unknown",
      },
    });
  }
}

export async function getVisitStats() {
  const now = new Date();

  // Calculate dates
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 7);

  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(now.getDate() - 30);

  // Query for visit stats
  const [last7Days, last30Days, totalUniqueVisitors, countryCounts] = await Promise.all([
    prisma.visits.count({
      where: {
        date: {
          gte: sevenDaysAgo,
        },
      },
    }),
    prisma.visits.count({
      where: {
        date: {
          gte: thirtyDaysAgo,
        },
      },
    }),
    prisma.visits.groupBy({
      by: ["visitor_id"],
      _count: true,
    }).then((groups) => groups.length), // Count unique visitor_ids
    prisma.visits.groupBy({
      by: ["country"],
      _count: { country: true },
    }),
  ]);

  // Calculate country percentages
  const totalVisits = last30Days;
  const countryPercentages = countryCounts.map((entry) => ({
    country: entry.country || "Unknown",
    percentage: ((entry._count.country / totalVisits) * 100).toFixed(2),
  }));

  return {
    last7Days,
    last30Days,
    uniqueVisitors: totalUniqueVisitors,
    countryPercentages,
  };
}