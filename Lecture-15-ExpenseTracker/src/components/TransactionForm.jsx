import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Toast } from "./Toast";

const categories = [
  "Food & Dining",
  "Transport",
  "Bills & Utilities",
  "Shopping",
  "Entertainment",
  "Health",
  "Subscriptions",
  "Savings",
  "Salary",
  "Freelance",
  "Other",
];

const paymentMethods = ["Cash", "UPI", "Card", "Cheque", "Other"];

const TransactionForm = (onCancel) => {
  const {addTransaction} = useContext(GlobalContext)
  const [type, setType] = useState("expense"); // "expense" | "income"
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      id: Date.now(),
      type,
      title,
      amount: Number(amount) || 0,
      date,
      category,
      paymentMethod,
      note,
    };
    addTransaction(payload)

    // Clear form after submit
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
    setPaymentMethod("");
    setNote("");
    setType("expense");
    setStatus(true)
  };

  return (
    <div className="py-6 space-y-6">
      {status ? <Toast status='success' message='Added Transaction'/> : '' }
    <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Add Transaction
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Quickly record a new expense or income entry.
          </p>
        </div>

        {/* Type toggle */}
        <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setType("expense")}
            className={
              "px-3 py-1.5 text-xs font-medium rounded-full transition " +
              (type === "expense"
                ? "bg-rose-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-200")
            }
          >
            Expense
          </button>
          <button
            type="button"
            onClick={() => setType("income")}
            className={
              "px-3 py-1.5 text-xs font-medium rounded-full transition " +
              (type === "income"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-200")
            }
          >
            Income
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title + Amount */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Title
            </label>
            <input
              type="text"
              required
              placeholder={
                type === "expense" ? "e.g. Groceries" : "e.g. Salary"
              }
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-900/5 focus:bg-white focus:ring"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Amount (₹)
            </label>
            <input
              type="number"
              required
              min="0"
              step="0.01"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-900/5 focus:bg-white focus:ring"
            />
          </div>
        </div>

        {/* Date + Category */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Date
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-900/5 focus:bg-white focus:ring"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Category
            </label>
            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-900/5 focus:bg-white focus:ring"
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Payment method */}
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600">
            Payment Method
          </label>
          <div className="grid gap-2 sm:grid-cols-5">
            {paymentMethods.map((pm) => (
              <button
                key={pm}
                type="button"
                onClick={() => setPaymentMethod(pm)}
                className={
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition " +
                  (paymentMethod === pm
                    ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100")
                }
              >
                {pm}
              </button>
            ))}
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600">
            Note (optional)
          </label>
          <textarea
            rows={3}
            placeholder="e.g. Paid via UPI, monthly subscription, client payment, etc."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-900/5 focus:bg-white focus:ring"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
          >
            Save {type === "expense" ? "Expense" : "Income"}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default TransactionForm;
