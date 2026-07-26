import Link from "next/link";
import { ArrowUpRight, FileText, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  caseStudyHref?: string;
}

const projects: Project[] = [
  {
    id: "decypher",
    title: "DeCypher",
    description:
      "Browser extension concept that translates smart contract calldata into human-readable explanations with real-time risk classification and unlimited approval detection.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Web3"],
    github: "https://github.com/SinhaM101/decipher-web",
    demo: "https://decipher-app.vercel.app/",
    caseStudyHref: "/projects/decypher",
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
    github: "https://costoflivingireland.onrender.com/",
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

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl: string;
}

function ProjectCard({ title, description, tags, githubUrl, liveUrl, caseStudyUrl }: ProjectCardProps) {
  const primaryStyle = "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-white text-[#0B0B0C] hover:bg-[#E5E5E5] transition-all duration-200";
  const secondaryStyle = "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-[#27272A] text-white hover:bg-[#18181B] transition-all duration-200";
  const tertiaryStyle = "inline-flex items-center gap-1 text-sm text-[#71717A] hover:text-white transition-all duration-200";
  
  return (
    <div className="group flex flex-col h-full p-4 bg-[#18181B] rounded-2xl border border-[#27272A] hover:border-[#3F3F46] transition-all duration-200 min-h-[200px]">
      <h3 className="text-lg font-semibold text-white mb-2 tracking-[-0.01em]">
        {title}
      </h3>
      <p className="text-[#A1A1AA] text-sm mb-3 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium bg-[#27272A] text-[#A1A1AA] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-nowrap items-center justify-between gap-3 pt-2 border-t border-[#27272A]">
        {/* Left side: Primary + GitHub */}
        <div className="flex items-center gap-2">
          {/* Primary button: Live Demo if available, else Case Study */}
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${primaryStyle} px-3 py-2 text-xs`}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          ) : (
            <Link href={caseStudyUrl} className={`${primaryStyle} px-3 py-2 text-xs`}>
              <FileText className="h-4 w-4" />
              Case Study
            </Link>
          )}

          {/* GitHub - Secondary button (only if exists) */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${secondaryStyle} px-3 py-2 text-xs`}
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>

        {/* Right side: Case Study link (tertiary) */}
        <Link href={caseStudyUrl} className={`${tertiaryStyle} text-xs`}>
          Case Study
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.02em]">
          Projects
        </h2>
        <p className="text-[#A1A1AA] mb-12 max-w-2xl">
          Technical case studies in data science, AI systems, and data engineering.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              githubUrl={project.github}
              liveUrl={project.demo}
              caseStudyUrl={project.caseStudyHref ?? `/projects/${project.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
