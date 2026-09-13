import Link from "next/link";

export default function BookingsPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-4xl mx-auto pb-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <h1 className="relative text-3xl font-black text-white mb-6">My Bookings</h1>
      
      <div className="relative bg-brand-surface/50 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-sm flex flex-col items-center justify-center h-[50vh]">
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10">
          <span className="text-3xl">🗓️</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">No active bookings</h2>
        <p className="text-slate-400 text-sm mb-6 max-w-sm">You haven't locked in any sports spaces yet. Use the AI engine or search tool to find your next game.</p>
        <Link href="/search" className="bg-brand-blue text-white font-bold px-8 py-3.5 rounded-full hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
          Find Space Now
        </Link>
      </div>
    </div>
  );
}
