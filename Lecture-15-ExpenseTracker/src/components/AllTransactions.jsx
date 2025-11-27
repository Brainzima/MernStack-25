import { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const AllTransactions = () => {
  const {transactions} = useContext(GlobalContext)
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        All Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-sm text-slate-500 text-center py-10">
          No transactions found.
        </p>
      ) : (
        <div className="space-y-3">
          {transactions.map((tx) => (
            <Transaction key={tx.id} tx={tx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTransactions;
