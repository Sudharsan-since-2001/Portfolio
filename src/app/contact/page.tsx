"use client"

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <Navbar />

            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />

            <div className="pt-32 pb-24 relative z-10">
                <section className="px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-12"
                        >
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-6xl font-serif font-bold italic leading-tight max-w-5xl mx-auto">
                                    If you’re looking for someone who builds products that work and campaigns that reach people - <span className="text-primary">let’s talk.</span>
                                </h1>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                                {/* Email Card */}
                                <a
                                    href="mailto:sudharsanmilburn@gmail.com"
                                    className="glass p-10 rounded-[2.5rem] border border-foreground/20 hover:border-primary/20 transition-all group text-left space-y-6"
                                >
                                    <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary group-hover:scale-110 transition-transform">
                                        <Mail size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Drop a line</p>
                                        <h3 className="text-2xl md:text-3xl font-bold truncate">sudharsanmilburn@gmail.com</h3>
                                    </div>
                                    <div className="flex items-center text-primary font-bold space-x-2 pt-4">
                                        <span>Send email</span>
                                        <ArrowRight size={18} />
                                    </div>
                                </a>

                                {/* Phone Card */}
                                <a
                                    href="tel:+918754626675"
                                    className="glass p-10 rounded-[2.5rem] border border-foreground/20 hover:border-primary/20 transition-all group text-left space-y-6"
                                >
                                    <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary group-hover:scale-110 transition-transform">
                                        <Phone size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Call directly</p>
                                        <h3 className="text-2xl md:text-3xl font-bold">+91 87546 26675</h3>
                                    </div>
                                    <div className="flex items-center text-primary font-bold space-x-2 pt-4">
                                        <span>Let's talk</span>
                                        <ArrowRight size={18} />
                                    </div>
                                </a>
                            </div>

                            <div className="pt-20">
                                <div className="inline-flex items-center space-x-2 text-muted-foreground italic font-medium">
                                    <div className="w-12 h-[1px] bg-foreground/20" />
                                    <span>Based in India, working globally.</span>
                                    <div className="w-12 h-[1px] bg-foreground/20" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
}
