import React from "react";
import {
  siPython,
  siApachespark,
  siPandas,
  siNumpy,
  siLinux,
  siGit,
  siGithub,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siR,
  siScikitlearn,
} from "simple-icons/icons";
import { BarChart3, Cloud, FileSpreadsheet, Database, Bot, Palette } from "lucide-react";

interface SimpleIcon {
  path: string;
  hex: string;
}

function SiIcon({ icon, className = "w-4 h-4" }: { icon: SimpleIcon; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}

const toolkitCategories = [
  {
    category: "Programming & Data",
    skills: [
      { name: "Java", icon: null, iconType: null, description: null },
      { name: "Python", icon: siPython, iconType: "si" as const, description: "Automation, ML, and backend workflows" },
      { name: "SQL", icon: Database, iconType: "lucide" as const, description: "Data modeling and analytics queries" },
      { name: "TypeScript", icon: siTypescript, iconType: "si" as const, description: null },
      { name: "JavaScript", icon: null, iconType: null, description: null },
    ],
  },
  {
    category: "Frameworks & Web",
    skills: [
      { name: "Spring Boot", icon: null, iconType: null, description: null },
      { name: "Next.js", icon: siNextdotjs, iconType: "si" as const, description: null },
      { name: "Node.js", icon: null, iconType: null, description: null },
      { name: "Tailwind CSS", icon: siTailwindcss, iconType: "si" as const, description: null },
    ],
  },
  {
    category: "AI & Data",
    skills: [
      { name: "Azure AI Foundry", icon: null, iconType: null, description: "LLM workflow automation" },
      { name: "Microsoft Copilot Studio", icon: Bot, iconType: "lucide" as const, description: null },
      { name: "Apache Spark", icon: siApachespark, iconType: "si" as const, description: "Distributed data pipelines" },
      { name: "Apache Iceberg", icon: null, iconType: null, description: null },
      { name: "LLM Applications", icon: null, iconType: null, description: null },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: siGit, iconType: "si" as const, description: null },
      { name: "GitHub", icon: siGithub, iconType: "si" as const, description: null },
      { name: "Bitbucket", icon: null, iconType: null, description: null },
      { name: "Jira", icon: null, iconType: null, description: null },
      { name: "Maven", icon: null, iconType: null, description: null },
      { name: "Linux", icon: siLinux, iconType: "si" as const, description: null },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "REST APIs", icon: null, iconType: null, description: null },
      { name: "Data Pipelines", icon: null, iconType: null, description: null },
      { name: "AI Governance", icon: null, iconType: null, description: null },
      { name: "Responsible AI", icon: null, iconType: null, description: null },
    ],
  },
];

export function Toolkit() {
  return (
    <section id="toolkit" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <p className="text-sm font-medium text-[#71717A] uppercase tracking-wider mb-2">
          Toolkit
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 tracking-[-0.02em]">
          What I Build With
        </h2>

        {/* Skills Grid */}
        <div className="space-y-0">
          {toolkitCategories.map((category, index) => (
            <div
              key={category.category}
              className={`py-6 ${
                index !== toolkitCategories.length - 1
                  ? "border-b border-[#27272A]"
                  : ""
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">
                {/* Category Label */}
                <div className="text-sm font-medium text-[#71717A]">
                  {category.category}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative"
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#18181B] border border-[#27272A] rounded-full text-sm font-medium text-white hover:border-[#3F3F46] transition-all duration-200">
                        {skill.icon && skill.iconType === "si" && (
                          <SiIcon icon={skill.icon as SimpleIcon} className="w-4 h-4" />
                        )}
                        {skill.icon && skill.iconType === "lucide" && (
                          (() => {
                            const LucideIcon = skill.icon as React.ComponentType<{ className?: string }>;
                            return <LucideIcon className="w-4 h-4" />;
                          })()
                        )}
                        {skill.name}
                      </span>
                      {skill.description && (
                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 px-2 py-1 bg-[#27272A] text-[#A1A1AA] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                          {skill.description}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
