export default function PrideReview() {
  return (
    <div className="mt-8 bg-white p-8 rounded-2xl shadow-xl border-2 border-red-300">

      <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
        🧑‍⚖️ PRIDE Human Oversight
      </h2>

      <p className="mb-5 text-gray-800 text-lg leading-relaxed">
        Every applicant has the right to request a human review of
        automated recommendations. UjimaAI preserves human sovereignty
        by ensuring important lending decisions can be reviewed by a
        qualified loan officer.
      </p>

      <button
        className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-red-700 transition"
      >
        Request Human Review
      </button>

    </div>
  );
}