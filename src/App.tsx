import React from 'react';
import { DappProvider } from '@elrondnetwork/dapp-core/wrappers';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Dashboard from 'pages/Layout';
import ModeProvider from './context/ModeContext';
import { persistor, store } from './redux/store';

const environment = 'testnet';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
