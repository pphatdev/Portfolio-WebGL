"use client";

import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../common/Button';

const Header = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">
            <div
                className={`mx-auto flex max-w-4xl items-center justify-between rounded-3xl px-4 py-3 lg:bg-transparent shadow-lg backdrop-blur-md transition-all duration-700 ease-out ${styles.slideIn}`}
            >
                <Link href="/" className="group inline-flex items-center gap-3 rounded-xl px-2 py-1 transition-colors">
                    <span className="text-base font-semibold text-gray-100">
                        Sophat L.
                    </span>
                </Link>

                {/* <nav className="hidden md:flex items-center gap-6">
                    <Link href="#about" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">
                        About
                    </Link>
                    <Link href="#portfolio" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">
                        Portfolio
                    </Link>
                    <Link href="#blog" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">
                        Blog
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">
                        Contact
                    </Link>
                </nav> */}

                <div className="flex items-center">
                    <Button variant="primary" href="/" asLink target="_blank" rel="noopener noreferrer">
                        Resume
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
