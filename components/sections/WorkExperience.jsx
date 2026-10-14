"use client";
import { motion } from "framer-motion";

export default function WorkExperience() {
  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "Omy Infotech Pvt Ltd",
      duration: "2025 - Present",
      description:
        "Currently working as a Full Stack Developer, contributing to the development of scalable web applications. Engaged in both frontend and backend development, ensuring seamless integration and optimal performance.",
      skills: [
        "React js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Angular",
        ".Net Core",
        "SQL Server",
        "My SQL",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    // {
    //     role: "Web Developer",
    //     company: "Digital Agency",
    //     duration: "2020 - 2022",
    //     description: "Developed and maintained multiple client websites using React and Next.js. Collaborated closely with designers to implement pixel-perfect UI/UX.",
    //     skills: ["React", "JavaScript", "Figma", "Framer Motion"],
    //     icon: (
    //         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    //     )
    // },
    {
      role: "MERN Stack Developer",
      company: "StartUp Inc",
      duration: "6 months (Internship)",
      description:
        "Worked on full-stack web applications using the MERN stack. Implemented RESTful APIs and integrated them with frontend components, enhancing user experience.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Github",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React Js",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="w-full px-[5%] md:px-[10%] py-24 font-Outfit bg-zinc-50 dark:bg-black transition-colors duration-500 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">
        {/* Left Side: Sticky Header */}
        <div className="w-full lg:w-1/3 relative z-10">
          <div className="lg:sticky lg:top-32 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20]"></span>
              Career Journey
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6"
            >
              Work <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">
                Experience
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed"
            >
              Over the years, I have gained valuable experience in web
              development, working with various technologies and frameworks. My
              journey has allowed me to contribute to diverse projects,
              enhancing my skills and expertise in building efficient and
              user-friendly applications.
            </motion.p>
          </div>
        </div>

        {/* Right Side: Sticky Stacking Cards */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12 lg:gap-24 relative z-10 pb-[10vh]">
          {/* Continuous vertical line behind icons (desktop only) */}
          <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-zinc-200 dark:via-white/10 to-transparent hidden md:block z-0"></div>

          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              style={{ zIndex: idx + 10 }}
              className={`lg:sticky group relative flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-[2rem] bg-white dark:bg-[#111111] border border-zinc-200 dark:border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-500 sticky-card-${idx}`}
            >
              <style>{`
                                @media (min-width: 1024px) {
                                    .sticky-card-${idx} { top: calc(15vh + ${idx * 25}px); }
                                }
                            `}</style>

              {/* Hover glowing gradient behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b820e6]/5 via-transparent to-[#da7d20]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

              {/* Icon Indicator */}
              <div className="hidden md:flex flex-col items-center relative z-10 shrink-0">
                <div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] group-hover:border-[#b820e6]/30 dark:group-hover:border-[#da7d20]/30 transition-all duration-500 shadow-inner group-hover:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4 gap-2 md:gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#b820e6] group-hover:to-[#da7d20] transition-colors duration-300">
                      {item.role}
                    </h3>
                    <h4 className="text-base md:text-lg font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                      {item.company}
                    </h4>
                  </div>
                  <span className="inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-white/5 rounded-full whitespace-nowrap self-start border border-zinc-200 dark:border-white/10 group-hover:border-[#da7d20]/30 transition-colors duration-300">
                    {item.duration}
                  </span>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                  {item.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100/80 dark:bg-black/40 rounded-lg border border-zinc-200/80 dark:border-white/5 group-hover:border-[#b820e6]/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
