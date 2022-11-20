import React from 'react';
import { useGetLoginInfo } from '@elrondnetwork/dapp-core/hooks';
import {
  ExtensionLoginButton,
  WebWalletLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton
} from '@elrondnetwork/dapp-core/UI';
import { Box, Card, Typography } from '@mui/material';
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
    <Card
      sx={{ borderRadius: '10px' }}
      className='home d-flex flex-fill align-items-center'
    >
      <Box className='m-auto' data-testid='unlockPage'>
        <Box className='my-4 text-center'>
          <Box className='py-4 px-2 px-sm-2 mx-lg-4'>
            <Typography variant='h4' className='mb-4'>
              Login
            </Typography>
            <Typography variant='subtitle1' className='mb-4'>
              pick a login method
            </Typography>

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
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default UnlockRoute;
