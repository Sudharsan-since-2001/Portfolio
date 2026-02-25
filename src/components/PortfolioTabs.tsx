"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, Globe, Terminal, ArrowRight, Target, BarChart3, MousePointer2, Code2, PenTool, Sparkles } from "lucide-react"

// --- Data ---
const marketingProjects = [
    {
        title: "Viral Ad Campaign",
        client: "TechFlow Solutions",
        results: "+45% Conversion Rate",
        category: "Paid Media",
        description: "Multi-channel advertising campaign focusing on highly targeted demographics and creative storytelling.",
        color: "bg-[var(--nb-blue)]",
        icon: <Target size={24} />
    },
    {
        title: "SEO Overhaul",
        client: "GreenLife E-com",
        results: "200k+ Monthly Visits",
        category: "Organic Growth",
        description: "Complete technical SEO audit and content strategy that tripled organic traffic within 6 months.",
        color: "bg-[var(--nb-green)]",
        icon: <BarChart3 size={24} />
    },
    {
        title: "Social Media Strategy",
        client: "Vibe Studios",
        results: "50k+ New Followers",
        category: "Brand Awareness",
        description: "Designed a cohesive brand voice and high-engagement content calendar across Instagram and TikTok.",
        color: "bg-[var(--nb-pink)]",
        icon: <MousePointer2 size={24} />
    }
]

const developmentProjects = [
    {
        title: "Toothfix",
        tech: ["React", "Vite", "TypeScript", "React Router", "Vercel"],
        description: "A premium, high-performance portfolio and booking platform designed for a modern dental clinic.",
        github: "https://github.com/Sudharsan-since-2001/Toothfix",
        demo: "https://toothfix.vercel.app/",
        snippet: "npm run build"
    },
    {
        title: "AI Ad Copy Engine",
        tech: ["Next.js", "Python", "FastAPI", "OpenAI", "Vercel"],
        description: "An AI-powered platform for junior marketers that identifies ideal customer personas, maps emotional triggers, and generates targeted ad copy with strategy planning for optimal channel selection.",
        github: "https://github.com/Sudharsan-since-2001/AI-ad-copy-generator-V.2",
        demo: "https://ai-ad-copy-generator-by-sudharsan.vercel.app/",
        snippet: "const adCopy = await ai.generate(product);"
    }
]

const writingProjects = [
    {
        title: "The Vibe Coding Manifesto",
        type: "Thought Leadership",
        readTime: "8 min read",
        description: "An exploration of how modern developers are blending aesthetics with algorithmic efficiency to create soulful software.",
        link: "#"
    },
    {
        title: "Conversion Psychology in Ads",
        type: "Case Study",
        readTime: "12 min read",
        description: "A deep dive into the psychological triggers that drive clicks in high-performance digital marketing campaigns.",
        link: "#"
    },
    {
        title: "Next.js 15: A New Era",
        type: "Technical Guide",
        readTime: "15 min read",
        description: "A comprehensive guide on implementing the latest features of Next.js for enterprise-scale applications.",
        link: "#"
    }
]

export function PortfolioTabs({
    isTinted = false,
    noTopPadding = false,
    hideHeader = false
}: {
    isTinted?: boolean;
    noTopPadding?: boolean;
    hideHeader?: boolean;
}) {
    const [activeTab, setActiveTab] = React.useState("Digital Marketing")

    const tabs = [
        { name: "Digital Marketing", color: "bg-[var(--nb-yellow)]" },
        { name: "Development", color: "bg-[var(--nb-blue)]" },
        { name: "Writing", color: "bg-[var(--nb-pink)]" },
    ]

    return (
        <section
            id="portfolio"
            className={`
                ${isTinted ? 'bg-[var(--nb-yellow)]/10' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24'}
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Header */}
                    {!hideHeader && (
                        <div className="text-center space-y-3 sm:space-y-4">
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-sans font-black uppercase">
                                My Portfolio
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-semibold">Explore my work across different categories.</p>
                        </div>
                    )}

                    {/* Tab Navigation */}
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={cn(
                                        "px-4 py-2 sm:px-6 sm:py-3 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider border-[2.5px] sm:border-[3px] border-foreground transition-all",
                                        activeTab === tab.name
                                            ? `${tab.color} shadow-[3px_3px_0px_var(--foreground)] sm:shadow-[4px_4px_0px_var(--foreground)] translate-x-[-2px] translate-y-[-2px]`
                                            : "bg-background shadow-[2px_2px_0px_var(--foreground)] hover:shadow-[3px_3px_0px_var(--foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                                    )}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[400px] sm:min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                {activeTab === "Digital Marketing" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                        {marketingProjects.map((project) => (
                                            <div key={project.title} className="nb-card p-6 sm:p-8 space-y-5 sm:space-y-6 bg-background group">
                                                <div className="space-y-3 sm:space-y-4">
                                                    <span className="nb-badge inline-block px-2.5 py-1 sm:px-3 sm:py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs">
                                                        {project.category}
                                                    </span>
                                                    <h3 className="text-xl sm:text-2xl font-black uppercase leading-tight">{project.title}</h3>
                                                    <p className="text-xs sm:text-sm text-muted-foreground font-bold">for {project.client}</p>
                                                </div>
                                                <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">{project.description}</p>
                                                <div className="pt-4 border-t-[2.5px] sm:border-t-[3px] border-foreground flex items-center justify-between">
                                                    <div className="space-y-1">
                                                        <span className="text-[9px] sm:text-[10px] uppercase font-black text-muted-foreground tracking-widest">Results</span>
                                                        <div className="text-base sm:text-lg font-black text-primary">{project.results}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "Development" && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                                        {developmentProjects.map((project) => (
                                            <div key={project.title} className="bg-muted dark:bg-muted/50 border-[3px] sm:border-[4px] border-foreground shadow-[6px_6px_0px_var(--primary)] text-foreground dark:text-foreground overflow-hidden group hover:shadow-[8px_8px_0px_var(--primary)] transition-all">
                                                {/* Terminal Header */}
                                                <div className="px-4 py-3 sm:px-6 sm:py-4 bg-muted/80 dark:bg-muted/30 border-b-[2.5px] sm:border-b-[3px] border-foreground/20 flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#ff5f56] border-2 border-[#e0443e]" />
                                                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#ffbd2e] border-2 border-[#dea123]" />
                                                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#27c93f] border-2 border-[#1aab29]" />
                                                    </div>
                                                    <div className="text-[10px] sm:text-xs font-mono font-bold opacity-60 uppercase tracking-widest">{project.title}.exe</div>
                                                </div>
                                                <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                                                    <div className="space-y-4 sm:space-y-5">
                                                        <h3 className="text-xl sm:text-2xl font-black uppercase text-foreground leading-tight">{project.title}</h3>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tech.map(t => (
                                                                <span key={t} className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs bg-foreground/10 text-foreground font-black uppercase border-2 border-foreground/30">{t}</span>
                                                            ))}
                                                        </div>
                                                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">{project.description}</p>
                                                    </div>

                                                    {/* Code snippet */}
                                                    <div className="p-3 sm:p-4 bg-background dark:bg-black/40 border-2 border-foreground/10 font-mono text-[11px] sm:text-sm text-[#059669] dark:text-[var(--nb-green)] flex items-center justify-between overflow-x-auto">
                                                        <span className="whitespace-nowrap">$ {project.snippet}</span>
                                                        <span className="animate-pulse flex-shrink-0">▋</span>
                                                    </div>

                                                    <div className="flex items-center space-x-6">
                                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-foreground/60 hover:text-foreground transition-colors font-bold uppercase text-xs sm:text-sm">
                                                            <span>Source</span>
                                                        </a>
                                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary font-black uppercase text-xs sm:text-sm hover:underline">
                                                            <span>Live Demo</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "Writing" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                        {writingProjects.map((project) => (
                                            <div key={project.title} className="nb-card p-6 sm:p-8 space-y-5 sm:space-y-6 bg-background group">
                                                <div className="flex justify-between items-start">
                                                    <span className="nb-badge px-2.5 py-1 sm:px-3 sm:py-1 bg-muted text-muted-foreground text-[10px] sm:text-xs font-black">{project.readTime}</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <span className="nb-badge inline-block px-2.5 py-1 sm:px-3 sm:py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs">
                                                        {project.type}
                                                    </span>
                                                    <h3 className="text-xl sm:text-2xl font-black uppercase leading-tight">{project.title}</h3>
                                                </div>
                                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">{project.description}</p>
                                                <button className="nb-btn px-5 py-2.5 sm:px-6 sm:py-3 bg-background text-foreground flex items-center justify-center gap-2 text-xs sm:text-sm group-hover:bg-[var(--nb-yellow)] transition-colors font-black uppercase shadow-[3px_3px_0px_var(--foreground)]">
                                                    <span>Read Article</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
