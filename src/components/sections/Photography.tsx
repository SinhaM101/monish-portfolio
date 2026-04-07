import { ArrowUpRight, Camera } from "lucide-react";

interface PhotoCollection {
  title: string;
  year: string;
  href: string;
  gradient: string;
}

const collections: PhotoCollection[] = [
  { title: "Mudéjar Light", year: "2025", href: "https://monish9sinha.myportfolio.com/mudejar-light", gradient: "from-amber-400 to-orange-600" },
  { title: "Cycles", year: "2024", href: "https://monish9sinha.myportfolio.com/cycles", gradient: "from-slate-400 to-slate-700" },
  { title: "Bath", year: "2024", href: "https://monish9sinha.myportfolio.com/bath", gradient: "from-stone-300 to-stone-500" },
  { title: "Rye", year: "2024", href: "https://monish9sinha.myportfolio.com/rye", gradient: "from-emerald-400 to-teal-600" },
  { title: "Albian", year: "2024", href: "https://monish9sinha.myportfolio.com/albian", gradient: "from-sky-400 to-blue-600" },
  { title: "Liberty", year: "2024", href: "https://monish9sinha.myportfolio.com/liberty", gradient: "from-rose-400 to-pink-600" },
];

export function Photography() {
  return (
    <section id="photography" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Camera className="h-5 w-5 text-[#71717A]" />
              <p className="text-sm font-medium text-[#71717A] uppercase tracking-wider">
                Photography
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.02em]">
              I take photos sometimes.
            </h2>
          </div>
          <a
            href="https://monish9sinha.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#71717A] hover:text-white transition-all duration-200"
          >
            View Full Portfolio
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {collections.map((collection) => (
            <a
              key={collection.title}
              href={collection.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-[#27272A] hover:border-[#3F3F46] transition-all duration-300"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-80`} />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <p className="text-white font-medium text-sm truncate drop-shadow-lg">
                  {collection.title}
                </p>
                <p className="text-white/80 text-xs drop-shadow-lg">
                  {collection.year}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#71717A]">
            20+ photo collections from travels across Europe and the US
          </p>
        </div>
      </div>
    </section>
  );
}
