import { useState } from 'react';
import Modal from 'react-modal'
import GlobalStyle from "./styles/GlobalStyle";

import { ThemeProvider } from 'styled-components'
import * as themes from './styles/themes'
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TransactionModal from './components/TransactionModal';
import { TransactionsProvider } from './contexts';

Modal.setAppElement('#root')

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <TransactionsProvider>
        <Header setIsModalOpen={setIsModalOpen} />
        <TransactionModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
        <Dashboard />
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export default App;
