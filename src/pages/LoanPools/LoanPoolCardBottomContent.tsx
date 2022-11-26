import React from 'react';
import { Grid, Typography } from '@mui/material';

const LoanPoolCardTopContent = () => {
  return (
    <Grid container paddingTop={2} paddingBottom={1}>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid xs={6} md={12} item display='flex' alignItems='center'>
            <Typography fontSize={12} color='text.secondary'>
              Total Loans: 7234
            </Typography>
          </Grid>
          <Grid item xs={6} md={12}>
            <Typography fontSize={14}>Your Max. Loan: 123.45 $EGLD</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid xs={6} md={12} item display='flex' alignItems='center'>
            <Typography fontSize={12} color='text.secondary'>
              Total Funds: 7234 $EGLD
            </Typography>
          </Grid>
          <Grid item xs={6} md={12}>
            <Typography fontSize={14}>Your Max. Return: 12.85 $EGLD</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoanPoolCardTopContent;
