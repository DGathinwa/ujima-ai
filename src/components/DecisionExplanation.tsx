type Props = {
  recommendation: string;
};

export default function DecisionExplanation({
  recommendation,
}: Props) {

  return (
    <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        💡 Explain My Decision
      </h2>

      <p>
        Recommendation:
        <strong> {recommendation}</strong>
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-2">

        <li>
          Loan amount compared to income was evaluated.
        </li>

        <li>
          Dependents and repayment capacity were assessed.
        </li>

        <li>
          Seasonal income patterns were considered.
        </li>

        <li>
          Human review remains available.
        </li>

      </ul>

    </div>
  );
}