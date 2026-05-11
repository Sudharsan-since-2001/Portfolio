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
                ${noTopPadding ? 'pb-16 pt-0' : 'py-16 md:py-24'}
                relative
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
                    {/* Precise, Elegant Header */}
                    {!hideHeader && (
                        <div className="flex items-center gap-6 mb-2 text-foreground">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-black uppercase tracking-tighter">
                                About Me
                            </h2>
                        </div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="nb-card p-6 sm:p-12 md:p-16 bg-background border-[4px] md:border-[6px] shadow-[8px_8px_0px_var(--foreground)]"
                    >
                        <p className="max-w-4xl text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-[1.6] md:leading-[1.8]">
                            I{"'"}m Sudharsan, a Content Writer & Copywriter who builds brands through words that work. With 4 years of experience across fashion, real estate, and politics, I{"'"}ve seen firsthand how the right message can move the needle. I don{"'"}t just write; I strategize. Whether it{"'"}s ghostwriting for founders, building SEO-driven content that ranks, or crafting high-conversion sales copy, my goal is always clear: make people stop scrolling and start reading. I combine my marketing background with a deep obsession for why things work, ensuring every piece of content has a purpose and delivers measurable results.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
