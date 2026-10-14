"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  { text: "> Initializing Ravi.dev ...", delay: 0 },
  { text: "> Loading modules ...", delay: 600 },
  { text: '> const dev = "Ravi Sharma";', delay: 1100 },
  { text: "> status: READY ✓", delay: 1700 },
];

function TypewriterLine({ text, startDelay, onDone }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, 28);
    return () => clearInterval(interval);
  }, [started, text, onDone]);

  return (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span
        className={
          displayed.includes("READY") ? "text-green-400" : "text-zinc-500"
        }
      >
        {displayed}
      </span>
      {started && displayed.length < text.length && (
        <span className="inline-block w-2 h-4 bg-[#b820e6] animate-pulse" />
      )}
    </div>
  );
}

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Progress bar
  useEffect(() => {
    const targets = [20, 45, 70, 100];
    const timers = targets.map((target, i) =>
      setTimeout(() => setProgress(target), i * 600 + 200),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Reveal lines one by one
  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Exit after last line types out
  useEffect(() => {
    const exit = setTimeout(() => {
      setExiting(true);
      setTimeout(() => setDone(true), 700);
    }, 2600);
    return () => clearTimeout(exit);
  }, []);

  if (done) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b]"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(184,32,230,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(184,32,230,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Terminal window */}
          <div className="relative w-full max-w-lg mx-4">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 rounded-t-xl border border-zinc-700 border-b-0">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-auto font-mono text-xs text-zinc-500">
                ravi.dev — bash
              </span>
            </div>

            {/* Terminal body */}
            <div className="bg-zinc-900 rounded-b-xl border border-zinc-700 border-t-0 p-6 min-h-[160px] shadow-2xl shadow-[#b820e6]/10">
              <div className="space-y-2">
                {lines.map((line, i) =>
                  i < visibleLines ? (
                    <TypewriterLine
                      key={i}
                      text={line.text}
                      startDelay={0}
                      onDone={undefined}
                    />
                  ) : null,
                )}
              </div>
            </div>
          </div>

          {/* Name + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">
                Ravi.
              </span>
            </h1>
            <p className="mt-2 text-sm text-zinc-500 font-mono tracking-widest uppercase">
              Full-Stack Developer
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-10 w-full max-w-lg mx-4 px-0">
            <div className="flex justify-between font-mono text-xs text-zinc-600 mb-2">
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
            <div className="h-[3px] w-full bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
      {exiting && (
        <motion.div
          key="exit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] bg-[#09090b]"
        />
      )}
    </AnimatePresence>
  );
}
