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
      <body className="bg-brand-black text-white selection:bg-brand-yellow selection:text-black min-h-screen flex flex-col">
        {/* Global Navigation */}
        <nav className="flex items-center justify-between p-4 md:p-6 border-b border-gray-900 sticky top-0 bg-brand-black/90 backdrop-blur-md z-50">
          <Link href="/" className="text-2xl font-black tracking-tighter hover:text-brand-yellow transition-colors">
            LAKSPACIO.
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/search" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Find Space</Link>
            <Link href="/facility" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Facility Hub</Link>
            <Link href="/admin" className="text-sm font-semibold text-gray-400 hover:text-brand-red transition-colors">Intelligence</Link>
          </div>
          <button className="text-sm font-bold bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
            Sign In
          </button>
        </nav>
        
        {/* Page Content */}
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
