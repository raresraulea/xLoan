import React from 'react';
import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core/wrappers';
import { useLocation } from 'react-router-dom';
import { routeNames, mappedRoutes as routes } from '../../routes';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();

  return (
    <div className='bg-light d-flex flex-column flex-fill wrapper'>
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
    </div>
  );
};

export default Layout;
