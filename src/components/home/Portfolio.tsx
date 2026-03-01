'use client';

import { Terminal, Code2, Github, ExternalLink, BarChart3, Zap } from 'lucide-react';
import Button from '../common/Button';

const projects = [
    {
        id: 1,
        title: 'Portfolio-WebGL',
        status: 'DEPLOYED',
        desc: 'An immersive 3D portfolio experience built with WebGL technologies. Features interactive particle systems and smooth animations.',
        tags: ['webgl', 'three.js', 'react', 'creative'],
        github: '#',
        live: '#'
    },
    {
        id: 2,
        title: 'Github Stats',
        status: 'ACTIVE',
        desc: 'Visualizing GitHub profile statistics and contributions in a stunning way. Real-time data visualization dashboard.',
        tags: ['react', 'api', 'data-viz', 'github'],
        github: '#',
        live: '#'
    },
    {
        id: 3,
        title: 'Stats Studio',
        status: 'DEPLOYED',
        desc: 'A comprehensive analytics dashboard for tracking personal coding statistics with detailed insights and metrics.',
        tags: ['analytics', 'dashboard', 'typescript', 'next.js'],
        github: '#',
        live: '#'
    },
    {
        id: 4,
        title: 'pxp cli',
        status: 'STABLE',
        desc: 'Personal Xampp Php Version Manager - A CLI tool to manage PHP versions easily with intuitive commands.',
        tags: ['cli', 'php', 'node.js', 'tooling'],
        github: '#',
        live: '#'
    },
    {
        id: 5,
        title: 'File Management System',
        status: 'PRODUCTION',
        desc: 'A robust web-based file management system for efficient asset organization with cloud integration.',
        tags: ['web-app', 'laravel', 'storage', 'api'],
        github: '#',
        live: '#'
    },
    {
        id: 6,
        title: 'Portfolio V5',
        status: 'LIVE',
        desc: 'The fifth iteration of my personal portfolio, featuring modern design and stack with cutting-edge technologies.',
        tags: ['next.js', 'tailwind', 'portfolio', 'responsive'],
        github: '#',
        live: 'https://pphat.stackdev.cloud'
    },
    {
        id: 7,
        title: 'Nintrea Website',
        status: 'LIVE',
        desc: 'The official website for the Nintrea community, connecting developers and fostering collaboration.',
        tags: ['community', 'web', 'nuxt', 'ssr'],
        github: '#',
        live: 'https://nintrea.top'
    },
    {
        id: 8,
        title: 'eLibrary of Nintrea',
        status: 'LIVE',
        desc: 'A digital library platform providing resources for the Khmer developer community with curated content.',
        tags: ['education', 'cms', 'blogger', 'resources'],
        github: '#',
        live: 'https://elibraryofkhmer.blogspot.com'
    },
    {
        id: 9,
        title: 'Student Management System',
        status: 'BETA',
        desc: 'A comprehensive system for managing student data, grades, and attendance with automated reporting.',
        tags: ['management', 'php', 'mysql', 'education'],
        github: '#',
        live: '#'
    }
];

const skills = [
    { name: 'REACT / NEXT.JS', level: '95%' },
    { name: 'TYPESCRIPT', level: '90%' },
    { name: 'NODE.JS / DENO', level: '85%' },
    { name: 'TAILWIND CSS', level: '95%' },
    { name: 'PHP / LARAVEL', level: '88%' },
    { name: 'THREE.JS / WEBGL', level: '75%' },
];


const Portfolio = () => {
    return (
        <div className="min-h-screen  text-slate-200 flex flex-col">
            {/* Navigation Tabs */}
            <nav className="backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex gap-8">
                    <h1 className={`relative px-6 py-4 text-lg transition-all text-cyan-400 font-medium`}>
                        Show Case Project
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                    </h1>
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="flex-1 relative p-7 sm:p-10 max-w-6xl mx-auto">
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                />

                <div className="relative z-10">
                    <div className="grid grid-cols-1 gap-6">
                        {projects.slice(0, 4).map((proj) => (
                            <div
                                key={proj.id}
                                className="group relative bg-slate-950/40 border border-slate-900/20 hover:border-cyan-500/40 transition-all duration-500"
                            >
                                <div className="p-3 sm:p-8 flex flex-col md:flex-row gap-8">
                                    <div className="w-full md:w-48 h-32 bg-slate-900 border border-slate-800 flex items-center justify-center relative overflow-hidden">
                                        <Code2 size={40} className="text-slate-800 group-hover:text-cyan-900 transition-colors" />
                                        <div className="absolute top-2 left-2 text-[8px] font-mono text-slate-700">IMG_PREVIEW</div>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-2xl font-bold text-cyan-400">{proj.title}</h3>
                                            <span className="text-[10px] font-mono px-2 py-0.5 border border-emerald-500/30 text-emerald-400">
                                                {proj.status}
                                            </span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">{proj.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {proj.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-mono text-slate-500 bg-slate-900 px-2 py-1" >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex md:flex-col justify-end gap-3">
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all"
                                        >
                                            <Github size={18} />
                                        </a>
                                        <a
                                            href={proj.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button href="/blog" asLink variant="outline" className="px-8 py-3">
                            View All Articles
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
