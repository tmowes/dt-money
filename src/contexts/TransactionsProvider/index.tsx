import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { Transaction, TransactionInput, TransactionsContextData, TransactionsProviderProps } from "./types";

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const loadTransactions = async () => {
      const { data } = await api.get('/transactions')
      setTransactions(data.transactions)
    }
    loadTransactions()
  }, [])


  const createTransaction = async (transactionInput: TransactionInput) => {
    const { data: { transaction } } = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date(),
    })
    setTransactions([...transactions, transaction])
  }

  const providerValues = { transactions, createTransaction }
  return (
    <TransactionsContext.Provider value={providerValues}>
      { children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext)
  if (!context) {
    throw new Error('useTransactions must be used within an TransactionsProvider')
  }
  return context
}
