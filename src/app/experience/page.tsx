import { Navbar } from "@/components/Navbar";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience | Sudharsan Karthikeyan",
    description: "A timeline of my professional growth across marketing and technology teams.",
    alternates: {
        canonical: "/experience",
    },
};
export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div>
                <PageHeader
                    title="Work"
                    highlight="History"
                    description="A timeline of my professional growth across marketing and technology teams."
                />
                <ExperienceSection isTinted={false} noTopPadding={true} hideHeader={true} />
            </div>
        </main>
    );
}
