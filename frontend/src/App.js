import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyles from './common/GlobalStyles';

import Routes from './routes';
import history from './services/history';

import { AuthProvider } from './AuthContext/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </AuthProvider>
  )
}
