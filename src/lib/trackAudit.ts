import { LoanApplication } from "@/types/loan";

export function trackAudit(app: LoanApplication) {
  const originalRisk =
    app.loanAmount > app.monthlyIncome ? "Review" : "Pass";

  const counterfactualRisk =
    app.loanAmount > app.monthlyIncome ? "Review" : "Pass";

  return {
    originalRisk,
    counterfactualRisk,
    biasDetected: originalRisk !== counterfactualRisk,
  };
}