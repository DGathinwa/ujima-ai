export default function ImpactDashboard() {
  return (
    <div className="mt-8 bg-white p-8 rounded-2xl shadow-xl border-2 border-green-300">

      <h2 className="text-3xl font-bold text-green-900 mb-6">
        📊 Impact Assessment Dashboard
      </h2>

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-green-100 p-6 rounded-xl border border-green-300 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            Female Approval Rate
          </h3>

          <p className="text-4xl font-bold text-green-800 mt-3">
            +37%
          </p>

          <p className="text-sm font-medium text-gray-700 mt-2">
            projected improvement
          </p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl border border-blue-300 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            Processing Time
          </h3>

          <p className="text-4xl font-bold text-blue-800 mt-3">
            -75%
          </p>

          <p className="text-sm font-medium text-gray-700 mt-2">
            reduction
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl border border-yellow-300 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            Bias Incidents
          </h3>

          <p className="text-4xl font-bold text-yellow-800 mt-3">
            -78%
          </p>

          <p className="text-sm font-medium text-gray-700 mt-2">
            projected reduction
          </p>
        </div>

        <div className="bg-purple-100 p-6 rounded-xl border border-purple-300 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            Data Sovereignty
          </h3>

          <p className="text-4xl font-bold text-purple-800 mt-3">
            100%
          </p>

          <p className="text-sm font-medium text-gray-700 mt-2">
            African governance
          </p>
        </div>

      </div>

    </div>
  );
}