"use client";

import { useState } from "react";
import { LoanApplication } from "@/types/loan";

type Props = {
  onAnalyze: (application: LoanApplication) => void;
};

export default function LoanForm({ onAnalyze }: Props) {
  const [form, setForm] = useState<LoanApplication>({
    name: "",
    occupation: "",
    county: "",
    monthlyIncome: 0,
    loanAmount: 0,
    purpose: "",
    dependents: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-300"
    >
      <h2 className="text-3xl font-bold text-green-900 flex items-center gap-2 mb-6">
        💰 Loan Application
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Applicant Name
          </label>

          <input
            placeholder="Enter applicant name"
            className="w-full p-4 rounded-xl border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none transition"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Occupation
          </label>

          <input
            placeholder="Enter occupation"
            className="w-full p-4 rounded-xl border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none transition"
            onChange={(e) =>
              setForm({
                ...form,
                occupation: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            County
          </label>

          <input
            placeholder="Enter county"
            className="w-full p-4 rounded-xl border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none transition"
            onChange={(e) =>
              setForm({
                ...form,
                county: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Monthly Income (KES)
          </label>

          <input
            type="number"
            placeholder="e.g. 18000"
            className="w-full p-4 rounded-xl border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none transition"
            onChange={(e) =>
              setForm({
                ...form,
                monthlyIncome: Number(e.target.value),
              })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Loan Amount (KES)
          </label>

          <input
            type="number"
            placeholder="e.g. 25000"
            className="w-full p-4 rounded-xl border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none transition"
            onChange={(e) =>
              setForm({
                ...form,
                loanAmount: Number(e.target.value),
              })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Dependents
          </label>

          <input
            type="number"
            placeholder="e.g. 3"
            className="w-full p-4 rounded-xl border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none transition"
            onChange={(e) =>
              setForm({
                ...form,
                dependents: Number(e.target.value),
              })
            }
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="block mb-2 font-semibold text-gray-700">
          Purpose of Loan
        </label>

        <input
          placeholder="School fees, business expansion, farming inputs..."
          className="w-full p-4 rounded-xl border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none transition"
          onChange={(e) =>
            setForm({
              ...form,
              purpose: e.target.value,
            })
          }
        />
      </div>

      <button
        className="w-full mt-6 bg-green-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 shadow-lg transition"
      >
        Analyze Application
      </button>
    </form>
  );
}