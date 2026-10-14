"use client";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution:
        "Mahatma Gandhi Institute Of Technical Education & Research Center ,Navsari",
      duration: "2021 - 2025",
      // description: "Built a strong foundation in software engineering, algorithms, and web technologies. Participated in multiple hackathons and led the technical development team for major college festivals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "The Ambika High School, Gadhat",
      duration: "2021",
      // description: "Completed with a major focus on Mathematics, Physics, and Computer Science. Developed early programming logic and built initial foundational projects.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="education"
      className="w-full px-[5%] md:px-[10%] py-24 font-Outfit bg-zinc-50 dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20]"></span>
          Academic Background
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">
            Education
          </span>
        </motion.h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-[1.9rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-700 to-transparent md:-translate-x-1/2 hidden sm:block"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12 relative z-10"
        >
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Card Content */}
              <div
                className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="group relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-md hover:shadow-xl transition-all duration-500 text-left w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b820e6]/5 to-[#da7d20]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#b820e6] dark:text-[#da7d20] bg-[#b820e6]/10 dark:bg-[#da7d20]/10 rounded-full">
                    {item.duration}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>
                  <h4 className="text-base md:text-lg font-medium text-zinc-600 dark:text-zinc-400 mb-4">
                    {item.institution}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Icon Indicator */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-50 dark:border-[#0a0014] shadow-lg items-center justify-center z-20 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#b820e6] to-[#da7d20] opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-white">{item.icon}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
