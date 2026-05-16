import Link from "next/link"
import { Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full bg-background border-t-[4px] md:border-t-[6px] border-foreground py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 -z-10" 
                 style={{ 
                    backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', 
                    backgroundSize: '24px 24px',
                 }} 
            />
            
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr] gap-12 lg:gap-24">
                    
                    {/* Brand Section */}
                    <div className="space-y-6 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-foreground">
                                Sudharsan<br/>Karthikeyan
                            </span>
                        </Link>
                        <p className="text-sm font-semibold text-muted-foreground max-w-md leading-relaxed">
                            Building the bridge between content strategy, high-conversion copywriting, and brand growth.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                             <a href="https://www.linkedin.com/in/sudharsan-karthikeyan-seo-analyst/" target="_blank" rel="noopener noreferrer" 
                                className="p-2.5 bg-background border-[2.5px] border-foreground shadow-[3px_3px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                                <Linkedin size={20} />
                             </a>
                             <a href="https://github.com/Sudharsan-since-2001" target="_blank" rel="noopener noreferrer" 
                                className="p-2.5 bg-background border-[2.5px] border-foreground shadow-[3px_3px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                                <Github size={20} />
                             </a>
                             <a href="https://medium.com/@sudharsanmilburn" target="_blank" rel="noopener noreferrer" 
                                className="p-2.5 bg-background border-[2.5px] border-foreground shadow-[3px_3px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                                <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 16 16" 
                                    fill="currentColor"
                                >
                                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                                </svg>
                             </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground underline decoration-[3px] underline-offset-4 decoration-primary">Navigation</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-black uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground underline decoration-[3px] underline-offset-4 decoration-primary">Let's Talk</h4>
                        <div className="space-y-4">
                            <a href="mailto:sudharsanmilburn@gmail.com" className="flex items-start gap-3 group">
                                <Mail size={18} className="mt-1 flex-shrink-0" />
                                <span className="text-sm font-semibold break-all text-muted-foreground group-hover:text-foreground">sudharsanmilburn@gmail.com</span>
                            </a>
                            <a href="tel:+918754626675" className="flex items-start gap-3 group">
                                <Phone size={18} className="mt-1 flex-shrink-0" />
                                <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground">+91 87546 26675</span>
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 flex-shrink-0" />
                                <span className="text-sm font-semibold text-muted-foreground">Based in India, working globally.</span>
                            </div>
                        </div>
                    </div>



                </div>

                {/* Bottom Bar */}
                <div className="max-w-6xl mx-auto mt-16 pt-8 border-t-[2.5px] border-foreground/10 flex flex-col md:flex-row items-center gap-6 relative">
                    <div className="flex-grow text-center">
                        <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                            &copy; {currentYear} Sudharsan Karthikeyan. All rights reserved.
                        </p>
                    </div>
                    <div className="md:absolute md:right-12 flex items-center gap-8">
                        <a href="#hero" className="text-[10px] font-black uppercase tracking-widest text-foreground hover:text-primary animate-bounce">Back To Top &uarr;</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
