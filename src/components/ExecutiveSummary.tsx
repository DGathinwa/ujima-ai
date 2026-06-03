export default function ExecutiveSummary() {
  return (
    <div className="bg-gradient-to-r from-green-700 to-green-900 text-white p-8 rounded-2xl shadow-lg mb-8">

      <h2 className="text-3xl font-bold mb-3">
        Executive Summary
      </h2>

      <p>
        UjimaAI is an ethical multi-agent lending intelligence
        platform designed for SACCOs and microfinance institutions
        across East Africa.
      </p>

      <div className="grid md:grid-cols-4 gap-4 mt-6">

        <div>
          <h3 className="font-bold text-2xl">+37%</h3>
          <p>Female Vendor Approvals</p>
        </div>

        <div>
          <h3 className="font-bold text-2xl">-78%</h3>
          <p>Bias Incidents</p>
        </div>

        <div>
          <h3 className="font-bold text-2xl">100%</h3>
          <p>Data Sovereignty</p>
        </div>

        <div>
          <h3 className="font-bold text-2xl">-75%</h3>
          <p>Processing Time</p>
        </div>

      </div>

    </div>
  );
}