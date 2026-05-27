"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "About", href: "/about", color: "bg-[#FF90B3]" },
    { name: "Experience", href: "/experience", color: "bg-[#90C8FF]" },
    { name: "Portfolio", href: "/portfolio", color: "bg-[#C4A0FF]" },
    { name: "Contact", href: "/contact", color: "bg-[#FF6B35]" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <>
            <header className="sticky top-0 z-[100] w-full bg-background border-b-[3.5px] border-foreground font-sans">
                {/* Main Navbar */}
                <nav className="w-full flex items-center justify-between h-16 md:h-20 px-6 md:px-12">
                    {/* Logo Section */}
                    <Link
                        href="/"
                        className="flex items-center bg-transparent transition-all group relative z-10"
                    >
                        <span className="text-sm md:text-lg font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                            Sudharsan Karthikeyan
                        </span>
                    </Link>

                    {/* Desktop Nav Links Section */}
                    <div className="hidden md:flex items-center gap-4 relative z-10 bg-transparent">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-5 py-2 text-xs md:text-sm font-black uppercase tracking-wider transition-all border-[2.5px] border-foreground",
                                        isActive 
                                            ? `${link.color} text-foreground shadow-[3px_3px_0px_#000] -translate-x-[2px] -translate-y-[2px]` 
                                            : "bg-background text-foreground shadow-[3px_3px_0px_#000] -translate-x-[2px] -translate-y-[2px] hover:bg-muted/40 active:translate-x-0 active:translate-y-0 active:shadow-none"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden items-center z-10">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-10 h-10 flex items-center justify-center border-[2.5px] border-foreground bg-background text-foreground hover:bg-muted/40 transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-0 z-[90] bg-background pt-24 px-6 pb-10 flex flex-col md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-5 mt-6">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "block w-full px-6 py-4 text-base font-black uppercase tracking-widest border-[3px] border-foreground text-center transition-all",
                                                isActive 
                                                    ? `${link.color} text-foreground shadow-[4px_4px_0px_#000] -translate-x-[2px] -translate-y-[2px]` 
                                                    : "bg-white text-foreground shadow-[4px_4px_0px_#000] -translate-x-[2px] -translate-y-[2px] active:translate-x-0 active:translate-y-0 active:shadow-none"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
