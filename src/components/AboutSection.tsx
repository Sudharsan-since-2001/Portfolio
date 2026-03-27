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

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
                        {/* Top: Giant Typography Statement */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-12 nb-card p-6 sm:p-8 md:p-10 border-[3.5px] md:border-[5px] bg-background relative overflow-hidden group shadow-[6px_6px_0px_var(--foreground)]"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--nb-yellow)]/10 -mr-12 -mt-12 rotate-45 transition-transform group-hover:scale-110" />
                            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black leading-[1.1] text-foreground tracking-tighter uppercase relative z-10">
                                I STARTED WITH ADS. ALONG THE WAY LEARNED TO BUILD WEB. <span className="text-primary">NOW I BRING BOTH</span> TO EVERY BRAND I WORK WITH.
                            </p>
                        </motion.div>

                        {/* Left Column: Career Evolution */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-12 lg:col-span-7 nb-card p-6 sm:p-8 md:p-8 border-[3px] md:border-[4px] bg-background relative z-10 hover:-translate-y-1 transition-all shadow-[4px_4px_0px_#000]"
                        >
                            <p className="text-sm sm:text-base md:text-lg font-bold text-foreground/90 leading-relaxed">
                                I started my career in digital marketing creating content, running ads and growing brands. Over 4 years, as my role and responsibilities grew, I taught myself web development. Now I build the website and drive the traffic to it. That combination is rare. And for the brands I work with across various industries, it{"'"}s been a game changer.
                            </p>
                        </motion.div>

                        {/* Right Column: Today's Value */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-12 lg:col-span-5 nb-card p-6 sm:p-8 md:p-8 border-[3px] md:border-[4px] !bg-[var(--nb-blue)] shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
                        >
                            <p className="text-base sm:text-lg md:text-xl font-black leading-snug text-foreground">
                                Today, with seasoned experience behind me, I can take a product from scratch and take it to the right audience. Building it, positioning it, and growing it all with a clear understanding of every step in between.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
