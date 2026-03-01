import React from 'react';

interface HtmlIconProps {
    className?: string;
    style?: React.CSSProperties;
}

const HtmlIcon: React.FC<HtmlIconProps> = ({ className, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={style}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 16v-8l2 5l2 -5v8" />
            <path d="M1 16v-8" />
            <path d="M5 8v8" />
            <path d="M1 12h4" />
            <path d="M7 8h4" />
            <path d="M9 8v8" />
            <path d="M20 8v8h3" />
        </svg>
    );
};

export default HtmlIcon;
