import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { PageHeader } from "@/components/PageHeader";

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
