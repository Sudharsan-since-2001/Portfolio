"use client"

import * as React from "react"
import Link from "next/link"
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
            <section id="hero" className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-96px)] flex items-center pt-12 md:pt-16 pb-4 overflow-hidden bg-background">


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
                            {/* Rotating Titles */}
                            <div className="h-8 sm:h-10 overflow-hidden relative">
                                <motion.div
                                    animate={{
                                        y: [0, -40, -80, 0],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        times: [0, 0.3, 0.6, 1]
                                    }}
                                    className="flex flex-col gap-0"
                                >
                                    <span className="nb-badge inline-block w-fit px-3 py-1.5 bg-[var(--nb-yellow)] text-foreground text-[10px] sm:text-[11px] md:text-sm font-black uppercase tracking-widest whitespace-nowrap">
                                        Senior Digital Marketer
                                    </span>
                                    <span className="nb-badge inline-block w-fit px-3 py-1.5 bg-[var(--nb-blue)] text-foreground text-[10px] sm:text-[11px] md:text-sm font-black uppercase tracking-widest whitespace-nowrap" style={{ marginTop: '8px' }}>
                                        Content/Copywriter
                                    </span>
                                    <span className="nb-badge inline-block w-fit px-3 py-1.5 bg-[var(--nb-pink)] text-foreground text-[10px] sm:text-[11px] md:text-sm font-black uppercase tracking-widest whitespace-nowrap" style={{ marginTop: '8px' }}>
                                        Social Media Specialist
                                    </span>
                                </motion.div>
                            </div>

                            {/* BIG heading (Now H1) */}
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-sans font-black tracking-tight text-foreground leading-none sm:leading-[1.1] uppercase">
                                Hi, I'm
                                <br />
                                Sudharsan
                            </h1>

                            {/* Description */}
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-semibold">
                                4 years. Multiple industries. One goal - grow the brand, own the narrative, and deliver results worth talking about.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-1">
                                <Link href="/portfolio" className="nb-btn px-6 sm:px-8 py-3.5 sm:py-4 bg-foreground text-background text-sm sm:text-base flex items-center justify-center gap-3 hover:bg-primary hover:text-white border-foreground">
                                    <span>View My Work</span>
                                </Link>
                                <a
                                    href="https://www.linkedin.com/in/sudharsan-karthikeyan-seo-analyst/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nb-btn px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent text-foreground text-sm sm:text-base flex items-center justify-center gap-3 hover:bg-[var(--nb-blue)]/20 border-foreground transition-all"
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
