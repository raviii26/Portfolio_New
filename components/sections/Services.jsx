"use client";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building fast, responsive, and highly interactive web applications using modern frameworks like React and Next.js.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: "Mobile Apps",
      description:
        "Creating seamless cross-platform mobile experiences with React Native, ensuring high performance on iOS and Android.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive, user-centric interfaces with stunning visuals that provide a frictionless experience for your users.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path>
          <path d="M12 22v-6.5"></path>
          <path d="M22 8.5l-10 7-10-7"></path>
          <path d="M2 15.5l10-7 10 7"></path>
        </svg>
      ),
    },
    {
      title: "Optimization",
      description:
        "Auditing and optimizing applications to maximize speed, accessibility, and SEO for better search engine rankings.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="w-full px-[5%] md:px-[10%] py-24 bg-zinc-50 dark:bg-black transition-colors duration-500 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center w-full mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20]"></span>
            What I offer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-2xl mx-auto font-Outfit text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base"
          >
            I transform ideas into digital reality. From pixel-perfect designs
            to highly optimized, scalable backend architectures, I provide
            comprehensive solutions to elevate your digital presence.
          </motion.p>
        </div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col p-6 rounded-[1.5rem] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(184,32,230,0.15)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b820e6]/5 to-[#da7d20]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-[#b820e6] group-hover:to-[#da7d20] transition-all duration-300 mb-6 relative z-10 shadow-inner">
                {service.icon}
              </div>

              {/* Title with Ovo font */}
              <h3 className="text-xl font-Ovo font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#b820e6] group-hover:to-[#da7d20] transition-colors duration-300 relative z-10">
                {service.title}
              </h3>

              {/* Description with Outfit font */}
              <p className="text-sm font-Outfit text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow relative z-10">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="flex items-center gap-2 text-xs uppercase tracking-wider font-Outfit font-bold text-zinc-900 dark:text-white group-hover:text-[#da7d20] transition-colors mt-auto relative z-10"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
