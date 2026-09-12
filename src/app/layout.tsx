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
      <body className="bg-brand-black text-white selection:bg-brand-yellow selection:text-black min-h-screen flex flex-col pb-16 md:pb-0">
        
        {/* Global Top Navigation */}
        <nav className="flex items-center justify-between p-4 md:p-6 border-b border-gray-900 sticky top-0 bg-brand-black/90 backdrop-blur-md z-50">
          <Link href="/" className="text-2xl font-black tracking-tighter hover:text-brand-yellow transition-colors">
            LAKSPACIO.
          </Link>
          
          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/search" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Find Space</Link>
            <Link href="/facility" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Facility Hub</Link>
            <Link href="/admin" className="text-sm font-semibold text-gray-400 hover:text-brand-red transition-colors">Intelligence</Link>
            <Link href="/ai" className="text-sm font-semibold text-gray-400 hover:text-brand-yellow transition-colors">AI Engine</Link>
          </div>
          
          <button className="text-sm font-bold bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
            Sign In
          </button>
        </nav>
        
        {/* Page Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Mobile Bottom App Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-950 border-t border-gray-900 flex justify-around items-center p-3 z-50">
          <Link href="/search" className="text-[10px] font-bold text-gray-400 hover:text-brand-yellow flex flex-col items-center gap-1">
            <span className="text-lg">🔍</span>
            <span>Search</span>
          </Link>
          <Link href="/facility" className="text-[10px] font-bold text-gray-400 hover:text-white flex flex-col items-center gap-1">
            <span className="text-lg">🏟️</span>
            <span>Facility</span>
          </Link>
          <Link href="/admin" className="text-[10px] font-bold text-gray-400 hover:text-brand-red flex flex-col items-center gap-1">
            <span className="text-lg">🧠</span>
            <span>Intelligence</span>
          </Link>
          <Link href="/ai" className="text-[10px] font-bold text-gray-400 hover:text-brand-yellow flex flex-col items-center gap-1">
            <span className="text-lg">✨</span>
            <span>AI Match</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
