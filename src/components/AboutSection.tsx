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
                        className="nb-card p-8 sm:p-12 md:p-16 bg-background border-[4px] md:border-[6px] shadow-[8px_8px_0px_var(--foreground)]"
                    >
                        <p className="max-w-4xl text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-[1.6] md:leading-[1.8]">
                            I{"'"}m Sudharsan, a Senior Digital Marketer with 4 years of experience running campaigns, building brands, and driving growth across fashion, real estate, and politics. I{"'"}ve managed Meta ads, grown social media presence, written copy, and built SEO strategies that actually rank. As my responsibilities grew, I learned web development to take full ownership of every project I touched. I test before I scale. What works gets doubled down on, what doesn{"'"}t gets cut. Outside of work, I{"'"}m someone who gets genuinely obsessed with why things work, whether it{"'"}s an ad, a product, or a trend blowing up on social media.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
