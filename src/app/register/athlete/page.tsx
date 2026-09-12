import Link from "next/link";

export default function AthleteRegistration() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-5 relative overflow-hidden">
      
      {/* Blue Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md bg-brand-surface/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl z-10 relative">
        <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mb-6 border border-brand-blue/30">
          <span className="text-2xl">🏃</span>
        </div>
        
        <h2 className="text-2xl font-black text-white mb-2">Athlete Details</h2>
        <p className="text-sm text-slate-400 mb-8">Set up your profile to start booking spaces.</p>
        
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-blue transition-all text-sm"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-blue transition-all text-sm"
          />
          <input 
            type="text" 
            placeholder="Primary Sport (e.g., Basketball)" 
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-blue transition-all text-sm"
          />
          
          <Link href="/profile" className="mt-4 bg-brand-blue text-white font-bold py-4 rounded-xl hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all text-center text-sm">
            Create Profile
          </Link>
        </form>
      </div>
    </div>
  );
}
