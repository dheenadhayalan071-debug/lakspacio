import { prisma } from "../../lib/prisma";
import Link from "next/link";

// Force Next.js to fetch fresh data every time this page loads
export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
  // Temporary logic: Fetch the most recently created user from the database
  // (Before we add full login authentication like Clerk)
  const user = await prisma.user.findFirst({
    orderBy: { createdAt: 'desc' }
  });

  // Fallback if the database is empty
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-white mb-4">No Profile Found</h1>
        <Link href="/register" className="bg-brand-blue px-6 py-3 rounded-full text-white font-bold">
          Create an Account
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto pb-24">
      
      {/* Dynamic Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10 pb-10 border-b border-white/10 mt-6">
        <div className="w-24 h-24 bg-gradient-to-tr from-brand-blue to-brand-neon rounded-full p-1 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <div className="w-full h-full bg-brand-surface rounded-full flex items-center justify-center border-4 border-brand-black">
            {/* Extracts the first letter of the user's name dynamically */}
            <span className="text-3xl font-black text-white uppercase">
              {user.fullName.charAt(0)}
            </span>
          </div>
        </div>
        <div className="text-center md:text-left">
          {/* Injects the real name from the Neon Database */}
          <h1 className="text-3xl font-extrabold text-white">{user.fullName}</h1>
          <p className="text-slate-400 mt-1">
            {user.role === "ATHLETE" ? "Athlete" : "Facility Owner"} • Madurai, TN
          </p>
          <div className="flex gap-3 mt-4 justify-center md:justify-start">
            <span className="bg-white/5 border border-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {user.email}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Bento Grid (Keeping mock data for stats until we build the booking engine) */}
      <h2 className="text-xl font-bold mb-4 text-white">Your Activity</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-brand-surface/50 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Bookings</p>
          <p className="text-3xl font-black text-white">0</p>
        </div>
        <div className="bg-brand-surface/50 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Hours Played</p>
          <p className="text-3xl font-black text-brand-blue">0</p>
        </div>
        <div className="col-span-2 bg-brand-surface/50 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Reliability Score</p>
            <p className="text-3xl font-black text-brand-neon">New</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-4 rounded-xl hover:bg-white/10 transition-colors text-sm">
          Edit Preferences
        </button>
        <button className="w-full border border-red-500/30 text-red-400 font-bold py-4 rounded-xl hover:bg-red-500/10 transition-colors text-sm">
          Sign Out
        </button>
      </div>

    </div>
  );
}
