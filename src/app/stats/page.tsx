import { getVisitStats } from "@/lib/actions";
import Link from "next/link";

export const metadata = {
  title: "Visit Statistics",
  description: "View statistics for my portfolio site",
};

export default async function VisitsPage() {
  const stats = await getVisitStats();
  return (
    <main className="bg-slate-800 text-white min-h-screen pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">Visit Statistics</h1>

        {/* Last 7 Days */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Last 7 Days</h2>
          <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-300">
              Total Visits: <span className="font-bold text-white">{stats.last7Days}</span>
            </p>
          </div>
        </section>

        {/* Last 30 Days */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Last 30 Days</h2>
          <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
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
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Country of Origin</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-slate-900 rounded-lg shadow-lg">
              <thead>
                <tr className="text-left bg-slate-700 text-gray-200">
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
        <Link href="/" className="text-blue-400 hover:underline block text-center mt-8">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
