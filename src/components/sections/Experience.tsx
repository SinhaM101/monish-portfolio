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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Experience
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl">
          Professional experience in financial services, AI governance, and supply chain operations.
        </p>
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-start gap-4 mb-4">
              <PNCLogo className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    PNC Financial Services — Technology Analyst Intern (Incoming)
                  </h3>
                  <div className="text-sm text-zinc-500 dark:text-zinc-500 whitespace-nowrap">Summer 2026</div>
                </div>
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Incoming intern focused on emerging technologies and data-driven innovation within the financial services industry.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              The role will involve working with technical teams to explore data-driven solutions, analytics workflows, and technology platforms supporting financial services operations.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-start gap-4 mb-4">
              <SherwinWilliamsLogo className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Sherwin-Williams — AI Governance Intern
                  </h3>
                  <div className="text-sm text-zinc-500 dark:text-zinc-500 whitespace-nowrap">Summer 2025</div>
                </div>
              </div>
            </div>

            <ul className="space-y-2">
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                Built GenAI cost estimation tooling reducing approval cycle time by 50%
              </li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                Developed dashboards tracking enterprise Copilot usage
              </li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                Implemented Azure tagging framework for AI cost attribution
              </li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                Helped create AI literacy guidelines used to train 64,000+ employees
              </li>
            </ul>

            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800">
              <Link
                href="/projects/sherwin-williams"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                View case study
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-start gap-4 mb-4">
              <PaulasChoiceLogo className="w-12 h-12 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Unilever (Paula&apos;s Choice) — Supply Chain Intern
                  </h3>
                  <div className="text-sm text-zinc-500 dark:text-zinc-500 whitespace-nowrap">Summer 2023</div>
                </div>
              </div>
            </div>

            <ul className="space-y-2">
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                Kept track of logistics and updated company&apos;s inventory
              </li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                Provided recommendations and led presentation on improving remote work productivity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
