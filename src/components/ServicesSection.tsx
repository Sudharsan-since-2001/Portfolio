"use client"

import { motion } from "framer-motion"
import { BarChart3, Code2, Globe, Sparkles, PenTool, Search, Share2 } from "lucide-react"

const services = [
    {
        title: "Digital Marketing",
        icon: <BarChart3 className="text-primary" />,
        description: "Full-funnel marketing strategies designed to scale your brand and maximize conversion."
    },
    {
        title: "Web Development",
        icon: <Code2 className="text-primary" />,
        description: "Building high-performance, aesthetic web applications with a focus on user experience."
    },
    {
        title: "SEO, AEO & GEO",
        icon: <Globe className="text-primary" />,
        description: "Optimizing for Google, AI search (AEO), and Generative Engines (GEO) to dominate digital real estate."
    },
    {
        title: "Content Writing",
        icon: <PenTool className="text-primary" />,
        description: "Persuasive storytelling and high-conversion copy that turns readers into loyal customers."
    },
    {
        title: "Social Media Management",
        icon: <Share2 className="text-primary" />,
        description: "Building community and brand awareness through strategic positioning across social platforms."
    },
    {
        title: "Creative Automation",
        icon: <Sparkles className="text-primary" />,
        description: "Using custom code to automate repetitive marketing tasks and streamline workflows."
    }
]

export function ServicesSection({
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
            id="services"
            className={`
                ${isTinted ? 'bg-muted/30' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24'}
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto space-y-16">
                    {!hideHeader && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold">
                                Expertise & <span className="text-primary italic">Services</span>
                            </h2>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-10 rounded-[2.5rem] border border-foreground/20 hover:border-primary/20 transition-all hover:translate-y-[-8px]"
                            >
                                <div className="mb-8 p-5 bg-primary/10 rounded-2xl w-fit">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
