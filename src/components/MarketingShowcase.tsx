"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { BarChart3, Target, MousePointer2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const marketingProjects = [
    {
        title: "Viral Ad Campaign",
        client: "TechFlow Solutions",
        results: "+45% Conversion Rate",
        category: "Paid Media",
        description: "Multi-channel advertising campaign focusing on highly targeted demographics and creative storytelling.",
        color: "bg-[var(--nb-blue)]"
    },
    {
        title: "SEO Overhaul",
        client: "GreenLife E-com",
        results: "200k+ Monthly Visits",
        category: "Organic Growth",
        description: "Complete technical SEO audit and content strategy that tripled organic traffic within 6 months.",
        color: "bg-[var(--nb-green)]"
    },
    {
        title: "Social Media Strategy",
        client: "Vibe Studios",
        results: "50k+ New Followers",
        category: "Brand Awareness",
        description: "Designed a cohesive brand voice and high-engagement content calendar across Instagram and TikTok.",
        color: "bg-[var(--nb-pink)]"
    }
]

export function MarketingShowcase() {
    return (
        <section className="py-24 bg-[var(--nb-yellow)]/15">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-sans font-black uppercase">
                            Marketing{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">Impact</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary -z-0" />
                            </span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl font-semibold">
                            Data-driven strategies designed to elevate brands and drive measurable growth across digital platforms.
                        </p>
                    </div>
                    <button className="nb-btn px-6 py-3 bg-primary text-primary-foreground text-sm flex items-center gap-2">
                        <span>View All Campaigns</span>
                        <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {marketingProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="nb-card p-8 space-y-6 bg-background group"
                        >
                            <div className={cn("w-14 h-14 border-[3px] border-foreground shadow-[3px_3px_0px_var(--foreground)] flex items-center justify-center text-foreground", project.color)}>
                                {index === 0 ? <Target size={24} /> : index === 1 ? <BarChart3 size={24} /> : <MousePointer2 size={24} />}
                            </div>

                            <div className="space-y-2">
                                <span className="nb-badge inline-block px-3 py-1 bg-primary text-primary-foreground">{project.category}</span>
                                <h3 className="text-2xl font-black uppercase">{project.title}</h3>
                                <p className="text-sm text-muted-foreground font-bold">for {project.client}</p>
                            </div>

                            <p className="text-muted-foreground line-clamp-3 font-medium">
                                {project.description}
                            </p>

                            <div className="pt-4 border-t-[3px] border-foreground flex items-center justify-between">
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Key Result</span>
                                    <div className="text-lg font-black text-primary">{project.results}</div>
                                </div>
                                <div className="p-3 bg-muted border-[2px] border-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
