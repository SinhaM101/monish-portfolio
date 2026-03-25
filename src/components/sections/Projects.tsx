import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  caseStudyHref?: string;
}

const projects: Project[] = [
  {
    id: "ai-governance-cost-monitoring",
    title: "AI Governance & Cost Monitoring System",
    description:
      "Enterprise AI governance tooling to monitor Copilot usage and attribute AI-related cloud costs (mocked visuals; no real company data).",
    technologies: ["Power BI", "Azure", "Data Analytics"],
    caseStudyHref: "/projects/sherwin-williams",
  },
  {
    id: "voting-patterns",
    title: "U.S. Voting Patterns Analysis",
    description:
      "Big data analysis combining American Community Survey socioeconomic data with U.S. presidential election results to analyze correlations between economic conditions and voting behavior.",
    technologies: ["Python", "Spark", "MapReduce"],
    github: "https://github.com/monishsinha/voting-patterns-analysis",
    caseStudyHref: "/projects/voting-patterns",
  },
  {
    id: "ireland-dashboard",
    title: "Ireland Cost of Living Dashboard",
    description:
      "Interactive dashboard analyzing inflation trends and demographic cost-of-living burdens in Ireland.",
    technologies: ["Python", "Streamlit", "Altair", "Pandas"],
    github: "https://sinham101-ireland-cost-of-living-vis-app-hkhoa0.streamlit.app/",
    caseStudyHref: "/projects/ireland-dashboard",
  },
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        )}

        {project.caseStudyHref && (
          <Link
            href={project.caseStudyHref}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Case Study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl">
          Technical case studies in data science, AI systems, and data engineering.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
