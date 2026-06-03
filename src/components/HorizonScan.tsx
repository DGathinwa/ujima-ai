export default function HorizonScan() {
  return (
    <div className="mt-8 bg-white p-8 rounded-2xl shadow-xl border-2 border-indigo-200">

      <h2 className="text-3xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
        🔭 HORIZON Future Impact Scan
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="bg-green-100 border border-green-300 p-5 rounded-xl shadow-sm">
          <h3 className="font-bold text-green-900 text-lg">
            👨‍👩‍👧 Families
          </h3>

          <p className="mt-3 text-gray-800 leading-relaxed">
            Improved access to education, healthcare, and household financial
            stability through fair lending decisions.
          </p>
        </div>

        <div className="bg-blue-100 border border-blue-300 p-5 rounded-xl shadow-sm">
          <h3 className="font-bold text-blue-900 text-lg">
            🏘️ Communities
          </h3>

          <p className="mt-3 text-gray-800 leading-relaxed">
            Increased financial inclusion, stronger SACCO participation, and
            greater economic resilience among informal traders.
          </p>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 p-5 rounded-xl shadow-sm">
          <h3 className="font-bold text-yellow-900 text-lg">
            🌱 Environment
          </h3>

          <p className="mt-3 text-gray-800 leading-relaxed">
            Digital-first lending reduces paperwork and improves operational
            efficiency while minimizing resource consumption.
          </p>
        </div>

      </div>

    </div>
  );
}