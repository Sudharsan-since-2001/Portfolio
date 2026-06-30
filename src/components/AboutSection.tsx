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
                <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
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
                        className="nb-card bg-background border-[4px] md:border-[6px] shadow-[8px_8px_0px_var(--foreground)] md:shadow-[16px_16px_0px_var(--foreground)] overflow-hidden"
                    >
                        {/* Aesthetic Top Bar */}
                        <div className="bg-[var(--nb-yellow)] border-b-[4px] md:border-b-[6px] border-foreground px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--nb-pink)] border-[2px] sm:border-[3px] border-foreground shadow-[2px_2px_0px_#000]" />
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--nb-blue)] border-[2px] sm:border-[3px] border-foreground shadow-[2px_2px_0px_#000]" />
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--nb-green)] border-[2px] sm:border-[3px] border-foreground shadow-[2px_2px_0px_#000]" />
                            </div>
                            <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest opacity-80">
                                About_Me.exe
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 sm:p-10 md:p-16">
                            <div className="max-w-4xl space-y-6 sm:space-y-8 text-lg sm:text-xl md:text-2xl text-foreground font-semibold leading-[1.6] md:leading-[1.8]">
                                <p>
                                    I{"'"}ve worked with brands that had something real to say but sounded like everyone else. That{"'"}s the problem I solve.
                                </p>
                                <p>
                                    For four years, across fashion, real estate, politics, and beauty and personal care, I{"'"}ve been the person figuring out what a brand actually stands for and then building the content ecosystem around that idea.
                                </p>
                                <p>
                                    Campaigns that delivered 8x ROAS. Brands from zero visibility to owning their market. Content that actually sticks.
                                </p>
                                <p>
                                    If you want to be memorable, we should talk.
                                </p>

                                <div className="pt-6 sm:pt-8 flex flex-col items-end w-full">
                                    <div className="bg-[#dcf8c6] px-4 py-3 border-[3px] sm:border-[4px] border-foreground rounded-2xl rounded-tr-sm shadow-[4px_4px_0px_#000] max-w-lg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all cursor-default relative min-w-[200px]">
                                        <p className="font-semibold text-foreground text-sm sm:text-base leading-snug pb-3 sm:pb-4 pr-2">
                                            The results are in the portfolio. <br />
                                            The next one could be yours.
                                        </p>
                                        <div className="absolute bottom-1.5 right-2 flex items-center gap-1 opacity-80">
                                            <span className="text-[10px] font-semibold text-foreground/60">11:15 AM</span>
                                            {/* WhatsApp Blue Double Check */}
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#53bdeb] ml-0.5">
                                                <path d="M18 6L7 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M22 10l-9.5 9.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Divider & Footer */}
                            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t-[3px] sm:border-t-[4px] border-foreground/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[var(--nb-blue)] border-[3px] border-foreground flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000]">
                                        SK
                                    </div>
                                    <div>
                                        <p className="font-black uppercase tracking-wider text-lg sm:text-xl">Sudharsan Karthikeyan</p>
                                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mt-1">Content Strategist & Digital Marketer</p>
                                    </div>
                                </div>
                                <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_var(--nb-pink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--nb-pink)] transition-all cursor-pointer">
                                    <span className="w-2 h-2 bg-[var(--nb-green)] rounded-full animate-pulse" />
                                    Open to Senior Roles
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
