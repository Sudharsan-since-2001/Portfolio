"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, Globe, Terminal, ArrowRight, Target, BarChart3, MousePointer2, Code2, PenTool, Sparkles } from "lucide-react"

// --- Data ---
const marketingProjects = [
    {
        title: "SEO Strategy",
        client: "6Dot5Ethnics",
        category: "Organic Growth",
        results: "20.4K",
        description: "I took a fashion website from 0 to 20.4k impressions in 1.5 months.",
        color: "bg-[var(--nb-green)]",
        icon: <BarChart3 size={24} />,
        link: "https://medium.com/@sudharsanmilburn/i-took-a-fashion-website-from-0-to-20-4k-impressions-in-1-5-months-heres-what-actually-worked-9c09ba7ded2b"
    },
    {
        title: "Content & Ads",
        client: "Viral Growth Strategy",
        category: "Paid + Organic",
        results: "29.6M",
        description: "How I generated 29.6M views using content + ads",
        color: "bg-[var(--nb-blue)]",
        icon: <Target size={24} />,
        link: "https://medium.com/@sudharsanmilburn/how-i-generated-29-6m-views-using-content-ads-082d3856dd08"
    },
    {
        title: "Ad Plan",
        client: "YouTube Growth Strategy",
        category: "Strategic Growth",
        results: "96.5K",
        description: "How I gained 96.5k subscribers in just 28 days through strategic content engineering and trend hijacking.",
        color: "bg-[var(--nb-pink)]",
        icon: <Sparkles size={24} />,
        link: "https://medium.com/@sudharsanmilburn/how-we-gained-96-500-youtube-subscribers-in-28-days-for-a-politicians-channel-3ee28332b192"
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
        title: "The most important space experiment of 2023, and almost nobody heard about it till 2026.",
        type: "Deep Dive",
        readTime: "10 min read",
        description: "An investigation into an underrated space mission that's quietly changing our understanding of planetary physics and space exploration's future.",
        link: "https://medium.com/@sudharsanmilburn/the-most-important-space-experiment-of-2023-and-almost-nobody-heard-about-it-9e7044382934"
    },
    {
        title: "The Lovers of Neptune",
        type: "Sci-Fi Novel",
        readTime: "Novel",
        description: "A captivating exploration of science fiction and human connection set on the farthest reaches of our solar system.",
        link: "https://the-lovers-of-neptune.vercel.app/"
    },
    {
        title: "How Livbio Got Cited by Google AI in 72 Hours: A GEO Breakdown",
        type: "GEO Case Study",
        readTime: "5 min read",
        description: "A Generative Engine Optimization Case Study Analysis exploring how strategic content optimization led to rapid AI citations.",
        link: "https://medium.com/@sudharsanmilburn/how-livbio-got-cited-by-google-ai-in-72-hours-a-geo-breakdown-7afc587a9748"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-8">
                {marketingProjects.map((project) => (
                    <div key={project.title} className="relative w-full nb-card bg-background border-[3px] md:border-[4px] border-foreground shadow-[6px_6px_0px_var(--foreground)] p-6 md:p-8 space-y-6 group overflow-visible h-full flex flex-col justify-between">
                        {/* Floating Badge */}
                        <div className="absolute -top-4 left-6 nb-badge bg-primary text-primary-foreground px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-[3px_3px_0px_#000] border-[2px] border-foreground">
                            {project.category}
                        </div>

                        <div className="space-y-6">
                            {/* Title and Metric */}
                            <div className="space-y-1 text-center md:text-left">
                                <h4 className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 tracking-widest">{project.title}</h4>
                                <div className="flex items-center justify-center md:justify-start">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-primary leading-none uppercase">
                                        {project.results}
                                    </h2>
                                </div>
                            </div>

                            {/* Quote with Accent Line */}
                            <div className="flex gap-4 items-stretch">
                                <div className={cn("w-1.5", project.color || "bg-[var(--nb-yellow)]")} />
                                <p className="text-sm md:text-lg font-bold leading-relaxed italic text-foreground/80">
                                    &ldquo;{project.description}&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Centered CTA */}
                        <div className="flex justify-center pt-2">
                            {project.link && (
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nb-btn px-6 py-2.5 bg-[var(--nb-yellow)] text-foreground text-[10px] sm:text-xs font-black uppercase shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
                                >
                                    Read Case Study
                                </a>
                            )}
                        </div>

                        {/* Decorative Pixel Corner */}
                        <div className="absolute top-1/2 -right-[10px] -translate-y-1/2 w-[16px] h-[16px] bg-foreground hidden md:block" />
                    </div>
                ))}
            </div>
        )}

                                {activeTab === "Development" && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                                        {developmentProjects.map((project) => (
                                            <div key={project.title} className="bg-muted border-[3px] sm:border-[4px] border-foreground shadow-[6px_6px_0px_var(--primary)] text-foreground overflow-hidden group hover:shadow-[8px_8px_0px_var(--primary)] transition-all">
                                                {/* Terminal Header */}
                                                <div className="px-4 py-3 sm:px-6 sm:py-4 bg-muted/80 border-b-[2.5px] sm:border-b-[3px] border-foreground/20 flex items-center justify-between">
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
                                                    <div className="p-3 sm:p-4 bg-background border-2 border-foreground/10 font-mono text-[11px] sm:text-sm text-[#059669] flex items-center justify-between overflow-x-auto">
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
                                            <div key={project.title} className="nb-card p-6 sm:p-8 flex flex-col bg-background group h-full">
                                                <div className="flex-grow space-y-5 sm:space-y-6 mb-8">
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
                                                </div>
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="nb-btn px-5 py-2.5 sm:px-6 sm:py-3 bg-background text-foreground flex items-center justify-center gap-2 text-xs sm:text-sm group-hover:bg-[var(--nb-yellow)] transition-colors font-black uppercase shadow-[3px_3px_0px_var(--foreground)]"
                                                >
                                                    <span>Read Article</span>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bridge Link to Contact */}
                    <div className="pt-12 text-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group">
                            <span>Have a project in mind? Let's discuss</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
