import React, { useState, useMemo } from "react";

const defaultTransactions = [
  {
    id: 1,
    type: "expense",
    title: "Groceries",
    category: "Food & Dining",
    amount: 1200,
    date: "2025-11-24",
    note: "Monthly essentials",
  },
  {
    id: 2,
    type: "income",
    title: "Salary",
    category: "Job",
    amount: 25000,
    date: "2025-11-25",
    note: "Nov salary",
  },
  {
    id: 3,
    type: "expense",
    title: "Netflix",
    category: "Subscriptions",
    amount: 499,
    date: "2025-11-20",
    note: "Monthly plan",
  },
  {
    id: 4,
    type: "income",
    title: "Freelance Project",
    category: "Side Hustle",
    amount: 6000,
    date: "2025-11-18",
    note: "Landing page UI",
  },
  {
    id: 5,
    type: "expense",
    title: "Uber",
    category: "Transport",
    amount: 320,
    date: "2025-11-17",
    note: "Office commute",
  },
];

const ExpenseIncomeList = ({ transactions = defaultTransactions }) => {
  const [filter, setFilter] = useState("all"); // all | expense | income

  const filteredTransactions = useMemo(() => {
    if (filter === "all") return transactions;
    return transactions.filter((t) => t.type === filter);
  }, [filter, transactions]);

  const totalExpense = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0),
    [transactions]
  );

  const totalIncome = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0),
    [transactions]
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      {/* Header + filter + stats */}
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Expense & Income
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Detailed list of all your transactions with type, category, and
            notes.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          {/* Filter pills */}
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-1 py-1 shadow-sm">
            {[
              { id: "all", label: "All" },
              { id: "expense", label: "Expenses" },
              { id: "income", label: "Income" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setFilter(opt.id)}
                className={
                  "px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition " +
                  (filter === opt.id
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100")
                }
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Quick totals */}
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2">
              <p className="text-[10px] font-medium uppercase tracking-wide text-emerald-600">
                Total Income
              </p>
              <p className="text-sm font-semibold text-emerald-700">
                ₹{totalIncome.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="rounded-xl border border-rose-100 bg-rose-50 px-3 py-2">
              <p className="text-[10px] font-medium uppercase tracking-wide text-rose-600">
                Total Expense
              </p>
              <p className="text-sm font-semibold text-rose-700">
                ₹{totalExpense.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table container */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Desktop table */}
        <div className="hidden md:block">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Category
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Note
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredTransactions.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-6 text-center text-sm text-slate-400"
                  >
                    No transactions found for this filter.
                  </td>
                </tr>
              ) : (
                filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">
                      {tx.title}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium " +
                          (tx.type === "expense"
                            ? "bg-rose-50 text-rose-700 border border-rose-100"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-100")
                        }
                      >
                        {tx.type === "expense" ? "Expense" : "Income"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {tx.category}
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-semibold">
                      <span
                        className={
                          tx.type === "expense"
                            ? "text-rose-600"
                            : "text-emerald-600"
                        }
                      >
                        {tx.type === "expense" ? "-" : "+"}₹
                        {tx.amount.toLocaleString("en-IN")}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {tx.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {tx.note || "—"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile list / cards */}
        <div className="divide-y divide-slate-100 md:hidden">
          {filteredTransactions.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-slate-400">
              No transactions found for this filter.
            </div>
          ) : (
            filteredTransactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-start justify-between gap-3 px-4 py-3"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-xs font-semibold text-white">
                    {tx.title.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {tx.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {tx.category} • {tx.date}
                    </p>
                    {tx.note && (
                      <p className="mt-1 text-xs text-slate-500">{tx.note}</p>
                    )}
                    <span
                      className={
                        "mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium " +
                        (tx.type === "expense"
                          ? "bg-rose-50 text-rose-700 border border-rose-100"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-100")
                      }
                    >
                      {tx.type === "expense" ? "Expense" : "Income"}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={
                      "text-sm font-semibold " +
                      (tx.type === "expense"
                        ? "text-rose-600"
                        : "text-emerald-600")
                    }
                  >
                    {tx.type === "expense" ? "-" : "+"}₹
                    {tx.amount.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ExpenseIncomeList;
