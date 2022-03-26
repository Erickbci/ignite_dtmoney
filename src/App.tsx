import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal'

import { createServer } from 'miragejs'
import { useState } from "react";

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false)

  function handleOpenTransactionModal() {
    setIsNewTransactionOpen(true)
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionOpen(false)
  }

  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
     <Dashboard />
     <Modal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseTransactionModal}
     >
       <h2>Cadastrar transação</h2>
     </Modal>
     <GlobalStyle />
    </>
  );
}
