"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const router = useRouter();
  const [bookingState, setBookingState] = useState<"idle" | "loading" | "success">("idle");

  const handleBook = () => {
    setBookingState("loading");
    
    // Simulate a database transaction to Neon
    setTimeout(() => {
      setBookingState("success");
      
      // Auto-redirect to the bookings tab after success
      setTimeout(() => {
        router.push("/bookings");
      }, 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-2xl mx-auto pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
          Available Spaces
        </h1>
        <div className="flex items-center justify-between mb-8">
          <p className="text-slate-400 text-sm">Showing results for <br/> <span className="text-white font-semibold">"Basketball"</span> near Madurai</p>
          <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
            <p className="text-[10px] font-bold tracking-widest text-white uppercase">Lakspacio <br/> Match Active</p>
          </div>
        </div>

        {/* Dynamic Booking Card */}
        <div className="bg-brand-surface/80 border border-white/10 p-6 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all">
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-neon/20 blur-[60px] rounded-full pointer-events-none"></div>

          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-xs font-bold text-white mb-1 tracking-wider uppercase">94% Match</p>
              <h3 className="text-2xl font-black text-white">MDU Hoops Arena</h3>
              <p className="text-slate-400 text-sm mt-1">2.1 km away • Anna Nagar</p>
            </div>
            <div className="text-right">
              <h4 className="text-xl font-bold text-white">₹250<span className="text-sm text-slate-400">/hr</span></h4>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 relative z-10">
            <p className="text-brand-neon font-bold text-sm">6:00 PM - 8:00 PM Available</p>
            
            <button 
              onClick={handleBook}
              disabled={bookingState !== "idle"}
              className={`font-bold px-8 py-3 rounded-xl transition-all shadow-lg flex items-center justify-center min-w-[120px] ${
                bookingState === "success" 
                  ? "bg-brand-neon text-black shadow-brand-neon/30"
                  : "bg-white text-black hover:bg-slate-200 shadow-white/20"
              }`}
            >
              {bookingState === "idle" && "Book"}
              {bookingState === "loading" && (
                <svg className="animate-spin h-5 w-5 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              )}
              {bookingState === "success" && "Locked In! 🔒"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
