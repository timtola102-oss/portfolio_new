/**
 * Scalable React Portfolio Setup Script
 * Run: node setup-portfolio.js
 * * This script programmatically creates the complete, scalable directory structure
 * and generates all required code configurations, component files, and package layers.
 */

const fs = require('fs');
const path = require('path');

// --- 1. Project Directory Structure Map ---
const DIRECTORIES = [
  'src',
  'src/data',
  'src/components'
];

// --- 2. Files and their respective source code ---
const FILES = {
  // CONFIGURATIONS
  'package.json': `{
  "name": "developer-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.11"
  }
}`,

  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}`,

  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,

  'index.html': `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alex Rivera | Portfolio</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  </head>
  <body class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,

  // APPLICATION SOURCE FILES
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}`,

  'src/main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,

  'src/App.jsx': `import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import { USER_PROFILE } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-teal-500 selection:text-white">
      
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-teal-50/40 via-transparent to-transparent dark:from-teal-950/20 -z-10 pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-cyan-400/10 to-teal-400/10 dark:from-cyan-500/5 dark:to-teal-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[50%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-purple-400/10 to-blue-400/10 dark:from-purple-500/5 dark:to-blue-500/5 blur-3xl -z-10 pointer-events-none" />

      <Navbar 
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">
        <Hero handleNavClick={handleNavClick} />
        <About />
        <Projects setSelectedProject={setSelectedProject} />
        <Contact />
      </main>

      <footer className="border-t border-slate-200/60 dark:border-slate-900 bg-white/40 dark:bg-slate-950/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-2">
            <span className="font-extrabold text-lg text-slate-800 dark:text-slate-200 tracking-tight">AR.</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} {USER_PROFILE.name}. All Rights Reserved.
            </p>
          </div>

          <div className="flex space-x-6 text-sm font-semibold text-slate-500">
            {['home', 'about', 'projects', 'contact'].map((sect) => (
              <button 
                key={sect} 
                onClick={() => handleNavClick(sect)}
                className="hover:text-slate-800 dark:hover:text-white capitalize transition-colors"
              >
                {sect}
              </button>
            ))}
          </div>
        </div>
      </footer>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}`,

  // PORTFOLIO DYNAMIC DATA
  'src/data/portfolioData.js': `export const USER_PROFILE = {
  name: "Alex Rivera",
  title: "Senior Full-Stack Engineer",
  subTitle: "Building resilient digital products with elegant architectures.",
  bio: "I am a passionate software engineer specializing in building highly scalable web applications, robust APIs, and interactive user interfaces. With over 5 years of professional experience, I bridge the gap between complex backend architectures and beautiful, responsive frontends.",
  resumeUrl: "#",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Email", url: "mailto:alex.rivera@example.com", icon: "email" }
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux / Zustand", level: 85 },
      { name: "GraphQL", level: 80 }
    ]
  },
  {
    name: "Backend & Cloud",
    skills: [
      { name: "Node.js (Express/NestJS)", level: 88 },
      { name: "PostgreSQL & MongoDB", level: 85 },
      { name: "Docker & Kubernetes", level: 75 },
      { name: "AWS (S3, Lambda, EC2)", level: 80 },
      { name: "RESTful API Design", level: 92 }
    ]
  },
  {
    name: "Tools & Methodologies",
    skills: [
      { name: "Git & GitHub Actions", level: 90 },
      { name: "Agile / Scrum", level: 85 },
      { name: "CI/CD Pipelines", level: 82 },
      { name: "Jest / Cypress Testing", level: 80 }
    ]
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "2024 - Present",
    role: "Senior Full-Stack Engineer",
    company: "TechNova Solutions",
    description: "Lead developer for a high-traffic B2B SaaS dashboard. Improved page load times by 40% and pioneered the migration of monolithic microservices to NestJS.",
    tags: ["React", "TypeScript", "Node.js", "AWS"]
  },
  {
    year: "2021 - 2024",
    role: "Full-Stack Developer",
    company: "PixelCraft Agency",
    description: "Designed and developed over 15 client websites and web applications. Implemented pixel-perfect user interfaces and integrated multiple payment processors.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Stripe"]
  },
  {
    year: "2019 - 2021",
    role: "Junior Software Engineer",
    company: "LaunchPad Tech",
    description: "Maintained and scaled automated internal pipelines. Collaborated closely with QA engineers to identify performance bottleneck issues.",
    tags: ["JavaScript", "Express", "MongoDB", "Git"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "EcoSphere Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive carbon tracking and environmental data reporting platform designed for enterprises to measure their ecological footprint.",
    longDescription: "EcoSphere enables large organizations to monitor real-time greenhouse gas emissions, generate compliance-ready ESG reports, and track green initiative progress. Features include real-time IoT sensory ingestion pipelines, complex data charts via Chart.js, and multi-tenant organizational hierarchy control.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Apex Crypto Wallet",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    description: "A highly secure, multi-chain digital asset wallet optimized for fast, zero-friction peer-to-peer crypto transactions.",
    longDescription: "Apex is a non-custodial decentralized application designed to interact seamlessly with Ethereum, Polygon, and Solana networks. It handles encrypted on-device key management, gas-less transaction relaying, swap integrations via Uniswap SDK, and customizable dynamic notifications.",
    tags: ["React Native", "TypeScript", "Web3.js", "Tailwind CSS", "Solidity"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Nexus Collaborative Editor",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "A real-time, block-based rich text editor featuring seamless multiplayer synchronization, live comments, and file attachments.",
    longDescription: "Nexus provides a seamless Google-Docs-like experience built from the ground up for teams. It utilizes Conflict-free Replicated Data Types (CRDTs) to ensure zero conflicts when resolving concurrent edits, alongside an elegant Markdown shortcut engine and automated history reversion.",
    tags: ["React", "Next.js", "Yjs", "WebSockets", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "Aura AI Copilot",
    category: "AI / Data",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    description: "An AI-powered automated workflow assistant that hooks into standard chat integrations to summarize discussions and prioritize tasks.",
    longDescription: "Aura listens securely to communication channels, using fine-tuned NLP pipelines to extract action items, create calendar entries, and generate automated summaries. It supports personalized voice customization and vector search database queries for lightning-fast retrieval.",
    tags: ["React", "Python", "FastAPI", "OpenAI API", "Pinecone", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];`,

  // SVGs DEFINITIONS
  'src/components/Icons.jsx': `import React from 'react';

export const Icons = {
  Sun: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.364 17.636l-.707.707m12.728 0l-.707-.707M6.364 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Moon: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  Menu: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Github: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  Linkedin: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Twitter: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  ),
  Email: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Download: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
};

export const renderSocialIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'github': return <Icons.Github />;
    case 'linkedin': return <Icons.Linkedin />;
    case 'twitter': return <Icons.Twitter />;
    case 'email': return <Icons.Email />;
    default: return <Icons.ExternalLink />;
  }
};`,

  // COMPONENT FILES
  'src/components/Navbar.jsx': `import React from 'react';
import { Icons } from './Icons';

export default function Navbar({ 
  activeSection, 
  handleNavClick, 
  darkMode, 
  setDarkMode, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b bg-white/70 border-slate-200/50 dark:bg-slate-950/70 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center space-x-2 font-black text-2xl tracking-tight bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          <span>AR.</span>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'projects', 'contact'].map((sect) => (
            <button
              key={sect}
              onClick={() => handleNavClick(sect)}
              className={\`text-sm font-semibold capitalize tracking-wide transition-colors \${
                activeSection === sect
                  ? 'text-teal-600 dark:text-teal-400 font-bold'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }\`}
            >
              {sect}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Icons.Sun /> : <Icons.Moon />}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 shadow-lg shadow-slate-900/10 dark:shadow-none transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Hire Me
          </button>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Icons.Sun /> : <Icons.Moon />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
          </button>
        </div>

      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 absolute w-full left-0 transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-lg">
            {['home', 'about', 'projects', 'contact'].map((sect) => (
              <button
                key={sect}
                onClick={() => handleNavClick(sect)}
                className={\`block w-full text-left py-3 px-4 rounded-xl text-base font-medium capitalize transition-all \${
                  activeSection === sect
                    ? 'bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900/50'
                }\`}
              >
                {sect}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-3 bg-teal-500 text-white rounded-xl text-base font-semibold hover:bg-teal-600 shadow-md"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}`,

  'src/components/Hero.jsx': `import React from 'react';
import { USER_PROFILE, SOCIAL_LINKS } from '../data/portfolioData';
import { renderSocialIcon } from './Icons';

export default function Hero({ handleNavClick }) {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center py-12 md:py-20 lg:py-28">
      <div className="space-y-6 max-w-4xl">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 dark:bg-teal-950/40 dark:border-teal-800/60 dark:text-teal-300 text-sm font-semibold animate-pulse">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          <span>Available for freelance & full-time roles</span>
        </div>

        <div className="relative inline-block mt-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-cyan-400 rounded-full blur opacity-40 animate-tilt"></div>
          <img 
            src={USER_PROFILE.avatarUrl} 
            alt={USER_PROFILE.name} 
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-xl"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
          Hi, I'm <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">{USER_PROFILE.name}</span>
        </h1>
        
        <p className="text-2xl sm:text-3xl font-medium text-slate-700 dark:text-slate-300">
          {USER_PROFILE.title}
        </p>
        
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {USER_PROFILE.subTitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => handleNavClick('projects')}
            className="w-full sm:w-auto px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/20 hover:bg-teal-600 hover:shadow-teal-600/30 dark:shadow-none transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
          >
            View My Projects
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 font-bold rounded-xl shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:border-slate-800 dark:hover:bg-slate-800/80 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
          >
            Let's Collaborate
          </button>
        </div>

        <div className="flex justify-center items-center gap-6 pt-10">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-slate-800 dark:hover:text-white hover:scale-110 active:scale-95 transition-all bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl shadow-sm"
              title={link.name}
            >
              {renderSocialIcon(link.icon)}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}`,

  'src/components/About.jsx': `import React from 'react';
import { USER_PROFILE, SKILL_CATEGORIES, TIMELINE_EVENTS } from '../data/portfolioData';
import { Icons } from './Icons';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 space-y-16">
      
      <div className="text-center space-y-4 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">About Me</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 dark:text-slate-400">Discover my technical strengths and development background.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">Professional Journey</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {USER_PROFILE.bio}
            </p>
            <a 
              href={USER_PROFILE.resumeUrl}
              className="inline-flex items-center space-x-2 text-teal-600 dark:text-teal-400 font-bold hover:underline"
            >
              <span>Download Resume PDF</span>
              <Icons.Download />
            </a>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Technical Expertise</h3>
            <div className="grid grid-cols-1 gap-6">
              {SKILL_CATEGORIES.map((category, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-4">{category.name}</h4>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm font-semibold mb-1">
                          <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="text-teal-600 dark:text-teal-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full rounded-full transition-all duration-1000"
                            style={{ width: \`\${skill.level}%\` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Work Experience</h3>
          
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-2 space-y-10">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 group-hover:bg-teal-500 transition-colors duration-200"></span>
                <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-1">
                  {event.year}
                </span>
                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {event.role}
                </h4>
                <span className="text-sm font-medium text-slate-400 block mb-2">
                  {event.company}
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {event.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}`,

  'src/components/Projects.jsx': `import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Icons } from './Icons';

export default function Projects({ setSelectedProject }) {
  const [projectFilter, setProjectFilter] = useState('All');
  const filterTabs = ['All', 'Web App', 'Mobile', 'AI / Data'];

  const filteredProjects = projectFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => 
        p.category.toLowerCase() === projectFilter.toLowerCase() || 
        p.tags.some(tag => tag.toLowerCase() === projectFilter.toLowerCase())
      );

  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      
      <div className="text-center space-y-4 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Recent Work</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 dark:text-slate-400">Explore built projects across dynamic domains.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setProjectFilter(tab)}
            className={\`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 \${
              projectFilter === tab
                ? 'bg-teal-500 text-white shadow-md shadow-teal-500/10'
                : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
            }\`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-teal-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-200/50 dark:bg-slate-950 dark:text-slate-400 dark:border-slate-800/50 rounded-lg text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-grow text-center py-2.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 text-sm font-bold rounded-xl transition-colors"
                >
                  Details & Case Study
                </button>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300"
                    title="GitHub Code"
                  >
                    <Icons.Github />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-slate-400">No projects found in this category.</p>
        </div>
      )}

    </section>
  );
}`,

  'src/components/ProjectModal.jsx': `import React from 'react';
import { Icons } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl z-10 transition-all animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        <div className="relative aspect-video flex-shrink-0 bg-slate-100">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-950/70 hover:bg-slate-950 text-white rounded-full backdrop-blur-md"
            aria-label="Close Modal"
          >
            <Icons.Close />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-slate-100 border border-slate-200/50 text-slate-700 dark:bg-slate-800 dark:border-slate-700/50 dark:text-slate-300 text-xs font-bold rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Project Details</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-600 shadow-md shadow-teal-500/10 text-sm"
              >
                <span>Launch Live App</span>
                <Icons.ExternalLink />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-sm"
              >
                <Icons.Github />
                <span>Explore Source Code</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="w-full sm:w-auto sm:ml-auto text-center px-6 py-3 text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-semibold"
            >
              Close Modal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}`,

  'src/components/Contact.jsx': `import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { renderSocialIcon, Icons } from './Icons';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState({ type: null, text: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: null, text: '' });

    if (!formName.trim()) {
      setFormStatus({ type: 'error', text: 'Please fill out your name.' });
      return;
    }
    if (!formEmail.trim() || !/\\S+@\\S+\\.\\S+/.test(formEmail)) {
      setFormStatus({ type: 'error', text: 'Please provide a valid email address.' });
      return;
    }
    if (formMessage.trim().length < 10) {
      setFormStatus({ type: 'error', text: 'Message must be at least 10 characters long.' });
      return;
    }

    setFormStatus({ type: 'loading', text: 'Transmitting message...' });

    setTimeout(() => {
      setFormStatus({
        type: 'success',
        text: \`Thank you, \${formName}! Your message was successfully delivered. I'll get back to you within 24 hours.\`
      });
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-12">
      
      <div className="text-center space-y-4 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 dark:text-slate-400">Have an idea or looking for a builder? Say hello!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
        
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's talk about your next venture</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              I enjoy discussing scalable system architectures, React optimal state flow patterns, and beautiful design patterns. Reach out to ask questions or simply grab a coffee!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <span className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-teal-500">
                  <Icons.Email />
                </span>
                <span className="font-semibold text-sm">alex.rivera@example.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <span className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-teal-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="font-semibold text-sm">San Francisco Bay Area, CA</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Connect Elsewhere</p>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 rounded-xl text-sm font-semibold transition-all"
                >
                  {renderSocialIcon(link.icon)}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6 md:p-8 rounded-3xl shadow-sm">
          <form onSubmit={handleContactSubmit} className="space-y-6">
            
            {formStatus.text && (
              <div className={\`p-4 rounded-xl text-sm font-medium \${
                formStatus.type === 'error' 
                  ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 border border-rose-200/45 dark:border-rose-900/50' 
                  : formStatus.type === 'success'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-200/45 dark:border-emerald-900/50'
                    : 'bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400 border border-teal-200/45 dark:border-teal-900/50 animate-pulse'
              }\`}>
                {formStatus.text}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 dark:border-slate-800 dark:focus:ring-teal-500/30 dark:focus:border-teal-400 text-sm"
                disabled={formStatus.type === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 dark:border-slate-800 dark:focus:ring-teal-500/30 dark:focus:border-teal-400 text-sm"
                disabled={formStatus.type === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Message Body
              </label>
              <textarea
                id="message"
                rows={5}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="Tell me briefly about your project plans..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 dark:border-slate-800 dark:focus:ring-teal-500/30 dark:focus:border-teal-400 text-sm resize-none"
                disabled={formStatus.type === 'loading'}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/10 hover:bg-teal-600 transition-all duration-200 transform active:scale-[0.99] disabled:opacity-50"
              disabled={formStatus.type === 'loading'}
            >
              {formStatus.type === 'loading' ? 'Securing transmission...' : 'Submit Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}`,
};

// --- 3. Execution Pipeline ---
function run() {
  console.log("==================================================");
  console.log("   PORTFOLIO ARCHITECTURE GENERATOR & SCALER     ");
  console.log("==================================================");

  // A. Create required directories
  DIRECTORIES.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`[DIR CREATE] Created: ${dir}`);
    } else {
      console.log(`[DIR VERIFY] Exists:  ${dir}`);
    }
  });

  // B. Write modularized files
  Object.keys(FILES).forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    fs.writeFileSync(fullPath, FILES[filePath], 'utf8');
    console.log(`[FILE WRITE] Created: ${filePath}`);
  });

  console.log("--------------------------------------------------");
  console.log("SUCCESS: Portfolio files built successfully.");
  console.log("\nTo start your app locally, run these commands:");
  console.log("  1. npm install");
  console.log("  2. npm run dev");
  console.log("==================================================");
}

run();