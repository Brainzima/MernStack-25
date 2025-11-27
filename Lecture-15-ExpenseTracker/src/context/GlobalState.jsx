import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            type: 'income',
            title: 'Salary',
            amount: 500,
            date: Date.now(),
            category: 'Food & Dinning',
            pmode: 'upi',
            note: 'tesing the transactions'
        },
        {
            id: 2,
            type: 'expense',
            title: 'Khana Khaye',
            amount: 400,
            date: Date.now(),
            category: 'Food & Dinning',
            pmode: 'upi',
            note: 'tesing the khana'
        }
    ])

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction])
    }

    const deleteTransaction = (id) => {
        const newTrasaction = transactions.filter((transaction) => transaction.id !== id)
        setTransactions(newTrasaction)
    }

    return (
        <GlobalContext.Provider value={{ transactions, addTransaction, deleteTransaction }} >
            {children}
        </GlobalContext.Provider>
    )

}