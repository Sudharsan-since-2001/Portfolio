"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
    title: string
    highlight?: string
    description?: string
}

export function PageHeader({ title, highlight, description }: PageHeaderProps) {
    return (
        <div className="py-12 sm:py-20 bg-background">
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-sans font-black text-foreground uppercase tracking-tight"
                    >
                        {title}{" "}
                        {highlight && (
                            <span className="relative inline-block">
                                <span className="relative z-10">{highlight}</span>
                                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-primary -z-0" />
                            </span>
                        )}
                    </motion.h1>
                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-semibold leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            </div>
        </div>
    )
}
