'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const TechCore = ({ name, version, category }: { name: string; version: string; category: string }) => {
    const themes = {
        frontend: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5",
        backend: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
        infra: "border-amber-500/30 text-amber-400 bg-amber-500/5",
        default: "border-slate-500/30 text-slate-400 bg-slate-500/5"
    };

    const theme = themes[category as keyof typeof themes] || themes.default;

    return (
        <div className={`flex items-center gap-3 px-3 py-2 border transition-all duration-300 hover:scale-105 group/core ${theme}`}>
            <div className="relative">
                <div className="w-2 h-2 rounded-full bg-current animate-pulse shadow-[0_0_8px_currentColor]" />
            </div>
            <div className="flex flex-col">
                <span className="font-mono text-[9px] font-bold tracking-tighter uppercase leading-none mb-1">{name}</span>
                <span className="font-mono text-[7px] opacity-40 leading-none italic">v.{version}</span>
            </div>
        </div>
    );
};

const experiences = [
    {
        title: 'Senior Frontend Developer',
        company: 'TURBOTECH CO., LTD',
        date: 'Oct 2022 - Present',
        logo: '🚀',
        achievements: [
            'Built and Maintenance SmartERP System for Operational, Inventory, Human Resources, Sales, and Accounting etc.',
        ],
        skills: [
            { name: 'React', version: '18', category: 'frontend' },
            { name: 'Next.js', version: '14', category: 'frontend' },
            { name: 'TypeScript', version: '5', category: 'frontend' },
            { name: 'Tailwind CSS', version: '3', category: 'frontend' },
            { name: 'Node.js', version: '20', category: 'backend' },
            { name: 'PostgreSQL', version: '16', category: 'backend' },
        ],
    },
    {
        title: 'Creator & Developer',
        company: 'Nintrea Labs',
        date: '2021 - Present',
        logo: '💡',
        achievements: [
            'Founded and developed Nintrea Labs, a platform for open-source projects.',
            'Built and maintained multiple open-source libraries and tools.',
            'Managed the entire product lifecycle from concept to deployment.',
        ],
        skills: [
            { name: 'Next.js', version: '14', category: 'frontend' },
            { name: 'Nuxt.js', version: '3', category: 'frontend' },
            { name: 'Laravel', version: '10', category: 'backend' },
            { name: 'Node.js', version: '20', category: 'backend' },
            { name: 'Hono', version: '4', category: 'backend' },
            { name: 'Vercel', version: '34', category: 'infra' },
        ],
    },
    {
        title: 'Junior Frontend Developer',
        company: 'TURBOTECH CO., LTD',
        date: 'Oct 2020 - Oct 2022',
        logo: '💻',
        achievements: [
            'Developed responsive user interfaces using HTML, CSS, JavaScript, and jQuery.',
            'Optimized website performance and ensured cross-browser compatibility.',
        ],
        skills: [
            { name: 'JavaScript', version: 'ES6', category: 'frontend' },
            { name: 'jQuery', version: '3', category: 'frontend' },
            { name: 'HTML', version: '5', category: 'frontend' },
            { name: 'CSS', version: '3', category: 'frontend' },
            { name: 'Bootstrap', version: '5', category: 'frontend' },
            { name: 'PHP', version: '8', category: 'backend' },
        ],
    },
    {
        title: 'Content Writing Officer & UI/UX Designer',
        company: 'TURBOTECH CO., LTD',
        date: 'Nov 2019 - Oct 2020',
        logo: '✍️',
        achievements: [
            'Created engaging content for the company blog and company\'s social channels.',
            'Designed user interfaces and experiences for web applications and websites.',
        ],
        skills: [
            { name: 'Figma', version: '124', category: 'default' },
            { name: 'Adobe XD', version: '57', category: 'default' },
            { name: 'Content Writing', version: '∞', category: 'default' },
            { name: 'UI/UX Design', version: '∞', category: 'default' },
        ],
    },
];

const Experience = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const targets = sectionRef.current.querySelectorAll('[data-stagger-item]');

        const baseStagger = anime.stagger(90, { start: 120 });
        const staggerModifier = (value: number, index: number) => {
            const waveOffset = index % 2 === 0 ? 0 : 70;
            return value + waveOffset;
        };

        anime({
            targets,
            translateY: [28, 0],
            opacity: [0, 1],
            duration: 900,
            easing: 'easeOutCubic',
            delay: (_el, index, total) => {
                const staggered = baseStagger(_el, index, total);
                return staggerModifier(typeof staggered === 'number' ? staggered : 0, index);
            },
        });

        return () => {
            anime.remove(targets);
        };
    }, []);

    return (
        <div ref={sectionRef} data-stagger-item>
            <nav className="backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex gap-8">
                    <h1 className={`relative px-6 py-4 text-lg transition-all text-cyan-400 font-medium`}>
                        Experience Timeline
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                    </h1>
                </div>
            </nav>

            <div className="flex-1 relative p-7 sm:p-10 max-w-6xl mx-auto">
                {experiences.map((exp, index) => (
                    <div key={index} data-stagger-item className="relative group pl-7 sm:pl-10">
                        {/* Vertical Line Connector */}
                        <div className="absolute left-1 sm:left-1.5 top-4 -bottom-12 w-px bg-linear-to-b from-emerald-500 to-transparent group-last:bg-transparent" />

                        {/* Glowing Node */}
                        <div className="absolute -left-0.75 sm:-left-0.5 top-4 w-4 h-4 rounded-full bg-gray-950 border-2 border-emerald-500 z-10 shadow-[0_0_10px_#10b981]">
                            <div className="absolute inset-1 bg-emerald-500 rounded-full animate-pulse" />
                        </div>

                        <span className="inline-block font-mono text-[11px] text-emerald-500 mb-3 tracking-tighter">
                            [ {exp.date} ]
                        </span>

                        {/* Content Card */}
                        <div
                            className="bg-gray-900/40 border border-gray-800 p-5 sm:p-8 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:translate-x-2"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tight italic">
                                    {exp.title}
                                </h3>
                                {/* <span className="text-3xl">{exp.logo}</span> */}
                            </div>

                            <div className="flex items-center gap-2 text-emerald-400/80 font-medium text-sm mb-4">
                                <span className="tracking-wide uppercase">{exp.company}</span>
                            </div>

                            <ul className="text-gray-400 text-sm leading-relaxed max-w-2xl font-light space-y-2 mb-4">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-emerald-500 mr-2">•</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-6">
                                {exp.skills.map((tech, i) => (
                                    <TechCore key={i} name={tech.name} version={tech.version} category={tech.category} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;