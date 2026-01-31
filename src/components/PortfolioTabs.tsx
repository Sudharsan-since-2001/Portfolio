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
        color: "bg-blue-500",
        icon: <Target size={24} />
    },
    {
        title: "SEO Overhaul",
        client: "GreenLife E-com",
        results: "200k+ Monthly Visits",
        category: "Organic Growth",
        description: "Complete technical SEO audit and content strategy that tripled organic traffic within 6 months.",
        color: "bg-green-500",
        icon: <BarChart3 size={24} />
    },
    {
        title: "Social Media Strategy",
        client: "Vibe Studios",
        results: "50k+ New Followers",
        category: "Brand Awareness",
        description: "Designed a cohesive brand voice and high-engagement content calendar across Instagram and TikTok.",
        color: "bg-pink-500",
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

    const tabs = ["Digital Marketing", "Development", "Writing"]

    return (
        <section
            id="portfolio"
            className={`
                ${isTinted ? 'bg-muted/30' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24'}
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Header */}
                    {!hideHeader && (
                        <div className="text-center space-y-4">
                            <h1 className="text-5xl md:text-7xl font-serif font-bold italic">My Portfolio</h1>
                            <p className="text-xl text-muted-foreground">Explore my work across different categories.</p>
                        </div>
                    )}

                    {/* Tab Navigation */}
                    <div className="flex justify-center">
                        <div className="inline-flex p-1.5 rounded-full bg-foreground/10 border border-foreground/20 space-x-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "px-8 py-3 rounded-full text-sm font-bold transition-all relative",
                                        activeTab === tab
                                            ? "text-primary-foreground shadow-lg"
                                            : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                                    )}
                                >
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-primary rounded-full z-0"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                {activeTab === "Digital Marketing" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {marketingProjects.map((project, index) => (
                                            <div key={project.title} className="group glass rounded-3xl p-8 space-y-6 hover:border-primary/20 transition-all">
                                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white", project.color)}>
                                                    {project.icon}
                                                </div>
                                                <div className="space-y-2">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{project.category}</span>
                                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                                    <p className="text-sm text-foreground/60 italic">for {project.client}</p>
                                                </div>
                                                <p className="text-muted-foreground">{project.description}</p>
                                                <div className="pt-6 border-t border-foreground/20 flex items-center justify-between">
                                                    <div className="space-y-1">
                                                        <span className="text-[10px] uppercase font-bold text-muted-foreground">Results</span>
                                                        <div className="text-lg font-bold text-primary">{project.results}</div>
                                                    </div>
                                                    <ArrowRight size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "Development" && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {developmentProjects.map((project) => (
                                            <div key={project.title} className="bg-[#0f172a] rounded-3xl border border-white/10 overflow-hidden text-white group hover:border-primary/30 transition-all">
                                                <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-3 h-3 rounded-full bg-red-500/30" />
                                                        <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                                                        <div className="w-3 h-3 rounded-full bg-green-500/30" />
                                                    </div>
                                                    <Terminal size={14} className="text-white/20" />
                                                </div>
                                                <div className="p-10 space-y-8">
                                                    <div className="space-y-4">
                                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tech.map(t => (
                                                                <span key={t} className="px-3 py-1 rounded-lg text-[10px] bg-primary/20 text-primary-foreground font-bold">{t}</span>
                                                            ))}
                                                        </div>
                                                        <p className="text-white/60 leading-relaxed">{project.description}</p>
                                                    </div>
                                                    <div className="flex items-center space-x-6">
                                                        <a href={project.github} className="flex items-center space-x-2 text-white/40 hover:text-white transition-colors">
                                                            <Github size={20} />
                                                            <span className="text-sm font-bold">Source</span>
                                                        </a>
                                                        <a href={project.demo} className="flex items-center space-x-2 text-primary font-bold">
                                                            <Globe size={20} />
                                                            <span className="text-sm">Live Demo</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "Writing" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {writingProjects.map((project) => (
                                            <div key={project.title} className="glass p-10 rounded-3xl space-y-6 hover:bg-foreground/[0.02] transition-all group">
                                                <div className="flex justify-between items-start">
                                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                                        <PenTool size={24} />
                                                    </div>
                                                    <span className="text-xs font-mono text-muted-foreground">{project.readTime}</span>
                                                </div>
                                                <div className="space-y-2">
                                                    <span className="text-xs font-bold text-primary uppercase">{project.type}</span>
                                                    <h3 className="text-3xl font-bold">{project.title}</h3>
                                                </div>
                                                <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                                                <button className="flex items-center space-x-2 text-foreground font-bold hover:text-primary transition-colors pt-4">
                                                    <span>Read Article</span>
                                                    <ArrowRight size={18} />
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
