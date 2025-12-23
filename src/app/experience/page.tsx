import { Navbar } from "@/components/Navbar";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PageHeader } from "@/components/PageHeader";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
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
