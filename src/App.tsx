import React from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/themes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

    </ThemeProvider>
  );
}

export default App;
