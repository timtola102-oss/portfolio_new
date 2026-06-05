import React, { useState } from 'react';
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
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Project Experience</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 dark:text-slate-400">Explore built projects across dynamic domains.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setProjectFilter(tab)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              projectFilter === tab
                ? 'bg-teal-500 text-white shadow-md shadow-teal-500/10'
                : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
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
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
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
}