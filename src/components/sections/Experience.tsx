import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function PNCVisual() {
  return (
    <div className="rounded-2xl border border-[#27272A] bg-[#0F0F11] p-4 sm:p-5">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#71717A] mb-4">
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        Workflow
      </div>
      <div className="space-y-3">
        <div className="rounded-xl border border-[#27272A] bg-[#18181B] px-3 py-2 text-sm text-[#D4D4D8]">Jira API</div>
        <div className="rounded-xl border border-[#27272A] bg-[#18181B] px-3 py-2 text-sm text-[#D4D4D8]">Bitbucket API</div>
        <div className="flex items-center justify-center text-[#71717A]">↳</div>
        <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-200">Azure AI Foundry</div>
        <div className="rounded-xl border border-[#27272A] bg-[#18181B] px-3 py-2 text-sm text-[#D4D4D8]">ServiceNow</div>
      </div>
    </div>
  );
}

function SherwinVisual() {
  return (
    <div className="rounded-2xl border border-[#27272A] bg-[#0F0F11] p-4 sm:p-5">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#71717A] mb-4">
        <span className="h-2 w-2 rounded-full bg-violet-400" />
        Pipeline
      </div>
      <div className="space-y-3">
        <div className="rounded-xl border border-[#27272A] bg-[#18181B] px-3 py-2 text-sm text-[#D4D4D8]">Business Request</div>
        <div className="flex items-center justify-center text-[#71717A]">↓</div>
        <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-sm text-violet-200">Copilot Studio</div>
        <div className="flex items-center justify-center text-[#71717A]">↓</div>
        <div className="rounded-xl border border-[#27272A] bg-[#18181B] px-3 py-2 text-sm text-[#D4D4D8]">Cost Forecast Model</div>
        <div className="flex items-center justify-center text-[#71717A]">↓</div>
        <div className="rounded-xl border border-[#27272A] bg-[#18181B] px-3 py-2 text-sm text-[#D4D4D8]">AI Governance</div>
      </div>
    </div>
  );
}

function TableauVisual() {
  return (
    <div className="rounded-2xl border border-[#27272A] bg-[#0F0F11] p-4 sm:p-5">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#71717A] mb-4">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Archive Flow
      </div>
      <div className="space-y-3">
        <div className="rounded-xl border border-[#27272A] bg-[#18181B] px-3 py-2 text-sm text-[#D4D4D8]">Tableau Server</div>
        <div className="flex items-center justify-center text-[#71717A]">↓</div>
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">Expiration Check</div>
        <div className="flex items-center justify-center text-[#71717A]">↓</div>
        <div className="rounded-xl border border-[#27272A] bg-[#18181B] px-3 py-2 text-sm text-[#D4D4D8]">Python Automation</div>
        <div className="flex items-center justify-center text-[#71717A]">↓</div>
        <div className="rounded-xl border border-[#27272A] bg-[#18181B] px-3 py-2 text-sm text-[#D4D4D8]">Bitbucket Backup</div>
      </div>
    </div>
  );
}

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
          Enterprise internships and automation work that became real engineering systems, not just analysis work.
        </p>
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-[#27272A] bg-gradient-to-br from-[#18181B] via-[#151519] to-[#0F0F11] p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <PNCLogo className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#71717A] mb-1">PNC Financial Services</p>
                    <h3 className="text-xl font-semibold text-white tracking-[-0.01em]">Technology Analyst Intern</h3>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-white mb-3 tracking-[-0.02em]">Enterprise AI Change Request Automation</h4>
                  <p className="text-[#A1A1AA] leading-relaxed max-w-2xl">
                    Built an enterprise workflow that automates Change Request documentation using Jira, Bitbucket, Azure AI Foundry, and ServiceNow.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Jira', 'Bitbucket', 'Azure AI Foundry', 'ServiceNow'].map((tag) => (
                    <span key={tag} className="rounded-full border border-[#27272A] bg-[#121216] px-3 py-1 text-sm text-[#D4D4D8]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { label: '90% Faster', value: 'report prep' },
                    { label: '1+ Hour → <5 Minutes', value: 'workflow' },
                    { label: 'Azure AI Foundry', value: 'LLM system' },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-full border border-[#27272A] bg-[#121216] px-3 py-2 text-sm text-[#E4E4E7]">
                      <span className="font-medium text-white">{metric.label}</span>
                      <span className="ml-2 text-[#71717A]">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/projects/pnc-ai-cr-automation"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#A1A1AA] transition-all duration-200"
                >
                  View case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <PNCVisual />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#27272A] bg-gradient-to-br from-[#18181B] via-[#151519] to-[#0F0F11] p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <PNCLogo className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#71717A] mb-1">PNC Financial Services</p>
                    <h3 className="text-xl font-semibold text-white tracking-[-0.01em]">Technology Analyst Intern</h3>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-white mb-3 tracking-[-0.02em]">Autonomous Tableau Dashboard Archival Pipeline</h4>
                  <p className="text-[#A1A1AA] leading-relaxed max-w-2xl">
                    Built an autonomous data engineering pipeline that archives Tableau dashboards to Bitbucket before expiration and preserves version-controlled backups.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Tableau', 'Bitbucket', 'Python', 'Automation'].map((tag) => (
                    <span key={tag} className="rounded-full border border-[#27272A] bg-[#121216] px-3 py-1 text-sm text-[#D4D4D8]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { label: '90% Faster', value: 'archival' },
                    { label: '20 Minutes → 2 Minutes', value: 'backup flow' },
                    { label: 'Version-Controlled', value: 'retention' },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-full border border-[#27272A] bg-[#121216] px-3 py-2 text-sm text-[#E4E4E7]">
                      <span className="font-medium text-white">{metric.label}</span>
                      <span className="ml-2 text-[#71717A]">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/projects/pnc-tableau-archival"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#A1A1AA] transition-all duration-200"
                >
                  View case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <TableauVisual />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#27272A] bg-gradient-to-br from-[#18181B] via-[#151519] to-[#0F0F11] p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <SherwinWilliamsLogo className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#71717A] mb-1">Sherwin-Williams</p>
                    <h3 className="text-xl font-semibold text-white tracking-[-0.01em]">AI Governance Intern</h3>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-white mb-3 tracking-[-0.02em]">GenAI Cost Forecasting Platform</h4>
                  <p className="text-[#A1A1AA] leading-relaxed max-w-2xl">
                    Forecasted AI implementation costs and automated enterprise AI governance workflows for large-scale adoption planning.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Copilot Studio', 'Power BI', 'Azure', 'Cost Modeling'].map((tag) => (
                    <span key={tag} className="rounded-full border border-[#27272A] bg-[#121216] px-3 py-1 text-sm text-[#D4D4D8]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { label: '50% Faster Approvals', value: 'approval cycles' },
                    { label: '64,000+ Employees', value: 'reach' },
                    { label: 'Enterprise Deployment', value: 'adopted' },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-full border border-[#27272A] bg-[#121216] px-3 py-2 text-sm text-[#E4E4E7]">
                      <span className="font-medium text-white">{metric.label}</span>
                      <span className="ml-2 text-[#71717A]">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/projects/sherwin-williams"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#A1A1AA] transition-all duration-200"
                >
                  View case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <SherwinVisual />
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
