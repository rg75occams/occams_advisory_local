import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Occams Advisory | Global Financing Advisory & Professional Services",
    description: `Occams Advisory is a global financing advisory and professional services firm that helps businesses of
        all sizes achieve their financial and operational goals.We offer a range of services, including financial advisory,
        restructuring, tax planning, tax credits, and due diligence.
    `,
    icons: { icon: "./images/Fevicon.png" },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
                <link rel="icon" href="./images/Fevicon.png" />
            </head>

            <body className={`${inter.className} antialiased`}>
                {/* <link rel="icon" href="./images/Fevicon.png" /> */}

                <LenisProvider>
                    <Navbar />

                    {children}

                    <Footer />
                </LenisProvider>
            </body>
        </html>
    );
}