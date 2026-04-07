export function About() {
  return (
    <section id="about" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.03em]">
          About
        </h2>
        <p className="text-lg sm:text-xl text-[#A1A1AA] mb-12 max-w-3xl leading-relaxed">
          Student @ Case Western Reserve University focused on machine learning, financial analytics, and AI governance.
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
            I am a Junior at Case Western Reserve University studying Data Science with a minor in Fintech, focusing on machine learning and AI governance. I build data-driven systems using Python, Spark, SQL, and Power BI, with an emphasis on practical insights and scalable pipelines.
          </p>
          <p className="text-base sm:text-lg text-[#71717A] leading-[1.7]">
            I am based in Cleveland and Columbus and enjoy applying data science to real financial and operational problems. I am an incoming Technology Analyst Intern at PNC Financial Services and like working across the full analytics stack, from modeling to visualization.
          </p>
        </div>
      </div>
    </section>
  );
}
