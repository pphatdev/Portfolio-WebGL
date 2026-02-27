import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
    return (
        <div className="container mx-auto px-6 py-32 text-center min-h-screen">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-green-600 mb-6">
                Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-xl">
                More articles coming soon.
            </p>
            <Link href="/" className="hover-effect-btn px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                Back to Home
            </Link>
        </div>
    );
};

export default BlogPage;
