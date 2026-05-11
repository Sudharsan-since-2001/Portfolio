"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react"

const experiences = [
    {
        role: "Senior Digital Marketer & Brand Strategist",
        company: "6dot5 Ethnics",
        isCurrent: true,
        tagline: "Making an ethnic fashion brand impossible to scroll past and hard to forget.",
        description: "Running the full digital marketing operation at 6dot5 Ethnics, from how the brand shows up online to how it turns browsers into buyers.",
        responsibilities: [
            "Planning and running campaigns across Meta and Instagram that bring the right people in, not just traffic for the sake of it",
            "Handling SEO, AEO, and GEO so the brand gets found on search engines, answer boxes, and AI-generated results, without paying for every click",
            "Shaping how 6dot5 Ethnics is positioned in the market, what it stands for, who it speaks to, and how it sounds doing it",
            "Keeping the website clean, updated, and built to convert, from product pages to landing pages",
            "Built a competitor tracking system from scratch to spot gaps in the market before others do",
            "Managing a team of junior digital marketers, assigning work, reviewing output, and keeping everyone moving in the same direction",
            "Reading the data regularly to understand what is working, what is not, and where to shift focus next",
            "Auditing and improving the full customer journey, from the first ad they see to the moment they check out"
        ],
        color: "bg-[var(--nb-yellow)]"
    },
    {
        role: "Content Lead",
        company: "Power of Parthasarathy",
        tagline: "Managed strategic digital communication for a political PR team.",
        description: "Spearheaded the digital campaign strategy for a high-profile political PR team, ensuring impactful communication and audience engagement.",
        responsibilities: [
            "Led and mentored a cross-functional digital team of content creators, designers, and analysts to execute high-impact political communication strategies",
            "Supervised end-to-end workflow of the digital team, from ideation to publishing and performance tracking",
            "Drove rapid YouTube growth from 6K to 100K subscribers by optimizing content strategy, trends, and distribution",
            "Optimized the public figure’s online presence to enhance reach, engagement, and audience perception"
        ],
        color: "bg-[var(--nb-pink)]"
    },
    {
        role: "Freelance Content Writer & Copywriter",
        company: "Independent",
        tagline: "Words that make people stop scrolling, start reading, and actually do something.",
        description: "I write content that does a job, whether that's getting a blog post to page one, making a founder sound like themselves on LinkedIn, or turning a bland product page into something people actually want to read.",
        responsibilities: [
            "SEO writing that's built for humans first, search engines second. Long-form articles, blogs, and web copy that rank without reading like a robot wrote them",
            "Ghostwriting for founders, executives, and creators who have a lot to say but not enough time to say it. LinkedIn posts, newsletters, thought pieces, and full books",
            "Sales and conversion copy. Landing pages, email sequences, and ad copy written to move people, not just inform them",
            "Brand voice and strategy. Figuring out how a brand should sound, what it should stand for, and who it's really talking to. Building messaging frameworks, tone of voice guides, and positioning statements that give every piece of content a clear direction to follow",
            "Content strategy. Mapping out what to say, when to say it, and which platform it belongs on. No random posting, just intentional content with a purpose behind it",
            "End-to-end content work, from the blank page to the published piece. Research, writing, editing, done"
        ],
        color: "bg-[var(--nb-blue)]"
    },
    {
        role: "Digital Marketer",
        company: "Shri Aarupadaiyappa Association",
        tagline: "Executed digital marketing campaigns for the real estate sector.",
        description: "Focused on lead generation and digital branding for real estate projects, significantly increasing digital reach.",
        responsibilities: [
            "Designing and executing high-ROI Google and Meta ad campaigns focused on quality lead generation for premium real estate projects",
            "Developing and managing the entire digital infrastructure of the association, ensuring a strong online presence",
            "Implementing strategic SEO and local search optimization to increase visibility and search rankings for property listings",
            "Coordinating with creative teams to produce high-impact visual content that drives engagement for property marketing"
        ],
        color: "bg-[var(--nb-green)]"
    }
]

export function ExperienceSection({
    isTinted = false,
    noTopPadding = false,
    hideHeader = false
}: {
    isTinted?: boolean;
    noTopPadding?: boolean;
    hideHeader?: boolean;
}) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

    return (
        <section
            id="experience"
            className={`
                ${isTinted ? 'bg-[var(--nb-blue)]/10' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24'}
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-4xl mx-auto space-y-12">
                    {!hideHeader && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center space-y-3 sm:space-y-4"
                        >
                            <h2 className="text-2xl sm:text-4xl md:text-6xl font-sans font-black uppercase">
                                Professional Experience
                            </h2>
                            <p className="text-muted-foreground text-base sm:text-lg font-semibold">
                                My journey through technology, marketing, and creative endeavors.
                            </p>
                        </motion.div>
                    )}

                    <div className="space-y-6 sm:space-y-8">
                        {experiences.map((exp, i) => (
                            <div key={i} className="nb-card bg-background">
                                <button
                                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                                    className="w-full text-left flex items-start justify-between p-4 sm:p-6 group"
                                >
                                    <div className="space-y-3 flex-1">
                                        {exp.isCurrent && (
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <span className="nb-badge px-2.5 py-1 sm:px-3 sm:py-1 bg-[var(--nb-green)] text-foreground text-[10px] sm:text-xs">
                                                    Current
                                                </span>
                                            </div>
                                        )}
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors uppercase leading-tight">
                                            {exp.role} {exp.company !== "Independent" && `@ ${exp.company}`}
                                        </h3>
                                        <p className="text-sm sm:text-base text-muted-foreground font-medium italic leading-relaxed">
                                            {exp.tagline}
                                        </p>
                                    </div>
                                    <div className={`mt-2 p-1.5 sm:p-2 ${exp.color} border-[2.5px] sm:border-[3px] border-foreground text-foreground flex-shrink-0 ml-3 sm:ml-4`}>
                                        {expandedIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 pb-6 space-y-4">
                                                <div className={`${exp.color}/20 p-6 border-[3px] border-foreground`}>
                                                    <p className="text-foreground leading-relaxed font-medium">
                                                        {exp.description}
                                                    </p>
                                                    <div className="mt-6 space-y-4">
                                                        <h4 className="font-black text-sm uppercase tracking-wider text-foreground">
                                                            Responsibilities:
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {exp.responsibilities.map((resp, j) => (
                                                                <li key={j} className="flex items-start gap-3 text-foreground font-medium">
                                                                    <div className="mt-1.5 w-3 h-3 bg-primary border-2 border-foreground shrink-0" />
                                                                    <span>{resp}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
