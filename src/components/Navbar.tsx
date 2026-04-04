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
    { name: "How I Solve Problems", href: "/process", color: "bg-[#90FFAB]" },
    { name: "Services", href: "/services", color: "bg-[#FFD166]" },
    { name: "Portfolio", href: "/portfolio", color: "bg-[#C4A0FF]" },
    { name: "Contact", href: "/contact", color: "bg-[#FF6B35]" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <>
            <nav 
                className="w-full bg-background border-b-[4px] md:border-b-[6px] border-foreground flex items-stretch relative z-[100] h-16 md:h-24 font-sans"
                style={{ 
                    backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', 
                    backgroundSize: '16px 16px',
                }}
            >
                <div className="absolute inset-0 bg-background/90 -z-10" />

                {/* Logo Section */}
                <Link
                    href="/"
                    className="flex-grow md:flex-shrink-0 px-4 md:px-12 flex items-center justify-start bg-transparent transition-all group relative z-10"
                >
                    <span className="text-xs md:text-xl font-black uppercase tracking-tighter whitespace-nowrap text-foreground">
                        Sudharsan Karthikeyan
                    </span>
                </Link>

                {/* Desktop Nav Links Section */}
                <div className="hidden md:flex items-center ml-auto px-8 gap-6 flex-nowrap h-full relative z-10 bg-transparent">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "flex-shrink-0 px-6 py-2.5 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 border-[3px] border-foreground",
                                    isActive 
                                        ? `${link.color} text-foreground shadow-[4px_4px_0px_#000] -translate-x-1 -translate-y-1` 
                                        : `bg-background text-foreground shadow-none hover:${link.color} hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1`
                                )}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden ml-auto px-6 flex items-center justify-center bg-primary text-foreground font-black uppercase text-xs tracking-widest border-l-[3px] border-foreground hover:bg-foreground hover:text-background transition-colors active:translate-y-1"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <span className="flex items-center gap-2">MENU <Menu className="w-5 h-5" /></span>}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[90] bg-background pt-20 px-6 pb-10 flex flex-col md:hidden overflow-y-auto"
                        style={{ 
                            backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', 
                            backgroundSize: '24px 24px',
                        }}
                    >
                        <div className="absolute inset-0 bg-background/95 -z-10" />
                        <div className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "block w-full px-6 py-5 text-lg font-black uppercase tracking-widest border-[4px] border-foreground text-center",
                                                isActive 
                                                    ? `${link.color} shadow-[6px_6px_0px_#000]` 
                                                    : `bg-white hover:${link.color} transition-colors`
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
