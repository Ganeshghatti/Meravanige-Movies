import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meravanige | Cinema & Strategy",
  description: "Stories don't shout. They travel. They stay. They speak.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans bg-brand-white min-h-screen text-brand-blue-dark antialiased`}
      >
        {/* Global Pattern Overlay */}
        <div className="fixed inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none z-0 mix-blend-multiply"></div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20 md:pt-24 lg:pt-32">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
