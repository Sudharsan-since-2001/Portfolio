import { ServicesSection } from "@/components/ServicesSection";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Sudharsan Karthikeyan",
    description: "Tailored digital marketing and development solutions to help your business thrive.",
    alternates: {
        canonical: "/services",
    },
};
export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <div>
                <PageHeader
                    title="Expertise &"
                    highlight="Services"
                    description="Tailored digital marketing and development solutions to help your business thrive."
                />
                <ServicesSection isTinted={false} noTopPadding={true} hideHeader={true} />
            </div>
        </main>
    );
}
