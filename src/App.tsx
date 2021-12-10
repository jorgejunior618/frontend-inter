import React, { useState } from 'react';

import Router from './routes';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globalStyles';
import { theme, darkTheme } from './styles/themes'
import ThemeButton from './components/ThemeButton';

function App() {
  const [themeMode, setThemeMode] = useState('light');

const toggleTheme = () => {
  switch (themeMode) {
    case 'light':
      setThemeMode('dark');
      break;
    
    case 'dark':
      setThemeMode('light');
      break;

    default:
      setThemeMode('light');
      break;
  }
}
 

  return (
    <ThemeProvider theme={themeMode === 'light' ? theme : darkTheme}>
      <GlobalStyle />
      <Router />
      <ThemeButton
        title={
          `Mudar para tema ${
            themeMode === 'light' ? 'escuro' : 'claro'
          }`
        }
        onClick={toggleTheme}
      />
    </ThemeProvider>
  );
}

export default App;
