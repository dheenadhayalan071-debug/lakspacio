import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 pt-24 pb-16 flex flex-col items-center text-center relative overflow-hidden">
      
      {/* Glowing Ambient Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Live System Indicator Badge */}
      <div className="relative inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-brand-neon">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
        </span>
        Intelligence Layer Active
      </div>
      
      <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
        Find your space. <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-neon">
          Play your game.
        </span>
      </h1>
      
      <p className="relative text-slate-400 text-lg mb-12 max-w-xl mx-auto">
        The intelligent marketplace connecting athletes with underutilized sports facilities across the city. 
      </p>

      {/* Smooth Bento-Style Search Engine */}
      <div className="relative w-full max-w-3xl bg-brand-surface/60 backdrop-blur-xl p-3 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-3 shadow-2xl">
        <input 
          type="text" 
          placeholder="What sport?" 
          className="w-full bg-white/5 px-6 py-4 outline-none text-white placeholder-slate-500 rounded-2xl hover:bg-white/10 focus:bg-white/10 transition-all"
        />
        <input 
          type="text" 
          placeholder="Location" 
          className="w-full bg-white/5 px-6 py-4 outline-none text-white placeholder-slate-500 rounded-2xl hover:bg-white/10 focus:bg-white/10 transition-all"
        />
        <Link href="/search" className="bg-brand-blue text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all w-full md:w-auto shrink-0 flex items-center justify-center">
          Search
        </Link>
      </div>
    </main>
  );
}
