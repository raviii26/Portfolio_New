import Link from "next/link";
import { FaAddressBook, FaChartBar, FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Admin Dashboard | Ravi Sharma",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminHub() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-Outfit p-6 sm:p-12 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Admin Console</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">
              Select a dashboard to inspect received inquiries or visitor analytics.
            </p>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <FaArrowLeft /> Back to Site
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link
            href="/admin/contacts"
            className="group block p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
              <FaAddressBook />
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Contact Inquiries
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Review messages submitted through the portfolio contact form, filter by date, and manage client communications.
            </p>
          </Link>

          <Link
            href="/admin/logs"
            className="group block p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
              <FaChartBar />
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Visitor Logs & Analytics
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Track real-time visits, geographic origin (country/city), browser, operating system, and client device metrics.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
