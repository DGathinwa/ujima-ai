export default function Navbar() {
  return (
    <nav className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-4 mb-8">
      <div className="flex flex-wrap gap-3">

        <span className="px-4 py-2 bg-green-100 text-green-900 font-semibold rounded-xl border border-green-300">
          📝 Application
        </span>

        <span className="px-4 py-2 bg-blue-100 text-blue-900 font-semibold rounded-xl border border-blue-300">
          🤖 Agents
        </span>

        <span className="px-4 py-2 bg-purple-100 text-purple-900 font-semibold rounded-xl border border-purple-300">
          🛡️ Ethics
        </span>

        <span className="px-4 py-2 bg-yellow-100 text-yellow-900 font-semibold rounded-xl border border-yellow-300">
          📊 Impact
        </span>

      </div>
    </nav>
  );
}