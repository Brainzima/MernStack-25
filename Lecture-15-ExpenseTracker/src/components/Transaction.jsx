import React from "react";

const Transaction = ({ tx }) => {
  const isExpense = tx.type === "expense";

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div
          className={
            "flex h-10 w-10 items-center justify-center rounded-xl text-white font-semibold shadow-sm " +
            (isExpense ? "bg-rose-600" : "bg-emerald-600")
          }
        >
          {tx.title.charAt(0)}
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">{tx.title}</p>
          <p className="text-xs text-slate-500">
            {tx.category} • {tx.date}
          </p>
          {tx.note && (
            <p className="mt-1 text-xs text-slate-500">{tx.note}</p>
          )}
        </div>
      </div>

      {/* Right */}
      <p
        className={
          "text-sm font-semibold " +
          (isExpense ? "text-rose-600" : "text-emerald-600")
        }
      >
        {isExpense ? "-" : "+"}₹{tx.amount.toLocaleString("en-IN")}
      </p>
    </div>
  );
};

export default Transaction;
