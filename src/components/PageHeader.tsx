"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
    title: string
    highlight?: string
    description?: string
}

export function PageHeader({ title, highlight, description }: PageHeaderProps) {
    return (
        <div className="py-20 bg-background border-b border-muted/50">
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-foreground"
                    >
                        {title} {highlight && <span className="text-primary italic">{highlight}</span>}
                    </motion.h1>
                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            </div>
        </div>
    )
}
