'use client';
import { motion } from 'framer-motion';

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 dark:text-zinc-200"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
            ),
            skills: [
                { name: "React", logo: <img src="/assets/react.svg" alt="React" className="w-4 h-4" /> },
                { name: "Next.js", logo: <div className="w-4 h-4 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold" style={{fontSize: '9px'}}>N</div> },
             { name: "Angular", logo: <img src="/assets/angular.jpeg" alt="Angular" className="w-4 h-4 object-contain" /> },
                { name: "TypeScript", logo: <div className="w-4 h-4 bg-[#3178C6] text-white flex items-center justify-center font-bold rounded-sm" style={{fontSize: '8px'}}>TS</div> },
                { name: "Tailwind CSS", logo: <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#38B2AC]" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg> },
                { name: "JavaScript", logo: <div className="w-4 h-4 bg-[#F7DF1E] text-black flex items-center justify-center font-bold rounded-sm" style={{fontSize: '8px'}}>JS</div> },
                { name: "HTML5/CSS3", logo: <div className="w-4 h-4 bg-[#E34F26] text-white flex items-center justify-center font-bold rounded-sm" style={{fontSize: '7px'}}>{'</>'}</div> },
            ]
        },
        {
            title: "Backend Development",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 dark:text-zinc-200"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            ),
            skills: [
               { name: "Node.js",logo: <img src="/assets/image.png" alt="Node.js" className="w-4 h-4 object-contain" />},
                { name: "Express.js", logo: <div className="w-4 h-4 bg-zinc-800 text-white flex items-center justify-center font-bold rounded-sm" style={{fontSize: '8px'}}>EX</div> },
                // { name: "Spring Boot", logo: <div className="w-4 h-4 bg-[#6DB33F] text-white flex items-center justify-center font-bold rounded-sm" style={{fontSize: '8px'}}>SB</div> },
                // { name: "Java", logo: <div className="w-4 h-4 bg-[#007396] text-white flex items-center justify-center font-bold rounded-sm" style={{fontSize: '7px'}}>Java</div> },
                { name: "REST APIs", logo: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
                { name: "GraphQL", logo: <div className="w-4 h-4 bg-[#E10098] text-white flex items-center justify-center font-bold rounded-sm" style={{fontSize: '8px'}}>GQL</div> },
                     { name: "C#",logo: <img src="/assets/csharp.png" alt="C#" className="w-6 h-6 object-contain" />},
            ]
        },
        {
            title: "Database",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 dark:text-zinc-200"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            ),
            skills: [
                { name: "PostgreSQL", logo: <img src="/assets/POSTGRESQL.jpeg" alt="PostgreSQL" className="w-6 h-6 object-contain" /> },
                { name: "MongoDB", logo: <img src="/assets/mongodb.png" alt="MongoDB" className="w-5 h-5 object-contain" /> },
                { name: "MySQL", logo: <img src="/assets/mysql.png" alt="MySQL" className="w-6 h-6 object-contain" /> },
                // { name: "Redis", logo: <div className="w-4 h-4 bg-[#DC382D] text-white flex items-center justify-center font-bold rounded-sm" style={{fontSize: '6px'}}>Redis</div> },
                { name: "Firebase", logo: <img src="/assets/firebase.png" alt="Firebase" className="w-4 h-4 object-contain" /> },
            ]
        },
        {
            title: "Tools & DevOps",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 dark:text-zinc-200"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            ),
            skills: [
                { name: "Git & Github", logo: <img src="/assets/git.png" alt="Git" className="w-6 h-6 object-contain" /> },
          { name: "DOCKER", logo: <img src="/assets/docker.jpeg" alt="DOCKER" className="w-6 h-6 object-contain" /> },
                { name: "AWS", logo: <img src="/assets/aws.png" alt="AWS" className="w-4 h-4 object-contain" /> },
                { name: "Figma", logo: <img src="/assets/figma.png" alt="Figma" className="w-4 h-4 object-contain" /> },
                { name: "VS Code", logo: <img src="/assets/vscode.png" alt="VS Code" className="w-4 h-4 object-contain" /> },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="skills" className="w-full px-[5%] md:px-[10%] py-24 font-Outfit bg-white dark:bg-black transition-colors duration-500">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 mb-6 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20]"></span>
                    Technical Arsenal
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight"
                >
                    Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">Technologies</span>
                </motion.h2>
            </div>

            {/* Skills Grid */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto"
            >
                {skillCategories.map((category, idx) => (
                    <motion.div 
                        key={idx}
                        variants={cardVariants}
                        className="group relative p-8 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#b820e6]/5 to-[#da7d20]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center shadow-sm border border-zinc-100 dark:border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{category.title}</h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIdx) => (
                                    <div 
                                        key={skillIdx} 
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 shadow-sm group-hover:border-zinc-300 dark:group-hover:border-white/20 transition-colors duration-300"
                                    >
                                        {skill.logo}
                                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
