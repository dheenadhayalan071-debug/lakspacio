export default function SearchPage() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold">Available Spaces</h1>
          <p className="text-gray-400 mt-2">Showing results for "Basketball" near Madurai</p>
        </div>
        <div className="text-sm font-bold text-brand-yellow border border-brand-yellow px-3 py-1 rounded">
          LAKSPACIO MATCH ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mock Facility Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-brand-yellow/10 text-brand-yellow text-xs font-bold px-2 py-1 rounded">94% MATCH</div>
            <div className="text-brand-red font-bold">₹250/hr</div>
          </div>
          <h3 className="text-xl font-bold mb-1">MDU Hoops Arena</h3>
          <p className="text-gray-400 text-sm mb-4">2.1 km away • Anna Nagar</p>
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-800">
            <span className="text-sm text-green-400 font-semibold">6:00 PM - 8:00 PM Available</span>
            <button className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-200 text-sm">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}
