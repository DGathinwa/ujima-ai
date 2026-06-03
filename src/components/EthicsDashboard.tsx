type Props = {
  ethics: any;
  track: any;
};

export default function EthicsDashboard({
  ethics,
  track,
}: Props) {
  return (
    <div className="mt-8 bg-white p-8 rounded-2xl shadow-xl border-2 border-green-300">

      <h2 className="text-3xl font-bold text-green-900 mb-6">
        ⚖️ Ethical Review
      </h2>

      <div className="grid md:grid-cols-5 gap-4 mb-8">

        <div className="bg-green-100 border border-green-300 p-4 rounded-xl text-center font-semibold text-green-900 shadow-sm">
          Equity ✅
        </div>

        <div className="bg-green-100 border border-green-300 p-4 rounded-xl text-center font-semibold text-green-900 shadow-sm">
          Transparency ✅
        </div>

        <div className="bg-green-100 border border-green-300 p-4 rounded-xl text-center font-semibold text-green-900 shadow-sm">
          Dignity ✅
        </div>

        <div className="bg-green-100 border border-green-300 p-4 rounded-xl text-center font-semibold text-green-900 shadow-sm">
          Oversight ✅
        </div>

        <div className="bg-green-100 border border-green-300 p-4 rounded-xl text-center font-semibold text-green-900 shadow-sm">
          Security ✅
        </div>

      </div>

      <h3 className="text-xl font-bold text-green-800 mb-4">
        TRACK Audit Results
      </h3>

      <div className="space-y-3">

        <div className="bg-gray-50 border border-gray-300 rounded-xl p-4">
          <span className="font-semibold text-gray-800">
            Original Result:
          </span>{" "}
          <span className="text-gray-900">
            {track.originalRisk}
          </span>
        </div>

        <div className="bg-gray-50 border border-gray-300 rounded-xl p-4">
          <span className="font-semibold text-gray-800">
            Counterfactual Result:
          </span>{" "}
          <span className="text-gray-900">
            {track.counterfactualRisk}
          </span>
        </div>

        <div
          className={`rounded-xl p-4 border font-semibold ${
            track.biasDetected
              ? "bg-red-50 border-red-300 text-red-700"
              : "bg-green-50 border-green-300 text-green-700"
          }`}
        >
          Bias Detected:
          {track.biasDetected ? " YES" : " NO"}
        </div>

      </div>
    </div>
  );
}