export default function FacilityDashboard() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Facility Intelligence</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm font-semibold mb-2">Today's Revenue</p>
          <h2 className="text-4xl font-black">₹6,450</h2>
          <p className="text-green-500 text-xs mt-2">+12% from yesterday</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm font-semibold mb-2">Current Utilization</p>
          <h2 className="text-4xl font-black">72%</h2>
          <p className="text-brand-yellow text-xs mt-2">11 slots remaining</p>
        </div>
        <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl p-6">
          <p className="text-brand-yellow text-sm font-bold mb-2">AI Recommendation</p>
          <p className="text-white text-sm">High unmet demand for Basketball detected between 2 PM - 5 PM. Consider opening off-peak student slots.</p>
        </div>
      </div>
    </div>
  );
}
