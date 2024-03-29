import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ModalTypes } from 'components/Layout/Modals/types';
import { setGlobalModalSelectedOption } from 'redux/slices/modalsSlice';
import AvailableLoanPools from './AvailableLoanPools';

const LoanPoolsPage = () => {
  const dispatch = useDispatch();
  const openCreatePoolModal = () =>
    dispatch(setGlobalModalSelectedOption(ModalTypes.CreatePool));
  return (
    <Grid container my={0}>
      <Grid item xs={12}>
        <Box display='flex' alignItems='center' gap={2}>
          <Typography variant='h2'>Loan Pools</Typography>
          <Button variant='contained' onClick={openCreatePoolModal}>
            Create new Pool
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <AvailableLoanPools />
      </Grid>
    </Grid>
  );
};

export default LoanPoolsPage;
