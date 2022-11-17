import React, { useEffect } from 'react';
import { useGetLoginInfo } from '@elrondnetwork/dapp-core/hooks';
import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core/wrappers';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import routes, { routeNames } from 'routes';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();
  const { isLoggedIn } = useGetLoginInfo();

  useEffect(() => {
    const URL = 'https://devnet-extras-api.elrond.com/settings/multisig';

    if (isLoggedIn) {
      console.log({ isLoggedIn });
      axios
        .get(URL)
        .then((resp) => {
          console.log({ resp });
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [isLoggedIn]);
  return (
    <div className='bg-light d-flex flex-column flex-fill wrapper'>
      <Navbar />
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
