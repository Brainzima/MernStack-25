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
            paymentMethod: 'upi',
            note: 'tesing the transactions'
        },
        {
            id: 2,
            type: 'expense',
            title: 'Khana Khaye',
            amount: 400,
            date: Date.now(),
            category: 'Food & Dinning',
            paymentMethod: 'upi',
            note: 'tesing the khana'
        },
        {
            id: 3,
            type: 'income',
            title: 'Biryani Khaye',
            amount: 200,
            date: Date.now(),
            category: 'Food & Dinning',
            paymentMethod: 'upi',
            note: 'tesing the khana'
        },
        {
            id: 4,
            type: 'expense',
            title: 'Momo Khaye',
            amount: 465,
            date: Date.now(),
            category: 'Food & Dinning',
            paymentMethod: 'cash',
            note: 'tesing the khana'
        },
        {
            id: 5,
            type: 'income',
            title: 'Papa Bheje',
            amount: 4005,
            date: Date.now(),
            category: 'Food & Dinning',
            paymentMethod: 'upi',
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