import { Navbar } from "@/components/Navbar";
import { HowISolveSection } from "@/components/HowISolveSection";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Process | Sudharsan Karthikeyan",
    description: "How I approach and solve digital problems",
    alternates: {
        canonical: "/process",
    },
};
export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <PageHeader
                    title="My"
                    highlight="Process"
                    description="How I approach and solve digital problems"
                />
                <HowISolveSection isTinted={false} noTopPadding={true} hideHeader={true} />
            </div>
        </main>
    );
}
