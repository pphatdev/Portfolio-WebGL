'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ReactIcon from '@/components/common/ReactIcon';
import NextJsIcon from '@/components/common/NextJsIcon';
import TypescriptIcon from '@/components/common/TypescriptIcon';
import TailwindIcon from '@/components/common/TailwindIcon';
import FigmaIcon from '@/components/common/FigmaIcon';
import NodeJsIcon from '@/components/common/NodeJsIcon';
import JavascriptIcon from '@/components/common/JavascriptIcon';
import DenoIcon from '@/components/common/DenoIcon';
import HtmlIcon from '@/components/common/HtmlIcon';
import CssIcon from '@/components/common/CssIcon';
import SqlIcon from '@/components/common/SqlIcon';
import PhpIcon from '@/components/common/PhpIcon';
import LaravelIcon from '@/components/common/LaravelIcon';
import NuxtJsIcon from '@/components/common/NuxtJsIcon';

interface TechStackCardProps {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    title: string;
    subtitle: string;
    delay: number;
    color: string;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ icon: Icon, title, subtitle, delay, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="relative group cursor-pointer flex flex-col items-center justify-center p-6 border bg-gray-900/40 backdrop-blur-md transition-all duration-300"
            style={{
                borderColor: `${color}30`,
                boxShadow: `0 0 20px ${color}00`,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}cc`;
                e.currentTarget.style.boxShadow = `0 0 20px ${color}66`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${color}30`;
                e.currentTarget.style.boxShadow = `0 0 20px ${color}00`;
            }}
        >
            <div className="mb-4 p-4 transition-colors">
                <Icon
                    className="size-14 transition-all"
                    style={{
                        color,
                        filter: `drop-shadow(0 0 10px ${color}dd) brightness(1.1)`,
                        opacity: 0.95
                    }}
                />
            </div>
            <div className="text-center">
                <h3 className="text-sm font-bold mb-1 transition-colors uppercase tracking-wider" style={{ color: `${color}` }}>
                    {title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest transition-colors" style={{ color: `${color}80` }}>
                    {subtitle}
                </p>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-2 h-2 border-t border-l transition-colors" style={{ borderColor: `${color}66` }}></div>
            <div className="absolute -top-2 -right-2 w-2 h-2 border-t border-r transition-colors" style={{ borderColor: `${color}66` }}></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 border-b border-l transition-colors" style={{ borderColor: `${color}66` }}></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r transition-colors" style={{ borderColor: `${color}66` }}></div>
        </motion.div>
    );
};

const colors = [
    '#00D2FF', // cyan - primary brand color
    '#22d3ee', // cyan bright
    '#06b6d4', // cyan medium
    '#0891b2', // cyan deep
    '#10b981', // emerald - secondary brand color
    '#14b8a6', // teal
    '#06d6a0', // teal bright
    '#00d4aa', // teal light
    '#00c9a7', // teal medium
    '#00bfa5', // teal dark
    '#00e5cc', // aqua
    '#00f5d4', // aqua light
];

const techStackData = [
    { title: 'React', subtitle: 'v18.3 • Frontend', icon: ReactIcon },
    { title: 'Next.js', subtitle: 'v15.0 • Frontend', icon: NextJsIcon },
    { title: 'TypeScript', subtitle: 'v5.6 • Language', icon: TypescriptIcon },
    { title: 'Tailwind CSS', subtitle: 'v4.0 • Styling', icon: TailwindIcon },
    { title: 'JavaScript', subtitle: 'ES2024 • Language', icon: JavascriptIcon },
    { title: 'Node.js', subtitle: 'v22.0 • Backend', icon: NodeJsIcon },
    { title: 'Deno', subtitle: 'v2.0 • Runtime', icon: DenoIcon },
    { title: 'Figma', subtitle: 'v124 • Design', icon: FigmaIcon },
    { title: 'HTML5', subtitle: 'v5.3 • Frontend', icon: HtmlIcon },
    { title: 'CSS3', subtitle: 'v3.0 • Styling', icon: CssIcon },
    { title: 'SQL', subtitle: 'v16 • Database', icon: SqlIcon },
    { title: 'PHP', subtitle: 'v8.3 • Backend', icon: PhpIcon },
    { title: 'Laravel', subtitle: 'v11 • Backend', icon: LaravelIcon },
    { title: 'Nuxt.js', subtitle: 'v3.14 • Frontend', icon: NuxtJsIcon },
];

const TechStack = () => {
    const techStack = useMemo(() => {
        return techStackData.map((tech) => ({
            ...tech,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));
    }, []);

    return (
        <div data-stagger-item>
            <nav className="border-b border-slate-900 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex gap-8">
                    <h1 className={`relative px-6 py-4 text-sm transition-all text-cyan-400 font-bold`}>
                        Tech Stack
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                    </h1>
                </div>
            </nav>

            <div className="grid grid-cols-2 relative p-7 max-w-6xl mx-auto sm:p-10 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                    <TechStackCard
                        key={index}
                        icon={tech.icon}
                        title={tech.title}
                        subtitle={tech.subtitle}
                        delay={index * 0.1}
                        color={tech.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default TechStack;
