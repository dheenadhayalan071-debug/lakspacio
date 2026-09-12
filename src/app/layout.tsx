import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "LAKSPACIO | Intelligent Access to Sports Space",
  description: "Find space. Play more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-black text-white selection:bg-brand-blue selection:text-white min-h-screen flex flex-col pb-20 md:pb-0">
        
        {/* Global Top Navigation */}
        <nav className="flex items-center justify-between p-4 md:p-6 border-b border-white/5 sticky top-0 bg-brand-black/80 backdrop-blur-xl z-50">
          <Link href="/" className="text-2xl font-black tracking-tighter hover:text-brand-blue transition-colors">
            LAKSPACIO.
          </Link>
          
          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/search" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Find Space</Link>
            <Link href="/facility" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Facility Hub</Link>
            <Link href="/admin" className="text-sm font-semibold text-slate-400 hover:text-brand-neon transition-colors">Intelligence</Link>
            <Link href="/ai" className="text-sm font-semibold text-slate-400 hover:text-brand-blue transition-colors">AI Engine</Link>
          </div>
          
          {/* Sign In Button (Visible on all devices) */}
          <Link href="/register" className="text-sm font-bold bg-white text-black px-5 py-2 rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Sign In
          </Link>
        </nav>
        
        {/* Page Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Pro Mobile Bottom App Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-brand-surface/90 backdrop-blur-xl border-t border-white/10 flex justify-between items-center px-6 py-3 z-50">
          
          {/* Home */}
          <Link href="/" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span className="text-[10px] font-medium mt-0.5">Home</span>
          </Link>

          {/* Search */}
          <Link href="/search" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <span className="text-[10px] font-medium mt-0.5">Search</span>
          </Link>

          {/* Facility */}
          <Link href="/facility" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
            <span className="text-[10px] font-medium mt-0.5">Facility</span>
          </Link>

          {/* Intelligence */}
          <Link href="/admin" className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-neon transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <span className="text-[10px] font-medium mt-0.5">Intel</span>
          </Link>

          {/* Profile */}
          <Link href="/profile" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="14" cy="7" r="4"/></svg>
            <span className="text-[10px] font-medium mt-0.5">Profile</span>
          </Link>

        </div>
      </body>
    </html>
  );
}
