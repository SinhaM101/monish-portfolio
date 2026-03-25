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
    <section id="photography" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Camera className="h-5 w-5 text-zinc-400 animate-pulse" />
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                Lenses
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              I take photos sometimes.
            </h2>
          </div>
          <a
            href="https://monish9sinha.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            View Full Portfolio
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {collections.map((collection, index) => (
            <a
              key={collection.title}
              href={collection.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden hover:ring-2 hover:ring-white/50 hover:ring-offset-2 hover:ring-offset-zinc-50 dark:hover:ring-offset-zinc-900 transition-all duration-300 hover:scale-105 hover:z-10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} animate-gradient`} />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <p className="text-white font-medium text-sm truncate drop-shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {collection.title}
                </p>
                <p className="text-white/80 text-xs drop-shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {collection.year}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            20+ photo collections from travels across Europe and the US
          </p>
        </div>
      </div>
    </section>
  );
}
