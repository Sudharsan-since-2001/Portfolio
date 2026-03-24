"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "How I Solve Problems", href: "/process" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [mounted, setMounted] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-foreground">
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-20 md:h-24">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-xl sm:text-2xl font-sans font-black tracking-tight text-foreground uppercase hover:text-primary transition-colors"
                        >
                            <span className="hidden xs:inline">Sudharsan</span>
                            <span className="inline xs:hidden">Sudharsan</span>
                            <span className="hidden sm:inline"> Karthikeyan</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="hidden lg:block">
                            <div className="flex items-center space-x-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="px-3 py-2 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground border-2 border-transparent hover:border-foreground transition-all whitespace-nowrap"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <Link
                                href="/contact"
                                className="hidden md:block nb-btn px-5 py-2.5 bg-primary text-primary-foreground text-sm font-black uppercase"
                            >
                                Get in Touch
                            </Link>

                            {/* Mobile menu button */}
                            <div className="lg:hidden flex items-center">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="nb-btn p-2 sm:p-2.5 bg-background text-foreground"
                                    aria-label="Toggle Menu"
                                >
                                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-background border-t-[3px] border-foreground overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-3">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block px-6 py-4 text-base font-black uppercase tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground border-[3px] border-foreground shadow-[4px_4px_0px_var(--foreground)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                            >
                                <Link
                                    href="/contact"
                                    className="block mt-4 nb-btn px-6 py-4 bg-primary text-primary-foreground text-center text-base font-black uppercase tracking-widest shadow-[4px_4px_0px_var(--foreground)]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
