import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }

interface TransactiosProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactiosProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transactions: TransactionInput){
    api.post('/transactions', transactions)
  }

  return (
      <TransactionsContext.Provider value={{transactions, createTransaction}}>
          {children}
      </TransactionsContext.Provider>
  )
}