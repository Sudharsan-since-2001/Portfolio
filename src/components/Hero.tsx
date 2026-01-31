"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, Linkedin, Github, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />

            <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Profile Visual - Now on the Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-start"
                    >
                        <div className="relative w-full max-w-lg aspect-square rounded-[3rem] overflow-hidden border-4 border-primary/10 shadow-2xl group">
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <div className="absolute inset-4 border border-primary/20 rounded-[2.2rem] pointer-events-none z-20" />

                            {/* Hero Image */}
                            <div className="w-full h-full bg-muted flex items-center justify-center relative overflow-hidden">
                                <Image
                                    src="/public/profile.jpg"
                                    alt="Sudharsan"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute bottom-10 right-10 p-4 glass rounded-2xl border border-primary/20 z-10">
                                    <Sparkles className="text-primary" size={24} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content - Now on the Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-left"
                    >
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/80 font-semibold text-sm">
                            Digital Marketer • Vibe Coder
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-foreground/90">
                            Hi, I'm <span className="text-primary">Sudharsan</span>
                        </h1>

                        <p className="text-xl text-muted-foreground/80 max-w-xl leading-relaxed font-medium">
                            A versatile digital marketer and creative developer passionate about building
                            impactful digital experiences that vibe with users and drive results.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold flex items-center space-x-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                                <span>View My Work</span>
                                <ArrowRight size={20} />
                            </button>
                            <a
                                href="https://www.linkedin.com/in/sudharsan-karthikeyan-seo-analyst/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 rounded-xl bg-background border border-foreground/10 font-bold flex items-center space-x-2 hover:bg-foreground/5 transition-all shadow-sm"
                            >
                                <Linkedin size={20} className="text-primary" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
