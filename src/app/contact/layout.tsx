import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Sudharsan Karthikeyan",
    description: "Get in touch with Sudharsan Karthikeyan for digital marketing strategies and collaborations.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
