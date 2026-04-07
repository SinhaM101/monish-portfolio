import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function PNCLogo({ className }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center bg-white dark:bg-white rounded-lg p-2 border border-zinc-200`}>
      <Image
        src="/PNC.png"
        alt="PNC Financial Services"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
}

function SherwinWilliamsLogo({ className }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center bg-white dark:bg-white rounded-lg p-2 border border-zinc-200`}>
      <Image
        src="/Sherwin.jpg"
        alt="Sherwin-Williams"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
}

function PaulasChoiceLogo({ className }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center bg-white dark:bg-white rounded-lg p-2 border border-zinc-200`}>
      <Image
        src="/Paulas Chocie.png"
        alt="Paula's Choice"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.02em]">
          Experience
        </h2>
        <p className="text-[#A1A1AA] mb-12 max-w-2xl">
          Professional experience in financial services, AI governance, and supply chain operations.
        </p>
        <div className="space-y-6">
          <div className="p-6 bg-[#18181B] rounded-2xl border border-[#27272A]">
            <div className="flex items-start gap-4 mb-4">
              <PNCLogo className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white tracking-[-0.01em]">
                    PNC Financial Services — Technology Analyst Intern (Incoming)
                  </h3>
                  <div className="text-sm text-[#71717A] whitespace-nowrap">Summer 2026</div>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#A1A1AA]">
              Incoming intern focused on emerging technologies and data-driven innovation within the financial services industry.
            </p>
          </div>

          <div className="p-6 bg-[#18181B] rounded-2xl border border-[#27272A]">
            <div className="flex items-start gap-4 mb-4">
              <SherwinWilliamsLogo className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white tracking-[-0.01em]">
                    Sherwin-Williams — AI Governance Intern
                  </h3>
                  <div className="text-sm text-[#71717A] whitespace-nowrap">Summer 2025</div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              <li className="text-sm text-[#A1A1AA]">
                Built GenAI cost estimation tooling reducing approval cycle time by 50%
              </li>
              <li className="text-sm text-[#A1A1AA]">
                Developed dashboards tracking enterprise Copilot usage
              </li>
              <li className="text-sm text-[#A1A1AA]">
                Implemented Azure tagging framework for AI cost attribution
              </li>
              <li className="text-sm text-[#A1A1AA]">
                Helped create AI literacy guidelines used to train 64,000+ employees
              </li>
            </ul>

            <div className="pt-4 border-t border-[#27272A]">
              <Link
                href="/projects/sherwin-williams"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#71717A] hover:text-white transition-all duration-200"
              >
                View case study
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="p-6 bg-[#18181B] rounded-2xl border border-[#27272A]">
            <div className="flex items-start gap-4 mb-4">
              <PaulasChoiceLogo className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white tracking-[-0.01em]">
                    Unilever (Paula&apos;s Choice) — Supply Chain Intern
                  </h3>
                  <div className="text-sm text-[#71717A] whitespace-nowrap">Summer 2023</div>
                </div>
              </div>
            </div>

            <ul className="space-y-2">
              <li className="text-sm text-[#A1A1AA]">
                Kept track of logistics and updated company&apos;s inventory
              </li>
              <li className="text-sm text-[#A1A1AA]">
                Provided recommendations and led presentation on improving remote work productivity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
