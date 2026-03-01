import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/common/Button';

const blogPosts = [
    {
        id: 1,
        title: 'The Future of UI Design: 2026 Trends',
        excerpt: 'Exploring the latest trends in user interface design, from immersive 3D elements to minimalist aesthetics.',
        date: 'March 15, 2026',
        category: 'Design Trends',
        imageUrl: 'https://placehold.co/600x400/indigo/white?text=UI+Design',
    },
    {
        id: 2,
        title: 'Mastering React Three Fiber for Web 3D',
        excerpt: 'A comprehensive guide to building interactive 3D experiences on the web using React Three Fiber and Three.js.',
        date: 'February 28, 2026',
        category: 'Development',
        imageUrl: 'https://placehold.co/600x400/purple/white?text=3D+Web',
    },
    {
        id: 3,
        title: 'Color Theory in Digital Branding',
        excerpt: 'Understanding the psychological impact of color in digital branding and how to choose the right palette for your project.',
        date: 'January 10, 2026',
        category: 'Branding',
        imageUrl: 'https://placehold.co/600x400/pink/white?text=Color+Theory',
    },
];

const Blog = () => {
    return (
        <div>
            <nav className="backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex gap-8">
                    <h1 className={`relative px-6 py-4 text-lg transition-all text-cyan-400 font-medium`}>
                        Latest Insights
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                    </h1>
                </div>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
                {blogPosts.map((post) => (
                    <div key={post.id} className="group flex flex-col h-full bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-700">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                unoptimized
                                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-green-400 z-10">
                                {post.category}
                            </div>
                        </div>

                        <div className="p-6 grow flex flex-col">
                            <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-600 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 mb-4 grow line-clamp-3">
                                {post.excerpt}
                            </p>
                            <Link href={`#blog-${post.id}`} className="inline-flex items-center font-medium text-green-400 hover:text-green-300 transition-colors mt-auto">
                                Read Article
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button href="/blog" asLink variant="outline" className="px-8 py-3">
                    View All Articles
                </Button>
            </div>
        </div>
    );
};

export default Blog;
