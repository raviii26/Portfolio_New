import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center font-Outfit bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      <div className="relative mb-6">
        <span className="text-8xl md:text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 select-none">
          404
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 blur-3xl -z-10 rounded-full" />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-3">
        Page Not Found
      </h1>

      <p className="max-w-md text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
        The page you are looking for might have been moved, deleted, or does not exist. Let's get you back on track!
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-95 shadow-lg shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Return to Home
        </Link>
        <Link
          href="/#contact"
          className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium transition-all duration-300"
        >
          Contact Support
        </Link>
      </div>
    </main>
  );
}
