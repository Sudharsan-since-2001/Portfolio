"use client"

import { motion } from "framer-motion"

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
                ${isTinted ? 'bg-muted/30' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24'}
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {!hideHeader && (
                            <h2 className="text-4xl md:text-6xl font-serif font-bold">
                                About <span className="text-primary italic">Me</span>
                            </h2>
                        )}
                        <div className="mt-8 text-xl text-muted-foreground leading-relaxed space-y-6">
                            <p>
                                I'm Sudharsan Karthikeyan, a Digital Marketer and Vibe Coder. I started in marketing, working on campaigns, content, and audience behavior. Over time, I started building websites, tools, and applications that supported my marketing work.
                            </p>
                            <p>
                                Vibe Coding became a way for me to execute ideas faster. I've worked on freelance projects, building landing pages, websites, and applications that solve real problems and support business goals.
                            </p>
                            <p>
                                Today, I combine marketing thinking with hands-on building. I do not just plan strategies I create and deliver solutions that work in the real world.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
