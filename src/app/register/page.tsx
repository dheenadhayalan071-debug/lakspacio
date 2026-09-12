"use client";
import { useState } from "react";
import Link from "next/link";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-5 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl pb-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
            Join LAKSPACIO.
          </h1>
          <p className="text-slate-400 text-sm md:text-base">Select your profile to customize your intelligence dashboard.</p>
        </div>

        {/* The Bento Grid for Role Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          
          {/* Demand: Athlete / Student */}
          <button 
            onClick={() => setSelectedRole('demand')}
            className={`flex flex-col items-start p-6 rounded-3xl border text-left transition-all backdrop-blur-md ${
              selectedRole === 'demand' 
                ? 'bg-brand-blue/10 border-brand-blue shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
                : 'bg-brand-surface/50 border-white/10 hover:bg-white/5'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mb-5 border border-brand-blue/30">
              <span className="text-2xl">🏃</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Athlete / Student</h2>
            <p className="text-xs text-slate-400 leading-relaxed">Discover, compare, and book sports spaces across Madurai.</p>
          </button>

          {/* Supply: Facility / Land Owner */}
          <button 
            onClick={() => setSelectedRole('supply')}
            className={`flex flex-col items-start p-6 rounded-3xl border text-left transition-all backdrop-blur-md ${
              selectedRole === 'supply' 
                ? 'bg-brand-neon/10 border-brand-neon shadow-[0_0_30px_rgba(34,197,94,0.2)]' 
                : 'bg-brand-surface/50 border-white/10 hover:bg-white/5'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-brand-neon/20 flex items-center justify-center mb-5 border border-brand-neon/30">
              <span className="text-2xl">🏟️</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Facility Owner</h2>
            <p className="text-xs text-slate-400 leading-relaxed">List your space, track utilization, and view unmet demand.</p>
          </button>
        </div>

        {/* Dynamic Action Area */}
        <div className="flex justify-center h-16">
          {selectedRole ? (
            <Link 
              href={selectedRole === 'demand' ? '/register/athlete' : '/register/facility'}
              className={`px-8 py-3.5 rounded-full font-bold text-brand-black transition-all text-sm md:text-base ${
                selectedRole === 'demand' 
                  ? 'bg-brand-blue hover:bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                  : 'bg-brand-neon hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.4)]'
              }`}
            >
              Continue as {selectedRole === 'demand' ? 'Athlete' : 'Owner'} →
            </Link>
          ) : (
            <div className="px-8 py-3.5 rounded-full font-bold text-slate-500 bg-white/5 border border-white/5 cursor-not-allowed text-sm md:text-base">
              Select a profile to continue
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
