'use client';
import { motion } from 'framer-motion';

export default function About() {
    const tools = [
        { name: 'VS Code', icon: '/assets/vscode.png', },
        { name: 'Firebase', icon: '/assets/firebase.png', },
        { name: 'MongoDB', icon: '/assets/mongodb.png', },
        { name: 'Figma', icon: '/assets/figma.png', },
        { name: 'Git', icon: '/assets/git.png', },
    ];

    const data = [
        {
            name: 'Languages & Tech',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 dark:text-zinc-200"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            ),
            description: 'HTML, CSS, JavaScript, React.js, Next.js, Tailwind',
        },
        {
            name: 'Education',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 dark:text-zinc-200"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            ),
            description: 'B.Tech in Computer Science & Engineering',
        },
        {
            name: 'Experience',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 dark:text-zinc-200"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            ),
            description: 'Over 10 years of professional expertise',
        },
    ];

    return (
        <section id="about" className="w-full px-[5%] md:px-[10%] py-24 scroll-mt-20 font-Outfit bg-zinc-50 dark:bg-black transition-colors duration-500">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 mb-6 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20]"></span>
                    Introduction
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight"
                >
                    Discover My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">Journey</span>
                </motion.h2>
            </div>

            <div className="flex w-full flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20 max-w-5xl mx-auto">
                {/* Left: Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full max-w-[16rem] lg:w-1/3 relative mx-auto lg:mx-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#b820e6]/20 to-[#da7d20]/20 rounded-[2.5rem] transform -rotate-6 scale-105 blur-xl"></div>
                    <img
                        src='/assets/user-image.jpeg'
                        alt="Ravi Sharma Profile"
                        className="w-full relative rounded-[2.5rem] shadow-2xl object-cover border border-white/50 dark:border-white/10 z-10 bg-zinc-100 dark:bg-zinc-800/50"
                    />

                    {/* Floating Tech Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
                        className="absolute right-0 md:-right-8 -bottom-4 md:-bottom-6 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-lg px-4 md:px-5 py-3 md:py-4 rounded-2xl shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50 flex items-center gap-3 md:gap-4 z-20"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#b820e6] to-[#da7d20] flex items-center justify-center text-white shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs md:text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Software </span>
                            <span className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium">Developer</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right: Content Section */}
                <div className="flex-1 w-full flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="mb-10 text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light space-y-6"
                    >
                        <p>
                            I like building things that feel effortless — interfaces with intent, and systems that scale quietly behind them.
                        </p>
                        <p>
                            I&apos;m a full-stack developer working across the whole stack — from the first wireframe to the deployed service. On the frontend, I craft responsive, pixel-perfect interfaces with <strong className="font-medium text-zinc-900 dark:text-white">React, Next.js, TypeScript and Tailwind CSS</strong>.
                        </p>
                        <p>
                            On the backend, I build robust services with <strong className="font-medium text-zinc-900 dark:text-white">Node.js and Spring Boot</strong>, backed by <strong className="font-medium text-zinc-900 dark:text-white">PostgreSQL and MongoDB</strong> — shipped with modern tooling like <strong className="font-medium text-zinc-900 dark:text-white">Docker, AWS and Git</strong>.
                        </p>
                    </motion.div>

                    {/* Bento Grid Info Cards (Temporarily Disabled) */}
                    {/*
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 mb-14">
                        {data.map((item, index) => (
                            <motion.li 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                key={item.name} 
                                className="group relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#b820e6]/5 to-[#da7d20]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10 flex flex-col items-start">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-zinc-100 dark:border-white/5">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">{item.name}</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                    */}

                    {/* Tools Section (Temporarily Disabled) */}
                    {/*
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.6 }}
                    >
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6 flex items-center gap-4">
                            Tools & Technologies I Use
                            <span className="flex-1 h-px bg-zinc-200 dark:bg-white/10"></span>
                        </h4>
                        
                        <ul className="flex flex-wrap items-center gap-4">
                            {tools.map((tool, index) => (
                                <motion.li 
                                    whileHover={{ y: -5 }}
                                    key={tool.name} 
                                    className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 group tooltip-trigger relative"
                                    title={tool.name}
                                >
                                    <img src={tool.icon} alt={tool.name} className="w-7 md:w-8 group-hover:scale-110 transition-transform duration-300" />
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    */}
                </div>
            </div>
        </section>
    );
}