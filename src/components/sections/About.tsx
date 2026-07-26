export function About() {
  return (
    <section id="about" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.03em]">
          About
        </h2>
        <p className="text-lg sm:text-xl text-[#A1A1AA] mb-12 max-w-3xl leading-relaxed">
          Data Science student at Case Western Reserve University with a minor in Finance, focused on building AI-powered software and data infrastructure that solve real business problems.
        </p>

        {/* Experience & Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Experience Card */}
          <div className="p-6 bg-[#18181B] rounded-2xl border border-[#27272A]">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-[-0.01em]">
              Experience
            </h3>
            <ul className="space-y-3 text-[#A1A1AA] leading-relaxed">
              <li>Incoming Technology Analyst Intern – PNC Financial Services</li>
              <li>Data Science Intern – Sherwin-Williams</li>
              <li>AI governance, cloud cost analytics, predictive modeling</li>
            </ul>
          </div>

          {/* Education Card */}
          <div className="p-6 bg-[#18181B] rounded-2xl border border-[#27272A]">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-[-0.01em]">
              Education
            </h3>
            <ul className="space-y-3 text-[#A1A1AA] leading-relaxed">
              <li>B.S. Data Science</li>
              <li>Minor in Fintech</li>
              <li>Case Western Reserve University</li>
              <li>Expected May 2027</li>
            </ul>
          </div>
        </div>

        {/* Description Paragraphs */}
        <div className="max-w-4xl space-y-6">
          <p className="text-base sm:text-lg text-[#71717A] leading-[1.7]">
            I’m a Data Science student at Case Western Reserve University with a minor in Finance, passionate about building AI-powered software and data infrastructure that solve real business problems.
          </p>
          <p className="text-base sm:text-lg text-[#71717A] leading-[1.7]">
            Through internships at PNC Financial Services and Sherwin-Williams, I’ve developed enterprise applications, automated engineering workflows, and built data pipelines using Python, SQL, Azure AI Foundry, Power BI, and Apache Spark. My work has focused on applying AI to improve operational efficiency, from automating Change Request documentation to developing analytics that support AI governance and cloud cost management.
          </p>
          <p className="text-base sm:text-lg text-[#71717A] leading-[1.7]">
            I’m particularly interested in AI engineering, data engineering, and full-stack software development, and I enjoy designing systems that transform complex data into scalable, production-ready solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
