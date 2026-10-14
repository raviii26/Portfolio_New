"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PersonalProjects() {
  const projects = [
    {
      id: 1,
      title: "QuickCart",
      type: "E-Commerce Platform",
      description:
        "An open-source Next.js eCommerce frontend project providing a modern, fast and customizable shopping UI. Features responsive design and reusable components.",
      techStack: ["Next.js", "Tailwind CSS"],
      liveLink: "https://github.com/raviii26/QuickCart",
      githubLink: "https://github.com/raviii26/QuickCart",
      color: "from-orange-400 to-red-500",
      image: "/quickcart-demo.png"
    },
    // {
    //   id: 2,
    //   title: "E-Commerence",
    //   type: "Featured Project",
    //   description:
    //     "A full-stack e-commerce platform tailored for developers to ask questions, share knowledge, and collaborate. Features include a reputation system, tag-based filtering, and real-time Markdown preview. Built with performance and SEO in mind.",
    //   techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   color: "from-blue-500 to-cyan-400",
    // },
    // {
    //   id: 3,
    //   title: "Crypta - Crypto Tracker",
    //   type: "Web Application",
    //   description:
    //     "Real-time cryptocurrency tracking dashboard providing market data, price charts, and portfolio management. Integrated with CoinGecko API for accurate live data and interactive historical charts.",
    //   techStack: ["React", "Redux", "Chart.js", "Framer Motion"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   color: "from-emerald-400 to-teal-500",
    // },
    // {
    //   id: 4,
    //   title: "TaskMaster Pro",
    //   type: "SaaS Platform",
    //   description:
    //     "A productivity and project management tool designed for agile teams. Supports Kanban boards, task assignment, role-based access control, and advanced performance analytics.",
    //   techStack: ["Next.js", "Node.js", "PostgreSQL", "Socket.io"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   color: "from-rose-400 to-orange-500",
    // },
  ];

  return (
    <section
      id="personal-projects"
      className="w-full px-[5%] md:px-[10%] py-24 font-Outfit bg-white dark:bg-black transition-colors duration-500 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20]"></span>
            Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight"
          >
            Personal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">
              Projects
            </span>
          </motion.h2>
        </div>

        {/* Projects Container */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-0`}
              >
                {/* Image/Mockup Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-full lg:w-3/5 group z-10"
                >
                  <div
                    className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${project.color} p-1`}
                  >
                    <div className="absolute inset-0 bg-white/20 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    {/* Mockup Placeholder Box */}
                    <div className="w-full h-full bg-zinc-900 rounded-xl overflow-hidden relative shadow-inner group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                      {/* Browser Top Bar */}
                      <div className="h-8 bg-zinc-800/80 backdrop-blur flex items-center px-4 gap-2 border-b border-white/10 relative z-20">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      </div>
                      {/* Content Placeholder */}
                      <div className="flex items-center justify-center h-[calc(100%-2rem)] text-white/50 font-medium relative">
                        {project.image ? (
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top absolute inset-0" />
                        ) : (
                          "Project Screenshot"
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Details Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                  className={`w-full lg:w-2/5 flex flex-col justify-center relative z-20 ${isEven ? "lg:-ml-16 items-start lg:items-end text-left lg:text-right" : "lg:-mr-16 items-start text-left"}`}
                >
                  <h4 className="text-[#b820e6] dark:text-[#da7d20] font-semibold tracking-wider text-sm mb-2">
                    {project.type}
                  </h4>
                  <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 hover:text-[#b820e6] transition-colors cursor-pointer">
                    {project.title}
                  </h3>

                  {/* Description Card overlapping the image */}
                  <div className="p-6 bg-white dark:bg-zinc-900/95 backdrop-blur-sm border border-zinc-100 dark:border-white/10 rounded-2xl shadow-xl mb-6 hover:shadow-2xl transition-shadow duration-300 w-full">
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base text-left">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack List */}
                  <ul
                    className={`flex flex-wrap gap-x-4 gap-y-2 mb-8 font-medium text-sm text-zinc-500 dark:text-zinc-300 w-full ${isEven ? "lg:justify-end justify-start" : "justify-start"}`}
                  >
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="hover:text-[#da7d20] transition-colors"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex items-center gap-6">
                    {/* Github Link */}
                    <a
                      href={project.githubLink}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="group-hover:-translate-y-1 transition-transform"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    {/* Live Link */}
                    <a
                      href={project.liveLink}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
