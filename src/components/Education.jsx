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
