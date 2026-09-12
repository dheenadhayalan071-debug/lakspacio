import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 pt-20 pb-16 flex flex-col items-center text-center">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 text-brand-yellow text-xs font-bold uppercase tracking-widest">
        The Intelligence Layer for Physical Space
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
        Find your space. <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-red">
          Play your game.
        </span>
      </h1>
      
      <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
        The intelligent marketplace connecting athletes with underutilized sports facilities across Madurai. 
      </p>

      {/* Search Engine Interface */}
      <div className="w-full max-w-3xl bg-gray-900 p-2 rounded-2xl border border-gray-800 flex flex-col md:flex-row gap-2 shadow-2xl">
        <input 
          type="text" 
          placeholder="What sport?" 
          className="w-full bg-transparent p-4 outline-none text-white placeholder-gray-500 rounded-xl hover:bg-gray-800 focus:bg-gray-800 transition-colors"
        />
        <input 
          type="text" 
          placeholder="Location (e.g., Anna Nagar)" 
          className="w-full bg-transparent p-4 outline-none text-white placeholder-gray-500 rounded-xl hover:bg-gray-800 focus:bg-gray-800 transition-colors"
        />
        <Link href="/search" className="bg-brand-yellow text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors w-full md:w-auto shrink-0 flex items-center justify-center">
          Search
        </Link>
      </div>
    </main>
  );
}
