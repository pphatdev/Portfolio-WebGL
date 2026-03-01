'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';

const Contact = () => {
    return (
        <div>
            <nav className="backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex gap-8">
                    <h1 className={`relative px-6 py-4 text-lg transition-all text-cyan-400 font-medium`}>
                        Get In Touch
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                    </h1>
                </div>
            </nav>

            <div className="grid grid-cols-1 px-10 my-10 max-w-6xl mx-auto lg:grid-cols-2 gap-12 items-start">
                {/* Form Side */}
                <div>
                    <h2 className="text-base mb-1 font-medium text-white">
                        Send Me a Message
                    </h2>
                    <p className="mb-6 max-w-6xl mx-auto italic text-gray-400 leading-relaxed">
                        Get in touch with me. {`I'm`} always open to discussing new projects, creative ideas
                        or opportunities to be part of your vision.
                    </p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input type="text" label="Your Name" placeholder="John Doe" />
                            <Input type="email" label="Your Email" placeholder="john@example.com" />
                        </div>

                        <Input type="text" label="Subject" placeholder="Project Inquiry" />
                        <Textarea label="Your Message" placeholder="Tell me about your project..." rows={6} />

                        <div className="flex gap-4 pt-4">
                            <Button type="submit" variant="primary" className="px-4 py-3 font-bold" >
                                Send Message
                            </Button>
                            <Button type="reset" variant="secondary" className="px-4 py-3 font-bold" >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Visual Side */}
                <div className="relative group hidden lg:block">
                    <div className="absolute inset-0 bg-green-600 rounded-2xl -rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="relative w-full h-128 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border  border-gray-700 group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="text-center p-8">
                            <h4 className="text-2xl font-bold text-white mb-3">
                                Let's Create Together
                            </h4>
                            <p className="text-gray-400 text-lg max-w-xs mx-auto leading-relaxed">
                                Every great project starts with a conversation. Let's explore ideas and build something amazing.
                            </p>
                            <div className="mt-8 pt-8 border-t  border-gray-700">
                                <p className="text-sm text-gray-500 font-medium">
                                    ✨ Typically respond within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
