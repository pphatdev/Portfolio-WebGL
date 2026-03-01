'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Button from '@/components/common/Button';

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
        <div data-stagger-item>
            <nav className="backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex gap-8">
                    <h1 className={`relative px-6 py-4 text-lg transition-all text-cyan-400 font-medium`}>
                        About Me
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                    </h1>
                </div>
            </nav>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto p-7 sm:p-10">
                {/* Bio Text */}
                <div className="space-y-6" data-stagger-item>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        My name is <span className="font-semibold text-emerald-400">Leat Sophat</span>, also known as <span className="font-semibold text-emerald-400">PPhat</span>.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        {`I'm a`} <span className="font-semibold text-emerald-400">Senior Frontend Developer</span> at TURBOTECH CO., LTD, and a Freelance UI/UX Designer based in <span className="text-white">Phnom Penh, Cambodia</span>.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        I started my career as a Frontend Developer in 2021, and I have a passion for creating beautiful and functional user interfaces. I love to learn new technologies and improve my skills every day.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        I am also a big fan of open-source projects and I enjoy contributing to the community. I believe that sharing knowledge is the key to success in this field.
                    </p>

                    <div className="pt-4 flex gap-4 flex-wrap">
                        <Button href="#" asLink variant="outline" className="px-2 py-1.5 pt-2">
                            View Resume
                        </Button>
                        <Button href="#contact" asLink variant="primary" className="px-2 py-1.5 pt-2">
                            Get In Touch
                        </Button>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-7" data-stagger-item>
                    <div
                        className="relative group cursor-pointer h-64 border bg-gray-900/40 backdrop-blur-md flex items-center justify-center transition-all duration-300"
                        data-stagger-item
                        style={{ borderColor: '#00D2FF30', boxShadow: '0 0 20px #00D2FF00' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#00D2FFcc';
                            e.currentTarget.style.boxShadow = '0 0 20px #00D2FF66';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#00D2FF30';
                            e.currentTarget.style.boxShadow = '0 0 20px #00D2FF00';
                        }}
                    >
                        {/* Corner accents */}
                        <div className="absolute -top-2 -left-2 w-2 h-2 border-t border-l transition-colors" style={{ borderColor: '#00D2FF66' }}></div>
                        <div className="absolute -top-2 -right-2 w-2 h-2 border-t border-r transition-colors" style={{ borderColor: '#00D2FF66' }}></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 border-b border-l transition-colors" style={{ borderColor: '#00D2FF66' }}></div>
                        <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r transition-colors" style={{ borderColor: '#00D2FF66' }}></div>
                        <div className="text-6xl">📸</div>
                    </div>
                    <div
                        className="relative group cursor-pointer h-64 border bg-gray-900/40 backdrop-blur-md flex items-center justify-center transition-all duration-300"
                        data-stagger-item
                        style={{ borderColor: '#10b98130', boxShadow: '0 0 20px #10b98100' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#10b981cc';
                            e.currentTarget.style.boxShadow = '0 0 20px #10b98166';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#10b98130';
                            e.currentTarget.style.boxShadow = '0 0 20px #10b98100';
                        }}
                    >
                        {/* Corner accents */}
                        <div className="absolute -top-2 -left-2 w-2 h-2 border-t border-l transition-colors" style={{ borderColor: '#10b98166' }}></div>
                        <div className="absolute -top-2 -right-2 w-2 h-2 border-t border-r transition-colors" style={{ borderColor: '#10b98166' }}></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 border-b border-l transition-colors" style={{ borderColor: '#10b98166' }}></div>
                        <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r transition-colors" style={{ borderColor: '#10b98166' }}></div>
                        <div className="text-6xl">🌴</div>
                    </div>
                    <div
                        className="relative group cursor-pointer h-64 border bg-gray-900/40 backdrop-blur-md flex items-center justify-center transition-all duration-300 col-span-2"
                        data-stagger-item
                        style={{ borderColor: '#22d3ee30', boxShadow: '0 0 20px #22d3ee00' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#22d3eecc';
                            e.currentTarget.style.boxShadow = '0 0 20px #22d3ee66';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#22d3ee30';
                            e.currentTarget.style.boxShadow = '0 0 20px #22d3ee00';
                        }}
                    >
                        {/* Corner accents */}
                        <div className="absolute -top-2 -left-2 w-2 h-2 border-t border-l transition-colors" style={{ borderColor: '#22d3ee66' }}></div>
                        <div className="absolute -top-2 -right-2 w-2 h-2 border-t border-r transition-colors" style={{ borderColor: '#22d3ee66' }}></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 border-b border-l transition-colors" style={{ borderColor: '#22d3ee66' }}></div>
                        <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r transition-colors" style={{ borderColor: '#22d3ee66' }}></div>
                        <div className="text-6xl">🎨</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
