import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Monish Sinha | Data Science & Software Engineering",
  description: "Data science student and software engineer focused on full-stack engineering, AI workflows, and enterprise data systems.",
  keywords: ["Monish Sinha", "Data Science", "Software Engineering", "AI Governance", "Full-Stack", "Portfolio"],
  authors: [{ name: "Monish Sinha" }],
  openGraph: {
    title: "Monish Sinha | Data Science & Software Engineering",
    description: "Full-stack engineering, AI workflows, and enterprise analytics portfolio.",
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
