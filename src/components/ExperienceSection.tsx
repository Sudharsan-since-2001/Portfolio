"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const experiences = [
    {
        role: "Senior Digital Marketer",
        company: "6dot5 Ethnics",
        period: "05/2025 - Present",
        isCurrent: true,
        tagline: "Driving digital growth and high-impact marketing strategies for the brand.",
        description: "Leading the digital marketing efforts at 6dot5 Ethnics, focusing on sustainable growth and brand positioning.",
        responsibilities: [
            "Overseeing end-to-end digital marketing campaigns",
            "Implementing data-driven strategies for customer acquisition",
            "Analyzing market trends to stay ahead of the curve",
            "Optimizing marketing funnels for maximum conversion"
        ]
    },
    {
        role: "Social Media Strategist",
        company: "Power of Parthasarathy",
        period: "01/2024 - 05/2025",
        tagline: "Managed strategic digital communication for a political PR team.",
        description: "Spearheaded the social media strategy for a high-profile political PR team, ensuring impactful communication and audience engagement.",
        responsibilities: [
            "Developed viral social media campaigns",
            "Managed public perception through digital channels",
            "Coordinated with content creators for high-impact visuals",
            "Monitored real-time audience sentiment and adjusted strategy"
        ]
    },
    {
        role: "Freelance Web Developer (Websites & Tools)",
        company: "Independent",
        period: "2023 - Present",
        tagline: "I build scalable websites and internal web tools using modern frontend frameworks.",
        description: "Delivering clean, maintainable, and performance-focused solutions tailored to business needs.",
        responsibilities: [
            "Website development and optimization",
            "Custom tool and dashboard development",
            "Frontend architecture and responsiveness",
            "UI/UX implementation"
        ]
    },
    {
        role: "Digital Marketer",
        company: "Shri Aarupadaiyappa Association",
        period: "01/2022 - 01/2024",
        tagline: "Executed digital marketing campaigns for the real estate sector.",
        description: "Focused on lead generation and digital branding for real estate projects, significantly increasing digital reach.",
        responsibilities: [
            "Managed Google and Meta ad campaigns for real estate leads",
            "Built and maintained the association's digital presence",
            "Oversaw SEO strategies for property listings",
            "Collaborated on visual content for property marketing"
        ]
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
                ${isTinted ? 'bg-muted/30' : 'bg-background'}
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
                            className="text-center space-y-4"
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
                                Professional <span className="text-primary italic">Experience</span>
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                My journey through technology, marketing, and creative endeavors.
                            </p>
                        </motion.div>
                    )}

                    <div className="space-y-4">
                        {experiences.map((exp, i) => (
                            <div key={i} className="border-b border-muted last:border-0 pb-4">
                                <button
                                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                                    className="w-full text-left flex items-start justify-between py-6 group"
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            {exp.isCurrent && (
                                                <span className="text-[10px] uppercase tracking-widest bg-muted px-2 py-0.5 rounded font-bold text-muted-foreground">
                                                    Current
                                                </span>
                                            )}
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {exp.role} {exp.company !== "Independent" && `at ${exp.company}`}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm md:text-base">
                                            {exp.tagline}
                                        </p>
                                    </div>
                                    <div className="mt-2 text-muted-foreground group-hover:text-primary transition-colors">
                                        {expandedIndex === i ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
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
                                            <div className="space-y-6 pt-2 pb-8 px-1">
                                                <div className="bg-muted/30 p-6 rounded-2xl border border-muted">
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {exp.description}
                                                    </p>
                                                    <div className="mt-6 space-y-4">
                                                        <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground/70">
                                                            Additional Responsibilities:
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {exp.responsibilities.map((resp, j) => (
                                                                <li key={j} className="flex items-start gap-3 text-muted-foreground">
                                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
