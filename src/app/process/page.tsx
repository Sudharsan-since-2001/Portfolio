import { Navbar } from "@/components/Navbar";
import { HowISolveSection } from "@/components/HowISolveSection";
import { PageHeader } from "@/components/PageHeader";

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <PageHeader
                    title="My"
                    highlight="Process"
                    description="How I blend analytics with creativity to solve complex digital problems."
                />
                <HowISolveSection isTinted={false} noTopPadding={true} hideHeader={true} />
            </div>
        </main>
    );
}
