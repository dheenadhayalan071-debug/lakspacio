"use client";
import { useState } from "react";

export default function AIEngine() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | any>(null);

  const triggerAI = () => {
    setAnalyzing(true);
    // Simulating API call to Google Gemini / OpenAI
    setTimeout(() => {
      setResult({
        name: "MDU Hoops Arena",
        score: "98%",
        reasoning: "Perfect overlap with your off-peak schedule (2PM-4PM). Facility has synthetic wood courts which reduces injury risk based on your previous activity logs. Pricing is ₹50 below your maximum budget."
      });
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-3xl mx-auto pb-24 relative overflow-hidden">
      
      {/* Background AI Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          AI Match Engine
        </h1>
        <p className="text-slate-400 mb-10">Describe what you need in natural language. Our AI will scan all inventory, historical utilization, and spatial proximity to find the mathematical perfect match.</p>

        <div className="bg-brand-surface/80 border border-white/10 p-4 md:p-6 rounded-3xl backdrop-blur-xl shadow-2xl mb-8">
          <textarea 
            placeholder="E.g., I need a quiet indoor basketball court near Anna Nagar for 2 hours this afternoon. Budget is strict, under ₹300/hr."
            className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors resize-none text-sm md:text-base mb-4"
          ></textarea>
          
          <button 
            onClick={triggerAI}
            disabled={analyzing}
            className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex justify-center items-center gap-2"
          >
            {analyzing ? (
               <>
                 <span className="relative flex h-3 w-3 mr-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                 </span>
                 Running Neural Match...
               </>
            ) : "Calculate Best Match"}
          </button>
        </div>

        {/* AI Result Card */}
        {result && (
          <div className="bg-gradient-to-br from-brand-blue/10 to-brand-neon/10 border border-white/20 p-6 rounded-3xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-bold text-brand-neon uppercase tracking-widest mb-1">Top Recommendation</p>
                <h3 className="text-2xl font-black text-white">{result.name}</h3>
              </div>
              <div className="bg-brand-neon/20 border border-brand-neon/40 text-brand-neon font-black px-4 py-2 rounded-xl text-xl">
                {result.score}
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              <span className="text-white font-semibold">AI Reasoning:</span> {result.reasoning}
            </p>
            <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-slate-200 transition-all">
              Lock in Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
