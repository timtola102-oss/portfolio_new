import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import { USER_PROFILE } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
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
}