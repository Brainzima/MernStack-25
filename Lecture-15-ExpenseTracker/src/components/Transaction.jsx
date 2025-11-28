import React from "react";

const Transaction = ({ tx }) => {
  const isExpense = tx.type === "expense";

  

  return (
    <div className={"flex items-center justify-between rounded-2xl border border-slate-200  p-4 shadow-sm hover:shadow-md transition "+(isExpense ? "bg-rose-50" : "bg-emerald-50")}>
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          className={
            "flex h-10 w-10 items-center justify-center rounded-xl text-white font-semibold shadow-sm cursor-pointer hover:rotate-20 " +
            (isExpense ? "bg-rose-600" : "bg-emerald-600")
          }
        >
          X
        </button>

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
