'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'hud';
    children: React.ReactNode;
    href?: string;
    asLink?: boolean;
    target?: string;
    rel?: string;
    icon?: LucideIcon;
    role?: string;
    hudStyle?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    href,
    asLink = false,
    target,
    rel,
    icon: Icon,
    role,
    hudStyle = false,
    ...props
}) => {
    // HUD Button Style
    if (hudStyle || variant === 'hud') {
        const hudContent = (
            <a href={href} target={target} rel={rel} className="group relative flex flex-col items-start transition-all duration-300 hover:scale-[1.02] active:scale-95 w-full">
                {/* Role Badge (Top Clip) */}
                {role && (
                    <div className="relative ml-4 px-3 py-0.5 bg-cyan-500/20 border-l border-r border-t border-cyan-400/50 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-cyan-400/10 skew-x-[-20deg] translate-x-1" />
                        <span className="relative text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-300 leading-tight">
                            {role}
                        </span>
                    </div>
                )}

                {/* Main Container */}
                <div className="relative w-full bg-[#0a1622]/80 backdrop-blur-md border border-cyan-500/40 p-3 flex items-center gap-4 overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all">

                    {/* Angular Clip Effects */}
                    <div className="absolute top-0 right-0 w-4 h-4 bg-[#05070a] rotate-45 translate-x-2 -translate-y-2 border-b border-cyan-500/40" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#05070a] rotate-45 -translate-x-1.5 translate-y-1.5 border-t border-cyan-500/40" />

                    {/* Technical Grid Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.15] pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(6,182,212,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.2) 1px, transparent 1px)',
                            backgroundSize: '8px 8px'
                        }}
                    />

                    {/* Icon Housing */}
                    {Icon && (
                        <div className="relative z-10 flex items-center justify-center size-8 sm:size-12 bg-cyan-950/50 border border-cyan-400/30 group-hover:border-cyan-400/80 transition-colors">
                            <Icon className="size-4 sm:size-6 text-cyan-400 group-hover:text-cyan-200" />
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-400" />
                            <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400" />
                        </div>
                    )}

                    {/* Text Area */}
                    <div className="relative z-10 flex flex-col items-start overflow-hidden flex-1">
                        <span className="text-sm sm:text-base font-black tracking-wider text-white uppercase truncate w-full group-hover:text-cyan-100">
                            {children}
                        </span>
                        {/* Technical sub-elements */}
                        <div className="flex items-center gap-2 mt-1">
                            <div className="h-0.5 w-8 bg-cyan-500/50 group-hover:w-12 transition-all" />
                            <div className="flex gap-1">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`${i < 3 ? 'bg-cyan-400' : 'bg-cyan-900'}`} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Accents */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 pr-1 opacity-40 group-hover:opacity-100 transition-opacity">
                        <div className="w-1 h-4 bg-cyan-400/20" />
                        <div className="w-1 h-2 bg-cyan-400/50" />
                    </div>
                </div>

                {/* Bottom Detail Strip */}
                <div className="flex gap-1 mt-1 ml-auto mr-4">
                    <div className="w-8 h-1 bg-cyan-500/30 skew-x-[-45deg]" />
                    <div className="w-2 h-1 bg-cyan-500/80 skew-x-[-45deg]" />
                </div>
            </a>
        );

        if (asLink && href) {
            return (
                <a href={href} className={className} target={target} rel={rel}>
                    {hudContent}
                </a>
            );
        }

        return (
            <button className={className} {...props}>
                {hudContent}
            </button>
        );
    }

    // Standard Button Styles
    const baseStyles = 'hover-effect-btn relative inline-block px-3 py-2 text-sm font-medium text-white';

    const variantStyles = {
        primary: 'bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-500/80 hover:to-green-600/80',
        secondary: 'bg-gray-800 border-2 border-gray-700',
        outline: 'bg-transparent border border-gray-700 hover:bg-gray-800',
        ghost: 'bg-transparent px-2 py-1',
        hud: '' // Handled above
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    const content = (
        <>
            {/* Top-left corner */}
            <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-400/60"></span>

            {/* Top-right corner */}
            <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-400/60"></span>

            {/* Bottom-left corner */}
            <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-400/60"></span>

            {/* Bottom-right corner */}
            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-400/60"></span>

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4" />}
                {children}
            </span>
        </>
    );

    if (asLink && href) {
        return (
            <a href={href} className={combinedStyles} target={target} rel={rel}>
                {content}
            </a>
        );
    }

    return (
        <button className={combinedStyles} {...props}>
            {content}
        </button>
    );
};

export default Button;
