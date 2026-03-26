"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FileText } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function RotatingText() {
  const words = ["Data Science", "Machine Learning", "AI Systems", "Data Engineering", "Analytics", "FinTech"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      {words[currentIndex]}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight font-serif">
              Monish Sinha
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 font-light leading-relaxed max-w-xl">
              Data Science student building <span className="inline-block h-8"><RotatingText /></span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-xl">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white">3</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">internships at enterprise companies</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white">64,000+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">users impacted by AI tools</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm font-mono text-zinc-700 dark:text-zinc-300 font-medium">Python • Spark</div>
                <div className="text-sm font-mono text-zinc-700 dark:text-zinc-300 font-medium">Azure • SQL</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="https://github.com/SinhaM101"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/monishsinha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-full text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="/Sinha.Monish Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-full text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>

            <div>
              <a
                href="#projects"
                className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                View projects ↓
              </a>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/DSC02682.jpg"
                alt="Monish Sinha"
                width={1000}
                height={1000}
                className="rounded-2xl shadow-2xl object-cover object-top"
                style={{ aspectRatio: "3/2" }}
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
