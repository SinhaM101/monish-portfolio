import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Monish Sinha | Data Science Portfolio",
  description: "Data Science Student | AI Governance | Machine Learning - Portfolio showcasing projects in data science, machine learning, and AI systems.",
  keywords: ["Data Science", "Machine Learning", "AI Governance", "Portfolio", "Monish Sinha"],
  authors: [{ name: "Monish Sinha" }],
  openGraph: {
    title: "Monish Sinha | Data Science Portfolio",
    description: "Data Science Student | AI Governance | Machine Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen bg-[#0B0B0C] text-white font-sans antialiased grid-background">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
