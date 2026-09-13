"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AthleteRegistration() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ fullName: "", email: "", sport: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear old errors
    
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "athlete", ...formData }),
      });
      
                  if (res.ok) {
        const data = await res.json();
        localStorage.setItem("lakspacio_auth", "registered");
        localStorage.setItem("lakspacio_userId", data.user.id);
        localStorage.setItem("lakspacio_role", "ATHLETE");
        
        // 🚨 FIXED: Hard reload forces the Navigation tabs to update!
        window.location.href = "/profile"; 
      } else {
              
        const data = await res.json();
        setError(data.error || "Failed to create profile.");
      }
    } catch (err) {
      setError("Network error. Cannot reach backend API.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md bg-brand-surface/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl z-10 relative">
        <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mb-6 border border-brand-blue/30">
          <span className="text-2xl">🏃</span>
        </div>
        
        <h2 className="text-2xl font-black text-white mb-2">Athlete Details</h2>
        <p className="text-sm text-slate-400 mb-8">Set up your profile to start booking spaces.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            required type="text" placeholder="Full Name" 
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-blue transition-all text-sm"
          />
          <input 
            required type="email" placeholder="Email Address" 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-blue transition-all text-sm"
          />
          <input 
            type="text" placeholder="Primary Sport (e.g., Basketball)" 
            onChange={(e) => setFormData({...formData, sport: e.target.value})}
            className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-xl border border-white/5 hover:bg-white/10 focus:border-brand-blue transition-all text-sm"
          />
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-xl mt-2">
              <p className="text-red-400 text-xs text-center font-bold">{error}</p>
            </div>
          )}
          
          <button disabled={loading} type="submit" className="mt-4 bg-brand-blue text-white font-bold py-4 rounded-xl hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all text-center text-sm disabled:opacity-50 flex items-center justify-center gap-2">
            {loading ? "Processing..." : "Create Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
