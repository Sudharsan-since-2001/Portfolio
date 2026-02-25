"use client"

import { motion } from "framer-motion"
import { Search, Rocket, Repeat } from "lucide-react"

const steps = [
    {
        title: "Deep Discovery",
        description: "I start by diving into the data and user psychology. Understanding the 'why' before the 'what' is where the most impactful solutions begin.",
        icon: <Search className="text-foreground" size={32} />,
        color: "bg-[var(--nb-yellow)]",
        num: "01"
    },
    {
        title: "Creative Engineering",
        description: "This is where my marketing brain and developer hands collide. I build modular, scalable solutions that don't just work—they convert.",
        icon: <Rocket className="text-foreground" size={32} />,
        color: "bg-[var(--nb-pink)]",
        num: "02"
    },
    {
        title: "Continuous Refinement",
        description: "Solving problems isn't a one-time event. I track performance, gather feedback, and iterate until the solution is perfect and efficient.",
        icon: <Repeat className="text-foreground" size={32} />,
        color: "bg-[var(--nb-green)]",
        num: "03"
    }
]

export function HowISolveSection({
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
            id="process"
            className={`
                ${isTinted ? 'bg-[var(--nb-pink)]/10' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24'}
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto space-y-16">
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
                                Blending analytical marketing depth with technical precision to build meaningful experiences.
                            </p>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="nb-card p-6 sm:p-8 bg-background"
                            >
                                <div className="space-y-6">
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

                                    {/* Progress Bar */}
                                    <div className="w-full h-2.5 sm:h-3 bg-muted border-[2px] border-foreground">
                                        <div className={`h-full ${step.color} transition-all duration-700`} style={{ width: '100%' }} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
