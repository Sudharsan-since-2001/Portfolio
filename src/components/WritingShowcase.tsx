"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, PenTool, ExternalLink } from "lucide-react"

// --- Data Types ---
type MainCategory = "Content writing" | "Copywriting"
type SubCategory = "ALL" | "BLOG / ARTICLES" | "AD COPY" | "EMAIL COPY" | "LANDING PAGE" | "SOCIAL MEDIA" | "CASE STUDIES"

interface WritingProject {
    title: string
    mainCategory: MainCategory
    subCategory: SubCategory
    description: string
    link: string
    readTime?: string
    results?: string
}

// --- Writing Projects Data ---
const writingProjects: WritingProject[] = [
    {
        title: "The most important space experiment of 2023, and almost nobody heard about it till 2026.",
        mainCategory: "Content writing",
        subCategory: "BLOG / ARTICLES",
        readTime: "10 min read",
        description: "An investigation into an underrated space mission that's quietly changing our understanding of planetary physics and space exploration's future.",
        link: "https://medium.com/@sudharsanmilburn/the-most-important-space-experiment-of-2023-and-almost-nobody-heard-about-it-9e7044382934"
    },
    {
        title: "The Lovers of Neptune",
        mainCategory: "Content writing",
        subCategory: "BLOG / ARTICLES",
        readTime: "Novel Fragment",
        description: "A captivating exploration of science fiction and human connection set on the farthest reaches of our solar system.",
        link: "https://the-lovers-of-neptune.vercel.app/"
    },
    {
        title: "How Livbio Got Cited by Google AI in 72 Hours: A GEO Breakdown",
        mainCategory: "Content writing",
        subCategory: "CASE STUDIES",
        readTime: "5 min read",
        description: "A Generative Engine Optimization Case Study Analysis exploring how strategic content optimization led to rapid AI citations.",
        link: "https://medium.com/@sudharsanmilburn/how-livbio-got-cited-by-google-ai-in-72-hours-a-geo-breakdown-7afc587a9748"
    },
    {
        title: "AI SaaS Landing Page: From Zero to $10k MRR",
        mainCategory: "Copywriting",
        subCategory: "LANDING PAGE",
        results: "+12% Conversion",
        description: "High-converting landing page copy for an AI productivity tool, focusing on pain-point agitation and benefit-driven headlines.",
        link: "#"
    },
    {
        title: "The 7-Day 'Launch' Email Sequence",
        mainCategory: "Copywriting",
        subCategory: "EMAIL COPY",
        results: "24% Open Rate",
        description: "A strategic email sequence designed to build hype and drive sales for a digital product launch in the tech niche.",
        link: "#"
    },
    {
        title: "Scalable Facebook Ads for E-commerce",
        mainCategory: "Copywriting",
        subCategory: "AD COPY",
        results: "4.2x ROAS",
        description: "Direct-response ad copy focused on emotional hooks and clear calls-to-action for a sustainable fashion brand.",
        link: "#"
    },
    {
        title: "Twitter/X Growth: Viral Hook Templates",
        mainCategory: "Copywriting",
        subCategory: "SOCIAL MEDIA",
        results: "1M+ Impressions",
        description: "A series of high-engagement social media posts and thread hooks designed to maximize reach and follower growth.",
        link: "#"
    }
]

export function WritingShowcase() {
    const [mainCategory, setMainCategory] = React.useState<MainCategory>("Content writing")
    const [subCategory, setSubCategory] = React.useState<SubCategory>("ALL")

    const subCategories: SubCategory[] = [
        "ALL", "BLOG / ARTICLES", "AD COPY", "EMAIL COPY", "LANDING PAGE", "SOCIAL MEDIA", "CASE STUDIES"
    ]

    const filteredProjects = writingProjects.filter(project => {
        const matchesMain = project.mainCategory === mainCategory
        const matchesSub = subCategory === "ALL" || project.subCategory === subCategory
        return matchesMain && matchesSub
    })

    return (
        <div className="space-y-12">
            {/* Header with highlight */}
            <div className="space-y-6">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-tight tracking-tighter">
                    Words that work.{" "}
                    <span className="relative inline-block px-2">
                        <span className="relative z-10 text-foreground">Copy that converts.</span>
                        <motion.span 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-1 left-0 h-[60%] bg-[var(--nb-yellow)] -z-0" 
                        />
                    </span>
                </h2>

                {/* Main Category Toggle */}
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => {
                            setMainCategory("Content writing")
                            setSubCategory("ALL")
                        }}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2 border-[3px] border-foreground font-black uppercase text-sm transition-all",
                            mainCategory === "Content writing"
                                ? "bg-foreground text-background shadow-[4px_4px_0px_var(--muted-foreground)] -translate-x-1 -translate-y-1"
                                : "bg-background text-foreground hover:bg-muted"
                        )}
                    >
                        <div className={cn("w-3 h-3 rounded-full border-2", mainCategory === "Content writing" ? "bg-background border-background" : "bg-foreground border-foreground")} />
                        Content writing
                    </button>
                    <button
                        onClick={() => {
                            setMainCategory("Copywriting")
                            setSubCategory("ALL")
                        }}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2 border-[3px] border-foreground font-black uppercase text-sm transition-all",
                            mainCategory === "Copywriting"
                                ? "bg-[var(--nb-orange)] text-white shadow-[4px_4px_0px_var(--foreground)] -translate-x-1 -translate-y-1"
                                : "bg-background text-foreground hover:bg-muted"
                        )}
                    >
                        <div className={cn("w-3 h-3 rounded-full border-2", mainCategory === "Copywriting" ? "bg-white border-white" : "bg-[var(--nb-orange)] border-[var(--nb-orange)]")} />
                        Copywriting
                    </button>
                </div>
            </div>

            {/* Sub-Category Filter Chips */}
            <div className="flex flex-wrap gap-2">
                {subCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSubCategory(cat)}
                        className={cn(
                            "px-4 py-1.5 border-[2px] border-foreground text-[10px] sm:text-xs font-black uppercase transition-all",
                            subCategory === cat
                                ? "bg-foreground text-background"
                                : "bg-background text-foreground hover:bg-muted/50"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="nb-card p-6 flex flex-col bg-background group"
                            >
                                <div className="flex-grow space-y-4 mb-6">
                                    <div className="flex justify-between items-start">
                                        <span className="nb-badge px-2.5 py-1 bg-muted text-muted-foreground text-[10px] font-black uppercase">
                                            {project.subCategory}
                                        </span>
                                        {(project.readTime || project.results) && (
                                            <span className="text-[10px] font-black uppercase text-primary">
                                                {project.readTime || project.results}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-black uppercase leading-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="nb-btn w-full py-3 bg-background text-foreground flex items-center justify-center gap-2 text-xs group-hover:bg-[var(--nb-yellow)] transition-colors font-black uppercase"
                                >
                                    <span>{mainCategory === "Content writing" ? "Read Article" : "View Project"}</span>
                                    <ArrowRight size={14} />
                                </a>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full py-20 text-center border-[3px] border-dashed border-muted-foreground/30"
                        >
                            <p className="text-muted-foreground font-black uppercase tracking-widest">No projects found in this category yet.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
