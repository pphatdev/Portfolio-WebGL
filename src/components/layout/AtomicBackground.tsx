import React from 'react';
import './AtomicBackground.css';

interface AtomicBackgroundProps {
    atomColor?: string;
    nucleusColor?: string;
    electronColors?: string[];
    backgroundColor?: string;
}

const AtomicBackground: React.FC<AtomicBackgroundProps> = ({
    atomColor = "rgba(255, 255, 255, 0.03)",
    nucleusColor = "#00d4ff",
    electronColors = ["#00d4ff", "#9d00ff", "#00ffcc"],
    backgroundColor = "radial-gradient(circle at center, #0a192f 0%, #020617 100%)"
}) => {
    return (
        <div className="atomic-container" style={{ background: backgroundColor }}>
            <div className="stars-overlay" />

            <svg viewBox="0 0 400 400" className="atomic-svg">
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Central Nucleus */}
                <g className="nucleus-group">
                    <circle cx="200" cy="200" r="8" fill="#fff" filter="url(#glow)" />
                    <circle cx="200" cy="200" r="15" fill={nucleusColor} opacity="0.3" className="pulse" />
                </g>

                {/* Orbits and Electrons */}
                {electronColors.map((color, index) => (
                    <g key={index} className={`orbit-group orbit-${index + 1}`}>
                        <ellipse cx="200" cy="200" rx="140" ry="50" fill="none" stroke={atomColor} strokeWidth="1"/>
                        <circle r="5" fill={color} filter="url(#glow)" className="electron" style={{ '--electron-color': color } as React.CSSProperties} />
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default AtomicBackground;