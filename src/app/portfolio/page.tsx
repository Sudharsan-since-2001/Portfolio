import { Navbar } from "@/components/Navbar";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Sudharsan Karthikeyan",
    description: "Explore the portfolio of Sudharsan Karthikeyan, showcasing successful digital marketing campaigns, web development projects, and published writing.",
    alternates: {
        canonical: "/portfolio",
    },
};
export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <PageHeader
                    title="My"
                    highlight="Portfolio"
                    description="A curated collection of my best work in marketing, development, and content creation."
                />
                <PortfolioTabs isTinted={false} noTopPadding={true} hideHeader={true} />
            </div>
        </main>
    );
}
