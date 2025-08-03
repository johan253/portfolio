import { getVisitStats } from "@/lib/actions";
import Link from "next/link";

export const metadata = {
  title: "Visit Statistics",
  description: "View statistics for my portfolio site",
};

export default async function VisitsPage() {
  const stats = await getVisitStats();
  return (
    <main className="flex min-h-screen flex-col bg-slate-800 pb-12 pt-24 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-5xl font-bold">Visit Statistics</h1>

        {/* Last 7 Days */}
        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-semibold text-blue-400">Last 7 Days</h2>
          <div className="rounded-lg bg-slate-900 p-6 shadow-lg">
            <p className="text-lg text-gray-300">
              Total Visits: <span className="font-bold text-white">{stats.last7Days}</span>
            </p>
          </div>
        </section>

        {/* Last 30 Days */}
        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-semibold text-blue-400">Last 30 Days</h2>
          <div className="rounded-lg bg-slate-900 p-6 shadow-lg">
            <p className="text-lg text-gray-300">
              Total Visits: <span className="font-bold text-white">{stats.last30Days}</span>
            </p>
            <p className="text-lg text-gray-300">
              Unique Visitors: <span className="font-bold text-white">{stats.uniqueVisitors}</span>
            </p>
          </div>
        </section>

        {/* Country Statistics */}
        <section>
          <h2 className="mb-4 text-3xl font-semibold text-blue-400">Country of Origin</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto rounded-lg bg-slate-900 shadow-lg">
              <thead>
                <tr className="bg-slate-700 text-left text-gray-200">
                  <th className="px-6 py-3 font-semibold">Country</th>
                  <th className="px-6 py-3 font-semibold">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {stats.countryPercentages
                  .sort((a, b) => Number(b.percentage.slice(0, -1)) - Number(a.percentage.slice(0, -1)))
                  .map((country, index) => (
                    <tr
                      key={index}
                      className={`text-gray-300 ${
                        index % 2 === 0 ? "bg-slate-800" : "bg-slate-900"
                      }`}
                    >
                      <td className="px-6 py-4">{country.country}</td>
                      <td className="px-6 py-4">{country.percentage}%</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div>
        <Link href="/" className="mt-8 block text-center text-blue-400 hover:underline">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
