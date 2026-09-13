"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Security Gatekeeper: Check for authorization
    const auth = localStorage.getItem("lakspacio_auth");
    if (!auth) {
      // 🚨 Hard redirect forces the register page to load if not signed in
      window.location.href = "/register";
    } else {
      setIsAuthorized(true);
    }
  }, []);

  // Show loading spinner while checking authorization
  if (!isAuthorized) {
    return (
      <div className="min-h-[calc(100vh-80px)] bg-brand-black flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-brand-blue border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <main className="px-5 pt-12 pb-32 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Glowing Ambient Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Live System Indicator Badge */}
      <div className="relative inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-semibold uppercase tracking-widest text-brand-neon">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
        </span>
        Intelligence Layer Active
      </div>
      
      <h1 className="relative text-4xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
        Find your space. <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-neon">
          Play your game.
        </span>
      </h1>
      
      <p className="relative text-slate-400 text-sm md:text-lg mb-10 max-w-xl mx-auto">
        The intelligent marketplace connecting athletes with underutilized sports facilities across the city. 
      </p>

      {/* Smooth Bento-Style Search Engine */}
      <div className="relative w-full max-w-3xl bg-brand-surface/80 backdrop-blur-xl p-2.5 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-2 shadow-2xl z-10">
        <input 
          type="text" 
          placeholder="What sport?" 
          className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-2xl hover:bg-white/10 focus:bg-white/10 transition-all text-sm"
        />
        <input 
          type="text" 
          placeholder="Location" 
          className="w-full bg-white/5 px-5 py-3.5 outline-none text-white placeholder-slate-500 rounded-2xl hover:bg-white/10 focus:bg-white/10 transition-all text-sm"
        />
        <Link href="/search" className="bg-brand-blue text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all w-full md:w-auto shrink-0 flex items-center justify-center text-sm">
          Search
        </Link>
      </div>
    </main>
  );
}
