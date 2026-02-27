'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import anime from 'animejs';

const ParticleScene = dynamic(() => import('@/components/animation/ParticleScene'), { ssr: false });

const Hero = () => {
    const profileRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const path1Ref = useRef<SVGPolygonElement>(null);
    const path2Ref = useRef<SVGPolygonElement>(null);

    useEffect(() => {
        // Animation for profile entrance
        anime({
            targets: profileRef.current,
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: 'easeOutElastic(1, .6)',
            duration: 1400,
            delay: 300,
        });

        // Animation text
        anime({
            targets: [titleRef.current, subtitleRef.current, ctaRef.current],
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: anime.stagger(200, { start: 800 }),
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
                duration: 3000, // Slower for smoother transitions
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
        }, 1500);

        return () => clearTimeout(morphTimeout);
    }, []);

    return (
        <section id="hero" className="relative h-screen min-h-150 pt-10 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-950">

            {/* Background 3D Scene */}
            <ParticleScene />

            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pointer-events-none">
                {/* Profile Center Design */}
                <div ref={profileRef} className="relative inline-block mb-12 opacity-0">
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute size-60 rounded-full border-2 border-dashed border-emerald-500/30 dark:border-emerald-400/30 animate-spin-slow"></div>
                        <div className="absolute size-72 rounded-full border-2 border-dashed border-emerald-500/30 dark:border-emerald-400/30 animate-spin-slow"></div>
                        <div className="absolute size-80 rounded-full border-2 border-dashed border-green-500/20 dark:border-green-400/20 animate-spin-reverse"></div>
                    </div>

                    {/* Main Profile Circle with Morphing SVG Border */}
                    <div className="relative w-48 h-48 md:w-52 md:h-52">
                        {/* Inner Circle Container */}
                        <div className="absolute inset-0 rounded-full bg-gray-50 dark:bg-gray-950 m-2 flex items-center justify-center overflow-hidden shadow-2xl">
                            <Image
                                src="/avatar.webp"
                                alt="Sophat LEAT avatar"
                                fill
                                priority
                                sizes="(max-width: 768px) 192px, 208px"
                                className="object-cover"
                            />
                        </div>

                        {/* Status Badge */}
                        <div className="absolute bottom-2 right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-gray-50 dark:border-gray-950 flex items-center justify-center shadow-lg z-10">
                            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-4 -right-4 bg-gray-800 p-2 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 animate-float z-10">
                            <span className="text-2xl">🎨</span>
                        </div>
                        <div className="absolute -bottom-2 -left-4 bg-gray-800 p-2 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 animate-float-delay z-10">
                            <span className="text-2xl">💻</span>
                        </div>
                    </div>
                </div>

                {/* Title & Content */}
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-gray-900 dark:text-white leading-tight tracking-tight opacity-0"
                >
                    <span className="bg-clip-text text-transparent bg-linear-to-br from-teal-500 via-green-500 to-green-500">
                        Sophat LEAT
                    </span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light opacity-0"
                >
                    Vibe Coder • UI/UX Designer • Senior Frontend Developer
                    <br />
                    <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                        Crafting immersive 3D experiences & brand identities
                    </span>
                </p>

                <div className="pointer-events-auto opacity-0" ref={ctaRef}>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a
                            href="#portfolio"
                            className="hover-effect-btn inline-block px-8 py-4 bg-linear-to-br from-emerald-500 to-green-600 text-white rounded-full font-bold text-base shadow-xl hover:shadow-2xl"
                        >
                            View Portfolio
                        </a>
                        <a
                            href="#contact"
                            className="hover-effect-btn inline-block px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full font-bold text-base shadow-lg hover:shadow-xl"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
