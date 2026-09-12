import Link from "next/link";

export default function FacilityRegistration() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-5 relative overflow-hidden">
      
      {/* Neon Green Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-neon/15 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md bg-brand-surface/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl z-10 relative">
        <div className="w-12 h-12 rounded-full bg-brand-neon/20 flex items-center justify-center mb-6 border border-brand-neon/30">
          <span className="text-2xl">🏟️</span>
        </div>
        
        <h2 className="text-2xl font-black text-white mb-2">Facility Details</h2>
        <p className="text-sm text-slate-400 mb-8">List your property to track unmet demand.</p>
        
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Owner Full Name" 
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-neon transition-all text-sm"
          />
          <input 
            type="text" 
            placeholder="Facility or Property Name" 
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-neon transition-all text-sm"
          />
          <input 
            type="text" 
            defaultValue="Madurai"
            placeholder="City" 
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-neon transition-all text-sm"
          />
          
          <Link href="/facility" className="mt-4 bg-brand-neon text-black font-bold py-4 rounded-xl hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all text-center text-sm">
            Launch Facility Hub
          </Link>
        </form>
      </div>
    </div>
  );
}

