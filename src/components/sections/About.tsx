export function About() {
  return (
    <section id="about" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.03em]">
          About
        </h2>
        <p className="text-lg sm:text-xl text-[#A1A1AA] mb-12 max-w-3xl leading-relaxed">
          Backend and platform engineer at PNC, working part-time while finishing my Data Science degree (Math minor) at Case Western Reserve University, graduating May 2027.
        </p>

        {/* Experience & Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Experience Card */}
          <div className="p-6 bg-[#18181B] rounded-2xl border border-[#27272A]">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-[-0.01em]">
              Experience
            </h3>
            <ul className="space-y-3 text-[#A1A1AA] leading-relaxed">
              <li>Software Engineer (part-time) – PNC Financial Services</li>
              <li>AI Governance Intern – Sherwin-Williams</li>
              <li>AI workflows, data pipelines, enterprise automation</li>
            </ul>
          </div>

          {/* Education Card */}
          <div className="p-6 bg-[#18181B] rounded-2xl border border-[#27272A]">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-[-0.01em]">
              Education
            </h3>
            <ul className="space-y-3 text-[#A1A1AA] leading-relaxed">
              <li>B.S. Data Science</li>
              <li>Math minor</li>
              <li>Case Western Reserve University – May 2027</li>
              <li>GPA: 3.5/4.0</li>
              <li>University College Dublin study abroad</li>
            </ul>
          </div>
        </div>

        {/* Description Paragraphs */}
        <div className="max-w-4xl space-y-6">
          <p className="text-base sm:text-lg text-[#71717A] leading-[1.7]">
            I’m a backend and platform engineer at PNC, working part-time while I finish my Data Science degree at Case Western Reserve University (Math minor, May 2027). I’m passionate about building AI-powered software, data pipelines, and enterprise systems that drive measurable business value.
          </p>
          <p className="text-base sm:text-lg text-[#71717A] leading-[1.7]">
            At PNC, I’ve built Java 21 and AI-enabled systems that streamline migration, automation, and archival workflows. A data migration I built with AI avoided $2M in vendor costs, and I also built a FastMCP server that connects all databases to AI agents. A Jira/Bitbucket/AI-powered reporting pipeline cut preparation time by over 90%. At Sherwin-Williams, I worked on AI governance and cost modeling to improve enterprise adoption planning and responsible AI practices.
          </p>
          <p className="text-base sm:text-lg text-[#71717A] leading-[1.7]">
            I’m particularly interested in AI engineering, data engineering, and full-stack software development, and I enjoy creating systems that turn complex data into scalable, production-ready solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
