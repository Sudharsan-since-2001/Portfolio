"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Rocket, Repeat } from "lucide-react"

const steps = [
    {
        title: "Deep Discovery",
        description: "I start by diving into the data and user psychology. Understanding the 'why' before the 'what' is where the most impactful solutions begin.",
        icon: <Search className="text-primary" size={32} />,
        color: "blue"
    },
    {
        title: "Creative Engineering",
        description: "This is where my marketing brain and developer hands collide. I build modular, scalable solutions that don't just work—they convert.",
        icon: <Rocket className="text-primary" size={32} />,
        color: "purple"
    },
    {
        title: "Continuous Refinement",
        description: "Solving problems isn't a one-time event. I track performance, gather feedback, and iterate until the solution is perfect and efficient.",
        icon: <Repeat className="text-primary" size={32} />,
        color: "pink"
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
                ${isTinted ? 'bg-muted/30' : 'bg-background'}
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
                            className="text-center space-y-4"
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold">
                                How I <span className="text-primary italic">Solve Problems</span>
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Blending analytical marketing depth with technical precision to build meaningful experiences.
                            </p>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-10 rounded-[2.5rem] border border-foreground/20 hover:border-primary/20 transition-all group relative overflow-hidden"
                            >
                                {/* Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />

                                <div className="space-y-6">
                                    <div className="p-4 bg-primary/10 rounded-2xl w-fit">
                                        {step.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed italic">
                                            "{step.description}"
                                        </p>
                                    </div>

                                    {/* Line Indicator */}
                                    <div className="w-12 h-1 bg-primary/20 group-hover:w-full transition-all duration-500 rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
