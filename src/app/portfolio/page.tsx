import { Navbar } from "@/components/Navbar";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { PageHeader } from "@/components/PageHeader";

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
