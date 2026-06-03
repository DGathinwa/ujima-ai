import { LoanApplication } from "@/types/loan";

export function guardianAgent(app: LoanApplication) {
  let riskScore = 50;

  if (app.loanAmount > app.monthlyIncome) {
    riskScore += 20;
  }

  if (app.dependents > 3) {
    riskScore += 10;
  }

  if (
    app.occupation.toLowerCase().includes("vendor") ||
    app.occupation.toLowerCase().includes("farmer")
  ) {
    riskScore += 5;
  }

  let recommendation = "Low Risk";

  if (riskScore > 70) {
    recommendation = "Human Review Required";
  } else if (riskScore > 55) {
    recommendation = "Moderate Risk";
  }

  return {
    riskScore,
    recommendation,
  };
}