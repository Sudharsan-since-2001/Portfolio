"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, PenTool, ExternalLink, X } from "lucide-react"

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
    image?: string
    details?: {
        headline: string
        subCopy: string
        creativeInsight: string
        brandPositioning: string
        campaignFocus: string
        deliverables: { title: string; desc: string }[]
    }
}

// --- Writing Projects Data ---
const writingProjects: WritingProject[] = [
    {
        title: "Vegan Silk Campaign: Heritage Like a Crown",
        mainCategory: "Copywriting",
        subCategory: "SOCIAL MEDIA",
        image: "/projects/vegan-silk-campaign.jpg",
        description: "A premium fashion campaign for 6DOT5 Ethnics positioning vegan silk as conscious luxury through heritage-driven storytelling.",
        link: "#",
        details: {
            headline: "She wears her heritage like a crown.",
            subCopy: "A statement of grace, woven for the woman who carries tradition with confidence.",
            campaignFocus: "The objective was to create copy that elevates vegan silk beyond a sustainable fabric choice and presents it as a symbol of refined tradition for the contemporary woman. The messaging was crafted for women aged 20–40 who see ethnic wear as more than fashion, as an extension of identity, confidence, and cultural pride.",
            creativeInsight: "The headline uses the metaphor of a crown to evoke regality, strength, and self-assurance. Rather than simply describing the saree, the line frames heritage as something powerful and proudly embodied. It transforms the garment into a symbol of presence and identity, reinforcing the aspirational luxury positioning of the collection.",
            brandPositioning: "This campaign presents 6DOT5’s vegan silk collection as conscious luxury, where timeless craftsmanship meets modern sophistication. It speaks to women who embrace tradition not as convention, but as personal expression.",
            deliverables: [
                { title: "Premium Recall", desc: "Creates a refined and memorable brand impression" },
                { title: "Emotional Connection", desc: "Builds resonance through cultural identity and pride" },
                { title: "Modern Relevance", desc: "Positions vegan silk as aspirational and contemporary" },
                { title: "Luxury Appeal", desc: "Strengthens the perception of exclusivity and elegance" }
            ]
        }
    },
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
    const [selectedProject, setSelectedProject] = React.useState<WritingProject | null>(null)

    const subCategories: SubCategory[] = mainCategory === "Copywriting"
        ? ["ALL", "AD COPY", "EMAIL COPY", "SOCIAL MEDIA", "LANDING PAGE"]
        : ["ALL", "BLOG / ARTICLES", "CASE STUDIES"]

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
                                className="nb-card flex flex-col bg-background group overflow-hidden"
                            >
                                <div className="p-6 flex-grow flex flex-col">
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
                                    {project.details ? (
                                        <button 
                                            onClick={() => setSelectedProject(project)}
                                            className="nb-btn w-full py-3 bg-background text-foreground flex items-center justify-center gap-2 text-xs group-hover:bg-[var(--nb-yellow)] transition-colors font-black uppercase"
                                        >
                                            <span>View Project</span>
                                            <ArrowRight size={14} />
                                        </button>
                                    ) : (
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="nb-btn w-full py-3 bg-background text-foreground flex items-center justify-center gap-2 text-xs group-hover:bg-[var(--nb-yellow)] transition-colors font-black uppercase"
                                        >
                                            <span>{mainCategory === "Content writing" ? "Read Article" : "View Project"}</span>
                                            <ArrowRight size={14} />
                                        </a>
                                    )}
                                </div>
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

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && selectedProject.details && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl max-h-[90vh] bg-background border-[4px] border-foreground shadow-[12px_12px_0px_#000] overflow-y-auto flex flex-col md:flex-row"
                        >
                            {/* Modal Close Button */}
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-background border-[3px] border-foreground hover:bg-[var(--nb-pink)] transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Section */}
                            {selectedProject.image && (
                                <div className="w-full md:w-2/5 border-b-[4px] md:border-b-0 md:border-r-[4px] border-foreground bg-muted sticky top-0 md:relative h-[300px] md:h-auto">
                                    <img 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="flex-1 p-6 sm:p-10 md:p-12 space-y-10 overflow-y-auto">
                                <div className="space-y-4">
                                    <span className="nb-badge px-3 py-1 bg-[var(--nb-orange)] text-white text-xs font-black uppercase">
                                        {selectedProject.subCategory}
                                    </span>
                                    <h2 className="text-3xl sm:text-5xl font-black uppercase leading-tight tracking-tighter">
                                        {selectedProject.title}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 gap-12">
                                    {/* Headline & SubCopy */}
                                    <div className="space-y-6 p-6 sm:p-8 bg-[var(--nb-yellow)] border-[3px] border-foreground shadow-[6px_6px_0px_#000]">
                                        <div className="space-y-2">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">Headline</h4>
                                            <p className="text-2xl sm:text-3xl font-black uppercase leading-tight italic">
                                                &ldquo;{selectedProject.details.headline}&rdquo;
                                            </p>
                                        </div>
                                        <div className="h-[2px] bg-foreground/20" />
                                        <div className="space-y-2">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">Sub Copy</h4>
                                            <p className="text-lg font-bold leading-relaxed">
                                                {selectedProject.details.subCopy}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Campaign Overview */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black uppercase tracking-widest text-primary">Campaign Focus</h4>
                                            <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
                                                {selectedProject.details.campaignFocus}
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black uppercase tracking-widest text-primary">Creative Insight</h4>
                                            <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
                                                {selectedProject.details.creativeInsight}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Brand Positioning */}
                                    <div className="space-y-4 p-6 border-[3px] border-foreground bg-muted/30">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-primary">Brand Positioning</h4>
                                        <p className="text-base sm:text-lg font-bold leading-relaxed">
                                            {selectedProject.details.brandPositioning}
                                        </p>
                                    </div>

                                    {/* Deliverables */}
                                    <div className="space-y-6">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-primary text-center">What This Delivers</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {selectedProject.details.deliverables.map((item, idx) => (
                                                <div key={idx} className="p-4 border-[2px] border-foreground bg-background">
                                                    <div className="space-y-1">
                                                        <h5 className="text-xs font-black uppercase text-primary">{item.title}</h5>
                                                        <p className="text-[10px] sm:text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t-[2px] border-foreground/10 text-center">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                        Strategic Copywriting & Creative Strategy by Sudharsan
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
