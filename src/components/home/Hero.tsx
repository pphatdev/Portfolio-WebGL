'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import anime from 'animejs';
import Button from '@/components/common/Button';
import { Mail, Projector, Shield, Terminal } from 'lucide-react';

const ParticleScene = dynamic(() => import('@/components/animation/ParticleScene'), { ssr: false });

const Hero = () => {
    const profileRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<HTMLDivElement>(null);
    const path1Ref = useRef<SVGPolygonElement>(null);
    const path2Ref = useRef<SVGPolygonElement>(null);

    useEffect(() => {
        // Animation for profile entrance
        anime({
            targets: profileRef.current,
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: 'easeOutElastic(1, .6)',
            duration: 1820,
            delay: 390,
        });

        // Animation for particle scene fade in
        anime({
            targets: sceneRef.current,
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1560,
            delay: 0,
        });

        // Animation text
        anime({
            targets: [titleRef.current, subtitleRef.current, ctaRef.current],
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1560,
            delay: anime.stagger(260, { start: 1040 }),
        });

        // Morphing border animation with smooth dynamic transitions
        const animateMorphingBorder = () => {
            if (!path1Ref.current || !path2Ref.current) return;

            // Generate smooth organic points for morphing
            const generatePoints = () => {
                const segments = 8; // Fixed segments for consistent morphing
                const baseRadius = 118;
                const variance = Math.random() * 16 + 8; // Random variance 8-24
                const isOdd = (n: number) => n % 2;
                let points = '';

                for (let i = 0; i < segments * 2; i++) {
                    // Alternate between inner and outer radius for star-like shape
                    const radiusOffset = isOdd(i) ? variance : 0;
                    const r = baseRadius + radiusOffset;
                    const angle = (2 * Math.PI * i / (segments * 2)) - Math.PI / 2;
                    const x = Math.round(128 + r * Math.cos(angle));
                    const y = Math.round(128 + r * Math.sin(angle));
                    points += `${x},${y} `;
                }
                return points.trim();
            };

            // Set new target points on path2
            path2Ref.current.setAttribute('points', generatePoints());

            // Animate smooth morph with elastic easing
            anime({
                targets: path1Ref.current,
                points: [
                    { value: path2Ref.current.getAttribute('points') || '' }
                ],
                easing: 'easeInOutQuad',
                duration: 3900, // Slower for smoother transitions
                complete: () => {
                    // Continue infinite morphing loop
                    if (path2Ref.current) {
                        path2Ref.current.setAttribute('points', generatePoints());
                    }
                    animateMorphingBorder();
                }
            });
        };

        // Start morphing animation after profile entrance
        const morphTimeout = setTimeout(() => {
            animateMorphingBorder();
        }, 1950);

        return () => clearTimeout(morphTimeout);
    }, []);

    return (
        <div className="relative h-screen min-h-150 border-b border-blue-900/40 pt-20 flex items-center justify-center">

            {/* Background 3D Scene */}
            <div ref={sceneRef} className="opacity-0">
                <ParticleScene />
            </div>

            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                {/* Profile Center Design */}
                <div ref={profileRef} className="relative inline-block mb-12 opacity-0">
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute size-47 z-10 rounded-full border-2 border-emerald-400/30 animate-spin-slow"></div>
                        <div className="absolute size-58.25 rounded-full border-2 border-dashed border-emerald-400/30 animate-spin-slow"></div>
                        <div className="absolute size-69.75 rounded-full border-2 border-dashed border-emerald-400/30 animate-spin-slow"></div>
                        <div className="absolute size-77.5 rounded-full border border-dashed border-green-400/20 animate-spin-reverse"></div>
                        <div className="absolute size-58.25 rounded-full border-2 border-solid border-emerald-400 animate-ping [animation-duration:2500ms] opacity-40"></div>
                    </div>

                    {/* Main Profile Circle with Morphing SVG Border */}
                    <div className="relative size-46.5 md:size-50.5">
                        {/* Inner Circle Container */}
                        <div className="absolute inset-0 rounded-full bg-gray-950 m-2 flex items-center justify-center overflow-hidden shadow-2xl">
                            <Image src="/avatar.webp" alt="Sophat LEAT avatar" fill priority sizes="(max-width: 768px) 192px, 208px" className="object-cover" />
                        </div>

                        {/* Status Badge */}
                        <div className="absolute bottom-2 right-2 bg-green-500 size-7 rounded-full border-4 border-gray-950/50 flex items-center justify-center shadow-lg z-10">
                            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-4 -right-4 bg-gray-800/10 p-1 shadow-xl border border-gray-700/10 animate-float z-10">
                            {/* Corner accents */}
                            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400/60"></span>
                            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-emerald-400/60"></span>
                            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-emerald-400/60"></span>
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400/60"></span>
                            <span className="text-xl relative z-10">😎</span>
                        </div>
                        <div className="absolute -bottom-2 -left-4 bg-gray-800/10 p-1 shadow-xl border border-gray-700/10 animate-float-delay z-10">
                            {/* Corner accents */}
                            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400/60"></span>
                            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-emerald-400/60"></span>
                            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-emerald-400/60"></span>
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400/60"></span>
                            <span className="text-xl relative z-10">💻</span>
                        </div>
                    </div>
                </div>

                {/* Title & Content */}
                <h1 ref={titleRef} className="text-[2.18rem] md:text-[3.64rem] lg:text-[3.5rem] font-black mb-4 text-white leading-tight tracking-tight opacity-0" >
                    <span className='sr-only'> Sophat LEAT known as </span>
                    <span className="bg-clip-text text-transparent bg-linear-to-br from-teal-500 via-green-500 to-green-500">
                        PPhat
                    </span>
                    <span className="bg-clip-text pr-4 italic font-thin text-transparent bg-linear-to-br from-teal-500 via-teal-500 to-teal-500">
                        DEV
                    </span>
                </h1>

                <p ref={subtitleRef} className="text-[1.09rem] md:text-[1.21rem] lg:text-[1.25rem] text-gray-300 mb-8 max-w-2xl mx-auto font-light opacity-0" >
                    Vibe Coding Developer • UI/UX Designer • Senior Frontend Developer
                    <br />
                    <span className="text-sm pt-2 md:text-base text-gray-400">
                        This portfolio showcases my journey, projects, and passions as a developer and creator. Explore my work, check out my skills, and feel free to connect if you'd like to collaborate or learn more.
                    </span>
                </p>

                <div className="pointer-events-auto opacity-0 mt-5" ref={ctaRef}>
                    <div className="flex flex-row gap-2 sm:gap-9 items-center justify-center max-w-xl mx-auto">
                        <Button variant="hud" href="#portfolio" icon={Projector} role="Projects">
                            Show Case
                        </Button>
                        <Button href='#contact' hudStyle icon={Mail} role="Contact" className='sm:translate-x-2.5'>
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
