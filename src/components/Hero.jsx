import React from 'react';
import { USER_PROFILE, SOCIAL_LINKS } from '../data/portfolioData';
import { renderSocialIcon } from './Icons';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


export default function Hero({ handleNavClick }) {
  return (
    <section
      id="home"
      className="scroll-mt-24 space-y-16 pt-20 pb-16">
      <div className="flex w-full justify-between">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-6">

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 dark:bg-teal-950/40 dark:border-teal-800/60 dark:text-teal-300 text-sm font-semibold animate-pulse">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            <span>Available for freelance & full-time roles</span>
          </div>

          <h1 className=" text-5xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Hello, I'm{" "}
            <span className="animate-pulse bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              {USER_PROFILE.name}
            </span>
          </h1>

          <p className=" mt-2 text-xl md:text-2xl font-medium text-slate-600 green:text-slate-300 animate-fade-up">
            {USER_PROFILE.title}
          </p>

          <div className="mt-4">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Backend Developer',
                2000,
                'Frontend Developer',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300"
            />
          </div>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
            {USER_PROFILE.subTitle}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => handleNavClick("projects")}
              className=" shadow-md hover:shadow-xl transition-shadow duration-300 transition-transform duration-300 hover:scale-110 px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-lg hover:bg-teal-600 transition-all"
            >
              View My Projects
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className=" shadow-md hover:shadow-xl transition-shadow duration-300 transition-transform duration-300 hover:scale-110 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-bold"
            >
              Let's Collaborate
            </button>
          </div>

          {/* SOCIALS */}
          <div className="animate-bounce  flex justify-center md:justify-start gap-5 pt-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                rel="noopener noreferrer"
                className=" animate-[spin_3s_linear_infinite] p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:scale-110 transition-all"
              >
                {renderSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT AVATAR */}
        <div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-cyan-400 rounded-3xl blur-2xl opacity-40"></div>

            <motion.img
              whileHover={{
                scale: 1.05,
                rotate: 2
              }}
              src={USER_PROFILE.avatarUrl}
              alt={USER_PROFILE.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.6 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-100 h-100 md:w-96 md:h-96 rounded-3xl object-cover border-4 border-white dark:border-slate-900 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}