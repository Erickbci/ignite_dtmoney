import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal'

import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";



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
     <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseTransactionModal}
     />
     <GlobalStyle />
    </>
  );
}
