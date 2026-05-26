"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, PenTool, ExternalLink, X, Mail } from "lucide-react"

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
        emailDetails?: {
            subject: string
            previewText: string
            audience: string
            goal: string
            body: string
            strategy: string
        }
        emails?: {
            id: string
            label: string
            subject: string
            previewText: string
            audience: string
            goal: string
            body: string
            strategy: string
        }[]
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
    },
    {
        title: "6DOT5 ETHNICS: Lifecycle Email Campaigns",
        mainCategory: "Copywriting",
        subCategory: "EMAIL COPY",
        description: "A complete 4-part CRM email sequence (Welcome, Retargeting, Loyalty, and Cart Recovery) for a premium handloom Kanchipuram silk saree brand.",
        link: "#",
        details: {
            headline: "Woven in Tamil Nadu, Delivered to your doorstep.",
            subCopy: "A comprehensive CRM email sequence to build trust, recover cart abandons, and drive repeat purchases.",
            campaignFocus: "Full lifecycle email marketing strategy for 6Dot5Ethnics.",
            creativeInsight: "Replacing aggressive sales pitches with brand storytelling, transparent artisan mapping, and humanizing automated touchpoints.",
            brandPositioning: "6Dot5Ethnics — Pure Handloom Silk, Direct from Weaver to Deserving Hands.",
            deliverables: [],
            emails: [
                {
                    id: "welcome",
                    label: "1. Welcome Series",
                    subject: "You just found your new favourite saree brand. You don't know it yet.",
                    previewText: "Welcome to 6Dot5Ethnics. Here's what makes us different.",
                    audience: "People who signed up via a lead magnet, contest, or Instagram follow - they know the brand name but have never bought. Cold-warm. They need to be introduced, not sold to yet.",
                    goal: "Awareness + First Purchase",
                    body: `Hi [Name],

Welcome. We're glad you're here.

We're 6Dot5Ethnics - a small team obsessed with one thing: getting authentic Kanjipuram silk sarees from the looms of Tamil Nadu to women who actually deserve them.

No middlemen. No markups. No machine-made imitations dressed up in fancy packaging.

Every saree on our site was woven by hand. It took a master weaver anywhere between 7 to 15 days to make it. And it'll be at your door in 5.

We're not the biggest saree brand out there. But we might be the most honest one.

Here's 10% off your first order - because the best way to understand what we do is to feel it.

[Use code WELCOME10]

Take your time. Browse at your own pace. And if you have questions, just reply to this email.

We actually read them.

With love,
6Dot5Ethnics`,
                    strategy: "Welcome emails have the highest open rates of any email type - this is prime real estate. Leads with brand story, not product push. 'We actually read them' humanises the brand and builds trust before asking for a transaction. The discount is a soft nudge, not the main event."
                },
                {
                    id: "retargeting",
                    label: "2. Re-targeting",
                    subject: "We saw you looking. No judgment.",
                    previewText: "Still thinking about it? Here's a little help.",
                    audience: "People who visited the website, browsed products, maybe spent time on a product page - but left without adding anything to cart. They showed interest but not intent yet.",
                    goal: "Bring them back, convert",
                    body: `Hi [Name],

You stopped by. Browsed around. Left without saying goodbye.

Totally fine. We've all been there.

But since you were looking - we thought we'd make it a little easier to decide.

Right now, our bestselling Kanjeevarams are in stock. All hand-woven. All real silk. All the kind of sarees that make your mother ask "where did you get that?"

Here's what other women picked up this week:
→ The Classic Temple Border (ships in 3 days)
→ The Contrast Pallu in Peacock Blue (only 4 left)
→ The Bridal Crimson with Gold Zari (our most-gifted piece)

No pressure. But if one of these caught your eye the first time, it's probably still catching it now.

[Browse the collection]

With love,
6Dot5Ethnics`,
                    strategy: "'We saw you looking. No judgment.' is self-aware and witty - it acknowledges the retargeting without feeling creepy. Social proof through 'what other women picked up this week' creates FOMO without screaming it. Scarcity on one product ('only 4 left') is specific, not generic."
                },
                {
                    id: "loyalty",
                    label: "3. Existing Customer",
                    subject: "You have good taste. We have more of it.",
                    previewText: "New arrivals - and a little something for coming back.",
                    audience: "Someone who has already bought at least one saree from 6Dot5Ethnics. They trust the brand. The goal is to deepen that relationship and drive a second purchase - the most cost-effective customer you have.",
                    goal: "Repeat purchase + loyalty",
                    body: `Hi [Name],

It's been a while. We've been busy at the loom.

Since your last order, we've added 24 new sarees to the collection - including a new line of lightweight Kanjeevarams that are getting a lot of attention. (The kind of attention you're used to wearing 6Dot5Ethnics, basically.)

We picked a few we think you'd love based on what you ordered before:
→ [Personalised recommendation 1]
→ [Personalised recommendation 2]
→ [Personalised recommendation 3]

And since you're family now - here's 15% off your next order. No expiry date. Use it whenever you're ready.

[Code: FAMILY15]

Thank you for trusting us with something as personal as what you wear.

That's not something we take lightly.

With love,
6Dot5Ethnics`,
                    strategy: "Existing customers don't need to be convinced - they need to feel valued. 'You're family now' rewards loyalty without being transactional. Personalised recommendations placeholder signals to the recruiter that you understand segmentation and CRM logic, not just copywriting."
                },
                {
                    id: "abandoned",
                    label: "4. Abandoned Cart",
                    subject: "Your cart is giving us anxiety.",
                    previewText: "It's been 24 hours. The saree is still waiting.",
                    audience: "Someone who added a specific saree to their cart but didn't complete the purchase. Highest purchase intent of any segment. They chose a product - something stopped them at the final step.",
                    goal: "Recover the sale",
                    body: `Hi [Name],

We noticed you left something behind. And honestly? We're a little worried about it.

That Kanjipuram silk you picked out? It's been sitting in your cart, fully dressed, nowhere to go. That's not a good life for a saree.

Here's the thing - it took a weaver in Kanchipuram 12 days to make it. We'd hate for it to end up with someone who loves it less than you do.

Your cart is still saved. Your saree is still waiting.

[Complete your order]

And if something stopped you - wrong size, unsure about the colour - just reply to this email. We'll sort it out.

With love,
6Dot5Ethnics

P.S. We can only hold your cart for another 48 hours. After that, it goes back to the shelf. Just saying.`,
                    strategy: "Highest intent segment - doesn't need a discount, needs reassurance. Personifies the saree to create emotional pull. The reply CTA removes friction for the most common abandonment reasons. P.S. creates urgency without a countdown timer - feels human, not automated."
                }
            ]
        }
    }
]

export function WritingShowcase() {
    const [mainCategory, setMainCategory] = React.useState<MainCategory>("Content writing")
    const [subCategory, setSubCategory] = React.useState<SubCategory>("ALL")
    const [selectedProject, setSelectedProject] = React.useState<WritingProject | null>(null)
    const [modalTab, setModalTab] = React.useState<"strategy" | "preview">("strategy")
    const [activeEmailId, setActiveEmailId] = React.useState<string>("")

    React.useEffect(() => {
        if (selectedProject) {
            setModalTab("strategy")
            if (selectedProject.details?.emails && selectedProject.details.emails.length > 0) {
                setActiveEmailId(selectedProject.details.emails[0].id)
            } else {
                setActiveEmailId("")
            }
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
                                    project.image ? (
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
                                        <div 
                                            className="w-full p-6 relative group cursor-pointer border-[3px] border-foreground bg-gradient-to-br from-[#FFFDF9] to-[#F7F2E8] shadow-[4px_4px_0px_var(--foreground)] hover:shadow-[6px_6px_0px_var(--foreground)] hover:-translate-y-1 hover:-translate-x-1 transition-all flex flex-col justify-between min-h-[220px]"
                                            onClick={() => project.details && setSelectedProject(project)}
                                        >
                                            <div className="space-y-5">
                                                <div className="flex justify-between items-center">
                                                    <span className="nb-badge px-3 py-1 bg-foreground text-background border-foreground text-[9px] font-black uppercase tracking-[0.15em]">
                                                        {project.subCategory}
                                                    </span>
                                                    <div className="w-8 h-8 rounded-full border-[2px] border-foreground bg-background flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-[var(--nb-yellow)] transition-colors">
                                                        <Mail size={14} className="text-foreground" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-lg sm:text-xl font-black uppercase leading-tight text-foreground group-hover:text-primary transition-colors">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="pt-4 mt-4 border-t-[2px] border-foreground/10 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                                                <span>View Strategy & Email Copy</span>
                                                <div className="w-6 h-6 border-[2px] border-foreground bg-background flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:translate-x-0.5 group-hover:bg-[var(--nb-yellow)] transition-all">
                                                    <ArrowRight size={12} className="text-foreground" />
                                                </div>
                                            </div>
                                        </div>
                                    )
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
                            ) : selectedProject.details.emails ? (
                                <div className="flex flex-col flex-1 border-t-[4px] border-foreground">
                                    {/* Email Toggles / Tabs Bar */}
                                    <div className="bg-muted/50 p-4 border-b-[4px] border-foreground flex flex-wrap gap-2 items-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-2">Campaign Flow:</span>
                                        {selectedProject.details.emails.map((email) => (
                                            <button
                                                key={email.id}
                                                onClick={() => setActiveEmailId(email.id)}
                                                className={cn(
                                                    "px-3.5 py-1.5 text-xs font-black uppercase border-[2.5px] border-foreground transition-all cursor-pointer",
                                                    activeEmailId === email.id
                                                        ? "bg-[var(--nb-orange)] text-white shadow-[3px_3px_0px_#000] -translate-x-[1px] -translate-y-[1px]"
                                                        : "bg-background text-foreground hover:shadow-[2px_2px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                                                )}
                                            >
                                                {email.label}
                                            </button>
                                        ))}
                                    </div>

                                    {(() => {
                                        const activeEmail = selectedProject.details.emails.find(e => e.id === activeEmailId) || selectedProject.details.emails[0];
                                        if (!activeEmail) return null;
                                        return (
                                            <div className="flex flex-col lg:flex-row flex-1">
                                                {/* Left Column: Email Client Mockup */}
                                                <div className="w-full lg:w-[55%] p-4 sm:p-8 bg-muted/20 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-foreground">
                                                    <div className="w-full bg-background border-[3px] border-foreground shadow-[6px_6px_0px_#000] rounded-lg overflow-hidden flex flex-col">
                                                        {/* Browser Window Header */}
                                                        <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between border-b-[3px] border-foreground">
                                                            <div className="flex items-center gap-1.5">
                                                                <div className="w-3 h-3 rounded-full bg-[var(--nb-pink)] border-2 border-background" />
                                                                <div className="w-3 h-3 rounded-full bg-[var(--nb-yellow)] border-2 border-background" />
                                                                <div className="w-3 h-3 rounded-full bg-[var(--nb-green)] border-2 border-background" />
                                                            </div>
                                                            <span className="text-[10px] font-black uppercase tracking-wider opacity-85 flex items-center gap-1">
                                                                <Mail size={12} /> Email Preview
                                                            </span>
                                                            <div className="w-12" /> {/* spacer */}
                                                        </div>

                                                        {/* Email Headers */}
                                                        <div className="p-4 sm:p-6 border-b-[2px] border-foreground bg-background space-y-2 text-xs font-bold text-foreground">
                                                            <div className="flex border-b border-muted/30 pb-2">
                                                                <span className="w-16 text-muted-foreground uppercase text-[10px]">From:</span>
                                                                <span className="font-semibold text-primary">6Dot5Ethnics &lt;hello@6dot5ethnics.com&gt;</span>
                                                            </div>
                                                            <div className="flex border-b border-muted/30 pb-2">
                                                                <span className="w-16 text-muted-foreground uppercase text-[10px]">To:</span>
                                                                <span className="font-semibold">[Name] &lt;subscriber@email.com&gt;</span>
                                                            </div>
                                                            <div className="flex border-b border-muted/30 pb-2">
                                                                <span className="w-16 text-muted-foreground uppercase text-[10px]">Subject:</span>
                                                                <span className="font-black text-foreground">{activeEmail.subject}</span>
                                                            </div>
                                                            <div className="flex pb-1">
                                                                <span className="w-16 text-muted-foreground uppercase text-[10px]">Preview:</span>
                                                                <span className="text-muted-foreground italic font-medium">{activeEmail.previewText}</span>
                                                            </div>
                                                        </div>

                                                        {/* Email Body Content */}
                                                        <div className="p-6 sm:p-10 bg-[#FDFCF7] overflow-y-auto max-h-[500px] text-sm sm:text-base font-serif leading-relaxed text-foreground space-y-4">
                                                            {/* Parse and render the body with custom buttons */}
                                                            {(() => {
                                                                const bodyText = activeEmail.body;
                                                                const parts = bodyText.split(/(\[[^\]]+\])/g);
                                                                return parts.map((part, idx) => {
                                                                    if (part.startsWith('[') && part.endsWith(']')) {
                                                                        const btnLabel = part.slice(1, -1);
                                                                        const isPlaceholder = btnLabel.toLowerCase() === 'name' || btnLabel.toLowerCase().includes('recommendation');
                                                                        if (isPlaceholder) {
                                                                            return <span key={idx} className="font-bold text-foreground">[{btnLabel}]</span>;
                                                                        }
                                                                        return (
                                                                            <span key={idx} className="block my-6 text-center">
                                                                                <span className="inline-block px-8 py-3 bg-[var(--nb-orange)] text-white text-xs font-black uppercase border-[3px] border-foreground shadow-[4px_4px_0px_#000] rounded-none transform hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all select-none">
                                                                                    {btnLabel}
                                                                                </span>
                                                                            </span>
                                                                        );
                                                                    }
                                                                    return <span key={idx} className="whitespace-pre-line font-serif leading-relaxed">{part}</span>;
                                                                });
                                                            })()}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right Column: Copywriting Strategy & Info */}
                                                <div className="flex-1 p-6 sm:p-10 space-y-8 flex flex-col justify-between">
                                                    <div className="space-y-8">
                                                        <div className="space-y-3">
                                                            <div className="flex items-center gap-2">
                                                                <span className="nb-badge px-2.5 py-1 bg-foreground text-background border-foreground text-[10px] font-black uppercase tracking-wider">
                                                                    {selectedProject.subCategory}
                                                                </span>
                                                                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                                                    Campaign Flow
                                                                </span>
                                                            </div>
                                                            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none text-foreground">
                                                                {activeEmail.label.replace(/^\d+\.\s*/, "")}
                                                            </h2>
                                                            <p className="text-xs text-muted-foreground font-medium">
                                                                Part of the campaign: <span className="font-extrabold text-foreground">{selectedProject.title}</span>
                                                            </p>
                                                        </div>

                                                        {/* Strategy Brief */}
                                                        <div className="space-y-6">
                                                            <div className="space-y-2 p-5 border-[3px] border-foreground bg-[#FFFBF2] shadow-[4px_4px_0px_#000]">
                                                                <h4 className="text-xs font-black uppercase tracking-wider text-[#B2822A]">Target Audience Segment</h4>
                                                                <p className="text-sm font-bold text-foreground/80 leading-relaxed">
                                                                    {activeEmail.audience}
                                                                </p>
                                                            </div>

                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="space-y-2 p-4 border-[2.5px] border-foreground bg-[#F0FDF4] shadow-[2px_2px_0px_#000]">
                                                                    <h4 className="text-[10px] font-black uppercase tracking-wider text-emerald-800">Campaign Segment Goal</h4>
                                                                    <p className="text-xs font-black uppercase text-emerald-950">
                                                                        {activeEmail.goal}
                                                                    </p>
                                                                </div>
                                                                <div className="space-y-2 p-4 border-[2.5px] border-foreground bg-[#F0F9FF] shadow-[2px_2px_0px_#000]">
                                                                    <h4 className="text-[10px] font-black uppercase tracking-wider text-sky-800">Tone of Voice</h4>
                                                                    <p className="text-xs font-black uppercase text-sky-950">
                                                                        Authentic, Honest, Human
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="space-y-3 p-5 border-[3px] border-foreground bg-[#FFF1F2] shadow-[4px_4px_0px_#000]">
                                                                <h4 className="text-xs font-black uppercase tracking-wider text-rose-800">Copywriting Strategy & Insight</h4>
                                                                <p className="text-xs sm:text-sm text-rose-950 font-semibold leading-relaxed">
                                                                    {activeEmail.strategy}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pt-6 border-t-[2px] border-foreground/10 text-center lg:text-left">
                                                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                                                            CRM Lifecycle Copywriting Strategy by Sudharsan
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            ) : selectedProject.details.emailDetails ? (
                                <div className="flex flex-col lg:flex-row flex-1 border-t-[4px] border-foreground">
                                    {/* Left Column: Email Client Mockup */}
                                    <div className="w-full lg:w-[55%] p-4 sm:p-8 bg-muted/20 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-foreground">
                                        <div className="w-full bg-background border-[3px] border-foreground shadow-[6px_6px_0px_#000] rounded-lg overflow-hidden flex flex-col">
                                            {/* Browser Window Header */}
                                            <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between border-b-[3px] border-foreground">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-[var(--nb-pink)] border-2 border-background" />
                                                    <div className="w-3 h-3 rounded-full bg-[var(--nb-yellow)] border-2 border-background" />
                                                    <div className="w-3 h-3 rounded-full bg-[var(--nb-green)] border-2 border-background" />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-wider opacity-85 flex items-center gap-1">
                                                    <Mail size={12} /> Email Preview
                                                </span>
                                                <div className="w-12" /> {/* spacer */}
                                            </div>

                                            {/* Email Headers */}
                                            <div className="p-4 sm:p-6 border-b-[2px] border-foreground bg-background space-y-2 text-xs font-bold text-foreground">
                                                <div className="flex border-b border-muted/30 pb-2">
                                                    <span className="w-16 text-muted-foreground uppercase text-[10px]">From:</span>
                                                    <span className="font-semibold text-primary">6Dot5Ethnics &lt;hello@6dot5ethnics.com&gt;</span>
                                                </div>
                                                <div className="flex border-b border-muted/30 pb-2">
                                                    <span className="w-16 text-muted-foreground uppercase text-[10px]">To:</span>
                                                    <span className="font-semibold">[Name] &lt;subscriber@email.com&gt;</span>
                                                </div>
                                                <div className="flex border-b border-muted/30 pb-2">
                                                    <span className="w-16 text-muted-foreground uppercase text-[10px]">Subject:</span>
                                                    <span className="font-black text-foreground">{selectedProject.details.emailDetails.subject}</span>
                                                </div>
                                                <div className="flex pb-1">
                                                    <span className="w-16 text-muted-foreground uppercase text-[10px]">Preview:</span>
                                                    <span className="text-muted-foreground italic font-medium">{selectedProject.details.emailDetails.previewText}</span>
                                                </div>
                                            </div>

                                            {/* Email Body Content */}
                                            <div className="p-6 sm:p-10 bg-background/50 overflow-y-auto max-h-[500px] text-sm sm:text-base font-serif leading-relaxed text-foreground space-y-4">
                                                {/* Parse and render the body with custom buttons */}
                                                {(() => {
                                                    const bodyText = selectedProject.details.emailDetails.body;
                                                    const parts = bodyText.split(/(\[[^\]]+\])/g);
                                                    return parts.map((part, index) => {
                                                        if (part.startsWith('[') && part.endsWith(']')) {
                                                            const btnLabel = part.slice(1, -1);
                                                            const isPlaceholder = btnLabel.toLowerCase() === 'name' || btnLabel.toLowerCase().includes('recommendation');
                                                            if (isPlaceholder) {
                                                                return <span key={index} className="font-bold text-foreground">[{btnLabel}]</span>;
                                                            }
                                                            return (
                                                                <span key={index} className="block my-6 text-center">
                                                                    <span className="inline-block px-8 py-3 bg-[var(--nb-yellow)] text-foreground text-xs font-black uppercase border-[3px] border-foreground shadow-[4px_4px_0px_#000] rounded-none transform hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all select-none">
                                                                        {btnLabel}
                                                                    </span>
                                                                </span>
                                                            );
                                                        }
                                                        return <span key={index} className="whitespace-pre-line font-serif leading-relaxed">{part}</span>;
                                                    });
                                                })()}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Copywriting Strategy & Info */}
                                    <div className="flex-1 p-6 sm:p-10 space-y-8 flex flex-col justify-between">
                                        <div className="space-y-8">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="nb-badge px-2.5 py-1 bg-[var(--nb-orange)] text-white text-[10px] font-black uppercase tracking-wider">
                                                        {selectedProject.subCategory}
                                                    </span>
                                                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                                        Target Campaign
                                                    </span>
                                                </div>
                                                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none text-foreground">
                                                    {selectedProject.title}
                                                </h2>
                                            </div>

                                            {/* Strategy Brief */}
                                            <div className="space-y-6">
                                                <div className="space-y-2 p-5 border-[3px] border-foreground bg-[var(--nb-yellow)]/10 shadow-[4px_4px_0px_#000]">
                                                    <h4 className="text-xs font-black uppercase tracking-wider text-primary">Target Audience</h4>
                                                    <p className="text-sm font-bold text-foreground/80 leading-relaxed">
                                                        {selectedProject.details.emailDetails.audience}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2 p-4 border-[2.5px] border-foreground bg-background">
                                                        <h4 className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Campaign Goal</h4>
                                                        <p className="text-sm font-extrabold uppercase text-primary text-xs">
                                                            {selectedProject.details.emailDetails.goal}
                                                        </p>
                                                    </div>
                                                    <div className="space-y-2 p-4 border-[2.5px] border-foreground bg-background">
                                                        <h4 className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Tone of Voice</h4>
                                                        <p className="text-sm font-extrabold uppercase text-foreground text-xs">
                                                            Authentic, Honest, Human
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="space-y-3 p-5 border-[3px] border-foreground bg-muted/40">
                                                    <h4 className="text-xs font-black uppercase tracking-wider text-primary">Copywriting Strategy & Insight</h4>
                                                    <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                                                        {selectedProject.details.emailDetails.strategy}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t-[2px] border-foreground/10 text-center lg:text-left">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                                                CRM Lifecycle Copywriting Strategy by Sudharsan
                                            </p>
                                        </div>
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
