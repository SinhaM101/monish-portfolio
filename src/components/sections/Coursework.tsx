const courses = [
  "Algorithms",
  "Data Structures", 
  "Data Science Systems",
  "Database Systems",
  "Linear Algebra",
  "Probability & Statistics",
  "Data Analysis & Linear Models",
  "Differential Equations",
];

export function Coursework() {
  return (
    <section id="coursework" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-[-0.02em]">
          Relevant Coursework
        </h2>
        <div className="flex flex-wrap gap-3">
          {courses.map((course) => (
            <span
              key={course}
              className="px-4 py-2 bg-[#18181B] border border-[#27272A] text-[#A1A1AA] text-sm rounded-full hover:border-[#3F3F46] transition-all duration-200"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
