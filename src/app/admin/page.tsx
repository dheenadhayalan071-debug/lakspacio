export default function AdminDashboard() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-3xl font-extrabold text-brand-red">Demand Intelligence</h1>
        <div className="bg-brand-red/10 text-brand-red text-xs font-bold px-3 py-1 rounded">
          SYSTEM ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm font-semibold mb-2">Total Searches</p>
          <h2 className="text-3xl font-black">1,248</h2>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm font-semibold mb-2">Failed Matches</p>
          <h2 className="text-3xl font-black text-brand-yellow">312</h2>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm font-semibold mb-2">Top Unmet Sport</p>
          <h2 className="text-2xl font-black mt-2">Basketball</h2>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm font-semibold mb-2">Peak Demand Gap</p>
          <h2 className="text-2xl font-black mt-2">6 PM - 8 PM</h2>
        </div>
      </div>

      {/* Demand Event Log */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Live Demand Events</h3>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm p-3 bg-gray-950 rounded-lg border border-gray-800">
            <span className="text-gray-400 mb-2 md:mb-0">Search: Basketball, Madurai, ₹150 max</span>
            <span className="text-brand-yellow font-bold">Failed: No inventory</span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm p-3 bg-gray-950 rounded-lg border border-gray-800">
            <span className="text-gray-400 mb-2 md:mb-0">Search: Tennis, Anna Nagar, ₹400 max</span>
            <span className="text-green-500 font-bold">Matched: 2 facilities</span>
          </div>
        </div>
      </div>
    </div>
  );
}
