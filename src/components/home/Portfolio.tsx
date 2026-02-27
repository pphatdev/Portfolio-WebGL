import React from 'react';

const projects = [
    { id: 1, title: 'Modern E-commerce', category: 'UI/UX Design', color: 'bg-emerald-500' },
    { id: 2, title: 'Finance Dashboard', category: 'Web Development', color: 'bg-green-600' },
    { id: 3, title: 'Tech Brand Identity', category: 'Branding', color: 'bg-emerald-500' },
    { id: 4, title: '3D Product Viewer', category: '3D Graphics', color: 'bg-orange-500' },
    { id: 5, title: 'Fitness Tracker App', category: 'Mobile App', color: 'bg-rose-500' },
    { id: 6, title: 'Virtual Gallery', category: 'Creative Direction', color: 'bg-violet-600' },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-br from-emerald-500 to-green-600 mb-4">
                        Selected Works
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A collection of projects showcasing my expertise in design and development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <div className={`relative h-64 w-full ${project.color} flex items-center justify-center text-white text-4xl font-bold opacity-80 group-hover:opacity-100 transition-all duration-500`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                                <span className="relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500">
                                    {project.id}
                                </span>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                                        View Project
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-sm font-semibold text-green-500 uppercase tracking-wider group-hover:text-emerald-500 transition-colors duration-300">{project.category}</span>
                                <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white group-hover:text-green-600 transition-colors duration-300">{project.title}</h3>
                                <p className="text-gray-500 mt-2 text-sm line-clamp-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
