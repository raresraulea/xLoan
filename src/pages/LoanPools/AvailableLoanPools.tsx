import React from 'react';
import { Grid } from '@mui/material';
import { LoanPoolCard } from './LoanPoolCard';

const AvailableLoanPools = () => {
  return (
    <Grid container paddingY={2.65} gap={2}>
      <Grid item xs={12} md={5}>
        <LoanPoolCard />
      </Grid>
      <Grid item xs={12} md={5}>
        <LoanPoolCard />
      </Grid>
      <Grid item xs={12} md={5}>
        <LoanPoolCard />
      </Grid>
      <Grid item xs={12} md={5}>
        <LoanPoolCard />
      </Grid>
    </Grid>
  );
};

export default AvailableLoanPools;
