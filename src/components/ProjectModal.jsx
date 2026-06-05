import React from 'react';
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
}