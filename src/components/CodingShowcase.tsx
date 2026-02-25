"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Terminal, Github, Globe, Code2, Layers } from "lucide-react"

const codingProjects = [
    {
        title: "VibeSync SaaS",
        tech: ["Next.js", "Tailwind", "Supabase", "Stripe"],
        description: "A subscription-based platform for digital creators to sync their assets across all social channels.",
        github: "https://github.com",
        demo: "https://demo.com",
        snippet: "npm install @vibesync/core"
    },
    {
        title: "Marketing Engine API",
        tech: ["Node.js", "GraphQL", "Redis", "Docker"],
        description: "High-performance API built for processing campaign data and generating real-time performance metrics.",
        github: "https://github.com",
        demo: "https://demo.com",
        snippet: "const report = await engine.generate(cid);"
    }
]

export function CodingShowcase() {
    return (
        <section className="py-24">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="p-4 bg-[var(--nb-blue)] border-[3px] border-foreground shadow-[3px_3px_0px_var(--foreground)] text-foreground mb-2">
                        <Code2 size={32} />
                    </div>
                    <h2 className="text-4xl font-sans font-black uppercase">
                        Vibe{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">Coding</span>
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-primary -z-0" />
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-semibold">
                        Building robust, scalable applications and tools that bridge the gap between marketing vision and technical reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {codingProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-[#1a1a1a] border-[4px] border-foreground shadow-[6px_6px_0px_var(--primary)] text-white overflow-hidden group hover:shadow-[8px_8px_0px_var(--primary)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
                        >
                            {/* Terminal Header */}
                            <div className="px-6 py-4 bg-[#2a2a2a] border-b-[3px] border-[#444] flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 bg-[#ff5f56] border-2 border-[#e0443e]" />
                                    <div className="w-4 h-4 bg-[#ffbd2e] border-2 border-[#dea123]" />
                                    <div className="w-4 h-4 bg-[#27c93f] border-2 border-[#1aab29]" />
                                </div>
                                <div className="text-xs font-mono font-bold text-white/60 uppercase tracking-widest">{project.title}.exe</div>
                                <Terminal size={16} className="text-white/40" />
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black uppercase">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 text-xs bg-white/10 text-white font-black uppercase border-2 border-white/30">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-white/70 leading-relaxed font-medium">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Code Snippet Box */}
                                <div className="p-4 bg-black/50 border-2 border-white/20 font-mono text-sm text-[var(--nb-green)] flex items-center justify-between">
                                    <span>$ {project.snippet}</span>
                                    <Layers size={14} className="text-white/30" />
                                </div>

                                <div className="flex items-center space-x-6">
                                    <a href={project.github} className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors font-bold uppercase text-sm">
                                        <Github size={18} />
                                        <span>Source</span>
                                    </a>
                                    <a href={project.demo} className="flex items-center space-x-2 text-[var(--nb-yellow)] font-black uppercase text-sm hover:underline">
                                        <Globe size={18} />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
