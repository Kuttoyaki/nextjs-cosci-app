import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "../globals.css";

const font = Orbitron({
    subsets: ["latin"],
    weight: ["400","500","600","700","800","900"],
});

export const metadata: Metadata = {
    title: "Log in",
    description: "Lastest product 2025",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
    <html lang="en">
        <body
        className= {`${font.className}`}
        >
        

        {children}
        </body>
    </html>
    );
}