import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naraya.One | Holding Company - Telecommunications, Technology & Services",
  description: "Naraya.One is a dynamic holding company operating across telecommunications, technology, and services sectors. Discover our business ecosystem, investment opportunities, and partnerships.",
  keywords: "Naraya.One, holding company, telecommunications, technology, services, investment, partnerships, corporate",
  openGraph: {
    title: "Naraya.One | Holding Company - Telecommunications, Technology & Services",
    description: "Discover Naraya.One's business ecosystem across telecommunications, technology, and services sectors.",
    url: "https://naraya.one",
    siteName: "Naraya.One",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naraya.One - Integrated Business Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naraya.One | Holding Company - Telecommunications, Technology & Services",
    description: "Discover Naraya.One's business ecosystem across telecommunications, technology, and services sectors.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
