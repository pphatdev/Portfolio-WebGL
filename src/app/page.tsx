'use client';

import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Portfolio from '@/components/home/Portfolio';
import Blog from '@/components/home/Blog';
import Contact from '@/components/home/Contact';
import SectionReveal from '@/components/common/SectionReveal';
import { useScrollHash } from '@/hooks/useScrollHash';
import Experience from '@/components/home/Experience';
import TechStack from '@/components/home/TechStack';

export default function Home() {
    useScrollHash();

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <section id="hero">
                <Hero />
            </section>
            <section id="about">
                <SectionReveal delay={0} direction="up">
                    <About />
                </SectionReveal>
            </section>
            <section id="tech-stack">
                <SectionReveal delay={0} direction="up">
                    <TechStack />
                </SectionReveal>
            </section>
            <section id="experience">
                <SectionReveal delay={0} direction="up">
                    <Experience />
                </SectionReveal>
            </section>
            <section id="portfolio">
                <SectionReveal delay={80} direction="up">
                    <Portfolio />
                </SectionReveal>
            </section>
            <section id="blog">
                <SectionReveal delay={120} direction="up">
                    <Blog />
                </SectionReveal>
            </section>
            <section id="contact">
                <SectionReveal delay={160} direction="up">
                    <Contact />
                </SectionReveal>
            </section>
        </div>
    );
}
