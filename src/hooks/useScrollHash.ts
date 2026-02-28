'use client';

import { useEffect, useRef } from 'react';

interface ScrollHashOptions {
    threshold?: number | number[];
    debounceDelay?: number;
}

export function useScrollHash(options: ScrollHashOptions = {}) {
    const { threshold = [0, 0.25, 0.5, 0.75, 1], debounceDelay = 100 } = options;
    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Create Intersection Observer to detect when sections come into view
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the section that's most in view (highest intersectionRatio)
                const visibleSection = entries.reduce((prev, current) => 
                    current.intersectionRatio > prev.intersectionRatio ? current : prev
                );

                // Debounce the hash update
                if (debounceTimerRef.current) {
                    clearTimeout(debounceTimerRef.current);
                }

                debounceTimerRef.current = setTimeout(() => {
                    if (visibleSection && visibleSection.intersectionRatio > 0) {
                        // Update the URL hash without causing a page reload
                        const hash = visibleSection.target.id;
                        if (hash && window.location.hash !== `#${hash}`) {
                            window.history.replaceState(null, '', `#${hash}`);
                        }
                    }
                }, debounceDelay);
            },
            {
                threshold,
            }
        );

        // Observe all sections with IDs
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, [threshold, debounceDelay]);
}
