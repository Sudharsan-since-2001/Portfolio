"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const paths = {
    exists: {
        id: "exists",
        steps: [
            {
                title: "Deep Discovery",
                description: "I start by understanding the problem properly. This means looking at data, user behavior, and the context behind the issue. Before making changes, I focus on understanding why the problem exists.",
                color: "bg-[var(--nb-yellow)]",
                num: "01"
            },
            {
                title: "Analyze and Improve",
                description: "Once the issue is clear, I examine the product closely. I identify where users struggle, where communication breaks down, or where the experience feels confusing. Then I improve those areas through better structure, messaging, or design.",
                color: "bg-[var(--nb-pink)]",
                num: "02"
            },
            {
                title: "Test and Refine",
                description: "After improvements are made, I observe how users interact with the product. I track behavior, gather feedback, and refine the experience to make it simpler and more effective.",
                color: "bg-[var(--nb-green)]",
                num: "03"
            }
        ]
    },
    build: {
        id: "build",
        steps: [
            {
                title: "Deep Discovery",
                description: "I start by understanding the problem properly. This includes understanding the audience, the goal of the product, and the real need it should solve.",
                color: "bg-[var(--nb-yellow)]",
                num: "01"
            },
            {
                title: "Build the Solution",
                description: "Once the direction is clear, I start building. This could be a landing page, a website, a tool, or an application designed to solve the problem directly.",
                color: "bg-[var(--nb-pink)]",
                num: "02"
            },
            {
                title: "Launch and Improve",
                description: "After launch, I observe how people use the product. Based on behavior and feedback, I refine and improve it over time.",
                color: "bg-[var(--nb-green)]",
                num: "03"
            }
        ]
    }
}

export function HowISolveSection({
    isTinted = false,
    noTopPadding = false,
    hideHeader = false
}: {
    isTinted?: boolean;
    noTopPadding?: boolean;
    hideHeader?: boolean;
}) {
    const [activePath, setActivePath] = useState<"exists" | "build">("exists");

    return (
        <section
            id="process"
            className={`
                ${isTinted ? 'bg-[var(--nb-pink)]/10' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24'}
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
                    {!hideHeader && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center space-y-3 sm:space-y-4"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black uppercase">
                                How I Solve Problems
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-semibold">
                                Two distinct approaches based on whether we're improving what exists or building from scratch.
                            </p>
                        </motion.div>
                    )}

                    {/* Navigation Tabs */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-8 sm:mb-12">
                        <button
                            onClick={() => setActivePath("exists")}
                            className={`px-4 py-3 sm:px-6 sm:py-4 border-[3px] border-foreground font-black uppercase text-sm sm:text-base transition-all
                                ${activePath === "exists" 
                                    ? 'bg-[var(--nb-pink)] shadow-[4px_4px_0px_var(--foreground)] translate-x-[-2px] translate-y-[-2px]' 
                                    : 'bg-background hover:bg-[var(--nb-pink)]/20 shadow-none hover:shadow-[2px_2px_0px_var(--foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px]'
                                }`}
                        >
                            When a Product Already Exists
                        </button>
                        <button
                            onClick={() => setActivePath("build")}
                            className={`px-4 py-3 sm:px-6 sm:py-4 border-[3px] border-foreground font-black uppercase text-sm sm:text-base transition-all
                                ${activePath === "build" 
                                    ? 'bg-[var(--nb-yellow)] shadow-[4px_4px_0px_var(--foreground)] translate-x-[-2px] translate-y-[-2px]' 
                                    : 'bg-background hover:bg-[var(--nb-yellow)]/20 shadow-none hover:shadow-[2px_2px_0px_var(--foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px]'
                                }`}
                        >
                            When a Product Needs to Be Built
                        </button>
                    </div>

                    {/* Path Steps Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePath}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 min-h-[400px] md:min-h-[auto]"
                        >
                            {paths[activePath].steps.map((step, i) => (
                                <motion.div
                                    key={`${activePath}-${i}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15 + 0.1 }}
                                    className="nb-card p-6 sm:p-8 bg-background flex flex-col h-full"
                                >
                                    <div className="space-y-6 flex-1">
                                        {/* Step Number */}
                                        <div className="flex items-center justify-between">
                                            <div className={`px-3 py-1.5 sm:px-4 sm:py-2 ${step.color} border-[3px] border-foreground shadow-[3px_3px_0px_var(--foreground)] font-black text-lg sm:text-xl`}>
                                                STEP {step.num}
                                            </div>
                                        </div>

                                        <div className="space-y-3 sm:space-y-4">
                                            <h3 className="text-xl sm:text-2xl font-black uppercase">{step.title}</h3>
                                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Progress Bar fixed at bottom */}
                                    <div className="w-full h-2.5 sm:h-3 bg-muted border-[2px] border-foreground mt-8">
                                        <div className={`h-full ${step.color} transition-all duration-700`} style={{ width: '100%' }} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
