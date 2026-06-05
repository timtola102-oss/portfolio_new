import React from 'react';
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
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'projects', 'contact'].map((sect) => (
            <button
              key={sect}
              onClick={() => handleNavClick(sect)}
              className={`text-sm font-semibold capitalize tracking-wide transition-colors ${
                activeSection === sect
                  ? 'text-teal-600 dark:text-teal-400 font-bold'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
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
                className={`block w-full text-left py-3 px-4 rounded-xl text-base font-medium capitalize transition-all ${
                  activeSection === sect
                    ? 'bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900/50'
                }`}
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
}