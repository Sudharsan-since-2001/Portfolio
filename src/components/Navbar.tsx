"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "How I Solve Problems", href: "/process" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-foreground/10 transition-all">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-serif font-bold text-primary tracking-tight">
                            Sudharsan Karthikeyan
                        </Link>
                    </div>

                    <div className="flex items-center space-x-8">
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-foreground/80 hover:text-primary transition-colors font-medium whitespace-nowrap"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button className="hidden md:block px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all whitespace-nowrap">
                                Get in Touch
                            </button>

                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-foreground p-2"
                                >
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-foreground/10 animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full mt-4 px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all">
                            Get in Touch
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
