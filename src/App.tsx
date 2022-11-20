import React from 'react';
import { DappProvider } from '@elrondnetwork/dapp-core/wrappers';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from 'pages/Dashboard/Layout';
import ModeProvider from './context/ModeContext';

const environment = 'devnet';

const App = () => {
  return (
    <ModeProvider>
      <Router>
        <DappProvider
          environment={environment}
          customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
        >
          <Dashboard />
        </DappProvider>
      </Router>
    </ModeProvider>
  );
};

export default App;
