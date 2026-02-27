'use client';

import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 overflow-hidden bg-white dark:bg-gray-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-green-600">
                        Get In Touch
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Get in touch with me. I'm always open to discussing new projects, creative ideas
                        or opportunities to be part of your vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Form Side */}
                    <div>
                        <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                            Send Me a Message
                        </h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:focus:ring-green-500 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:focus:ring-green-500 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:focus:ring-green-500 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Your Message
                                </label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:focus:ring-green-500 outline-none transition-all resize-none"
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="submit"
                                    className="hover-effect-btn px-8 py-3 bg-linear-to-r from-emerald-500 to-green-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    Send Message
                                </button>
                                <button
                                    type="reset"
                                    className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Visual Side */}
                    <div className="relative group hidden lg:block">
                        <div className="absolute inset-0 bg-green-600 rounded-2xl -rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="relative w-full h-128 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700 group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="text-center p-8">
                                <div className="text-7xl mb-6">💬</div>
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    Let's Create Together
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xs mx-auto leading-relaxed">
                                    Every great project starts with a conversation. Let's explore ideas and build something amazing.
                                </p>
                                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        ✨ Typically respond within 24 hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
