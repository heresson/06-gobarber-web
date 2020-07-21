import React from 'react';
import GlobalStyle from './styles/global';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import AppProvider from './hooks';

// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
