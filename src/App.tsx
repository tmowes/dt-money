import { useState } from 'react';
import Modal from 'react-modal'
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from 'styled-components'
import * as themes from './styles/themes'
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <Header setIsModalOpen={setIsModalOpen} />
      <Modal isOpen={isModalOpen} onRequestClose={()=> setIsModalOpen(false)}>
        <h2>Cadastrar transação</h2>
      </Modal>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
