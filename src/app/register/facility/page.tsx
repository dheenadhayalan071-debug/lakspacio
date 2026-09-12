"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FacilityRegistration() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", facilityName: "", city: "Madurai" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "facility", ...formData }),
      });
      
      if (res.ok) {
        router.push("/facility"); // Redirect to owner dashboard!
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-neon/15 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md bg-brand-surface/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl z-10 relative">
        <div className="w-12 h-12 rounded-full bg-brand-neon/20 flex items-center justify-center mb-6 border border-brand-neon/30">
          <span className="text-2xl">🏟️</span>
        </div>
        
        <h2 className="text-2xl font-black text-white mb-2">Facility Details</h2>
        <p className="text-sm text-slate-400 mb-8">List your property to track unmet demand.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            required type="text" placeholder="Owner Full Name" 
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-neon transition-all text-sm"
          />
          <input 
            required type="email" placeholder="Email Address" 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-neon transition-all text-sm"
          />
          <input 
            required type="text" placeholder="Facility or Property Name" 
            onChange={(e) => setFormData({...formData, facilityName: e.target.value})}
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-neon transition-all text-sm"
          />
          <input 
            type="text" defaultValue="Madurai" placeholder="City" 
            onChange={(e) => setFormData({...formData, city: e.target.value})}
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-neon transition-all text-sm"
          />
          
          <button disabled={loading} type="submit" className="mt-4 bg-brand-neon text-black font-bold py-4 rounded-xl hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all text-center text-sm disabled:opacity-50">
            {loading ? "Creating..." : "Launch Facility Hub"}
          </button>
        </form>
      </div>
    </div>
  );
}
