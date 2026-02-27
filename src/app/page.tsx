import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Portfolio from '@/components/home/Portfolio';
import Blog from '@/components/home/Blog';
import Contact from '@/components/home/Contact';
import SectionReveal from '@/components/common/SectionReveal';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <SectionReveal delay={0} direction="up">
                <About />
            </SectionReveal>
            <SectionReveal delay={80} direction="up">
                <Portfolio />
            </SectionReveal>
            <SectionReveal delay={120} direction="up">
                <Blog />
            </SectionReveal>
            <SectionReveal delay={160} direction="up">
                <Contact />
            </SectionReveal>
        </div>
    );
}
