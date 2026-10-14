"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const deviceIcon = (device) => {
  if (device === "Mobile") return "📱";
  if (device === "Tablet") return "📲";
  return "🖥️";
};

const browserIcon = (browser) => {
  const map = {
    Chrome: "🌐",
    Firefox: "🦊",
    Safari: "🧭",
    Edge: "🔷",
    Opera: "🔴",
  };
  return map[browser] || "🌐";
};

export default function AdminLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/visitor-logs")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setLogs(data.logs);
        else setError(data.message);
      })
      .catch(() =>
        setError("Failed to load logs. Is the server and DB running?"),
      )
      .finally(() => setLoading(false));
  }, []);

  const filtered = logs.filter((l) => {
    const q = search.toLowerCase();
    return (
      l.ip?.toLowerCase().includes(q) ||
      l.country?.toLowerCase().includes(q) ||
      l.city?.toLowerCase().includes(q) ||
      l.browser?.toLowerCase().includes(q) ||
      l.os?.toLowerCase().includes(q) ||
      l.device?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8 font-Outfit">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Visitor Logs
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {logs.length} total visitors tracked
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/admin/contacts"
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm font-medium"
            >
              📬 Contact Submissions
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm font-medium"
            >
              ← Portfolio
            </Link>
          </div>
        </div>

        {/* Stats row */}
        {!loading &&
          !error &&
          logs.length > 0 &&
          (() => {
            const mobile = logs.filter((l) => l.device === "Mobile").length;
            const desktop = logs.filter((l) => l.device === "Desktop").length;
            const tablet = logs.filter((l) => l.device === "Tablet").length;
            const countries = [...new Set(logs.map((l) => l.country))].filter(
              (c) => c && c !== "Unknown" && c !== "Localhost",
            ).length;

            return (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    label: "Total Visits",
                    value: logs.length,
                    icon: "👁️",
                    color: "from-[#b820e6] to-[#da7d20]",
                  },
                  {
                    label: "Mobile",
                    value: mobile,
                    icon: "📱",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    label: "Desktop",
                    value: desktop,
                    icon: "🖥️",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    label: "Countries",
                    value: countries,
                    icon: "🌍",
                    color: "from-orange-500 to-amber-500",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/10 rounded-xl p-4 shadow-sm"
                  >
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div
                      className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${s.color}`}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

        {/* Search */}
        {!loading && !error && logs.length > 0 && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by IP, country, browser, OS..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-80 px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#b820e6]/50 transition-all"
            />
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
            <div className="w-5 h-5 border-2 border-zinc-300 border-t-[#b820e6] rounded-full animate-spin" />
            Loading visitor logs...
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg border border-red-200 dark:border-red-800/50">
            {error}
          </div>
        )}

        {!loading && !error && logs.length === 0 && (
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 text-center rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400">
            No visitors logged yet. Visit the portfolio to generate the first
            entry.
          </div>
        )}

        {/* Table */}
        {!loading && !error && filtered.length > 0 && (
          <div className="overflow-x-auto bg-white dark:bg-zinc-900/40 rounded-xl shadow-sm border border-zinc-200 dark:border-white/10">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-800/60 border-b border-zinc-200 dark:border-white/10">
                  <th className="p-4 font-semibold text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">
                    #
                  </th>
                  <th className="p-4 font-semibold text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="p-4 font-semibold text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">
                    IP Address
                  </th>
                  <th className="p-4 font-semibold text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">
                    Location
                  </th>
                  <th className="p-4 font-semibold text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">
                    Device
                  </th>
                  <th className="p-4 font-semibold text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">
                    Browser
                  </th>
                  <th className="p-4 font-semibold text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">
                    OS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((log, i) => (
                  <tr
                    key={log.id}
                    className="border-b border-zinc-100 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 text-zinc-400 dark:text-zinc-600 font-mono text-xs">
                      #{log.id}
                    </td>
                    <td className="p-4 text-zinc-600 dark:text-zinc-300 whitespace-nowrap font-mono text-xs">
                      {new Date(log.visited_at).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </td>
                    <td className="p-4">
                      <span className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded">
                        {log.ip || "—"}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="text-zinc-900 dark:text-white font-medium">
                        {log.city || "—"}
                      </div>
                      <div className="text-zinc-500 dark:text-zinc-400 text-xs">
                        {log.country || "—"}
                      </div>
                    </td>
                    <td className="p-4 text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                      {deviceIcon(log.device)} {log.device || "—"}
                    </td>
                    <td className="p-4 text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                      {browserIcon(log.browser)} {log.browser || "—"}
                    </td>
                    <td className="p-4 text-zinc-600 dark:text-zinc-400 whitespace-nowrap text-xs">
                      {log.os || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {search && filtered.length === 0 && (
              <p className="text-center text-zinc-500 p-6">
                No logs match your search.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
