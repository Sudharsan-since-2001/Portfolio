import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { PageHeader } from "@/components/PageHeader";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
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
