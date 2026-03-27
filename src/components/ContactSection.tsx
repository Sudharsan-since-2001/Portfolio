"use client"

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, MapPin } from "lucide-react";

export function ContactSection({ 
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
            id="contact" 
            className={`
                ${isTinted ? 'bg-[var(--nb-pink)]/5' : 'bg-background'}
                ${noTopPadding ? 'pb-24 pt-0' : 'py-24 md:py-32'}
                relative overflow-hidden
            `}
        >
            {/* Decorative Shapes */}
            <div className="absolute top-20 left-8 w-20 h-20 bg-[var(--nb-yellow)] border-[3px] border-foreground rotate-12 opacity-20 hidden md:block" />
            <div className="absolute top-40 right-12 w-14 h-14 bg-[var(--nb-pink)] border-[3px] border-foreground -rotate-6 opacity-20 hidden md:block" />
            
            <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-12"
                    >
                        <div className="space-y-6">
                            {!hideHeader && (
                                <div className="inline-block nb-badge px-4 py-2 bg-[var(--nb-yellow)] text-foreground mb-4 font-black uppercase tracking-widest text-xs">
                                    Let{"'"}s Connect
                                </div>
                            )}
                            <h2 className="text-3xl md:text-6xl font-sans font-black uppercase leading-tight max-w-5xl mx-auto tracking-tighter">
                                HAVE AN IDEA? I'D LOVE TO HEAR IT.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                            {/* Email Card */}
                            <a
                                href="mailto:sudharsanmilburn@gmail.com"
                                className="nb-card p-8 md:p-12 bg-background text-left space-y-6 group border-[3px] md:border-[5px]"
                            >
                                <div className="p-4 bg-[var(--nb-blue)] border-[3px] border-foreground shadow-[4px_4px_0px_#000] w-fit text-foreground group-hover:shadow-[6px_6px_0px_#000] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all">
                                    <Mail size={32} />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Drop a line</p>
                                    <h3 className="text-lg md:text-2xl font-black break-all md:break-normal">sudharsanmilburn@gmail.com</h3>
                                </div>
                                <div className="flex items-center gap-2 text-primary font-black uppercase text-xs md:text-sm pt-2">
                                    <span>Send email</span>
                                    <ArrowRight size={18} />
                                </div>
                            </a>

                            {/* Phone Card */}
                            <a
                                href="tel:+918754626675"
                                className="nb-card p-8 md:p-12 bg-background text-left space-y-6 group border-[3px] md:border-[5px]"
                            >
                                <div className="p-4 bg-[var(--nb-green)] border-[3px] border-foreground shadow-[4px_4px_0px_#000] w-fit text-foreground group-hover:shadow-[6px_6px_0px_#000] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all">
                                    <Phone size={32} />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Call directly</p>
                                    <h3 className="text-lg md:text-2xl font-black">+91 87546 26675</h3>
                                </div>
                                <div className="flex items-center gap-2 text-primary font-black uppercase text-xs md:text-sm pt-2">
                                    <span>Let{"'"}s talk</span>
                                    <ArrowRight size={18} />
                                </div>
                            </a>
                        </div>

                        <div className="pt-12">
                            <div className="inline-flex items-center gap-3 nb-badge px-6 py-3 bg-muted text-muted-foreground border-[3px]">
                                <MapPin size={18} />
                                <span className="font-bold uppercase tracking-wide text-xs">Based in India, working globally.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
