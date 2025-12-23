"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Terminal, Github, Globe, Code2, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

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
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-2">
                        <Code2 size={32} />
                    </div>
                    <h2 className="text-4xl font-serif font-bold">Vibe <span className="text-primary italic">Coding</span></h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Building robust, scalable applications and tools that bridge the gap between marketing vision and technical reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {codingProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group bg-[#0f172a] rounded-3xl border border-white/10 overflow-hidden text-white"
                        >
                            {/* Terminal Header */}
                            <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{project.title}.exe</div>
                                <Terminal size={14} className="text-white/40" />
                            </div>

                            <div className="p-8 space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 rounded-full text-[10px] bg-primary/20 text-primary-foreground font-bold border border-primary/30">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-white/60 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Code Snippet Box */}
                                <div className="p-4 rounded-xl bg-black/40 font-mono text-sm text-primary/80 border border-white/5 flex items-center justify-between group-hover:border-primary/30 transition-all">
                                    <span>{project.snippet}</span>
                                    <Layers size={14} className="text-white/20" />
                                </div>

                                <div className="flex items-center space-x-6">
                                    <a href={project.github} className="flex items-center space-x-2 text-white/40 hover:text-white transition-colors font-medium">
                                        <Github size={20} />
                                        <span>View Source</span>
                                    </a>
                                    <a href={project.demo} className="flex items-center space-x-2 text-primary font-bold hover:underline">
                                        <Globe size={20} />
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
