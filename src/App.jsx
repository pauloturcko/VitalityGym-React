import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './assets/Styles/Theme';
import GlobalStyles from './assets/Styles/GlobalStyles';
import Header from './assets/Components/Organisms/Header';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  )
};

export default App;
