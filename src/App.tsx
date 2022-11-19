import React from 'react';
import { DappProvider } from '@elrondnetwork/dapp-core/wrappers';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from 'pages/Dashboard/Layout';
import theme from './theme';

const environment = 'devnet';

const App = () => {
  return (
    <Router>
      <DappProvider
        environment={environment}
        customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
      >
        <ThemeProvider theme={theme('dark')}>
          <Dashboard />
        </ThemeProvider>
      </DappProvider>
    </Router>
  );
};

export default App;
