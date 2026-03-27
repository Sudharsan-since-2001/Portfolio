"use client"

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <Navbar />

            {/* Decorative Shapes */}
            <div className="hidden md:block absolute top-40 left-8 w-20 h-20 bg-[var(--nb-yellow)] border-[3px] border-foreground rotate-12 opacity-40" />
            <div className="hidden md:block absolute top-60 right-12 w-14 h-14 bg-[var(--nb-pink)] border-[3px] border-foreground -rotate-6 opacity-40" />
            <div className="hidden md:block absolute bottom-40 left-1/4 w-16 h-16 bg-[var(--nb-blue)] border-[3px] border-foreground rotate-45 opacity-30" />

            <div className="pt-8 pb-16 relative z-10">
                <section className="px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center space-y-12"
                        >
                            <div className="space-y-6">
                                <div className="inline-block nb-badge px-4 py-2 bg-[var(--nb-yellow)] text-foreground mb-4">
                                    Let{"'"}s Connect
                                </div>
                                <h1 className="text-4xl md:text-6xl font-sans font-black uppercase leading-tight max-w-5xl mx-auto">
                                    HAVE AN IDEA? I'D LOVE TO HEAR IT.
                           
                                </h1>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                                {/* Email Card */}
                                <a
                                    href="mailto:sudharsanmilburn@gmail.com"
                                    className="nb-card p-10 bg-background text-left space-y-6 group"
                                >
                                    <div className="p-4 bg-[var(--nb-blue)] border-[3px] border-foreground shadow-[3px_3px_0px_var(--foreground)] w-fit text-foreground group-hover:shadow-[5px_5px_0px_var(--foreground)] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all">
                                        <Mail size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-black uppercase tracking-widest text-muted-foreground">Drop a line</p>
                                        <h3 className="text-xl md:text-2xl font-black truncate">sudharsanmilburn@gmail.com</h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-sm pt-2">
                                        <span>Send email</span>
                                        <ArrowRight size={16} />
                                    </div>
                                </a>

                                {/* Phone Card */}
                                <a
                                    href="tel:+918754626675"
                                    className="nb-card p-10 bg-background text-left space-y-6 group"
                                >
                                    <div className="p-4 bg-[var(--nb-green)] border-[3px] border-foreground shadow-[3px_3px_0px_var(--foreground)] w-fit text-foreground group-hover:shadow-[5px_5px_0px_var(--foreground)] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all">
                                        <Phone size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-black uppercase tracking-widest text-muted-foreground">Call directly</p>
                                        <h3 className="text-xl md:text-2xl font-black">+91 87546 26675</h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-sm pt-2">
                                        <span>Let{"'"}s talk</span>
                                        <ArrowRight size={16} />
                                    </div>
                                </a>
                            </div>

                            <div className="pt-12">
                                <div className="inline-flex items-center gap-3 nb-badge px-6 py-3 bg-muted text-muted-foreground">
                                    <MapPin size={16} />
                                    <span>Based in India, working globally.</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
}
