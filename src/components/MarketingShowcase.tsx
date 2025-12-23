"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { BarChart3, Target, MousePointer2, ExternalLink } from "lucide-react"

const marketingProjects = [
    {
        title: "Viral Ad Campaign",
        client: "TechFlow Solutions",
        results: "+45% Conversion Rate",
        category: "Paid Media",
        description: "Multi-channel advertising campaign focusing on highly targeted demographics and creative storytelling.",
        color: "bg-blue-500"
    },
    {
        title: "SEO Overhaul",
        client: "GreenLife E-com",
        results: "200k+ Monthly Visits",
        category: "Organic Growth",
        description: "Complete technical SEO audit and content strategy that tripled organic traffic within 6 months.",
        color: "bg-green-500"
    },
    {
        title: "Social Media Strategy",
        client: "Vibe Studios",
        results: "50k+ New Followers",
        category: "Brand Awareness",
        description: "Designed a cohesive brand voice and high-engagement content calendar across Instagram and TikTok.",
        color: "bg-pink-500"
    }
]

export function MarketingShowcase() {
    return (
        <section className="py-24 bg-accent/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-serif font-bold">Marketing <span className="text-primary italic">Impact</span></h2>
                        <p className="text-muted-foreground max-w-xl">
                            Data-driven strategies designed to elevate brands and drive measurable growth across digital platforms.
                        </p>
                    </div>
                    <button className="text-primary font-bold flex items-center space-x-2 hover:opacity-80 transition-all">
                        <span>View All Campaigns</span>
                        <ExternalLink size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {marketingProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all p-6 space-y-6"
                        >
                            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4", project.color)}>
                                {index === 0 ? <Target size={24} /> : index === 1 ? <BarChart3 size={24} /> : <MousePointer2 size={24} />}
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">{project.category}</span>
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-sm text-foreground/60 font-medium italic">for {project.client}</p>
                            </div>

                            <p className="text-muted-foreground line-clamp-3">
                                {project.description}
                            </p>

                            <div className="pt-6 border-t border-foreground/5 flex items-center justify-between">
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground">Key Result</span>
                                    <div className="text-lg font-bold text-primary">{project.results}</div>
                                </div>
                                <button className="p-3 rounded-full bg-foreground/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
