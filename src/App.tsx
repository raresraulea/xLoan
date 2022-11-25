import React from 'react';
import { DappProvider } from '@elrondnetwork/dapp-core/wrappers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Dashboard from 'pages/Layout';
import ModeProvider from './context/ModeContext';
import { persistor, store } from './redux/store';

const environment = 'devnet';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModeProvider>
          <QueryClientProvider client={queryClient}>
            <Router>
              <DappProvider
                environment={environment}
                customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
              >
                <Dashboard />
              </DappProvider>
            </Router>
          </QueryClientProvider>
        </ModeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
