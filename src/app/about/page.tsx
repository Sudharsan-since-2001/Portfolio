import { AboutSection } from "@/components/AboutSection";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Sudharsan Karthikeyan",
    description: "Learn more about Sudharsan Karthikeyan, a Digital Marketer, No code developer, and Author bridging the gap between marketing and digital building.",
    alternates: {
        canonical: "/about",
    },
};
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <div>
                <PageHeader
                    title="About"
                    highlight="Me"
                />
                <AboutSection hideHeader={true} isTinted={false} noTopPadding={true} />
            </div>
        </main>
    );
}
