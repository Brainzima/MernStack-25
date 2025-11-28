import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map((transaction, amts)=>transaction.amount)
    // console.log(amounts)
    const totalBalance = amounts.reduce((amt, total)=> amt+=total)
    // console.log(totalBalance)
    return (
        <>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                            Total Balance
                        </p>
                        <p className="mt-2 text-xl font-semibold text-slate-900">
                            ₹ {totalBalance}/-
                        </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                        ₹
                    </div>
                </div>
            </div>
        </>
    )
}