import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// @ts-ignore
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "P.Phat | Creative Portfolio",
    description: "Showcasing UI/UX, Branding, and Creative Direction.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${poppins.variable} antialiased`}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
