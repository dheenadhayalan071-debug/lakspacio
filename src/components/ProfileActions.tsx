"use client";

export default function ProfileActions() {
  const handleSignOut = () => {
    // Completely wipe the user's local session and redirect to the register gatekeeper
    localStorage.clear();
    window.location.href = "/register";
  };

  return (
    <div className="flex flex-col gap-3">
      <button 
        onClick={() => alert("Preference settings module coming soon!")}
        className="w-full bg-white/5 border border-white/10 text-white font-bold py-4 rounded-xl hover:bg-white/10 transition-colors text-sm"
      >
        Edit Preferences
      </button>
      <button 
        onClick={handleSignOut}
        className="w-full border border-red-500/30 text-red-400 font-bold py-4 rounded-xl hover:bg-red-500/10 transition-colors text-sm"
      >
        Sign Out
      </button>
    </div>
  );
}
