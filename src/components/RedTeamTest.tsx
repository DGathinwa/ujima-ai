export default function RedTeamTest() {
  return (
    <div className="mt-8 bg-white p-8 rounded-2xl shadow-xl border-2 border-orange-300">

      <h2 className="text-2xl font-bold text-orange-900 mb-6">
        🚨 TRACK Red-Team Simulation
      </h2>

      <div className="space-y-4">

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <p className="text-sm font-semibold text-orange-700 mb-1">
            Test Applicant
          </p>

          <p className="text-gray-900 font-medium">
            Female Market Vendor
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm font-semibold text-blue-700 mb-1">
            Counterfactual Applicant
          </p>

          <p className="text-gray-900 font-medium">
            Male Market Vendor
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm font-semibold text-green-700 mb-1">
            Audit Result
          </p>

          <p className="font-bold text-green-800 text-lg">
            Bias Detected: NO
          </p>
        </div>

      </div>

    </div>
  );
}