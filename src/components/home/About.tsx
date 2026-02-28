'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Three.js', category: 'WebGL' },
    { name: 'Figma', category: 'Design' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
];

const experiences = [
    {
        title: 'Senior Frontend Developer',
        company: 'TURBOTECH CO., LTD',
        date: 'Oct 2022 - Present',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    },
    {
        title: 'Junior Frontend Developer',
        company: 'Creative Agency',
        date: 'Oct 2020 - Oct 2022',
        skills: ['JavaScript', 'React', 'Tailwind CSS', 'HTML/CSS', 'Laravel'],
    },
    {
        title: 'UI/UX Designer',
        company: 'Freelance',
        date: '2019 - Present',
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    },
];

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);

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
        <section ref={sectionRef} id="about" className="py-20 overflow-hidden bg-white dark:bg-gray-950">
            <div className="container mx-auto px-6">

                {/* Intro Section */}
                <div className="mb-20" data-stagger-item>
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-green-600">
                        About Me
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Bio Text */}
                        <div className="space-y-6" data-stagger-item>
                            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                                {`I'm a`} <span className="font-semibold text-emerald-600 dark:text-emerald-400">Senior Frontend Developer</span> and <span className="font-semibold text-emerald-600 dark:text-emerald-400">UI/UX Designer</span> based in Phnom Penh, Cambodia.
                            </p>

                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                I started my career as a Frontend Developer in 2021, and I have a passion for creating beautiful and functional user interfaces. I love to learn new technologies and improve my skills every day.
                            </p>

                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                I am also a big fan of open-source projects and I enjoy contributing to the community. I believe that sharing knowledge is the key to success in this field.
                            </p>

                            <div className="pt-4 flex gap-4 flex-wrap">
                                <a href="#" className="inline-block px-6 py-2 bg-emerald-500/10 border border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-2xl font-medium hover:bg-emerald-500/20 transition-colors">
                                    View Resume
                                </a>
                                <a href="#contact" className="inline-block px-6 py-2 bg-linear-to-br from-teal-500 to-green-500 via-green-500 text-white rounded-2xl font-medium hover:bg-green-600 transition-colors hover-effect-btn">
                                    Get In Touch
                                </a>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-2 gap-4" data-stagger-item>
                            <div className="relative group rounded-xl overflow-hidden h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow" data-stagger-item>
                                <div className="text-6xl">📸</div>
                            </div>
                            <div className="relative group rounded-xl overflow-hidden h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow" data-stagger-item>
                                <div className="text-6xl">🌴</div>
                            </div>
                            <div className="relative group rounded-xl overflow-hidden h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow col-span-2" data-stagger-item>
                                <div className="text-6xl">🎨</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-20" data-stagger-item>
                    <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                        Tech Stack
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                data-stagger-item
                                className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all cursor-default group"
                            >
                                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💻</div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white text-center">{tech.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{tech.category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Timeline */}
                <div data-stagger-item>
                    <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
                        Experience
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} data-stagger-item className="flex gap-6 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                                {/* Timeline Dot */}
                                <div className="flex flex-col items-center">
                                    <div className="size-4 rounded-full bg-emerald-500 mt-2"></div>
                                    {index !== experiences.length - 1 && (
                                        <div className="w-0.5 h-24 bg-gray-300 dark:bg-gray-700"></div>
                                    )}
                                </div>

                                {/* Experience Content */}
                                <div className="flex-1 pb-4">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {exp.title}
                                            </h3>
                                            <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {exp.date}
                                        </p>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
