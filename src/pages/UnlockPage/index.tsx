import React from 'react';
import { useGetLoginInfo } from '@elrondnetwork/dapp-core/hooks';
import {
  ExtensionLoginButton,
  WebWalletLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton
} from '@elrondnetwork/dapp-core/UI';
import { useNavigate } from 'react-router-dom';
import { routeNames } from 'routes';

export const UnlockRoute: () => JSX.Element = () => {
  const { isLoggedIn } = useGetLoginInfo();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate(routeNames.loanPools);
    }
  }, [isLoggedIn]);

  return (
    <div className='home d-flex flex-fill align-items-center'>
      <div className='m-auto' data-testid='unlockPage'>
        <div className='card my-4 text-center'>
          <div className='card-body py-4 px-2 px-sm-2 mx-lg-4'>
            <h4 className='mb-4'>Login</h4>
            <p className='mb-4'>pick a login method</p>

            <ExtensionLoginButton
              callbackRoute={routeNames.loanPools}
              loginButtonText={'Extension'}
            />
            <WebWalletLoginButton
              callbackRoute={routeNames.loanPools}
              loginButtonText={'Web wallet'}
            />
            <LedgerLoginButton
              loginButtonText={'Ledger'}
              callbackRoute={routeNames.loanPools}
              className={'test-class_name'}
            />
            <WalletConnectLoginButton
              callbackRoute={routeNames.loanPools}
              loginButtonText={'Maiar'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockRoute;
