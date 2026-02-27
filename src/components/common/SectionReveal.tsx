'use client';

import React, { useEffect, useRef, useState } from 'react';

type SectionRevealProps = {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'left' | 'right';
};

const SectionReveal = ({ children, delay = 0, direction = 'up' }: SectionRevealProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.18,
                rootMargin: '0px 0px -10% 0px',
            }
        );

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ transitionDelay: `${delay}ms` }}
            className={`section-reveal section-reveal-${direction} ${isVisible ? 'section-reveal-visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default SectionReveal;
