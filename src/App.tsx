import React from 'react';

import Router from './routes';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/themes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
