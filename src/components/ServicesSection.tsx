"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BarChart3, Code2, Globe, Sparkles, PenTool, Share2, ArrowRight } from "lucide-react"

const services = [
    {
        title: "Digital Marketing",
        icon: <BarChart3 className="text-foreground" size={28} />,
        description: "Full-funnel marketing strategies designed to scale your brand and maximize conversion.",
        color: "bg-[var(--nb-yellow)]"
    },
    {
        title: "Web Development",
        icon: <Code2 className="text-foreground" size={28} />,
        description: "Building high-performance, aesthetic web applications with a focus on user experience.",
        color: "bg-[var(--nb-blue)]"
    },
    {
        title: "SEO, AEO & GEO",
        icon: <Globe className="text-foreground" size={28} />,
        description: "Optimizing for Google, AI search (AEO), and Generative Engines (GEO) to dominate digital real estate.",
        color: "bg-[var(--nb-green)]"
    },
    {
        title: "Content Writing",
        icon: <PenTool className="text-foreground" size={28} />,
        description: "Persuasive storytelling and high-conversion copy that turns readers into loyal customers.",
        color: "bg-[var(--nb-pink)]"
    },
    {
        title: "Social Media",
        icon: <Share2 className="text-foreground" size={28} />,
        description: "Building community and brand awareness through strategic positioning across social platforms.",
        color: "bg-[var(--nb-purple)]"
    },
    {
        title: "Creative Automation",
        icon: <Sparkles className="text-foreground" size={28} />,
        description: "Using custom code to automate repetitive marketing tasks and streamline workflows.",
        color: "bg-[var(--nb-yellow)]"
    }
]

export function ServicesSection({
    isTinted = false,
    noTopPadding = false,
    hideHeader = false
}: {
    isTinted?: boolean;
    noTopPadding?: boolean;
    hideHeader?: boolean;
}) {
    return (
        <section
            id="services"
            className={`
                ${isTinted ? 'bg-[var(--nb-green)]/10' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24'}
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto space-y-16">
                    {!hideHeader && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black uppercase">
                                Expertise & Services
                            </h2>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="nb-card p-6 sm:p-8 bg-background group"
                            >
                                <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 uppercase text-primary leading-tight">{service.title}</h3>
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
