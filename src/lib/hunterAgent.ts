import { LoanApplication } from "@/types/loan";

export function hunterAgent(app: LoanApplication) {
  return `
Applicant: ${app.name}

Occupation: ${app.occupation}

County: ${app.county}

Loan Request: KES ${app.loanAmount}

Dependents: ${app.dependents}

Human review recommended where contextual factors require additional assessment.
`;
}