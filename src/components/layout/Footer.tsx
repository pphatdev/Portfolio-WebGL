import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="pt-12 pb-5">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-green-500 mb-4">
                        Sophat L.
                    </h3>
                    <p className="text-gray-400 font-light">
                        Crafting digital experiences that inspire and engage.
                    </p>
                </div>

                <div className="flex flex-col space-y-2">
                    <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
                    <Link href="#about" className="text-gray-400 hover:text-white transition-colors">About</Link>
                    <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
                    <Link href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
                    <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                </div>

                <div className="flex flex-col space-y-2">
                    <h4 className="font-semibold text-lg mb-2">Connect</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">GitHub</a>
                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">Behance</a>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-5 text-center text-gray-500">
                &copy; {new Date().getFullYear()} Sophat L. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
