"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

export function AboutSection({
    hideHeader = false,
    isTinted = false,
    noTopPadding = false
}: {
    hideHeader?: boolean;
    isTinted?: boolean;
    noTopPadding?: boolean;
}) {
    return (
        <section
            id="about"
            className={`
                ${isTinted ? 'bg-[var(--nb-yellow)]/5' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24'}
                relative
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Precise, Elegant Header */}
                    {!hideHeader && (
                        <div className="flex items-center gap-6 mb-4 sm:mb-8 text-foreground">
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black uppercase tracking-tighter">
                                About Me
                            </h2>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                        {/* Main Paragraph: Hero Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-12 nb-card p-6 sm:p-10 md:p-14 border-[3px] sm:border-[4px] bg-background"
                        >
                            <p className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight text-foreground tracking-tight">
                                I{"'"}m Sudharsan Karthikeyan, a Digital Marketer and Vibe Coder. I started in marketing, working on campaigns, content, and audience behavior. Over time, I started building websites, tools, and applications that supported my marketing work.
                            </p>
                        </motion.div>

                        {/* Side Paragraph: Subtext */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-12 lg:col-span-7 nb-card p-6 sm:p-8 md:p-10 border-[3px] bg-background"
                        >
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-muted-foreground leading-relaxed">
                                Vibe Coding became a way for me to execute ideas faster. I{"'"}ve worked on freelance projects, building landing pages, websites, and applications that solve real problems and support business goals.
                            </p>
                        </motion.div>

                        {/* Mission Statement: Accent Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-12 lg:col-span-5 nb-card p-6 sm:p-8 md:p-10 border-[3px] !bg-primary text-primary-foreground"
                        >
                            <p className="text-base sm:text-lg md:text-xl font-black leading-snug">
                                Today, I combine marketing thinking with hands-on building. I do not just plan strategies — I create and deliver solutions that work in the real world.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
