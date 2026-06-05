<Reveal>
    <div className=" space-y-6">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Technical Expertise</h3>
        <div className="grid grid-cols-1 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
                <div key={idx} className=" transition-transform hover:rotate-2 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 shadow-sm">
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
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>

</Reveal>