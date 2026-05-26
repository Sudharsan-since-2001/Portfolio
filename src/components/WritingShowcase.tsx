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
    fullPageImage?: string
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
        title: "Kanchi & Co. — Crafting the Digital Voice of a Luxury Silk Brand",
        mainCategory: "Content writing",
        subCategory: "CASE STUDIES",
        readTime: "6 min read",
        image: "/projects/kanchi-hero.png",
        fullPageImage: "/projects/kanchi-hero.png",
        description: "A detailed positioning breakdown and strategy teardown of how we built the brand identity and heritage narratives for a direct-to-consumer Kanchipuram silk store.",
        link: "#",
        details: {
            headline: "Woven in Kanchipuram, Treasured everywhere else.",
            subCopy: "Woven over 12 days. Admired for a lifetime.",
            campaignFocus: "Establish Kanchi & Co. as the premier digital destination for authentic handloom silk sarees, blending historic craftsmanship with modern DTC convenience.",
            creativeInsight: "Traditional saree purchases rely heavily on tactility and high-trust storytelling. The content strategy focuses on transparently mapping the 12-day craftsmanship cycle to build premium value and authenticity.",
            brandPositioning: "Kanchi & Co. — The Silk Legacy. Positioning the brand as the ultimate standard of authentic Kanchipuram craftsmanship and heritage luxury.",
            deliverables: [
                { title: "Brand Voice Guidelines", desc: "Setting a luxurious, classic tone of voice." },
                { title: "Weaving Cycle Documentation", desc: "Step-by-step narrative highlighting artisan labor." },
                { title: "DTC Messaging Framework", desc: "Positioning value pillars (Shipping, Reviews, Authenticity)." },
                { title: "Content Distribution Strategy", desc: "Social & editorial alignment plans." }
            ]
        }
    },
    {
        title: "Daily Post: Romanticize Your Life",
        mainCategory: "Copywriting",
        subCategory: "SOCIAL MEDIA",
        image: "/projects/daily-post-1.jpg",
        description: "A social media post featuring a dark green saree, reminding the audience to romanticize their life.",
        link: "#",
        details: {
            headline: "Don't forget to romanticize your life today.",
            subCopy: "Embrace the elegance of every moment.",
            campaignFocus: "Daily social media engagement to inspire the audience.",
            creativeInsight: "Pairing a gentle reminder with an elegant visual creates a strong emotional connection.",
            brandPositioning: "A brand that values daily beauty and sophistication.",
            deliverables: [
                { title: "Social Media Post", desc: "Instagram/Facebook visual" },
                { title: "Caption", desc: "Engaging short-form copy" },
                { title: "Engagement", desc: "Community building" },
                { title: "Brand Voice", desc: "Elegant and inspiring" }
            ]
        }
    },
    {
        title: "Daily Post: Ethnos Rose Pink Organza",
        mainCategory: "Copywriting",
        subCategory: "SOCIAL MEDIA",
        image: "/projects/daily-post-2.jpg",
        description: "Showcasing the Rose Pink Organza Tissue Silk Saree with Heavy Work Border and Designer Blouse.",
        link: "#",
        details: {
            headline: "Rose Pink Organza Tissue Silk Saree",
            subCopy: "With Heavy Work Border And Designer Blouse.",
            campaignFocus: "Product highlight post for social media.",
            creativeInsight: "Highlighting the intricate details of the border and blouse to appeal to premium buyers.",
            brandPositioning: "ETHNOS - Quality craftsmanship and exquisite design.",
            deliverables: [
                { title: "Product Showcase", desc: "Detailed product visual" },
                { title: "Product Description", desc: "Clear, descriptive product copy" },
                { title: "Conversion", desc: "Direct response focus" },
                { title: "Premium Appeal", desc: "Highlighting craftsmanship" }
            ]
        }
    },
    {
        title: "Kanchi & Co. — Heritage Saree Landing Page Copy",
        mainCategory: "Copywriting",
        subCategory: "LANDING PAGE",
        image: "/projects/kanchi-hero.png",
        fullPageImage: "/projects/kanchi-hero.png",
        description: "High-converting, luxury landing page copy for a premium Kanchipuram silk saree brand, focusing on heritage and craftsmanship.",
        link: "#",
        details: {
            headline: "Woven in Kanchipuram, Treasured everywhere else.",
            subCopy: "Woven over 12 days. Admired for a lifetime.",
            campaignFocus: "Developing a high-performance landing page structure and copy flow to convert luxury consumers searching for authentic Indian handloom sarees.",
            creativeInsight: "Combining high-intent DTC trust signals (free shipping, 5-day delivery, positive reviews) with deeply emotive, heritage-driven copywriting about the 12-day handloom process.",
            brandPositioning: "Kanchi & Co. — The Silk Legacy. Positioning the brand as the ultimate standard of authentic Kanchipuram craftsmanship and heritage luxury.",
            deliverables: [
                { title: "Hero Header Copy", desc: "Heritage hooks and value propositions." },
                { title: "Collection Descriptions", desc: "Classics, Contemporary, and Bridal Edit positioning." },
                { title: "Heritage Section Hook", desc: "\"Woven over 12 days. Admired for a lifetime.\"" },
                { title: "Interactive Matchmaker Quiz", desc: "Interactive questionnaire text to find the perfect saree." }
            ]
        }
    }
]

export function WritingShowcase() {
    const [mainCategory, setMainCategory] = React.useState<MainCategory>("Content writing")
    const [subCategory, setSubCategory] = React.useState<SubCategory>("ALL")
    const [selectedProject, setSelectedProject] = React.useState<WritingProject | null>(null)
    const [modalTab, setModalTab] = React.useState<"strategy" | "preview">("strategy")

    React.useEffect(() => {
        if (selectedProject) {
            setModalTab("strategy")
        }
    }, [selectedProject])

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
            <div className="space-y-6 w-full flex flex-col items-center text-center">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-tight tracking-tighter text-center max-w-4xl mx-auto">
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
                <div className="flex justify-center w-full">
                    <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => {
                            setMainCategory("Content writing")
                            setSubCategory("ALL")
                        }}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2 border-[3px] border-foreground font-black uppercase text-sm transition-all cursor-pointer",
                            mainCategory === "Content writing"
                                ? "bg-foreground text-background shadow-[4px_4px_0px_var(--muted-foreground)] -translate-x-1 -translate-y-1"
                                : "bg-background text-foreground shadow-[2px_2px_0px_var(--foreground)] hover:shadow-[3px_3px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
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
                            "flex items-center gap-2 px-6 py-2 border-[3px] border-foreground font-black uppercase text-sm transition-all cursor-pointer",
                            mainCategory === "Copywriting"
                                ? "bg-[var(--nb-orange)] text-white shadow-[4px_4px_0px_var(--foreground)] -translate-x-1 -translate-y-1"
                                : "bg-background text-foreground shadow-[2px_2px_0px_var(--foreground)] hover:shadow-[3px_3px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                        )}
                    >
                        <div className={cn("w-3 h-3 rounded-full border-2", mainCategory === "Copywriting" ? "bg-white border-white" : "bg-[var(--nb-orange)] border-[var(--nb-orange)]")} />
                        Copywriting
                    </button>
                    </div>
                </div>
            </div>

            {/* Sub-Category Filter Chips */}
            <div className="flex flex-wrap gap-2 w-full">
                {subCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSubCategory(cat)}
                        className={cn(
                            "px-4 py-1.5 border-[2px] border-foreground text-[10px] sm:text-xs font-black uppercase transition-all cursor-pointer",
                            subCategory === cat
                                ? "bg-foreground text-background shadow-[3px_3px_0px_var(--muted-foreground)] -translate-x-[1px] -translate-y-[1px]"
                                : "bg-background text-foreground shadow-[1px_1px_0px_var(--foreground)] hover:shadow-[2px_2px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className={cn(
                "w-full",
                mainCategory === "Copywriting" 
                    ? "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" 
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            )}>
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
                                className={cn(
                                    mainCategory === "Copywriting" 
                                        ? "break-inside-avoid"
                                        : "nb-card flex flex-col bg-background group overflow-hidden"
                                )}
                            >
                                {mainCategory === "Copywriting" ? (
                                    <div 
                                        className="w-full relative group cursor-pointer border-[3px] border-foreground shadow-[4px_4px_0px_var(--foreground)] hover:shadow-[6px_6px_0px_var(--foreground)] hover:-translate-y-1 hover:-translate-x-1 transition-all overflow-hidden"
                                        onClick={() => project.details && setSelectedProject(project)}
                                    >
                                        <div className={cn(
                                            "w-full overflow-hidden",
                                            project.subCategory === "LANDING PAGE" ? "aspect-[16/10]" : ""
                                        )}>
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className={cn(
                                                    "w-full transition-transform duration-500 group-hover:scale-105",
                                                    project.subCategory === "LANDING PAGE" ? "h-full object-cover object-top" : "h-auto object-cover"
                                                )}
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 bg-[var(--nb-yellow)] text-foreground px-4 py-2 text-xs font-black uppercase border-[2px] border-foreground shadow-[2px_2px_0px_#000] transform translate-y-4 group-hover:translate-y-0 transition-all">
                                                View Project
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {project.image && (
                                            <div 
                                                className="w-full h-48 sm:h-56 border-b-[2px] border-foreground overflow-hidden bg-muted flex-shrink-0 cursor-pointer relative"
                                                onClick={() => project.details && setSelectedProject(project)}
                                            >
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title}
                                                    className={cn(
                                                        "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                                        project.fullPageImage ? "object-top" : "object-center"
                                                    )}
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                            </div>
                                        )}
                                        <div className="p-5 flex-grow flex flex-col">
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
                                    </>
                                )}
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
                            className="relative w-full max-w-5xl max-h-[92vh] bg-background border-[4px] border-foreground shadow-[12px_12px_0px_#000] overflow-y-auto flex flex-col"
                        >
                            {/* Modal Close Button */}
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-background border-[3px] border-foreground hover:bg-[var(--nb-pink)] transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Modal Header & Tabs */}
                            {selectedProject.fullPageImage ? (
                                <div className="flex border-b-[4px] border-foreground bg-muted p-3 gap-3 items-center pr-16 select-none flex-wrap">
                                    <button
                                        onClick={() => setModalTab("strategy")}
                                        className={cn(
                                            "px-4 py-2 text-xs font-black uppercase border-[2.5px] border-foreground transition-all cursor-pointer",
                                            modalTab === "strategy"
                                                ? "bg-foreground text-background shadow-[2px_2px_0px_var(--muted-foreground)] -translate-x-[1px] -translate-y-[1px]"
                                                : "bg-background text-foreground hover:shadow-[2px_2px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                                        )}
                                    >
                                        Strategy & Copy Details
                                    </button>
                                    <button
                                        onClick={() => setModalTab("preview")}
                                        className={cn(
                                            "px-4 py-2 text-xs font-black uppercase border-[2.5px] border-foreground transition-all cursor-pointer",
                                            modalTab === "preview"
                                                ? "bg-[var(--nb-orange)] text-white shadow-[2px_2px_0px_var(--foreground)] -translate-x-[1px] -translate-y-[1px]"
                                                : "bg-background text-foreground hover:shadow-[2px_2px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                                        )}
                                    >
                                        Full Web Page Preview
                                    </button>
                                </div>
                            ) : null}

                            {/* Modal Content Pane */}
                            {selectedProject.fullPageImage && modalTab === "preview" ? (
                                <div className="w-full bg-background flex justify-center p-4">
                                    <div className="w-full max-w-4xl border-[4px] border-foreground shadow-[8px_8px_0px_#000] overflow-hidden aspect-[16/7.5] bg-white">
                                        <img 
                                            src={selectedProject.fullPageImage} 
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover object-top select-none"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col md:flex-row flex-1">
                                    {/* Image Section */}
                                    {selectedProject.image && !selectedProject.fullPageImage && (
                                        <div className="w-full md:w-2/5 border-b-[4px] md:border-b-0 md:border-r-[4px] border-foreground bg-muted md:sticky md:top-0 md:h-auto h-auto max-h-[50vh] md:max-h-none overflow-hidden flex-shrink-0">
                                            <img 
                                                src={selectedProject.image} 
                                                alt={selectedProject.title}
                                                className="w-full h-full object-contain md:object-cover"
                                            />
                                        </div>
                                    )}

                                    {/* Content Section */}
                                    <div className="flex-1 p-5 sm:p-10 md:p-12 space-y-10">
                                        <div className="space-y-4">
                                            <span className="nb-badge px-3 py-1 bg-[var(--nb-orange)] text-white text-xs font-black uppercase">
                                                {selectedProject.subCategory}
                                            </span>
                                            <h2 className="text-xl sm:text-5xl font-black uppercase leading-tight tracking-tighter">
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
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
