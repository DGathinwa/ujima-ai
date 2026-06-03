type Props = {
  scout: any;
  guardian: any;
  hunter: string;
};

export default function AgentResults({
  scout,
  guardian,
  hunter,
}: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">

      {/* Scout Agent */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6 rounded-2xl shadow-lg">
        <h3 className="font-bold text-xl text-blue-900 mb-4">
          🛰️ Scout Agent
        </h3>

        <p className="text-gray-800">
          Income Pattern:
          <strong className="text-blue-900">
            {" "}
            {scout.incomePattern}
          </strong>
        </p>

        <p className="mt-3 text-gray-700 leading-relaxed">
          {scout.advice}
        </p>
      </div>

      {/* Guardian Agent */}
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 p-6 rounded-2xl shadow-lg">
        <h3 className="font-bold text-xl text-yellow-900 mb-4">
          🛡️ Guardian Agent
        </h3>

        <p className="text-gray-800">
          Risk Score:
          <strong className="text-yellow-900">
            {" "}
            {guardian.riskScore}%
          </strong>
        </p>

        <div className="w-full bg-gray-300 rounded-full h-5 mt-4 mb-3 overflow-hidden">
          <div
            className="bg-yellow-500 h-5 rounded-full transition-all duration-500"
            style={{
              width: `${guardian.riskScore}%`,
            }}
          />
        </div>

        <p className="text-gray-800">
          Recommendation:
          <strong className="text-yellow-900">
            {" "}
            {guardian.recommendation}
          </strong>
        </p>
      </div>

      {/* Hunter Agent */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-6 rounded-2xl shadow-lg">
        <h3 className="font-bold text-xl text-purple-900 mb-4">
          🎯 Hunter Agent
        </h3>

        <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed font-sans">
          {hunter}
        </pre>
      </div>

    </div>
  );
}