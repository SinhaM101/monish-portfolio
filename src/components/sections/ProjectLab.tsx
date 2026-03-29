"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Database, BarChart3, Cpu, Sparkles } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  icon: React.ReactNode;
  color: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "voting-patterns",
    title: "U.S. Voting Patterns",
    subtitle: "Big Data Analysis",
    description:
      "Analyzing correlations between economic conditions and voting behavior using distributed computing.",
    technologies: ["Python", "Spark", "MapReduce", "Pandas"],
    highlights: [
      "47,000+ county-year observations",
      "500+ socioeconomic variables",
      "Distributed Spark pipeline",
    ],
    icon: <Database className="h-6 w-6" />,
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/SinhaM101/voting-patterns-analysis",
  },
  {
    id: "ireland-dashboard",
    title: "Ireland Cost of Living",
    subtitle: "Interactive Dashboard",
    description:
      "Visualizing inflation trends and demographic cost-of-living burdens across Ireland.",
    technologies: ["Python", "Streamlit", "Altair", "Pandas"],
    highlights: [
      "Interactive visualizations",
      "Consumer price index analysis",
      "Economic period comparisons",
    ],
    icon: <BarChart3 className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/SinhaM101/ireland-cost-of-living",
    demo: "https://costoflivingireland.onrender.com",
  },
  {
    id: "media-vector",
    title: "Media-to-Vector",
    subtitle: "ML Pipeline",
    description:
      "Converting text, images, audio, and video into unified vector embeddings for ML applications.",
    technologies: ["Python", "Docker", "Singularity", "Hadoop"],
    highlights: [
      "Multi-modal embeddings",
      "Containerized deployment",
      "Scalable processing",
    ],
    icon: <Cpu className="h-6 w-6" />,
    color: "from-purple-500 to-pink-600",
    github: "https://github.com/SinhaM101/media-to-vector",
  },
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Header */}
      <div
        className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden animate-gradient`}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-4 left-4 text-white/90 group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </div>
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white animate-pulse" />
          <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-white animate-pulse animation-delay-2000" />
          <div className="absolute top-6 right-14 w-1 h-1 rounded-full bg-white animate-pulse animation-delay-4000" />
          <div className="absolute bottom-8 right-6 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1">
              {project.subtitle}
            </p>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <Link
            href={`/projects/${project.id}`}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights - shown on hover */}
        <div
          className={`space-y-1 overflow-hidden transition-all duration-300 ${
            isHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {project.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500"
            >
              <Sparkles className="h-3 w-3 text-blue-500" />
              {highlight}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto"
          >
            Case Study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProjectLab() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Project Lab
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Data Science & ML Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Exploring data through distributed computing, interactive
            visualizations, and machine learning pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
