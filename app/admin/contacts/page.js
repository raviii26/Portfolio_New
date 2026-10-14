"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/contacts");
        const data = await res.json();

        if (data.success) {
          setContacts(data.contacts);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(
          "Failed to load contacts. Ensure your server and database are running.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8 font-Outfit">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Contact Submissions
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {contacts.length} total submissions
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/admin/logs"
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm font-medium"
            >
              👁️ Visitor Logs
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm font-medium"
            >
              ← Portfolio
            </Link>
          </div>
        </div>

        {loading && (
          <div className="text-zinc-600 dark:text-zinc-400">
            Loading contacts from database...
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-800/50">
            {error}
          </div>
        )}

        {!loading && !error && contacts.length === 0 && (
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 text-center rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400">
            No one has contacted you yet. Submissions will appear here.
          </div>
        )}

        {!loading && !error && contacts.length > 0 && (
          <div className="overflow-x-auto bg-white dark:bg-zinc-900/40 rounded-xl shadow-sm border border-zinc-200 dark:border-white/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-white/10">
                  <th className="p-4 font-semibold text-zinc-900 dark:text-zinc-200">
                    ID
                  </th>
                  <th className="p-4 font-semibold text-zinc-900 dark:text-zinc-200">
                    Date
                  </th>
                  <th className="p-4 font-semibold text-zinc-900 dark:text-zinc-200">
                    Name
                  </th>
                  <th className="p-4 font-semibold text-zinc-900 dark:text-zinc-200">
                    Email
                  </th>
                  <th className="p-4 font-semibold text-zinc-900 dark:text-zinc-200">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className="border-b border-zinc-100 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 text-zinc-500 dark:text-zinc-400 text-sm">
                      #{contact.id}
                    </td>
                    <td className="p-4 text-zinc-600 dark:text-zinc-300 whitespace-nowrap">
                      {new Date(contact.created_at).toLocaleString()}
                    </td>
                    <td className="p-4 font-medium text-zinc-900 dark:text-white whitespace-nowrap">
                      {contact.name}
                    </td>
                    <td className="p-4 text-zinc-600 dark:text-zinc-300">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-[#b820e6] hover:underline"
                      >
                        {contact.email}
                      </a>
                    </td>
                    <td className="p-4 text-zinc-600 dark:text-zinc-300 min-w-[300px]">
                      <div className="font-semibold text-xs uppercase tracking-wider text-zinc-400 mb-1">
                        {contact.subject}
                      </div>
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {contact.message}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
