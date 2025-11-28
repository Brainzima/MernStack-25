import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Balance } from "./Balance";
import { Income } from "./Income";
import Expense from "./Expense";
const Dashboard = () => {
  const [range, setRange] = useState("month");
  const {transactions} = useContext(GlobalContext)

  const summaryStats = {
    balance: "₹24,500",
    income: "₹40,000",
    expense: "₹15,500",
  };

  const rangeOptions = [
    { id: "week", label: "This week" },
    { id: "month", label: "This month" },
    { id: "year", label: "This year" },
  ];

  return (
    
      <div className="mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Top bar: title + filters + action */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Overview
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Monitor your spending, income, and overall cash flow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Range buttons */}
            <div className="flex items-center gap-1 rounded-full bg-white px-1 py-1 shadow-sm border border-slate-200">
              {rangeOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setRange(opt.id)}
                  className={
                    "px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition " +
                    (range === opt.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100")
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Export button */}
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              ⬇ Export
            </button>

            
            
          </div>
        </div>

        {/* Summary cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Balance */}
          <Balance/>

          {/* Income */}
          <Income/>

          {/* Expense */}
          <Expense/>
        </section>

        {/* Main grid: chart + recent transactions */}
        <section className="grid gap-5 lg:grid-cols-3">
          {/* Chart / analytics placeholder */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Spending overview
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Visual breakdown of your expenses for the selected period.
                </p>
              </div>
              <button
                type="button"
                className="text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                View details →
              </button>
            </div>
            <div className="flex h-52 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-xs text-slate-400">
              (Chart component goes here)
            </div>
          </div>

          {/* Recent transactions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                Recent transactions
              </h2>
              <button
                type="button"
                className="text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                View all
              </button>
            </div>

            <ul className="space-y-3">
              {transactions.map((tx) => (
                <li
                  key={tx.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-semibold text-slate-700 shadow-sm">
                      {tx.title.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {tx.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {tx.category} • {tx.date}
                      </p>
                    </div>
                  </div>
                  <p
                    className={
                      "text-sm font-semibold " +
                      (tx.type == 'expense'
                        ? "text-rose-600"
                        : "text-emerald-600")
                    }
                  >
                    {tx.type == 'expense' ? '-' : '+'}{tx.amount}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    
  );
};

export default Dashboard;
