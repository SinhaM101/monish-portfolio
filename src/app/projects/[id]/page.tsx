import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Database, BarChart3, Cpu, Shield, ExternalLink, Sparkles, Workflow, Bot, Server, GitBranch, CheckCircle2 } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  problem: string;
  approach: string;
  results: string[];
  icon: React.ReactNode;
  color: string;
  github?: string;
  demo?: string;
}

const projects: Record<string, Project> = {
  "pnc-ai-cr-automation": {
    id: "pnc-ai-cr-automation",
    title: "Enterprise AI Change Request Automation",
    subtitle: "AI Engineering",
    description:
      "Built a production workflow that automates enterprise Change Request documentation using Jira, Bitbucket, Azure AI Foundry, and ServiceNow, with the report experience designed in Figma for a more usable front end.",
    longDescription:
      "This project focused on removing manual effort from enterprise Change Request preparation. Engineers previously had to inspect Jira and Bitbucket data, understand project context, and manually write Run Plans, Test Plans, and Validation Plans into ServiceNow. I built an automated workflow that brought those steps together into a single production-ready process, and the front end of the CR report experience was designed in Figma to make the output clearer and easier to review.",
    technologies: ["Python", "Azure AI Foundry", "Jira REST API", "Bitbucket API", "ServiceNow API", "SQL", "Figma"],
    highlights: [
      "90% reduction in CR prep time",
      "1+ hour to under 5 minutes",
      "Automated enterprise workflow",
      "Production deployment",
    ],
    problem:
      "Preparing Change Requests required engineers to manually inspect Jira tickets, review Bitbucket repositories, infer project context, and write structured plans before copying everything into ServiceNow. The process was repetitive, slow, and prone to inconsistency.",
    approach:
      "I built a backend workflow that pulled structured inputs from Jira and Bitbucket, combined them into a unified payload, and sent that context to Azure AI Foundry to generate Run Plans, Test Plans, and Validation Plans. I also shaped the front end of the CR report in Figma so the generated content could be reviewed clearly inside the enterprise reporting experience.",
    results: [
      "Reduced Change Request preparation time by over 90%",
      "Eliminated manual copy/paste between systems",
      "Created a repeatable AI-assisted enterprise workflow",
      "Delivered a production deployment for operational use",
    ],
    icon: <Sparkles className="h-8 w-8" />,
    color: "from-cyan-500 to-blue-600",
  },
  "pnc-tableau-archival": {
    id: "pnc-tableau-archival",
    title: "Autonomous Tableau Dashboard Archival Pipeline",
    subtitle: "Data Engineering",
    description:
      "Built an autonomous data engineering pipeline that archives Tableau dashboards to Bitbucket before expiration and preserves version-controlled backups.",
    longDescription:
      "This project focused on reliability, scheduling, and backup strategy. I created an automation pipeline that detected expiring Tableau assets, exported them, and stored them in Bitbucket as version-controlled backups before they disappeared from the active environment.",
    technologies: ["Python", "Tableau", "Bitbucket", "Automation", "SQL"],
    highlights: [
      "Reduced archival time from 20 minutes to 2 minutes",
      "Version-controlled backup workflow",
      "Scheduled automation",
      "Improved archive reliability",
    ],
    problem:
      "Tableau dashboards were approaching expiration and required manual export and archival work. That process took too long, was easy to miss, and left little room for auditability or rollback.",
    approach:
      "I designed an automated pipeline that checked expiration state, exported required dashboard assets, and pushed them into Bitbucket with a repeatable structure. The flow emphasized reliability, scheduling, and preserving a durable backup trail rather than AI-generated content.",
    results: [
      "Reduced dashboard archival time by 90%",
      "Created a reliable version-controlled backup process",
      "Improved operational consistency for dashboard retention",
      "Enabled scalable archival for enterprise assets",
    ],
    icon: <Workflow className="h-8 w-8" />,
    color: "from-emerald-500 to-teal-600",
  },
  "voting-patterns": {
    id: "voting-patterns",
    title: "U.S. Voting Patterns Analysis",
    subtitle: "Big Data Analysis",
    description:
      "Analyzing correlations between economic conditions and voting behavior using distributed computing.",
    longDescription:
      "A comprehensive big data analysis project that combines American Community Survey socioeconomic data with U.S. presidential election results to uncover correlations between economic conditions and voting behavior at the county level.",
    technologies: ["Python", "Apache Spark", "MapReduce", "Pandas", "NumPy", "Matplotlib"],
    highlights: [
      "47,000+ county-year observations",
      "500+ socioeconomic variables",
      "Distributed Spark pipeline",
      "Performance benchmarking",
    ],
    problem:
      "Understanding the relationship between socioeconomic factors and voting patterns requires processing massive datasets that exceed single-machine capabilities. Traditional analysis methods struggle with the scale and complexity of combining census data with election results across thousands of counties over multiple election cycles.",
    approach:
      "Built a distributed data pipeline using Apache Spark to process and join large-scale datasets. Implemented MapReduce patterns for efficient aggregation of county-level statistics. Created a modular ETL pipeline that handles data cleaning, feature engineering, and statistical analysis at scale.",
    results: [
      "Processed 47,000+ county-year observations efficiently using Spark",
      "Analyzed correlations across 500+ socioeconomic variables",
      "Achieved 3x performance improvement over single-node processing",
      "Identified key economic indicators correlated with voting shifts",
    ],
    icon: <Database className="h-8 w-8" />,
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/SinhaM101/voting-patterns-analysis",
  },
  "ireland-dashboard": {
    id: "ireland-dashboard",
    title: "Ireland Cost of Living Dashboard",
    subtitle: "Interactive Dashboard",
    description:
      "Visualizing inflation trends and demographic cost-of-living burdens across Ireland.",
    longDescription:
      "An interactive data visualization dashboard that analyzes inflation trends and demographic cost-of-living burdens in Ireland, providing insights into how different economic periods have affected various population segments.",
    technologies: ["Python", "Streamlit", "Altair", "Pandas", "NumPy"],
    highlights: [
      "Interactive visualizations",
      "Consumer price index analysis",
      "Linked charts with dynamic filtering",
      "Economic period comparisons",
    ],
    problem:
      "Ireland experienced significant economic shifts from pre-COVID stability through the pandemic and into an inflation surge. Understanding how these periods affected different demographics requires interactive tools that allow exploration of complex, multi-dimensional data.",
    approach:
      "Developed an interactive Streamlit dashboard with linked Altair visualizations. Implemented dynamic filtering to allow users to explore data by time period, demographic group, and expense category. Used consumer price index data to calculate real cost-of-living impacts.",
    results: [
      "Created interactive dashboard with real-time filtering",
      "Visualized CPI trends across multiple economic periods",
      "Enabled comparison of pre-COVID, COVID, and inflation surge impacts",
      "Deployed publicly accessible dashboard on Streamlit Cloud",
    ],
    icon: <BarChart3 className="h-8 w-8" />,
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/SinhaM101/ireland-cost-of-living",
    demo: "https://costoflivingireland.onrender.com",
  },
  "media-vector": {
    id: "media-vector",
    title: "Media-to-Vector Conversion",
    subtitle: "ML Pipeline",
    description:
      "Converting text, images, audio, and video into unified vector embeddings for ML applications.",
    longDescription:
      "A scalable machine learning pipeline that converts diverse media types—text, images, audio, and video—into unified vector embeddings, enabling downstream ML applications like similarity search, clustering, and multi-modal retrieval.",
    technologies: ["Python", "Docker", "Singularity", "Hadoop", "PyTorch", "Transformers"],
    highlights: [
      "Multi-modal embedding generation",
      "Containerized deployment",
      "Scalable Hadoop processing",
      "Unified vector representation",
    ],
    problem:
      "Machine learning applications increasingly require processing multiple media types together. Converting diverse formats into a unified vector space while maintaining scalability and reproducibility presents significant engineering challenges.",
    approach:
      "Built a containerized pipeline using Docker and Singularity for reproducible deployments. Leveraged pre-trained transformer models for each modality. Implemented Hadoop-based distributed processing for handling large media collections. Created a unified embedding schema for cross-modal applications.",
    results: [
      "Unified embedding pipeline for 4 media types",
      "Containerized for reproducible deployment",
      "Scaled to process large media collections via Hadoop",
      "Enabled multi-modal similarity search applications",
    ],
    icon: <Cpu className="h-8 w-8" />,
    color: "from-purple-500 to-pink-600",
    github: "https://github.com/SinhaM101/media-to-vector",
  },
  "decypher": {
    id: "decypher",
    title: "DeCypher",
    subtitle: "Web3 Prototype",
    description:
      "Translating smart contract transactions into human-readable explanations with real-time risk detection.",
    longDescription:
      "A frontend-focused Web3 prototype that demonstrates how smart contract transactions can be translated into human-readable explanations in real time. Built with a modern web stack to create a clean, intuitive interface for blockchain interaction.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Web3", "EVM"],
    highlights: [
      "Real-time transaction decoding",
      "Multi-chain EVM support",
      "Risk classification system",
      "Browser-based processing",
    ],
    problem:
      "Smart contract transactions are opaque to everyday users, displaying raw calldata that is difficult to interpret. High-risk behaviors like unlimited token approvals can go unnoticed, exposing users to security vulnerabilities without their awareness.",
    approach:
      "Implemented lightweight decoding logic for common ERC-20 functions (transfer, approve) directly in the browser. Built detection for high-risk behaviors by parsing transaction parameters and checking for maximum uint256 values. Designed support for multiple EVM-compatible networks (Ethereum, Polygon, Arbitrum) with reusable decoding logic.",
    results: [
      "Created interactive 'Try DeCypher' feature for real-time decoding demonstration",
      "Implemented plain-English explanations with color-coded risk classification",
      "Built multi-chain support leveraging shared EVM transaction structure",
      "Delivered production-quality UI focused on security awareness and usability",
    ],
    icon: <Shield className="h-8 w-8" />,
    color: "from-amber-500 to-orange-600",
    demo: "https://decipher-app.vercel.app/",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    notFound();
  }

  const isFlagshipCaseStudy =
    project.id === "pnc-ai-cr-automation" || project.id === "pnc-tableau-archival";

  const workflowSteps =
    project.id === "pnc-ai-cr-automation"
      ? [
          {
            title: "Capture the request context",
            description:
              "Pull Jira issue context, repository changes, and implementation details into a single workflow.",
          },
          {
            title: "Generate structured change plans",
            description:
              "Use Azure AI Foundry to draft run plans, test plans, and validation plans automatically.",
          },
          {
            title: "Publish to ServiceNow",
            description:
              "Deliver the completed Change Request content back into the enterprise process with minimal manual intervention.",
          },
        ]
      : [
          {
            title: "Detect expiring assets",
            description:
              "Scan Tableau content for upcoming expiration windows and identify dashboards that need backup.",
          },
          {
            title: "Export and preserve",
            description:
              "Export the dashboard assets and store them in Bitbucket with versioned archival structure.",
          },
          {
            title: "Keep operations reliable",
            description:
              "Schedule and audit the workflow so backups remain consistent and easy to recover.",
          },
        ];

  const caseStudyStats =
    project.id === "pnc-ai-cr-automation"
      ? [
          { value: "90%", label: "Faster CR prep" },
          { value: "<5 min", label: "Avg turnaround" },
          { value: "3", label: "Plans generated" },
          { value: "1", label: "Production workflow" },
        ]
      : [
          { value: "90%", label: "Faster archival" },
          { value: "2 min", label: "Per export" },
          { value: "100%", label: "Versioned backup" },
          { value: "24/7", label: "Scheduled reliability" },
        ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {isFlagshipCaseStudy ? (
          <>
            <div className="mb-12">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} text-white mb-6`}
              >
                {project.icon}
              </div>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">
                {project.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                {project.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {caseStudyStats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 text-center"
                >
                  <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-amber-500" />
                The Story
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-6">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Why it mattered</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.problem}</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-6">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">How I approached it</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.approach}</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <Workflow className="h-6 w-6 text-cyan-500" />
                How the workflow runs
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6"
                  >
                    <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-sm font-semibold text-white dark:text-zinc-900">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 text-white">
              <h2 className="text-2xl font-bold mb-6">Key outcomes</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-xl bg-white/10 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm leading-relaxed text-zinc-100">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Header */}
            <div className="mb-12">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} text-white mb-6`}
              >
                {project.icon}
              </div>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">
                {project.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-nowrap items-center gap-3 mb-12">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              ) : null}

              {project.demo && project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-600 text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                The Problem
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Approach */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Approach
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Results
              </h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-sm font-medium">
                      ✓
                    </span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Highlights */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                Key Highlights
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
