"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, Linkedin, Sparkles, Zap, Star, Heart, CheckCircle2, Share2, Search, Target, PenTool, BrainCircuit, Bot, Users } from "lucide-react"
import { motion } from "framer-motion"
import profilePic from "../../public/profile.jpg"

const skills = [
    {
        title: "Social Media Management",
        icon: <Share2 size={28} className="text-foreground" />,
        color: "bg-[var(--nb-pink)]",
        iconBg: "bg-[var(--nb-pink)]/30",
    },
    {
        title: "Search Engine Optimisation",
        icon: <Search size={28} className="text-foreground" />,
        color: "bg-[var(--nb-green)]",
        iconBg: "bg-[var(--nb-green)]/30",
    },
    {
        title: "Meta Ads",
        icon: <Target size={28} className="text-foreground" />,
        color: "bg-[var(--nb-blue)]",
        iconBg: "bg-[var(--nb-blue)]/30",
    },
    {
        title: "Content Strategist",
        icon: <PenTool size={28} className="text-foreground" />,
        color: "bg-[var(--nb-yellow)]",
        iconBg: "bg-[var(--nb-yellow)]/30",
    },
    {
        title: "Prompt Engineering & LLM Applications",
        icon: <BrainCircuit size={28} className="text-foreground" />,
        color: "bg-[var(--nb-purple)]",
        iconBg: "bg-[var(--nb-purple)]/30",
    },
    {
        title: "Python Automation for Marketing Tasks",
        icon: <Bot size={28} className="text-foreground" />,
        color: "bg-[var(--nb-green)]",
        iconBg: "bg-[var(--nb-green)]/30",
    },
    {
        title: "Audience Targeting with Data & AI Insights",
        icon: <Users size={28} className="text-foreground" />,
        color: "bg-[var(--nb-blue)]",
        iconBg: "bg-[var(--nb-blue)]/30",
    },
]

export function Hero() {
    return (
        <>
            <section className="relative min-h-screen flex items-center pt-24 pb-4 overflow-hidden bg-background">


                {/* ===== MAIN CONTENT ===== */}
                <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center max-w-7xl mx-auto">

                        {/* ===== LEFT: TEXT CONTENT ===== */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-6 sm:space-y-8 text-left order-2 lg:order-1"
                        >
                            {/* Small intro line */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[var(--nb-yellow)] border-[3px] border-foreground shadow-[3px_3px_0px_var(--foreground)] font-black text-xs sm:text-sm uppercase tracking-wider text-foreground">
                                Digital Marketer • Vibe Coder
                            </div>

                            {/* BIG heading */}
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-sans font-black tracking-tight text-foreground leading-[0.95] sm:leading-[0.92] uppercase">
                                Hi, I{"'"}m Sudharsan
                            </h1>

                            {/* Description */}
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-slate-300 max-w-md leading-relaxed font-semibold">
                                A versatile digital marketer and creative developer passionate about building
                                impactful digital experiences that vibe with users and drive results.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-1">
                                <button className="nb-btn px-6 sm:px-8 py-3.5 sm:py-4 bg-foreground dark:bg-white text-background dark:text-black text-sm sm:text-base flex items-center justify-center gap-3 hover:bg-primary hover:text-white border-foreground">
                                    <span>View My Work</span>
                                </button>
                                <a
                                    href="https://www.linkedin.com/in/sudharsan-karthikeyan-seo-analyst/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nb-btn px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent text-foreground dark:text-zinc-300 text-sm sm:text-base flex items-center justify-center gap-3 hover:bg-[var(--nb-blue)]/20 border-foreground dark:border-white/20 transition-all"
                                >
                                    <Linkedin size={20} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* ===== RIGHT: PROFILE PHOTO IN COLORED CONTAINER ===== */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                            className="relative flex justify-center order-1 lg:order-2"
                        >
                            <div className="relative w-full max-w-[300px] aspect-[4/5] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[440px]">

                                {/* Pink/Magenta background container */}
                                <div
                                    className="absolute inset-4 sm:inset-6 bg-[var(--nb-pink)] border-[4px] border-foreground shadow-[6px_6px_0px_var(--foreground)] overflow-hidden"
                                    style={{ borderRadius: '2rem' }}
                                />

                                {/* Profile Image - overlapping the container */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[90%] z-10">
                                    <Image
                                        src={profilePic}
                                        alt="Sudharsan"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                        unoptimized
                                        style={{ borderRadius: '0' }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </section >

        </>
    )
}
