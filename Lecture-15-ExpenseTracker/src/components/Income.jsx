import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Income = () =>{
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.filter((transaction)=> transaction.type === 'income')
    .map((transaction, amts)=>transaction.amount)
    const totalIncome = amounts.reduce((amt, total)=>total +=amt)
    return(
        <>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Total Income
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                  ₹ {totalIncome}/-
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-semibold text-emerald-700">
                ↑
              </div>
            </div>
          </div>
        </>
    )
}