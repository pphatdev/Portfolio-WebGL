"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FaMoon, FaSun } from "react-icons/fa"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="sr-only">Toggle theme</span>
                <FaSun className="h-[1.2rem] w-[1.2rem] text-gray-500" />
            </button>
        )
    }

    return (
        <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <span className="sr-only">Toggle theme</span>
            {theme === 'dark' ? (
                <FaSun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <FaMoon className="h-[1.2rem] w-[1.2rem]" />
            )}
        </button>
    )
}
