"use client";

import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">
            <div
                className={`mx-auto flex max-w-4xl items-center justify-between rounded-3xl px-4 py-3 bg-transparent shadow-lg backdrop-blur-md transition-all duration-700 ease-out ${styles.slideIn}`}
            >
                <Link href="/" className="group inline-flex items-center gap-3 rounded-xl px-2 py-1 transition-colors hover:bg-gray-100/80 dark:hover:bg-gray-900">
                    <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
                        Sophat L.
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#about" className="text-sm font-medium text-gray-700 transition-colors hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400">
                        About
                    </Link>
                    <Link href="#portfolio" className="text-sm font-medium text-gray-700 transition-colors hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400">
                        Portfolio
                    </Link>
                    <Link href="#blog" className="text-sm font-medium text-gray-700 transition-colors hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400">
                        Blog
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-gray-700 transition-colors hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center">
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-effect-btn rounded-xl bg-linear-to-r from-emerald-500 to-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
