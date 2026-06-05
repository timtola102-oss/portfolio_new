import React from 'react';
import { USER_PROFILE, SKILL_CATEGORIES, ROADMAP } from '../data/portfolioData';
import { Icons } from './Icons';
import { motion } from "framer-motion";
import { FaLaptopCode, FaCloud, FaTools } from "react-icons/fa";
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiJest,
  SiCypress,
} from "react-icons/si";

import {
  FaAws,
  FaServer,
  FaTasks,
  FaCodeBranch,
} from "react-icons/fa";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 mx-auto">

      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        className="text-center space-y-4 max-w-xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-950 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Main Content: Bio & Skills */}
      <div className="space-y-12">

        {/* Top: Bio Paragraphs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="space-y-6 max-w-3xl"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              {USER_PROFILE.name}
            </h3>
            <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold mb-4">
              {USER_PROFILE.title}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base whitespace-pre-line">
              {USER_PROFILE.bio}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={USER_PROFILE.resumeUrl}
              className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-teal-500/20 transition-all duration-200"
            >
              <span>Download Resume</span>
              <Icons.Download className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Bottom: Expertise / Core Skills Stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="space-y-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 p-8 rounded-2xl"
        >
          <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            Core Expertise
          </h4>

          <div className="space-y-8">
            {SKILL_CATEGORIES.map((category, idx) => {
              const iconMap = {
                0: <FaLaptopCode />,
                1: <FaCloud />,
                2: <FaTools />,
              };

              const skillIcons = {
                "React / Next.js": <SiReact />,
                "Vue js": <SiVuedotjs />,
                TypeScript: <SiTypescript />,
                "Tailwind CSS": <SiTailwindcss />,

                "Node.js (Express/NestJS)": <SiNodedotjs />,
                "PHP (Laravel)": <SiLaravel />,
                "Python (Django/Flask)": <SiPython />,
                "PostgreSQL & MongoDB": <SiPostgresql />,
                "Docker & Kubernetes": <SiDocker />,
                "AWS (S3, Lambda, EC2)": <FaAws />,
                "RESTful API Design": <FaServer />,

                "Git & GitHub Actions": <SiGithubactions />,
                "Agile / Scrum": <FaTasks />,
                "CI/CD Pipelines": <FaCodeBranch />,
                "Jest / Cypress Testing": <SiJest />,
              };
              return (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">
                      {iconMap[idx]}
                    </div>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      {category.name}
                    </p>
                  </div>
                  <div className="space-y-3 pl-2">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between items-center mb-2">

                          <span className="text-sm font-medium text-slate-700 dark:text-slate-400">
                            {skill.name}

                          </span>
                          <span className="flex items-center gap-4 text-sm font-bold text-teal-600 dark:text-teal-400">
                            <span className="text-2xl">
                              {skillIcons[skill.name]}
                            </span>
                            {skill.level}%
                          </span>

                        </div>

                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-2 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Journey Timeline */}
      <div className="space-y-10 pt-10">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 text-center"
        >
          My Journey
        </motion.h3>

        {/* Timeline Container */}
        <div className="relative py-8">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-cyan-400 to-slate-300 dark:to-slate-700 transform -translate-x-1/2"></div>

          {/* Timeline Events */}
          <div className="space-y-8">
            {ROADMAP.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`flex items-center ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Left/Right Content */}
                <div className={`w-1/2 ${idx % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 p-6 rounded-xl hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex flex-col gap-2 mb-3">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        {event.stage}
                      </h4>
                      <span className="text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 px-2.5 py-1 rounded-md w-fit" style={{ marginLeft: idx % 2 === 0 ? 'auto' : '0' }}>
                        {event.year}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">{event.description}</p>

                    <div className="flex flex-wrap gap-1.5" style={{ justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      {event.tags && event.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2.5 py-1 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="w-0 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-5 h-5 bg-white dark:bg-slate-950 border-4 border-teal-500 rounded-full shadow-lg z-10"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}