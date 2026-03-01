import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => {
    return (
        <div>
            {label && (
                <label className="block text-sm font-medium text-gray-300 mb-3">
                    {label}
                </label>
            )}
            <div className="relative">
                {/* Top-left corner */}
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-400/60"></span>
                {/* Top-right corner */}
                <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-400/60"></span>
                {/* Bottom-left corner */}
                <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-400/60"></span>
                {/* Bottom-right corner */}
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-400/60"></span>
                <textarea
                    className={`w-full px-4 py-3 text-sm bg-gray-800/20 border border-gray-700  outline-none transition-all resize-none ${className}`}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
        </div>
    );
};

export default Textarea;
