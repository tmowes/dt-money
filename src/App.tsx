import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from 'styled-components'
import * as themes from './styles/themes'
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
