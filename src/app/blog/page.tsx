import React from 'react';
import Button from '@/components/common/Button';

const BlogPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-32 text-center min-h-screen">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-green-600 mb-6">
                Blog
            </h1>
            <p className="text-gray-400 mb-10 text-xl">
                More articles coming soon.
            </p>
            <Button href="/" asLink variant="secondary" className="px-8 py-3">
                Back to Home
            </Button>
        </div>
    );
};

export default BlogPage;
