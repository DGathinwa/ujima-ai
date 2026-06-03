import { LoanApplication } from "@/types/loan";

export function scoutAgent(app: LoanApplication) {
  let incomePattern = "Stable";

  if (
    app.occupation.toLowerCase().includes("vendor") ||
    app.occupation.toLowerCase().includes("farmer")
  ) {
    incomePattern = "Seasonal";
  }

  let advice =
    "Maintain a savings buffer equal to one month of expenses.";

  if (incomePattern === "Seasonal") {
    advice =
      "Consider aligning repayments with harvest or peak sales periods.";
  }

  return {
    incomePattern,
    advice,
  };
}