import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
