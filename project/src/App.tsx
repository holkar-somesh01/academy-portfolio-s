import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import AppRoutes from './routes';

// Import i18n (must be imported before any component that uses translations)
import './i18n';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;