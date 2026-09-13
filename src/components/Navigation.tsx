"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [role, setRole] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const storedRole = localStorage.getItem("lakspacio_role") || "GUEST";
    setRole(storedRole);
  }, [pathname]);

  if (pathname.startsWith("/register")) return null;

  const isOwner = role === "FACILITY_OWNER";

  return (
    <>
      {/* 🚨 Clean Top Header - No text links to glitch on mobile! */}
      <nav className="flex items-center justify-between p-4 md:p-6 border-b border-white/5 sticky top-0 bg-brand-black/80 backdrop-blur-xl z-50">
        <Link href="/" className="text-2xl font-black tracking-tighter hover:text-brand-blue transition-colors">
          LAKSPACIO.
        </Link>
        
        {role === "GUEST" ? (
          <Link href="/register" className="text-sm font-bold bg-white text-black px-5 py-2 rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Sign In
          </Link>
        ) : (
          <Link href="/profile" className="text-sm font-bold bg-white/10 text-white px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors border border-white/10">
            Profile
          </Link>
        )}
      </nav>

      {/* Mobile Bottom App Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-brand-surface/95 backdrop-blur-xl border-t border-white/10 flex justify-between items-center px-6 py-3 z-50">
        <Link href="/" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </Link>

        {!isOwner ? (
          <>
            <Link href="/search" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <span className="text-[10px] font-medium mt-0.5">Search</span>
            </Link>
            <Link href="/bookings" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span className="text-[10px] font-medium mt-0.5">Bookings</span>
            </Link>
          </>
        ) : (
          <>
            <Link href="/facility" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
              <span className="text-[10px] font-medium mt-0.5">Facility</span>
            </Link>
            <Link href="/admin" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-neon transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              <span className="text-[10px] font-medium mt-0.5">Intel</span>
            </Link>
          </>
        )}

        <Link href="/ai" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          <span className="text-[10px] font-medium mt-0.5">AI Engine</span>
        </Link>
      </div>
    </>
  );
}
