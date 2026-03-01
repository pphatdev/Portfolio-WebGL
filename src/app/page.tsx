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
import { CosmicBackground } from '@/components/layout/CosmicBackground';

export default function Home() {
    useScrollHash();

    return (
        <div className="flex flex-col min-h-screen">
            <CosmicBackground/>
            <section id="hero" className='bg-linear-to-b from-blue-800/10 via-indigo-500/10 to-blue-800/10'>
                <Hero />
            </section>
            <section id="about" className='bg-linear-to-b from-blue-800/10 via-indigo-500/10 to-blue-800/10'>
                <SectionReveal delay={0} direction="up">
                    <About />
                </SectionReveal>
            </section>
            <section id="tech-stack" className='bg-linear-to-b from-blue-800/10 via-indigo-500/10 to-blue-800/10'>
                <SectionReveal delay={0} direction="up">
                    <TechStack />
                </SectionReveal>
            </section>
            <section id="experience" className='bg-linear-to-b from-blue-800/10 via-indigo-500/10 to-blue-800/10'>
                <SectionReveal delay={0} direction="up">
                    <Experience />
                </SectionReveal>
            </section>
            <section id="portfolio" className='bg-linear-to-b from-blue-800/10 via-indigo-500/10 to-blue-800/10'>
                <SectionReveal delay={80} direction="up">
                    <Portfolio />
                </SectionReveal>
            </section>
            {/* <section id="blog" className='bg-linear-to-b from-blue-800/10 via-indigo-500/10 to-blue-800/10'>
                <SectionReveal delay={120} direction="up">
                    <Blog />
                </SectionReveal>
            </section> */}
            <section id="contact" className='bg-linear-to-b from-blue-800/10 via-indigo-500/10 to-blue-800/10'>
                <SectionReveal delay={160} direction="up">
                    <Contact />
                </SectionReveal>
            </section>
        </div>
    );
}
