export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-extrabold tracking-tight mb-4 text-white">
        LAKSPACIO
      </h1>
      <p className="text-xl text-gray-400 mb-10 max-w-md">
        Intelligent access to sports space in Madurai.
      </p>
      <div className="flex gap-4">
        <button className="bg-brand-yellow text-brand-black px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors">
          Find Space
        </button>
        <button className="border border-brand-red text-brand-red px-8 py-3 rounded-md font-bold hover:bg-brand-red hover:text-white transition-colors">
          List Facility
        </button>
      </div>
    </main>
  );
}

