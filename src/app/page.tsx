"use client";

import { useState } from "react";

import LoanForm from "@/components/LoanForm";
import AgentResults from "@/components/AgentResults";
import EthicsDashboard from "@/components/EthicsDashboard";

import { scoutAgent } from "@/lib/scoutAgent";
import { guardianAgent } from "@/lib/guardianAgent";
import { hunterAgent } from "@/lib/hunterAgent";
import { ethosEngine } from "@/lib/ethosEngine";
import { trackAudit } from "@/lib/trackAudit";

import { LoanApplication } from "@/types/loan";
import ImpactDashboard from "@/components/ImpactDashboard";
import PrideReview from "@/components/PrideReview";
import HorizonScan from "@/components/HorizonScan";
import RedTeamTest from "@/components/RedTeamTest";

import Navbar from "@/components/Navbar";
import ExecutiveSummary from "@/components/ExecutiveSummary";

export default function Home() {
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = (application: LoanApplication) => {
    const scout = scoutAgent(application);
    const guardian = guardianAgent(application);
    const hunter = hunterAgent(application);
    const ethics = ethosEngine(application); 
    const track = trackAudit(application);

    setResults({
      scout,
      guardian,
      hunter,
      ethics,
      track,
      application, // Passed along to ensure downstream components have access to the context if needed
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 font-medium text-sm mb-3">
            🇰🇪 Ethical African Fintech Platform
          </div>

          <h1 className="text-6xl font-extrabold text-green-900 mb-3">
            UjimaAI
          </h1>

          <Navbar />
          <ExecutiveSummary />

          <p className="text-xl text-gray-700 max-w-3xl mt-4">
            Multi-Agent Lending Intelligence Platform powered by
            AIM, MAP, ETHOS, TRACK, PRIDE and Human Oversight.
          </p>
        </div>

        <LoanForm onAnalyze={handleAnalyze} />

        {results && (
          <>
            <AgentResults
              scout={results.scout}
              guardian={results.guardian}
              hunter={results.hunter}
            />

            <EthicsDashboard
              ethics={results.ethics}
              track={results.track}
            />

            {/* Note: Added spread results to safely provide context to these modules */}
            <ImpactDashboard data={results} />
            <PrideReview data={results} />
            <HorizonScan data={results} />
            <RedTeamTest data={results} />
          </>
        )}
      </div>

      <div className="mt-12 text-center text-gray-500">
        <p>Powered by AIM • MAP • ETHOS • TRACK • PRIDE</p>
        <p className="mt-2 text-sm">
          Built for Responsible SACCO Lending in East Africa
        </p>
      </div>
    </main>
  );
}