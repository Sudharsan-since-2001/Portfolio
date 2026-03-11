import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Sudharsan Karthikeyan",
    description: "Learn more about Sudharsan Karthikeyan, a digital marketing strategist specializing in social media growth and SEO.",
    alternates: {
        canonical: "/about",
    },
};
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <PageHeader
                    title="About"
                    highlight="Me"
                />
                <AboutSection hideHeader={true} isTinted={false} noTopPadding={true} />
            </div>
        </main>
    );
}
