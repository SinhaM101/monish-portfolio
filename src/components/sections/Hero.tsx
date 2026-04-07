"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-16 lg:py-20"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-white mb-4 tracking-[-0.03em] leading-[1.05]">
              Monish Sinha
            </h1>
            <p className="text-xl sm:text-2xl text-[#A1A1AA] mb-6 font-normal tracking-[-0.01em]">
              Data Science + Fintech @ CWRU
            </p>
            <p className="text-base sm:text-lg text-[#71717A] mb-10 leading-relaxed max-w-lg">
              Data science student building data-driven systems for financial and operational decision-making.
            </p>

            {/* Metrics row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-xl">
              <div>
                <div className="text-2xl font-semibold text-white">3</div>
                <div className="text-sm text-[#71717A]">internships at enterprise companies</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">64,000+</div>
                <div className="text-sm text-[#71717A]">users impacted by AI tools</div>
              </div>
              <div>
                <div className="text-sm font-mono text-[#A1A1AA] font-medium">Python • Spark</div>
                <div className="text-sm font-mono text-[#A1A1AA] font-medium">SQL • Azure</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B0B0C] rounded-full text-sm font-medium hover:bg-[#E5E5E5] transition-all duration-200"
              >
                View Projects
              </Link>
              <a
                href="/Sinha.Monish Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#27272A] text-white rounded-full text-sm font-medium hover:bg-[#18181B] transition-all duration-200"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:block">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm text-[#71717A] hover:text-white transition-all duration-200"
              >
                <ArrowDown className="h-4 w-4 animate-bounce" />
                Scroll to explore
              </a>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/DSC02682.jpg"
                alt="Monish Sinha"
                width={600}
                height={400}
                className="rounded-2xl object-cover object-top w-full"
                style={{ aspectRatio: "3/2" }}
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
