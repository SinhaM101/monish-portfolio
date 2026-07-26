import { ArrowUpRight, Camera } from "lucide-react";

export function Photography() {
  return (
    <section id="photography" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="h-5 w-5 text-[#71717A]" />
              <p className="text-sm font-medium text-[#71717A] uppercase tracking-wider">
                Photography
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.02em]">
              A visual record of travel, texture, and quiet moments.
            </h2>
            <p className="text-lg text-[#A1A1AA] leading-relaxed">
              This section is a small archive of the places, light, and moods that shape how I see the world outside of work.
            </p>
          </div>
          <a
            href="https://monishseye.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#71717A] hover:text-white transition-all duration-200"
          >
            View Full Portfolio
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="rounded-3xl border border-[#27272A] bg-gradient-to-br from-[#18181B] via-[#121214] to-[#18181B] p-8 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#71717A] mb-3">
              Personal archive
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-[-0.02em] mb-4">
              A collection of travel, landscape, and candid moments.
            </h3>
            <p className="text-base leading-relaxed text-[#A1A1AA] mb-6">
              This space is a simple way to share the visual side of my work and interests, with the full photography portfolio available at the link below.
            </p>
            <a
              href="https://monishseye.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#3F3F46] bg-white px-5 py-2.5 text-sm font-medium text-[#0B0B0C] transition-all duration-200 hover:bg-[#E5E5E5]"
            >
              Open the photography site
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-[#27272A] bg-[#18181B]/70 px-5 py-4">
          <p className="text-sm text-[#71717A]">
            22 photo collections from travels across Europe and the US.
          </p>
          <p className="text-sm text-[#71717A]">
            Built as a personal archive of color, atmosphere, and perspective.
          </p>
        </div>
      </div>
    </section>
  );
}
