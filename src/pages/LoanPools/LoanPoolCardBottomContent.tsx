import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const LoanPoolCardTopContent = () => {
  return (
    <Grid container paddingTop={2} paddingBottom={1}>
      <Grid item xs={6}>
        <Box
          height={'100%'}
          display='flex'
          flexDirection='column'
          justifyContent='space-evenly'
        >
          <Typography fontSize={12} color='text.secondary'>
            Total Loans: 7234
          </Typography>
          <Typography fontSize={14}>Your Max. Loan: 123.45 $EGLD</Typography>
        </Box>
      </Grid>
      <Grid item xs={6} pl={1}>
        <Box
          height={'100%'}
          display='flex'
          flexDirection='column'
          justifyContent='space-evenly'
        >
          <Typography fontSize={12} color='text.secondary'>
            Total Funds: 7234 $EGLD
          </Typography>
          <Typography fontSize={14}>Your Max. Return: 12.85 $EGLD</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoanPoolCardTopContent;
